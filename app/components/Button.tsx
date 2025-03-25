'use client';
import { motion } from 'framer-motion';

export default function Button() {
  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeIn' }}
        className="bg-custom-blue text-white font-bold text-base md:text-lg py-4 px-14 rounded-lg w-full md:w-3/4 lg:w-[350px] flex items-center justify-center gap-3 mt-6"
      >
        Get your Note Now
        <span className="flex items-center">
          <svg
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
            />
          </svg>
        </span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="flex items-center gap-2 mt-4"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px] md:w-[32px] md:h-[33px]"
        >
          <path
            d="M16 1.03235L4 5.74488V15.7607C4.00391 18.3138 4.68324 20.8213 5.97012 23.0323C7.257 25.2433 9.10635 27.0806 11.3333 28.3605L16 31.0323L20.6667 28.36C22.8936 27.0802 24.7429 25.2429 26.0297 23.032C27.3167 20.821 27.996 18.3138 28 15.7607V5.74488L16 1.03235ZM25.3333 15.7607C25.3301 17.8497 24.7744 19.9011 23.7215 21.7102C22.6685 23.5191 21.1555 25.0225 19.3333 26.0696L16 27.978L12.6667 26.0689C10.8447 25.0218 9.33159 23.5188 8.27868 21.7098C7.22579 19.9009 6.66993 17.8495 6.66667 15.7607V7.54273L16 3.87734L25.3333 7.54273V15.7607ZM12.3541 13.196L10.7527 14.7861L15.1967 19.195L21.4973 12.9455L19.8959 11.3555L15.1967 16.0151L12.3541 13.196Z"
            fill="#2CDB64"
          />
        </svg>
        <p className="tracking-[0.7px] text-[13px] md:text-lg">
          100% Risk-Free Money Back Guarantee
        </p>
      </motion.div>
    </>
  );
}
