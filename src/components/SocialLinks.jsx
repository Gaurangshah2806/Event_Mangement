import { FaInstagram, FaWhatsapp, FaGoogle } from 'react-icons/fa';
import { getWhatsAppUrl, handleWhatsAppClick, SOCIAL_LINKS } from '../config/contact';

const sizes = {
  md: { btn: 'p-3', icon: 'h-5 w-5' },
  sm: { btn: 'p-2.5', icon: 'h-4 w-4' },
};

const baseBtn =
  'rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md';

export default function SocialLinks({ size = 'md', className = '' }) {
  const { btn, icon } = sizes[size];

  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className={`${baseBtn} ${btn} bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white hover:shadow-pink-500/40`}
      >
        <FaInstagram className={icon} />
      </a>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        aria-label="WhatsApp"
        className={`${baseBtn} ${btn} bg-[#25D366] text-white hover:bg-[#20BD5A] hover:shadow-green-500/40 cursor-pointer`}
      >
        <FaWhatsapp className={icon} />
      </a>

      <a
        href={SOCIAL_LINKS.google}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Maps"
        className={`${baseBtn} ${btn} bg-white text-[#4285F4] border border-stone-200 hover:shadow-blue-500/30 dark:border-stone-300`}
      >
        <FaGoogle className={icon} />
      </a>
    </div>
  );
}
