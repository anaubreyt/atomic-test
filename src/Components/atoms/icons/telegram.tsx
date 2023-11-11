import React from 'react';

type Props = {
  className: string
}

export default  function TelegramIcon ({ className }: Props) {
  return (
    <svg
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className = { className }
    >
      <path
        d="M27.55 0.873227L23.1921 23.6238C23.1921 23.6238 22.5824 25.2012 20.9074 24.4447L10.8526 16.4612L10.806 16.4377C12.1642 15.1748 22.696 5.36886 23.1563 4.92437C23.8688 4.23598 23.4265 3.82616 22.5991 4.34617L7.04235 14.5768L1.04058 12.4856C1.04058 12.4856 0.0960731 12.1377 0.00520962 11.3812C-0.0868494 10.6235 1.07166 10.2136 1.07166 10.2136L25.539 0.273974C25.539 0.273974 27.55 -0.641002 27.55 0.873227Z"
        fill=""
      />
    </svg>
  );
};