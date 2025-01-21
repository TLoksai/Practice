
"use client";

import { Carousel } from "flowbite-react";

export function Caesouel() {
  return (
    <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="src/assets/1.png" alt="..." />
        <img src="src/assets/2.png" alt="..." />
        <img src="src/assets/3.png" alt="..." />
        
      </Carousel>
      <Carousel indicators={false}>
        <img src="src/assets/4.png" alt="..." />
        <img src="src/assets/5.png" alt="..." />
        <img src="src/assets/6.png" alt="..." />
        
      </Carousel>
    </div>
  );
}
