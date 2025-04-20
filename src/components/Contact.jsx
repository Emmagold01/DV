import { useState } from 'react';
import map from '../assets/map.png';
import { Icon } from '@iconify/react';

export default function Contact() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    partner1: '',
    partner2: '',
    date: '',
    num: '',
    message: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div id="contact" className="max-w-7xl mx-auto pt-10 px-3 md:px-26">
      <h1 className="text-primary text-3xl font-display font-bold">
        Contact us
      </h1>
      <p className="text-light mb-4">we are excited to get planning</p>
      <div className="flex flex-col lg:flex-row space-y-6 items-center justify-between">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <h3 className="text-test font-medium">Contact information</h3>
          <input
            type="text"
            placeholder="name"
            className="mt-2 p-2 w-100 border-2 border-light rounded-md text-light outline-none"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="mt-2 p-2 w-100 border-2 border-light rounded-md text-light outline-none"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone no"
            className="mt-2 p-2 w-100 border-2 border-light rounded-md text-light outline-none"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
          <h3 className="text-test font-medium pt-3">Who's getting married?</h3>
          <input
            type="text"
            placeholder="Partner 1"
            className="mt-2 p-2 w-100 border-2 border-light rounded-md text-light outline-none"
            value={user.partner1}
            onChange={(e) => setUser({ ...user, partner1: e.target.value })}
          />
          <input
            type="text"
            placeholder="Partner 2"
            className="mt-2 p-2 w-100 border-2 border-light rounded-md text-light outline-none"
            value={user.partner2}
            onChange={(e) => setUser({ ...user, partner2: e.target.value })}
          />
          <input
            type="date"
            placeholder="MM/YY"
            className="mt-2 p-2 w-100 border-2 border-light rounded-md text-light outline-none"
            value={user.date}
            onChange={(e) => setUser({ ...user, date: e.target.value })}
          />
          <input
            type="number"
            placeholder="Expected number of guest"
            className="mt-2 p-2 w-100 border-2 border-light rounded-md text-light outline-none"
            value={user.num}
            onChange={(e) => setUser({ ...user, num: e.target.value })}
          />
          <textarea
            name="message"
            value={user.message}
            onChange={(e) => setUser({ ...user, message: e.target.value })}
            placeholder="Tell us anything more that can help!"
            className="mt-2 p-2 w-100 h-40 border-2 border-light rounded-md text-light outline-none"
          ></textarea>
          <button className="mt-2 text-white bg-primary px-3 py-2 rounded-md lg:w-30 cursor-pointer">
            Send
          </button>
        </form>

        <div className="flex-col text-center md:text-left text-light space-y-2">
          <img src={map} alt="" />
          <h3 className="text-primary font-medium">Head Office</h3>
          <div className="text-sm">
            <p>Via Roma, 123</p>
            <p>20121 Milano (ML)</p>
            <h5>Italy</h5>
          </div>
          <div className="text-sm">
            <p>Phone: +39 (0)322 221211</p>
            <p>Phone: +39 328 221211</p>
          </div>
          <h3 className="text-primary font-medium">Follow us</h3>
          <div className="flex flex-row justify-center md:justify-start text-light space-x-3 ">
            <Icon icon="fa-brands:facebook" />
            <Icon icon="fa-brands:instagram" />
            <Icon icon="fa-brands:twitter" />
          </div>
        </div>
      </div>
    </div>
  );
}
