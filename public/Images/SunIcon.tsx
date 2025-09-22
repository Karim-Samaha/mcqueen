const SunIcon = ({ ...props }) => {
  return (
    <svg
      width="64px"
      height="64px"
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <g
          clipPath="url(#a)"
          stroke="#fff"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        >
          {" "}
          <path
            d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
            strokeLinecap="round"
          />{" "}
          <path
            d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            fill="#fff"
            fillOpacity=".16"
          />{" "}
          <path d="M12 19v4M12 1v4" strokeLinecap="round" />{" "}
        </g>{" "}
        <defs>
          {" "}
          <clipPath id="a">
            {" "}
            <path fill="#ffffff" d="M0 0h24v24H0z" />{" "}
          </clipPath>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
};
export default SunIcon;
