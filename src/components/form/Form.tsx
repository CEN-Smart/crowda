'use client'

import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Grid, Input, VStack } from '@chakra-ui/react'
import { Field, Form, Formik } from 'formik'

const FormPage = () => {
  return (
    <>
      <Grid minH='auto' px={4} overflowY='auto' maxW={{
        base: 'full',
        md: '70%',
        lg: '60%',
        xl: '50%'
      }} marginX='auto'
        pt={32} pb={10}>
        <Box bg='white' color='black' p={6} borderRadius='md' >
          <Formik initialValues={{
            name: '',
            password: '',
            rememberMe: false
          }}
            onSubmit={(values) => (
              alert(JSON.stringify(values, null, 2))
            )}>
            {({ handleSubmit, errors, touched, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor='name'>Your nickname</FormLabel>
                    <Field as={Input} name='name' id='name' type='text' variant='outline' validate={(value: string) => {
                      let error
                      if (!value) {
                        error = 'Nickname is required'
                      }
                      return error
                    }} />
                    <FormErrorMessage>
                      {errors.name}
                    </FormErrorMessage>
                  </FormControl >
                  {/* 2ND input */}
                  <FormControl isInvalid={!!errors.password && touched.password}>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Field as={Input} name='password' id='password' type='password' variant='filled' placeholder='Password' validate={(value: string) => {
                      let error
                      if (!value) {
                        error = 'Password is required'
                      } else if (value.length < 8) {
                        error = 'Password must be at least 8 characters long'
                      }
                      return error
                    }} />
                    <FormErrorMessage>
                      {errors.password}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <Field colorScheme='whatsapp' as={Checkbox} id='rememberMe' name='rememberMe' type='checkbox'>
                      Remember Me
                    </Field>
                  </FormControl>
                  <Button colorScheme='whatsapp' w='full' type='submit'>
                    {!isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </VStack>
              </Form>

            )}
          </Formik>
        </Box>
      </Grid>
    </>
  )
}

export default FormPage
