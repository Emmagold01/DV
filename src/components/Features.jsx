import { Icon } from '@iconify/react';
import feature from '../assets/feature.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import feature5 from '../assets/feature5.png';
import featuremobile from '../assets/featuremobile.png';
import featuremobile2 from '../assets/featuremob2.png';
import featuremobile3 from '../assets/featuremob3.png';
import featuremobile4 from '../assets/featuremob4.png';
import featuremobile5 from '../assets/featuremob5.png';

import { useState } from 'react';
export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Villa Balbianello',
      location: ' Lake Como',
      desc1:
        'The whole complex consists of two residential buildings, a church, and a portico (known as loggia durini) that can host weddings and events in a truly unique setting.',
      desc2:
        'But the special feature of Villa Balbianello is above all the vastgarden that surrounds the dwellings, with magnificent holm oaks pruned into an umbrella shape so as to offer a splendid view of Lake Como from inside the...',
      image: feature,
      imageMobile: featuremobile,
    },
    {
      id: 2,
      title: 'Château de Chantilly',
      location: 'Chantilly, France',
      desc1:
        'Surrounded by lakes, gardens, and timeless architecture, this 16th-century château offers a regal setting perfect for luxurious weddings, elite gatherings, and artistic, fairytale-like ceremonies.',
      desc2:
        'Its interior showcases grand halls, classic French décor, and a prestigious art collection, creating an atmosphere where history, elegance, and refinement meet for truly unforgettable events...',
      image: feature2,
      imageMobile: featuremobile2,
    },
    {
      id: 3,
      title: 'Banff Springs Hotel',
      location: 'Alberta, Canada',
      desc1:
        'Set deep in the Canadian Rockies, this mountain resort is iconic for its blend of alpine charm, historic design, and sweeping views of nature’s untouched beauty.',
      desc2:
        'Perfect for cozy or grand celebrations, the venue features majestic ballrooms, rustic lounges, and outdoor terraces framed by forests, waterfalls, and dramatic mountain skylines...',
      image: feature3,
      imageMobile: featuremobile3,
    },
    {
      id: 4,
      title: 'Amanera Resort',
      location: 'Dominican Republic',
      desc1:
        'Built on a clifftop above golden beaches, Amanera offers minimalist architecture, lush surroundings, and total privacy, ideal for serene escapes or luxury beachfront experiences.',
      desc2:
        'From open-air dining pavilions to private cliffside villas with infinity pools, every detail is crafted for ultimate comfort and luxury. Surrounded by lush jungle and ocean views, the resort blends modern design with natural beauty...',
      image: feature4,
      imageMobile: featuremobile4,
    },
    {
      id: 5,
      title: 'Babylonstoren Estate',
      location: ' Cape Winelands',
      desc1:
        'This 17th-century farm blends Cape Dutch architecture with lush vineyards and botanical gardens, offering a tranquil yet elegant atmosphere perfect for rustic-chic events and retreats.',
      desc2:
        'Guests enjoy farm-to-table dining, luxurious cottages, and serene mountain views, making it ideal for intimate weddings, wellness weekends, or creative gatherings rooted in nature and simplicity...',
      image: feature5,
      imageMobile: featuremobile5,
    },
  ];

  const [page, setPage] = useState(0);
  const item = features[page];

  function next() {
    setPage((prev) => (prev + 1) % features.length);
  }

  function prev() {
    setPage((prev) => (prev - 1 + features.length) % features.length);
  }

  return (
    <div className="max-w-7xl mx-auto pt-5 px-3 md:px-26">
      <h1 className="text-left text-light font-medium tracking-tight">
        Featured venues
      </h1>
      <div className="mt-2 flex flex-col lg:flex-row">
        <div>
          <img src={item.image} alt="feature" className="hidden lg:block" />
          <img
            src={item.imageMobile}
            alt="feature"
            className="lg:hidden w-full"
          />
        </div>
        <div className=" py-10 px-10 md:px-15 shadow-xl">
          <div className="max-w-xl tracking-wide">
            <h3 className="font-display text-2xl font-bold text-light">
              <span className="text-primary font-bold"> {page + 1} </span>/
              {features.length}
            </h3>
            <h1 className="mt-2 text-primary font-display font-bold text-4xl">
              {item.title}
            </h1>
            <p className="text-light mt-1">{item.location}</p>
            <p className="mt-2 text-light">{item.desc1}</p>
            <p className="mt-4 text-light tracking-tight">
              {item.desc2}
              <span className="font-medium text-primary cursor-pointer">
                View more
              </span>
            </p>
            <div className="flex justify-between pt-20">
              <button onClick={prev}>
                <Icon
                  icon="fa6-solid:arrow-left-long"
                  className="text-light cursor-pointer"
                />
              </button>
              <button onClick={next}>
                <Icon
                  icon="fa6-solid:arrow-right-long"
                  className="text-light cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
