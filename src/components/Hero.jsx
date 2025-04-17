import { Icon } from '@iconify/react';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div className="bg-[url('/bg-img.png')] h-screen bg-cover bg-center">
      <Navbar />
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center  h-[calc(70vh-80px)] px-6 text-center">
        <div className="flex flex-col space-y-5 mt-10 md:mt-30 lg:mt-0">
          <h1 className="text-center text-4xl md:text-6xl font-display text-primary font-bold">
            Discover your perfect Italian wedding venue
          </h1>
          <p className="text-light text-center max-w-md mx-auto tracking-tighter">
            Sagittis adipiscing posuere id adipiscing aliquam posuere. Aliquet
            faucibus duis accumsan aliquet tempor diam dignissim suscipit. Nibh
            urna ut diam fames.
          </p>
          <div className="flex flex-col justify-center items-center text-primary mt-10">
            <Icon icon="fa6-solid:arrow-down-long" />
            <p>Scroll</p>
          </div>
        </div>
      </div>
    </div>
  );
}
