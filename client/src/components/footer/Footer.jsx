import dium from "../../assets/Images/capture-removebg-preview.png";
import { useState } from "react";

import { SocialIcons } from "../../data/footer/FooterData";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const date = new Date().getFullYear()
 
  return (
    <div>
      <div className=" ">
    <section
          className=" px-[30px]  mb-6 flex  flex-col sm:flex-row gap-x-1 gap-y-5 sm:justify-around sm:items-center "
        >
      <div>           
          <div className="flex justify-between ">
              <div className="flex gap-[6px] mt-3 pt-[5px] flex-col  ">
                <div className="flex gap-x-1 items-center ">
                <div className="w-[30px] h-[30px] ">
                  <img src={dium} alt="img" className="w-full h-full" />
                </div>
                  <p className="capitalize leading-[20px] text-[#311180] font-semibold">
                      Dium Lagos
                </p>
                </div>
                
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
            <h6 className="mb-[11px] texr-[20px] text-[#311180] font-semibold border-b-[2px] border-[#311180] w-max">Explore Our Categories</h6>
            <ul>
              <li>Jackets</li>
              <li>Hats</li>
              <li>Sneakers</li>
              <li>Womens</li>
              <li>Mens</li>
            </ul>
             
              </div>
              <div className="">
            <h6 className="mb-[11px] texr-[20px] text-[#311180] font-semibold border-b-[2px] border-[#311180] w-max">Stay Connected</h6>
            <p className="w-[330px]">Follow us on social media to join a thriving community of fashion
              enthusiasts and receive real-time updates on new arrivals, promotions, and exciting events.</p>
              <ul className="flex md:gap-3 gap-x-[18px] pb-[2px] mt-4">
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

  <div className=" px-1 mx-auto flex flex-col w-max sm:w-[700px] mt-12 sm:mt-4">
            <p className="font-semibold text-[16px] mb-[25px] text-center">
              Subscribe to our email to get latest update on Dium
            </p>
            <div>
              <div className="flex itemscenter justify-center" >
                <input
                  type="email"
                  placeholder="Enter email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="pl-2 text-xs bg-transparent w-[180px] sm:w-[240px] focus:outline-none border border-gray-400"
                  value={email}
                />
                <button
                  onClick={handleSubmit}
                  className="bg-white text-black text-xs mt-[0px] 
                  font-semibold p-1 border-none px-3
                  h-[30px]"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        <div className=" text-sm mt-[30px] flex gap-x-4 items-center justify-center mb-4 w-[96%] mx-auto">
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

   