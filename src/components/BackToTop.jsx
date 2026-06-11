import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { scrollToSection } from '../utils/navigation';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => scrollToSection('#home')}
      className="fixed bottom-24 right-6 z-40 p-3 rounded-full bg-gold-500 hover:bg-gold-600 text-zinc-950 shadow-lg shadow-gold-500/30 transition-all duration-300 hover:scale-110 cursor-pointer"
      aria-label="Back to top"
    >
      <FaArrowUp className="h-5 w-5" />
    </button>
  );
}
