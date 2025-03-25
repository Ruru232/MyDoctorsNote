import { CustomSVG } from './RiskFreeSVG';

export const MoneyBack = () => {
  return (
    <div className="max-w-full px-4 xl:px-30 2xl:px-[600px]">
      <div className="flex flex-col items-center xl:justify-center md:flex-row bg-green-400/40 rounded-2xl mt-16 ">
        <div className="flex items-center justify-center pt-10 pb-0 md:pt-10 md:pb-10 md:w-fit ">
          <div className="w-fit">
            <CustomSVG />
          </div>
        </div>
        <div className="flex flex-col md:flex-col-none md:w-fit  mt-0 ml-0 md:mt-5 md:ml-10">
          <h2 className="font-bold text-2xl md:text-[32px] text-center md:text-start">
            Money Back Guarantee!
          </h2>
          <p className="text-center md:text-start font-semibold text-base md:text-lg leading-6 mt-4 px-5 md:px-0 pb-10">
            We will refund 100% of your payment, in case you&apos;re not 100%
            satisfied with our service.
          </p>
        </div>
      </div>
    </div>
  );
};
