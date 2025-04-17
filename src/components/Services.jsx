import vector from '../assets/vector.png';
import img1 from '../assets/service/ser1.png';
import img2 from '../assets/service/ser2.png';
import img3 from '../assets/service/ser3.png';

export default function Services() {
  const service = [
    {
      title: 'Photography',
      image: img1,
    },
    {
      title: 'Ceremony',
      image: img2,
    },
    {
      title: 'Wedding Design',
      image: img3,
    },
  ];
  return (
    <div className="relative mt-15">
      <div
        className=" absolute top-30 md:top-8 lg:top-0 left-0 w-full h-[400px] bg-no-repeat bg-contain bg-top z-0"
        style={{ backgroundImage: `url(${vector})` }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto pt-10 lg:pt-15 px-3 md:px-26">
        <div className="flex flex-col space-y-3 lg:flex-row lg:justify-evenly ">
          <div>
            <h1 className="text-4xl font-display font-bold text-primary">
              Services
            </h1>
            <p className="text-light w-[220px] tracking-wide">
              to plan and orchestrate your special occasion
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 place-items-center mt-9 md:mt-0 lg:mt-15">
            {service.map((item, index) => (
              <div key={index} className="bg-white p-3 shadow-xl">
                <img src={item.image} alt="" />
                <h1 className="text-center text-light mt-2">{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
