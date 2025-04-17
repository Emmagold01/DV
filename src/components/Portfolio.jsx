import img1 from '../assets/portfolio/port1.png';
import img2 from '../assets/portfolio/port2.png';
import img3 from '../assets/portfolio/port3.png';
import img4 from '../assets/portfolio/port4.png';

export default function Portfolio() {
  const portfolio = [
    {
      name: 'Joy & Jordan',
      image: img1,
    },
    {
      name: 'Dianne & Michael',
      image: img2,
    },
    {
      name: 'Gabrielle & Simone',
      image: img3,
    },
    {
      name: 'Zee & Adriane',
      image: img4,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto pt-8 px-3 md:px-26">
      <h1 className="py-3 text-light font-medium">Our portfolio</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
        {portfolio.map((item, index) => (
          <div
            key={index}
            className="relative h-60 lg:h-100  rounded-lg bg-center bg-cover"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white">
              <p className="uppercase font-light">the wedding of</p>
              <h1 className="font-display font-bold text-3xl">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
