// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.12;

import "./CrowdSource.sol";
//import "@openzeppelin/contracts/utils/Create2.sol";
import "hardhat/console.sol";
import "./PriceConverter.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";



// staking 
// multisig wallet escrow to approval transactions 


contract Factory {
    error OwnerMustEqualSender();

    using PriceConverter for uint256;


    address[] MarketPlace;
    mapping(uint => address) indexToContract; 
    mapping(address=>address) contractToOwner; 
    mapping(uint256 => uint8) approveWithdrawal;
    mapping(address=>uint256) addressToStake;

    event CrowdSourceCreated(
        address indexed contractAddress,
        address indexed creator,
        uint indexed amount
    );

    function CreateCrowdSource(
        uint _amountNeeded,
        uint _minAmount,
        address _priceFeed,
        address _owner,
        uint8 _percentage
    ) public payable {
        if (msg.sender != _owner) {
            revert OwnerMustEqualSender();
        }
        uint stake = (_amountNeeded*1e18) /4e18;
        require(PriceConverter.getConversionRate(msg.value,AggregatorV3Interface(_priceFeed)) >= (stake*1e18), "You need to spend more ETH!");
        console.log(PriceConverter.getConversionRate(msg.value,AggregatorV3Interface(_priceFeed)));
        CrowdSource _crowdsource = new CrowdSource(
            _amountNeeded,
            _minAmount,
            _priceFeed,
            _owner,
            _percentage,
            MarketPlace.length,
            address(this)
        );
        MarketPlace.push(address(_crowdsource));
        indexToContract[MarketPlace.length] = address(_crowdsource);
        approveWithdrawal[MarketPlace.length] = 0;
        emit CrowdSourceCreated(
            address(_crowdsource),
            msg.sender,
            _amountNeeded
        );
    }

    //create a create2 address

    function getMarketPlace()
        external
        view
        returns (address[] memory marketplace)
    {
        marketplace = MarketPlace;
    }
/**
 * This function call only be called by the child contract,
 * when called the function checks if the stake amount has been withdrawn before,
 * if not, it sets the value to 1 
 * @param _contractNumber the index number of the contract, this value is used to track each contract
 * @dev msg.sender here must equal the deployed CrowdSource contract instance
 */
    function allowUnstake(uint256 _contractNumber)external{
        if(indexToContract[_contractNumber] != msg.sender){
            revert OwnerMustEqualSender();
            }
        if(approveWithdrawal[_contractNumber] == 99){
            revert SeedValueAlreadyWithdrawn();
        }
        //allow creator to withdraw
        approveWithdrawal[MarketPlace.length] = 1;
    }


/**
 * checks that the msg.sender
 * @param _contractIndex the index number of the contract, this value is used to track each contract
 */
    function unStake( uint256 _contractIndex)external{
        address contractAddress = indexToContract[_contractIndex];
        if(addressToStake[msg.sender] == 0){revert OwnerMustEqualSender();}
        if(approveWithdrawal[_contractIndex] == 1 && contractToOwner[contractAddress] == msg.sender){
            (bool success, ) = msg.sender.call{value:addressToStake[msg.sender]-tx.gasprice}("");
            if(!success){
                revert TransactionFailed();
                }else{
                    approveWithdrawal[_contractIndex] = 99;
                }
        
         }
        
    }
    /**
     * return the contracts created by an address
     * @param _contract the address of the contract
     * @param _creator the creator of a contract to be checked
     */
    function isOwner(address _contract, address _creator)external view returns(bool success){
        if(contractToOwner[_contract] == _creator){
            return true;
        }
    }
    

    function changeOwner(uint256 _contractNumber, address newOwner)external{
        if(indexToContract[_contractNumber] != msg.sender){
            revert OwnerMustEqualSender();
            }
            contractToOwner[msg.sender] = newOwner;
    }
        
}
