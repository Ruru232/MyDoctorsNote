'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="max-w-full text-gray-500 border-y-1 border-neutral-400/75 mt-22">
        <div className="px-4 xl:px-30 2xl:px-[600px]">
          <div className="grid grid-cols-1 md:grid-cols-4 px-8 pb-8 gap-10 md:gap-0">
            <div className="mt-6">
              <Image
                src="/img/logo.avif"
                alt="Logo"
                width={240}
                height={30}
                priority
                className="w-[165px] h-[20.2px] md:w-[161px] md:h-[19.7px]"
              />
              <p className="mt-3 text-base">
                <strong>Support</strong> (Mon-Fri, 9am-6pm EST)
              </p>
              <p className="mt-3">
                <strong>Email: </strong>help@urgentsupport.co
              </p>
            </div>
            <div className="mt-5">
              <h2 className="font-semibold">Customer service</h2>
              <ul className="text-sm my-2">
                <li className="mt-5">Contact Us</li>
                <li className="mt-5">Refund Request</li>
                <li className="mt-5">Frequently Asked Questions</li>
              </ul>
            </div>
            <div className="mt-5">
              <h2 className="font-semibold">Policies</h2>
              <ul className="text-sm my-2">
                <li className="mt-5">Terms Of Service</li>
                <li className="mt-5">Refund Policy</li>
                <li className="mt-5">Privacy Policy</li>
                <li className="mt-5">Disclaimer Policy</li>
                <li className="mt-5">Intellectual Property Policy</li>
                <li className="mt-5">Jurisdiction Policy</li>
                <li className="mt-5">Limitation of Liability Policy</li>
                <li className="mt-5">Indemnification Policy</li>
              </ul>
            </div>
            <div className="mt-5">
              <h2 className="font-semibold">Company Details</h2>
              <p className="mt-5 text-sm">COMPANY NAME & ADDRESS</p>
              <p className="mt-5 text-sm">
                Company registration number: 000000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3 mb-8 text-gray-500">
        <small>© 2025, My Doctors Note</small>
      </div>
    </motion.div>
  );
}
