import React from 'react';
import LineSvg from './Line';
import { DoctorsNote } from './_lib/data';
import Image from 'next/image';
import Button from './Button';

export default function DoctorsNoteSection() {
  return (
    <div className="max-w-full px-4 xl:px-30 2xl:px-[600px]">
      <div className="mt-14">
        <h2 className="font-bold text-[32px] px-0 xl:px-[320px] md:text-5xl text-center ">
          Get Peace of Mind With{' '}
          <span className="text-blue-600">My Doctors Note</span>
        </h2>
      </div>
      <div className="flex justify-center mb-5">
        <LineSvg color="black" />
      </div>
      <div>
        <p className="text-base md:text-lg leading-6 tracking-[0.6px] px-0 xl:px-[335px] ">
          My Doctor&apos;s Note provides a fast, hassle-free solution for
          obtaining excuse notes. Focus on your recovery while we take care of
          the paperwork, delivering your note in minutes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 mt-5">
        {DoctorsNote.map((note, index) => (
          <div
            key={index}
            className={`bg-blue-200/60 rounded-lg mb-5 max-h-fit ${
              note.id === 1
                ? 'md:order-1'
                : note.id === 2
                ? 'md:order-3'
                : note.id === 3
                ? 'md:order-2'
                : note.id === 4
                ? 'md:order-4'
                : ''
            }`}
          >
            <div
              className={`px-6 py-7 font-semibold ${
                note.id === 4
                  ? 'text-center text-[20px] md:text-2xl'
                  : 'text-[23px] md:text-2xl'
              }`}
            >
              {note.title}
            </div>
            <div className="px-7 ">
              <ul className="">
                {note.points &&
                  note.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="relative mb-3 ml-1 pr-0 lg:pr-10 xl:pr-12 2xl:pr-14"
                    >
                      <span className="absolute left-[-16px] top-[30px] lg:top-[18px] 2xl:top-px text-base md:text-xl">
                        •
                      </span>
                      <strong>{point.bold}</strong> {point.text}
                    </li>
                  ))}
              </ul>
            </div>
            {/* id 1 grid */}
            <div className="grid grid-cols-3">
              {note.image &&
                note.image.map((img, idx) => (
                  <div key={idx} className="p-3.5">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={138}
                      height={34}
                      className="w-full"
                    />
                  </div>
                ))}
            </div>
            {/* id 2 grid */}
            <div className="grid grid-cols-2">
              {note.img &&
                note.img.map((img, idx) => (
                  <div key={idx} className="p-3.5">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={138}
                      height={34}
                      className="w-full"
                    />
                  </div>
                ))}
              <strong className="text-green-500/80 text-base xl:text-[22px] px-0 md:px-4 lg:flex lg:items-center">
                {note.text}
              </strong>
            </div>
            {/* id 4 */}
            <div className="flex flex-col justify-center items-center">
              <h2 className="line-through text-[20px] md:text-[32px] text-gray-500">
                {note.price1}
              </h2>
              <div className="font-semibold text-[56px] md:text-5xl mt-3 lg:text-7xl">
                {note.price2}
              </div>
              <div className="text-lg md:text-2xl  text-green-500/80 px-6 text-center mt-1.5 mb-3.5 md:mt-10">
                {note.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center px-0 md:px-36">
        <Button />
      </div>
    </div>
  );
}
