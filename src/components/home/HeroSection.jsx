import { ArrowUpRight } from "lucide-react";
import heroImage from "../../assets/HeroSectionPic.svg";
import farmerBg from "../../assets/phoneBg.jpg"; 
 
function HeroSection(){
  return(
 <section id="home" className=" relative  pt-25 lg:pt-24 bg-gradient-to-br from-[#DCFCE7]  via-white to-[#F0FDF4] overflow-hidden min-h-[610px] md:min-h-0 scroll-mt-24">
                    <img
              src={farmerBg}
              alt=""
              className=" absolute top-0 left-0 z-0 block min-[426px]:hidden w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 z-0 block min-[426px]:hidden w-full h-24 bg-gradient-to-b from-transparent to-[#DCFCE7]" />
        <div className="relative z-10 flex flex-col min-[426px]:flex-row items-center mx-0 lg:mx-10 py-0 lg:py-12 ">
          <div className="w-full min-[426px]:w-1/2 space-y-4 lg:space-y-6 pl-5 ">
            <h1 className="text-2xl min-[375px]:text-3xl min-[426px]:text-4xl sm:text-5xl lg:text-6xl font-[700] leading-[1] tracking-tight ">
              <span className="text-[#0E3B2F] "> Better Connections.</span>
              <br />
              <span className="text-[#047857] "> Bigger Opportunities.</span>
            </h1>
            <p className="text-[17px] max-[426px]:text-[14px] max-[426px]:pr-2 font-medium text-black-600  max-w-md font-medium leading-relaxed ">
              KisanSathi connects farmers directly with verified buyers, helping
              you get fair prices and stronger tomorrow.
            </p>
            <button className="flex items-center gap-2 bg-[#0D5942] text-white py-1.5 px-6 lg:px-6 lg:py-3 rounded-full hover:bg-[#133D2F] hover:-translate-y-[2px] transition-all duration-300 cursor-pointer hover:-translate-y-0.5 hover:shadow-sm">
              Get Started
              <ArrowUpRight />
            </button>
          </div>

          <div className=" relative w-full min-[426px]:w-1/2 flex justify-center">
            <img
              src={heroImage}
              alt="Farmer"
              className="hidden  min-[426px]:block max-w-full max-w-[320px]  h-auto "
            />
          </div>
        </div>
      </section>
      );
      }

      export default HeroSection;