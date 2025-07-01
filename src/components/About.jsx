import React from 'react'
import { useTranslation } from 'react-i18next';
import About1 from '../assets/Aboutus_1.jpg'
import About2 from '../assets/Aboutus2.webp'

const About = () => {
    const { t } = useTranslation();

  return (
    <>
    <section id='about'>
    <div className="flex flex-col md:flex-row items-center min-h-[400px] gap-8">

  <div className="w-full md:w-1/2 px-4">
    <h3 className="font-bold text-2xl text-gray-700 mb-2">{t('about.mission_title')}</h3>
    <p className="text-gray-500">
        {t('about.mission_text')}
    </p>
  </div>

 
  <div className="w-full md:w-1/2 h-[300px] px-4">
    <img
      src={About2}
      alt="About"
      className="w-full h-full object-cover rounded-lg shadow-md transition duration-300  cursor-pointer hover:grayscale-0 "
    />
  </div>
</div>

    <h3 className='font-bold text-center text-2xl mt-5'>{t('about.story_title')}</h3>
    <div className='flex flex-col md:flex-row items-center min-h-[400px] gap-8 '>
       <div className="w-full md:w-1/2 h-[300px] px-4">
    <img
      src={About1}
      alt="About"
      className="w-full h-full object-cover rounded-lg shadow-md transition duration-300  cursor-pointer hover:grayscale-0 "
    />
  </div>
         <div className="w-full md:w-1/2 px-4">
        <p className="text-gray-500">
         {t('about.story_text')}
         </p>
  </div>
    </div>
    </section>
</>

   
  )
}

export default About