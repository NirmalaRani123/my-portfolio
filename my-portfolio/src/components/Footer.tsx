import React from 'react'

import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='mt-16 py-6 bg-accent text-white'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <p className='text-sm'>
            © 2024 <span className='font-semibold'>Nirmala</span>. All rights reserved.
          </p>
          <div className='flex space-x-6 mt-4'>
            <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebook className='text-white hover:text-gray-300' size={24} />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
              <FaTwitter className='text-white hover:text-gray-300' size={24} />
            </a>
            <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer'>
              <FaLinkedin className='text-white hover:text-gray-300' size={24} />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-white hover:text-gray-300' size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;



