import {
  FaBirthdayCake,
  FaStore,
  FaBriefcase,
  FaSun,
  FaBaby,
  FaHandshake,
  FaCouch,
  FaPalette,
  FaStar,
} from 'react-icons/fa';
import { serviceAnchorId } from '../utils/navigation';

export const servicesData = [
  {
    id: 1,
    title: 'Birthday Parties',
    description: 'Bespoke themed birthday celebrations for kids and adults, complete with playful balloon installations and decor.',
    icon: FaBirthdayCake,
  },
  {
    id: 2,
    title: 'Shop Opening Ceremony',
    description: 'Opening celebrations for shops, with traditional decorations, ribbon-cutting setups, and festive ambiance.',
    icon: FaStore,
  },
  {
    id: 3,
    title: 'Corporate Events',
    description: 'Professional stage setups, conference branding, awards nights, and seamless executive hospitality.',
    icon: FaBriefcase,
  },
  {
    id: 4,
    title: 'Haldi Ceremony',
    description: 'Yellow and gold themed haldi stages featuring marigold garlands, yellow fabric drapings, and traditional decorative elements.',
    icon: FaSun,
  },
  {
    id: 5,
    title: 'Baby Shower',
    description: 'Soft pastel settings, thematic photo-booths, teddy bear motifs, and elegant setups celebrating new beginnings.',
    icon: FaBaby,
  },
  {
    id: 6,
    title: 'Welcome Ceremony',
    description: 'Welcoming guests with traditional decorations,  and festive ambiance.',
    icon: FaHandshake,
  },
  {
    id: 7,
    title: 'Stage Decoration',
    description: 'Bespoke stage backdrops, grand wedding sofas, fresh imported flower domes, and dramatic spotlights.',
    icon: FaCouch,
  },
  {
    id: 8,
    title: 'Theme Decoration',
    description: 'Customized thematic designs (vintage, bohemian, forest, royal gold, cosmic) tailored completely to your event vision.',
    icon: FaPalette,
  },
  {
    id: 9,
    title: 'Other Events Decoration',
    description: 'Other Events Decoration.',
    icon: FaStar,
  },
];

/** Footer service shortcuts — maps to anchor ids on the Services section */
export const footerServiceLinks = [
  'Shop Opening Ceremony',
  'Birthday Parties',
  'Haldi Ceremony',
  'Baby Shower',
  'Stage Decoration',
].map((title) => ({
  name: title,
  href: `#${serviceAnchorId(title)}`,
}));

export { serviceAnchorId };
