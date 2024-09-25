import { useState, useEffect } from "react";

const useDeviceDetect = (): string => {
  const [device, setDevice] = useState<string>("desktop");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );

    setDevice(isMobile ? "mobile" : "desktop");
  }, []);

  return device;
};

export default useDeviceDetect;


// import { useState, useEffect } from 'react';

// const useDeviceDetect = (): string => {
//   const [device, setDevice] = useState('desktop');

//   useEffect(() => {
//     const userAgent =
//       typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
//     const mobile = Boolean(
//       userAgent.match(
//         /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//       )
//     );
//     if (mobile) {
//       setDevice('mobile');
//     }
//   }, []);

//   return device;
// };
//
// export default useDeviceDetect;
