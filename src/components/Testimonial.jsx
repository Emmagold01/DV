import { Icon } from '@iconify/react/dist/iconify.js';
import test1 from '../assets/test1.jpg';
import test2 from '../assets/test2.jpg';
import test3 from '../assets/test3.jpg';
import { useState } from 'react';

export default function Testimonial() {
  const testimonies = [
    {
      name: 'Joy & Jordan',
      desc1:
        'Lorem ipsum sit ac suspendisse adipiscing eget aliquam fermentum rutrum tempus aenean. Suspendisse nascetur vulputate viverra   varius eu ullamcorper. Cursus pellentesque erat eget eget ullamcorper id in. Nullam scelerisque varius viverra augue quis.Laoreet eget curabitur vitae sed at facilisis purus convallis imperdiet.',
      desc2:
        'Penatibus auctor diam vivamus amet a vehicula ultrices. Volutpat arcu in amet praesent nisl mattis etiam cras orci. Ut urna elementum sapien orci lacus!',
      image: test1,
    },
    {
      name: 'Dianne & Michael',
      desc1:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit praesentium saepe ullam ratione libero sint animi odio earum inventore. Perferendis unde delectus maiores quam dolores, voluptates tempora qui ipsam, omnis excepturi consectetur ratione dicta, enim molestias dolorem mollitia.',
      desc2:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum maxime inventore quos quam deleniti cumque porro adipisci quidem consequatur ea. A asperiores excepturi incidunt.',
      image: test2,
    },

    {
      name: 'Zee & Adriane',
      desc1:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe laborum mollitia tempora consectetur? Nemo id, odio optio totam vero cum similique quos. Consequuntur reiciendis temporibus voluptatem culpa quis aliquam? Vel non magni nam atque.',
      desc2:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloremque ipsa neque consequatur! Numquam quod recusandae vitae quidem laboriosam eum',
      image: test3,
    },
  ];

  const [test, setTest] = useState(0);
  const item = testimonies[test];

  function next() {
    setTest((prev) => (prev + 1) % testimonies.length);
  }

  function prev() {
    setTest((prev) => (prev + (1 % testimonies.length)) % testimonies.length);
  }

  return (
    <div className="bg-test mt-20 p-5 ">
      <div className="max-w-7xl mx-auto pt-5 px-2 md:px-26">
        <div className="py-5 text-center">
          <h1 className="font-display text-2xl  text-white font-bold ">
            Testimonials
          </h1>
          <p className="text-light font-medium">
            from happy, delighted couples
          </p>
        </div>
        <div className="flex justify-evenly pt-3">
          <button onClick={prev}>
            <Icon
              icon="fa6-solid:arrow-left-long"
              className="text-light cursor-pointer"
            />
          </button>
          <div className="flex flex-col text-center space-y-8">
            <div className="max-w-3xl space-y-5 text-white">
              {' '}
              <p>{item.desc1}</p>
              <p>{item.desc2}</p>
            </div>
            <div className="mb-8">
              <img
                src={item.image}
                className="rounded-full object-center object-cover mx-auto items-center h-20 w-20"
                alt=""
              />
              <p className="text-white">{item.name}</p>
            </div>
          </div>
          <button onClick={next}>
            <Icon
              icon="fa6-solid:arrow-right-long"
              className="text-light cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
