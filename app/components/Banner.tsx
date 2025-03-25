import Image from 'next/image';
import Button from './Button';
import LineSvg from './Line';

export default function Banner() {
  return (
    <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden flex items-center justify-center text-white text-center px-4 z-10 mt-10 lg:mt-16 xl:mt-22">
      <Image
        src="/img/header_img.jpg"
        alt="Banner"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative flex flex-col items-center ">
        <h2 className="leading-8 tracking-wide font-bold text-[28px] md:text-[46px] md:leading-16 ">
          Your Doctor&apos;s Note
          <span className="block">In 1 Minute, for $29.99!</span>
        </h2>
        <LineSvg color="white" />
        <Button />
      </div>
    </div>
  );
}
