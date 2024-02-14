import React from 'react';
import Image from 'next/image';
import day_Svg from '../../../../public/day.svg';
import cloudyDay_1_Svg from '../../../../public/cloudy-day-1.svg';
import cloudyDay_2_Svg from '../../../../public/cloudy-day-2.svg';
import cloudyDay_3_Svg from '../../../../public/cloudy-day-3.svg';
import cloudyNight_1_Svg from '../../../../public/cloudy-night-1.svg';
import cloudyNight_2_Svg from '../../../../public/cloudy-night-2.svg';
import cloudyNight_3_Svg from '../../../../public/cloudy-night-3.svg';
import cloudy_Svg from '../../../../public/cloudy.svg';
import night_Svg from '../../../../public/night.svg';
import rainy_1_Svg from '../../../../public/rainy-1.svg';
import rainy_2_Svg from '../../../../public/rainy-2.svg';
import rainy_3_Svg from '../../../../public/rainy-3.svg';
import rainy_4_Svg from '../../../../public/rainy-4.svg';
import rainy_5_Svg from '../../../../public/rainy-5.svg';
import rainy_6_Svg from '../../../../public/rainy-6.svg';
import rainy_7_Svg from '../../../../public/rainy-7.svg';
import snowy_1_Svg from '../../../../public/snowy-1.svg';
import snowy_2_Svg from '../../../../public/snowy-2.svg';
import snowy_3_Svg from '../../../../public/snowy-3.svg';
import snowy_4_Svg from '../../../../public/snowy-4.svg';
import snowy_5_Svg from '../../../../public/snowy-5.svg';
import snowy_6_Svg from '../../../../public/snowy-6.svg';
import thunder_Svg from '../../../../public/thunder.svg';

const DaySvg = () => {
  return (
    <Image
      src={day_Svg}
      alt="My SVG"
      width={200}
      height={200}
    />
  );
};

const CloudyDayOneSvg = () => {
  return (
    <Image
      src={cloudyDay_1_Svg}
      alt="My SVG"
      width={200}
      height={200}
    />
  );
};
