import whyUsPic from '../../assets/whyUsPic.svg'
import whyUsPic2 from '../../assets/whyUsPic2.svg'
function WhyUsSection() {
  return (
<section id='Why-us' className='flex flex-col items-center m-3 px-3 py-5 min-[1024px]:m-10 min-[1024px]:px-10 bg-[#FAFAF3] rounded-xl scroll-mt-54'>
      <h2 className='text-4xl font-[700] m-5 text-[#0E3B2F]'>Why Us? 🌱</h2>
      <div className='flex max-[426px]:flex-col items-center justify-between gap-10'>
        <div className="w-full min-[1025px]:w-1/2 min-[1025px]:ml-10 text-md text-[grey] text-center min-[1025px]:text-xl ">
          <p>
            KisanSaathi is a digital platform designed to connect farmers with
            the right market opportunities. We help farmers make better selling
            decisions by bringing together crop information, market prices,
            buyer requirements, and relevant opportunities in one simple
            platform. Instead of relying on multiple sources or middlemen,
            farmers can discover potential buyers, compare opportunities, and
            find market connections based on factors such as price, quantity,
            quality, distance, and reliability. Better Information. Better
            Connections. Better Opportunities.🌾
          </p>
        </div>
        <div className="hidden w-fit mr-10 min-[768px]:block">
        <img src={whyUsPic} alt="" />
        </div>
        <div className="block w-fit p-5 min-[768px]:hidden">
        <img src={whyUsPic2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
