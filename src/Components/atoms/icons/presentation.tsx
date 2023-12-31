import React from 'react';

type Props = {
  className: string
}

const PresentationIcon = ( { className }: Props ) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`m-auto ${className}`}
    >
      <path
        d="M12 6.90908C10.8999 5.50892 9.20406 4.10876 5.00119 4.00601C4.72513 3.99927 4.5 4.2235 4.5 4.49964V16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90908C13.1001 5.50892 14.7959 4.10876 18.9988 4.00601C19.2749 3.99927 19.5 4.21846 19.5 4.4946V16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90908V20.5"
        stroke="white"
        strokeLinejoin="round"
      ></path>
      <path
        d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
        stroke="white"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default PresentationIcon;