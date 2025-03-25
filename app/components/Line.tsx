const LineSvg = ({ color }: { color: 'white' | 'black' }) => {
  return color === 'white' ? (
    <svg
      className="w-[250px] h-[6px] md:w-[435px] md:h-[10px] mt-3"
      viewBox="0 0 489 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.04221 8.74936C140.824 4.26105 278.754 -2.03459 417.339 5.49864C440.545 6.76009 463.751 8.02153 486.958 9.28298"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg
      className="w-[250px] h-[6px] md:w-[435px] md:h-[10px]"
      viewBox="0 0 263 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.60392 6.51739C75.8107 3.33202 149.537 -0.692141 223.804 1.74768C236.24 2.15623 248.676 2.56478 261.112 2.97334"
        stroke="#191E28"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LineSvg;
