import Providers from '@/providers/chakraprovider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crowda | Home',
  description: 'Crowda is a crowdfunding platform for the people, by the people and of the people to help the people.',
  keywords: 'crowdfunding, crowdfunding platform, crowdfunding india, crowdfunding for startups, crowdfunding for business, crowdfunding for medical, crowdfunding for education, crowdfunding for charity, crowdfunding for social cause, crowdfunding for NGO, crowdfunding for non-profit, crowdfunding for personal cause, crowdfunding for medical emergency, crowdfunding for medical treatment, crowdfunding for medical bills, crowdfunding for medical expenses, crowdfunding for medical surgery, crowdfunding for medical help, crowdfunding for medical support, crowdfunding for medical assistance, crowdfunding for medical aid, crowdfunding for medical care, crowdfunding for medical bills india, crowdfunding for medical bills in india, crowdfunding for medical bills india, crowdfunding for medical bills in india, crowdfunding for medical bills india, crowdfunding for medical bills in india, crowdfunding for medical bills india, crowdfunding for medical bills in india',

}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={` ${inter.className} antialiased`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
