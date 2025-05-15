import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        
        <div className="max-w-sm">
          <h2 className="text-xl font-bold mb-2">🌍 HAWAA</h2>
          <p className="text-gray-400">Journey Made Easy...</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/support" className="hover:underline">Support</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 HAWAA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
// This is a simple footer component for a travel website. It includes sections for the website's name, quick links, and social media icons. The design is responsive and adapts to different screen sizes using Tailwind CSS classes.
