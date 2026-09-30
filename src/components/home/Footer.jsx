import {
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  Leaf,
} from "lucide-react";
import {
  siYoutube,
  siInstagram,
  siFacebook,
} from "simple-icons";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full">

      {/* CTA Section */}
      <section className="bg-[#075744] px-5 py-12 text-center sm:px-6 sm:py-14 lg:py-16">

        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Let’s build a Stronger Agricultural Future Together
        </h2>
        <Link to="/login" className="mx-auto mt-8 flex items-center justify-center gap-2 rounded-full bg-[#34D399] px-8 py-2.5 text-base font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2BC58D] w-fit">
          Login in
          <ArrowRight className="h-5 w-5" />
        </Link>

        <p className="mt-8 text-sm text-white sm:text-base">
          Made for farmers, built for a better tomorrow. 🌾
        </p>
      </section>


      {/* Main Footer */}
      <section className="bg-[#062D25] px-5 py-10 text-white sm:px-8 lg:px-16 lg:py-12">

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">

          {/* Logo + Copyright */}
          <div className="flex flex-col items-center md:items-start">

            <div className="flex items-center gap-2">
              <Leaf className="h-7 w-7 text-[#34D399]" />

              <div>
                <h2 className="text-2xl font-bold leading-none">
                  Kisan<span className="text-[#34D399]">Saathi</span>
                </h2>

                <p className="mt-1 text-[9px] font-medium tracking-wide text-white">
                  BETTER MARKETS. BETTER PRICES.
                </p>
              </div>
            </div>

            <p className="mt-10 text-sm text-white/90">
              © 2026 KisanSaathi. All rights reserved.
            </p>
          </div>


          {/* Contact */}
          <div className="text-center md:text-left">

            <h3 className="text-lg font-semibold">
              CONTACT US
            </h3>

            <div className="mt-3 space-y-3 text-xs text-white/85">

              <div className="flex items-start justify-center gap-2 md:justify-start">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#34D399]" />

                <p>
                  Baghajatin Road, Ward 17,
                  <br />
                  Subhas Pally, Siliguri,
                  <br />
                  West Bengal 734001
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Mail className="h-4 w-4 shrink-0 text-[#34D399]" />
                <span>+91-12345 67890</span>
              </div>

              <div className="flex items-center justify-center gap-2 md:justify-start">
                <Phone className="h-4 w-4 shrink-0 text-[#34D399]" />
                <span>mail.kisansaathi@gmail.com</span>
              </div>

            </div>
          </div>


          {/* Social Media */}
          <div className="text-center md:text-left md:pl-8">

            <h3 className="text-lg font-semibold">
              FOLLOW US
            </h3>

<div className="mt-5 flex justify-center gap-8 md:justify-start">

  <a
    href="#"
    aria-label="YouTube"
    className="text-[#00A878] transition-transform duration-200 hover:scale-110"
    dangerouslySetInnerHTML={{
      __html: `<svg role="img" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="${siYoutube.path}"/></svg>`,
    }}
  />

  <a
    href="#"
    aria-label="Instagram"
    className="text-[#00A878] transition-transform duration-200 hover:scale-110"
    dangerouslySetInnerHTML={{
      __html: `<svg role="img" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="${siInstagram.path}"/></svg>`,
    }}
  />

  <a
    href="#"
    aria-label="Facebook"
    className="text-[#00A878] transition-transform duration-200 hover:scale-110"
    dangerouslySetInnerHTML={{
      __html: `<svg role="img" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="${siFacebook.path}"/></svg>`,
    }}
  />

</div>
          </div>

        </div>
      </section>

    </footer>
  );
}

export default Footer;