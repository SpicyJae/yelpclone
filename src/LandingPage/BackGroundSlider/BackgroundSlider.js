import React from "react";
import BackgroundSlider from 'react-background-slider';

import bg1 from "../../pictures/bg-1.jpg";
import bg2 from "../../pictures/bg-2.jpg";
import bg3 from "../../pictures/bg-3.jpg";
import bg4 from "../../pictures/bg-4.jpg";
import bg5 from "../../pictures/bg-5.jpg";
import bg6 from "../../pictures/bg-6.jpg";
// import bg7 from "../../assets/bg-7.jpg";

export function BackgroundSlideshow() {
  return (
    <div>
      <BackgroundSlider
        images={[bg1, bg2, bg3, bg4, bg5, bg6]}
        duration={40}
        transition={2}
      />
    </div>
  );
}
