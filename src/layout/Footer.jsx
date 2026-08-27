import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Globe } from "lucide-react";
import eitLogo from "@/assets/images/EIT-CKIC-Logo_White_Standard_HighQuality.jpg-768x432.png";
import impactValidation from "@/assets/images/Impact-Forecat-Validation-JW0003-1024x256.jpg";

// Clean, zero-dependency brand SVGs
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-[#E1E0CC] pt-16 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Social Media & Company Registration (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-xs uppercase tracking-widest text-[#E1E0CC] font-semibold mb-4">
              Follow Us On Social Media
            </h4>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 mb-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#E1E0CC] text-neutral-950 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#E1E0CC] text-neutral-950 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#E1E0CC] text-neutral-950 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#E1E0CC] text-neutral-950 flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-md"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
            </div>

            {/* Legal Entity Information */}
            <div className="space-y-4 text-xs text-[#E1E0CC]/80 font-light leading-relaxed">
              <div>
                <strong className="text-white font-medium block">Wegozero B. V.</strong>
                <span>KvK: 80943144</span>
                <span className="block">btw-id: NL864127443B01</span>
              </div>

              <div>
                <strong className="text-white font-medium block">Wegozero maps B. V.</strong>
                <span>KvK: 84749822</span>
                <span className="block">btw-id: NL863347617B01</span>
              </div>

              <div className="pt-2 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">Phone:</span>
                  <a href="tel:+4367762308285" className="hover:text-white transition-colors">
                    +4367762308285
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">E-mail:</span>
                  <a href="mailto:hello@wegozero.co" className="hover:text-white transition-colors">
                    hello@wegozero.co
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Site Navigation Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs uppercase tracking-widest text-[#E1E0CC] font-semibold mb-4">
              site
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E1E0CC]/80 font-light">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">Team</Link>
              </li>
              <li>
                <Link to="/what-we-offer" className="hover:text-white transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/press" className="hover:text-white transition-colors">Press</Link>
              </li>
              <li>
                <Link to="/what-we-offer" className="hover:text-white transition-colors">Consultancy</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect (2 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-xs uppercase tracking-widest text-[#E1E0CC] font-semibold mb-4">
              connect
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E1E0CC]/80 font-light">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact us</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Supported By & Accreditations (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="text-xs uppercase tracking-widest text-[#E1E0CC] font-semibold mb-4">
              zero waste maps supported by
            </h4>

            {/* EIT Climate-KIC & EU Funding Banner */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4 mb-4">
              {/* EIT Logo */}
              <div className="flex items-center justify-start h-12">
                <img
                  src={eitLogo}
                  alt="EIT Climate-KIC"
                  className="max-h-11 w-auto object-contain filter invert opacity-90"
                />
              </div>

              {/* EU Flag / Funding Text */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="text-[11px] text-[#E1E0CC]/80 font-light leading-tight">
                  <span>Funded by the</span>
                  <strong className="block text-white font-medium">European Union</strong>
                </div>
                <div className="w-10 h-7 rounded-sm bg-[#003399] flex items-center justify-center p-1 border border-white/20">
                  <span className="text-[10px] text-yellow-300">★ ★ ★</span>
                </div>
              </div>
            </div>

            {/* Impact Forecast Validation Badge */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-[#E1E0CC]/40 transition-colors">
              <img
                src={impactValidation}
                alt="WeGoZero Impact Forecast Validation JW0003"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E1E0CC]/70">
          <div>
            <span>{new Date().getFullYear()} © wegozero.co all rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span role="img" aria-label="English Flag">🇬🇧</span>
            <span className="text-xs text-[#E1E0CC] font-medium">English</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
