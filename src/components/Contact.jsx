import React from 'react'
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const {t} = useTranslation();
  return (
    <>
    <section id='contact' class=" mt-5 py-8 bg-gray-100">
    <h3 className='text-2xl text-gray-700 font-bold text-center mb-5'>{t('contact.heading')}</h3>

  <div class="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-lg overflow-hidden">
    
    <div class="w-full md:w-1/2 p-4 flex flex-col justify-content-center  bg-blue-100">
      <div>
        <h2 class="text-3xl font-bold text-gray-700 mb-4 ">{t('contact.left_1')}</h2>
        <p class="text-gray-600">
          {t('contact.left_1_desc')}
        </p>
      </div>
      <div>
        <div className='flex flex-col py-8 gap-2 '>
        <div className='flex items-center gap-2'>
            <FaPhoneAlt className="text-xl text-white" />
            <span>+92-3320472184</span>
        </div>
        <div className='flex items-center gap-2'>
             <FaWhatsapp className="text-xl text-green-500" />
            <span>+92-3320472184</span>
        </div>
        <div className='flex items-center gap-2'>
            <FaMapMarkerAlt className="text-xl text-red-500" />
            <span>{t('contact.location')}</span>
        </div>
        
        </div>
       

      </div>
    </div>

    <div class="w-full md:w-1/2 p-4">
      <form action="#" method="POST" class="space-y-5">
        <div>
          <label class="block mb-1 font-medium text-gray-600">{t('contact.name')}</label>
          <input
            type="text"
            name="name"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label class="block mb-1 font-medium text-gray-600">{t('contact.email')}</label>
          <input
            type="email"
            name="email"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label class="block mb-1 font-medium text-gray-600">{t('contact.message')}</label>
          <textarea
            name="message"
            rows="4"
            class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your message"
          ></textarea>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {t('contact.submit')}
          </button>
        </div>
      </form>
    </div>

  </div>
</section>
</>

   
  )
}

export default Contact