'use client';

import Image from 'next/image';

const Chat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9352318221';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    window.location.href = whatsappLink;
  };

  return (
    <div className="fixed  bottom-5 right-4 m-3 z-50 overflow-hidden">
      <div onClick={handleWhatsAppClick} className="no-underline overflow-hidden cursor-pointer">
       
        <Image src={'/WhatsApp.svg.webp'} width={50} height={50} alt='' />
      </div>
    </div>
  );
};

export default Chat;
