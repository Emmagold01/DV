import { Icon } from '@iconify/react';
import img1 from '../assets/location/img1.png';
import img2 from '../assets/location/img2.png';
import img3 from '../assets/location/img3.png';
import img4 from '../assets/location/img4.png';
import img5 from '../assets/location/img5.png';
import img6 from '../assets/location/img6.png';
import img7 from '../assets/location/img7.png';

export default function Location() {
  return (
    <div id="location" className="-mt-25">
      <svg
        className="w-full h-[100px] block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C150,0 350,0 500,100 L500,100 L0,100 Z"
          className="fill-white"
        />
      </svg>
      <div className="max-w-7xl mx-auto py-10 px-2 md:px-26">
        <h1 className="text-center font-display text-primary font-bold text-3xl">
          Locations
        </h1>
        <p className="text-center text-light">that you'll remember forever</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 my-3">
          <div
            className="relative h-30 md:h-40 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <p className="absolute bottom-3 left-4 text-white">Florence</p>
          </div>
          <div
            className="relative h-30 md:h-40 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <p className="absolute bottom-3 left-4 text-white">San Gamignano</p>
          </div>
          <div
            className="relative h-30 md:h-40 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <p className="absolute bottom-3 left-4 text-white">Volterra</p>
          </div>
          <div
            className="relative h-30 md:h-40 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <p className="absolute bottom-3 left-4 text-white">Chianti</p>
          </div>
          <div
            className="relative h-30 md:h-40 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${img5})` }}
          >
            <p className="absolute bottom-3 left-4 text-white">Val d'Orcia</p>
          </div>
          <div
            className="relative h-30 md:h-40 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${img6})` }}
          >
            <p className="absolute bottom-3 left-4 text-white">Siena</p>
          </div>
          <div
            className="relative h-30 md:h-40 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${img7})` }}
          >
            <p className="absolute bottom-3 left-4 text-white">Lucca</p>
          </div>
          <div className="bg-primary relative h-30 md:h-40 bg-cover bg-center rounded-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 cursor-pointer">
            <Icon
              icon="wi:direction-up-right"
              height="30px"
              width="30px"
              className="text-white absolute top-0 right-0"
            />
            <p className="absolute bottom-3 left-4 text-white">Browse More</p>
          </div>
        </div>
      </div>
    </div>
  );
}
