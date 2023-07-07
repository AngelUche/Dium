import dium from "../../assets/Images/capture-removebg-preview.png";
import { useState } from "react";

import { SocialIcons } from "../../data/footer/FooterData";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return "hello";
  };

  const date = new Date().getFullYear()
 
  return (
    <div>
      <div className=" ">
        <section
          className=" px-[30px]  mb-6 flex  justify-around items-center "
        >
      <div>           
          <div className="flex justify-between ">
              <div className="flex gap-[6px] mt-3 pt-[5px] flex-col items-center ">
                <div className="w-[30px] h-[30px] ">
                  <img src={dium} alt="img" className="w-full h-full" />
                </div>
                  <p className="capitalize leading-[20px] ">
                      Dium Lagos
                  </p>
                <div className="">
                  <ul>
                    <li><a href="#"> Explore our Porducts</a></li>
                    <li><a href="#"> </a>Prices</li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#"> Ratings</a></li>
                 </ul>
                </div>
              </div>

            </div>
          </div>
              <div className="">
              <h6 className="mb-[10px]">Follow Us</h6>
              <ul className="flex md:gap-3 gap-x-[18px] pb-[2px]">
                {SocialIcons.map((icon) => {
                  return (
                    <li key={icon.id} className="text-[20px]">
                      <a target="blank" href={icon.links}>
                        {icon.icons}
                      </a>
                    </li>
                  );
                })}
              </ul>
          </div>
              <div className="">
              <h6 className="mb-[10px]">Follow Us</h6>
              <ul className="flex md:gap-3 gap-x-[18px] pb-[2px]">
                {SocialIcons.map((icon) => {
                  return (
                    <li key={icon.id} className="text-[20px]">
                      <a target="blank" href={icon.links}>
                        {icon.icons}
                      </a>
                    </li>
                  );
                })}
              </ul>
              </div>
        </section>

  <div className=" px-1 mx-auto flex flex-col w-[700px]">
            <p className="font-semibold text-[16px] mb-[25px] text-center">
              Subscribe to our email to get latest update on Dium
            </p>
            <div>
              <form onSubmit={handleSubmit} className="flex itemscenter justify-center" >
                <input
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="pl-2 text-xs bg-transparent text-white focus:outline-none border border-gray-400"
                  value={email}
                />
                <button
                  type="submit"
                  className="bg-white text-black text-xs mt-[0px] 
                  font-semibold p-1 border-none px-3
                  h-[30px]"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        <div className=" text-sm mt-[30px] flex gap-x-4 items-center justify-center">
          <p className=" ">
            Copyright All Right Reserved {date } Dium.
          </p>
          <p>
             Dium Fashion Abuja, Plot 458 Garki 2 Abuja
          </p>
        </div>
      </div>
    </div>
  );
};

      <ul className="flex gap-[1px] justify-center items-center">
        <div className="h-8 w-8 overflow-hidden">
          <img src={dium} alt="logo" className="h-full w-full" />
        </div>
        <p className="text-[11px] font-serif font-semibold border-[#311180]">
          DIUM
        </p>
      </ul>