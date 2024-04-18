import Link from 'next/link'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='lg:mx-20 mx-0'>
    <div className='container mx-auto'>
        <div className='bg-white shadow-lg rounded-md my-10 p-4' >
            <h3 className='lg:text-[30px] text-[20px] font-bold pb-5'>Privacy Policy - Hems Water Park</h3>
            <p className='lg:text-[15px] text-[14px] leading-6'>At Hems Water Park in Jaipur, we prioritize the privacy of our visitors and customers. This Privacy Policy outlines the types of information we collect and how we utilize it. If you have any questions or require further information, please feel free to contact us.</p>
            <div className='py-5 flex flex-col gap-1'>
<h5  className='text-[17px] font-medium'>Consent</h5>
<p className='lg:text-[15px] text-[14px] leading-6'>By accessing our website or providing us with your information, you consent to the terms of this Privacy Policy.</p>
<h5  className='text-[17px] font-medium'>Information We Collect</h5>
<ul className='list-disc pl-5'>
    <li className='lg:text-[15px] text-[14px] leading-6'><span className='font-medium'>Personal Information:</span> When you interact with our website or contact us directly, we may collect personal information such as your name, email address, phone number, and any other details you choose to provide.</li>
    <li className='lg:text-[15px] text-[14px] leading-6'><span className='font-medium'>Account Information: </span>If you register for an account with us, we may ask for additional contact information such as your company name, address, and telephone number.</li>
    <li className='lg:text-[15px] text-[14px] leading-6'><span className='font-medium'>Usage Data: </span>We may automatically collect certain information about your usage of our website, including your IP address, browser type, and browsing behavior.</li>
</ul>
            </div>
            <div className='pb-5'>
                <h5  className='text-[17px] font-medium'>How We Use Your Information</h5>
                <p className='lg:text-[15px] text-[14px] leading-6'>We use the information we collect for various purposes, including:</p>
                <ul className='list-disc pl-5'>
                    <li className='lg:text-[15px] text-[14px] leading-6'>Providing, operating, and maintaining our website.</li>
                    <li className='lg:text-[15px] text-[14px] leading-6'>Improving and personalizing the user experience.</li>
                    <li className='lg:text-[15px] text-[14px] leading-6'>Analyzing usage data to understand how our website is accessed and used.</li>
                    <li className='lg:text-[15px] text-[14px] leading-6'>Communicating with you, including sending updates, newsletters, and marketing materials.</li>
                    <li className='lg:text-[15px] text-[14px] leading-6'>Detecting and preventing fraud.
</li>
                    <li>Fulfilling any other purpose disclosed to you at the time of data collection.</li>
                </ul>
            </div>
            <div className='pb-5'> 
                <h5  className='text-[17px] font-medium'>Sharing of Information</h5>
                <p className='lg:text-[15px] text-[14px] leading-6'>We may share your personal information with third-party service providers to facilitate the operation of our website and the provision of services to you. We may also disclose your information in response to legal requests or to protect our rights and interests.</p>
            </div>
            <div className='pb-5'>
                <h5  className='text-[17px] font-medium'>Links to Other Sites</h5>
                <p className='lg:text-[15px] text-[14px] leading-6'>Our website may contain links to third-party websites that are not operated by us. We are not responsible for the privacy practices or content of these websites. We recommend reviewing the privacy policies of any third-party sites you visit.</p>
            </div>
            <div className='pb-5'>
                <h5  className='text-[17px] font-medium'>Your Choices</h5>
                <p className='lg:text-[15px] text-[14px] leading-6'>You may choose to opt-out of receiving promotional communications from us or our partners by following the instructions provided in such communications. You also have the right to request access to, correction of, or deletion of your personal information.</p>
            </div>
            <div className='pb-5'>
                <h5  className='text-[17px] font-medium'>Security</h5>
                <p className='lg:text-[15px] text-[14px] leading-6'>We employ industry-standard security measures to protect the confidentiality and integrity of your personal information. However, please note that no method of transmission over the internet or electronic storage is completely secure.</p>
            </div>
            <div className='pb-5'>
                <h5   className='text-[17px] font-medium'>Contact Us</h5>
                <p className='lg:text-[15px] text-[14px] leading-6'>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at:</p>
                <p className='lg:text-[15px] text-[14px] leading-6'>Hems Water Park - Jaipur 41, Ajmer Rd, behind Chordias Atulya, Keshupura, Bhakrota, Jaipur, Rajasthan 302026 Phone: <Link href="tel:9352318221" className='text-blue-500'>+91-9352318221</Link> Email: <Link href="mailto:Hemswaterpark@gmail.com" className='text-blue-500'>Hemswaterpark@gmail.com</Link></p>
            </div>
            <div className='pb-5 flex flex-col gap-1'>
                <h5 className='text-[17px] font-medium'>Changes to This Privacy Policy</h5>
                <p className='lg:text-[15px] text-[14px] leading-6'>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be indicated at the top of the policy. We encourage you to review this policy periodically for updates.</p>
                <p className='lg:text-[15px] text-[14px] leading-6'>Thank you for trusting Hems Water Park with your personal information.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PrivacyPolicy
