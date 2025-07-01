import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  const{t} =useTranslation();
  return (
    <footer className="w-full bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

       
        <div className="md:w-1/2 space-y-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold">Developed By SamSoftix</h3>
          </div>
          <div className="text-sm space-y-1">
            <p>Intern: <span className="font-medium">Mamoor Sultan</span></p>
            <p>Supervisor: <span className="font-medium">Qasim Mehmood Cheema</span></p>
          </div>
        </div>

        
        <div className="md:w-1/2 space-y-2 text-left md:text-right">
          <h3 className="text-2xl font-bold">{t('footer.heading')}</h3>
          <p className="text-lg text-gray-300">SamSoftix</p>
        </div>
      </div>

    
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy;  {new Date().getFullYear()} SamSoftix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
