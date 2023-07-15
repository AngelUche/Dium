import { Footer } from "../footer/Footer"
import { useNavigate } from "react-router-dom"
import Hero from '../../assets/Images/collection.JPG'
export const AboutUs = () => {
  const navigateTo = useNavigate()
  return (
    <div className="">
      <div className="h-[500px] w-[90%] mx-auto relative">

        <img src={Hero} alt="" className="w-full h-full" />
        
        <h1 className="absolute bg[#3a3a3a] top-[50px] left-[33%] font-semibold text-[#5e2f78] text-[40px] font-mono">WELCOME TO DIUM</h1>
      </div>
      <section className="w-[70%] mx-auto mt-8 mb-12">
        <h1 className="text-center bg-[#118f63] w-max mx-auto text-[white] font-[BlinkMacSystemFont] px-3 ">
          WELCOME TO DIUM
        </h1>
        <p className="leading-[30px] font-[Roboto] text-[18px] mt-4">At DIUM, we believe that fashion is more than just clothing; it is a way of expressing yourself, your individuality, and your unique style.
          Our passion for fashion and commitment to providing our customers with high-quality clothing, hats, and various materials have driven us to create a one-stop online destination for all your style needs.</p>
        <h1 className="text-center bg-[#118f63] w-max mx-auto text-[white] font-[BlinkMacSystemFont] px-3 my-6 ">Our Story</h1>
       <p>DIUM was born out of the dynamic vision and passion of a group of four developers who united during an exciting journey with ALX Portfolio Project. As participants in this immersive program, we were driven by a shared purpose: to revolutionize the world of fashion e-commerce and empower users to shop for their clothes freely and confidently.

In the early stages, we envisioned a platform that transcends conventional online shopping. A place where fashion enthusiasts, trendsetters, and style aficionados could converge, exploring an extensive collection of clothing, hats, and an array of materials, all under one virtual roof.</p>
       
        <h3  className="text-center bg-[#118f63] w-max mx-auto text-[white] font-[BlinkMacSystemFont] px-3 my-6 ">Empowering Your Fashion Journey</h3>
        <p>At DIUM, we remain steadfast in our commitment to quality, curation, and customer satisfaction. Our collaboration with esteemed designers, trusted suppliers, and renowned brands ensures that every item in our inventory is crafted with excellence and attention to detail.

But we did not stop there. Our platform was designed to be more than just a shopping destination. We believe that fashion should be a source of inspiration and joy. Thus, we proudly share style tips, outfit inspirations, and the latest trends through our regularly updated blog and social media channels, nurturing your creativity and guiding you through the ever-evolving world of fashion.</p>
        <h4 className="text-center text-[30px] font-extrabold w-max mx-auto  font-[BlinkMacSystemFont] px-3 mt-4 mb-1">Join Our Fashion Revolution</h4>
        <p>We extend an invitation to all style seekers, adventure chasers, and fashion dreamers to embark on this exciting fashion revolution with us. DIUM is more than just an online store; it is a celebration of your uniqueness and a testament to the power of collective passion.

As we celebrate our journey, we express our heartfelt gratitude to each and every customer who has joined us on this incredible ride. Together, we redefine the way fashion is experienced, unlocking a world of possibilities for everyone.

Thank you for being a part of our story and for choosing DIUM as your ultimate destination for fashion and self-expression</p>
      
      </section>
      <h3 onClick={() => navigateTo('/shop')}
        className="text-center bg-[#118f63] text-[white] fon  font-extrabold font w-max cursor-pointer mx-auto font-[Liberation Mono] px-3 mt-4 mb-1"> View our products</h3>
      <Footer/>
    </div>
    // font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  )
}

