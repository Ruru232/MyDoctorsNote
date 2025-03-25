import Image from 'next/image';
import { EasySteps } from './_lib/data';
import Button from './Button';

const EasyStepsSection = () => {
  return (
    <div className="max-w-full px-4 xl:px-30 2xl:px-[600px]">
      <div className="flex flex-col items-center justify-center py-2 my-4 ">
        <h2 className="text-center text-3xl md:text-5xl font-semibold leading-10 md:leading-15 tracking-wide">
          Get An Online Doctor&apos;s
          <span className="block">Note In 3 Easy Steps</span>
        </h2>
        <div className="mt-3 px-3 md:px-10 xl:px-72 2xl:px-96 ">
          <p className="text-gray-500 md:text-lg ">
            With our online platform we make it quick and simple for you to
            obtain a doctors note, so you can focus on rest and recovery.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {EasySteps.map((step, index) => (
          <div
            key={index}
            className=" bg-blue-200/60 rounded-xl max-h-fit px-5 py-5"
          >
            <Image
              src={step.src}
              alt={step.title}
              width={225}
              height={255}
              className="w-full px-10 xl:px-20"
            />
            <div className=" p-1 mt-2 xl:px-10">
              <p className="text-2xl font-semibold text-center">{step.title}</p>
            </div>
            <div className="mt-2 mb-6 p-1.5">
              <p className="text-gray-600 leading-[18px] tracking-[0.5px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center px-0 md:px-36">
        <Button />
      </div>
    </div>
  );
};

export default EasyStepsSection;
