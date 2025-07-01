import React from 'react'
import { useTranslation } from 'react-i18next'; 

import { GoTools } from "react-icons/go";
import { MdElectricalServices } from 'react-icons/md';
import { FaPaintRoller } from 'react-icons/fa';
import { FaArrowRight  } from 'react-icons/fa';

const Services = () => {
     const { t } = useTranslation();

  return (
    <section id="services" className="py-12 px-4 bg-white">
      <h3 className="text-2xl font-bold text-gray-700 text-center mb-8">{t('services.heading')}</h3>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
       
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <GoTools className="text-4xl text-blue-500 mb-4" />
          <h4 className="text-lg font-semibold mb-2">{t('services.plumbing.title')}</h4>
          <p className="text-gray-600">{t('services.plumbing.desc')}</p>
         <button class="border border-blue-600 text-blue-600 px-5 py-2 mt-2 flex items-center justify-content-center gap-2 rounded hover:bg-blue-600 hover:text-white transition">
            <span>{t('services.learn')}</span>
            <span><FaArrowRight className="text-lg text-blue-200 cursor-pointer" /></span>
            </button>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <MdElectricalServices className="text-4xl text-yellow-500 mb-4" />
          <h4 className="text-lg font-semibold mb-2">{t('services.electrical.title')}</h4>
          <p className="text-gray-600">{t('services.electrical.desc')}</p>
          <button class="border border-blue-600 text-blue-600 px-5 py-2 mt-2 flex items-center justify-content-center gap-2 rounded hover:bg-blue-600 hover:text-white transition">
            <span>{t('services.learn')}</span>
            <span><FaArrowRight className="text-lg text-blue-200 cursor-pointer" /></span>
            </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
         <FaPaintRoller className="text-4xl text-red-500 mb-4" />
          <h4 className="text-lg font-semibold mb-2">{t('services.painting.title')}</h4>
          <p className="text-gray-600">{t('services.painting.desc')}</p>
         <button class="border border-blue-600 text-blue-600 px-5 py-2 mt-2 flex items-center justify-content-center gap-2 rounded hover:bg-blue-600 hover:text-white transition">
            <span>{t('services.learn')}</span>
            <span><FaArrowRight className="text-lg text-blue-200 cursor-pointer" /></span>
            </button>
        </div>
      </div>
    </section>
  )
}

export default Services