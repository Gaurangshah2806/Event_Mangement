/**
 * WhatsApp — edit your number below. Save & restart `npm run dev`.
 */

// ─── Your business number ───
const WHATSAPP_NUMBER_DEFAULT = '917990118086';
const PHONE_DISPLAY_DEFAULT = '+91 79901 18086';
// ───────────────────────────

export const DEFAULT_SHARE_IMAGE = '/whatsapp-share.jpg';

function normalizeWhatsAppNumber(value) {
  return String(value || '').replace(/[\s+\-()]/g, '');
}

const envWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER?.trim();

export const WHATSAPP_NUMBER = normalizeWhatsAppNumber(
  envWhatsApp || WHATSAPP_NUMBER_DEFAULT
);

export const PHONE_DISPLAY =
  import.meta.env.VITE_PHONE_DISPLAY?.trim() || PHONE_DISPLAY_DEFAULT;

export const EMAIL_ADDRESS =
  import.meta.env.VITE_EMAIL?.trim() || 'shahevents28@gmail.com';

export const BUSINESS_HOURS = 'Mon – Sat, 10 AM to 8 PM';

export const SITE_NAME = 'Shah Events Vadodara';

export const OFFICE_ADDRESS = {
  lines: [
    'B-303 Shivay Sky,',
    'near Shree Siddheswar Heritage,',
    'opp. L&T Knowledge City, Madhavpura,',
    'Vadodara, Gujarat 390019',
  ],
  full: 'B-303 Shivay Sky, near Shree Siddheswar Heritage, opp. L&T Knowledge City, Madhavpura, Vadodara, Gujarat 390019',
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/shah.events.vadodara',
  google: 'https://share.google/gwh7Us88wV1cYAIfW',
};

export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS.full)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const DEFAULT_WHATSAPP_MESSAGE =
  'Hello Shah Events, I would like to enquire about planning an event.';

function resolveImageUrl(imageUrl) {
  if (!imageUrl) return null;
  if (imageUrl.startsWith('http')) return imageUrl;
  const path = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
  if (typeof window !== 'undefined') {
    return `${window.location.origin}${path}`;
  }
  return path;
}

function appendImageLink(message, imageUrl) {
  const absoluteImage = resolveImageUrl(imageUrl);
  if (!absoluteImage) return message;
  return `${message}\n\nPhoto: ${absoluteImage}`;
}

export function getWhatsAppUrl(
  message = DEFAULT_WHATSAPP_MESSAGE,
  { includeImage = false, imageUrl = DEFAULT_SHARE_IMAGE } = {}
) {
  const fullMessage = includeImage ? appendImageLink(message, imageUrl) : message;
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(fullMessage)}`;
}

/** Format contact form data for a WhatsApp enquiry message */
export function formatContactInquiryMessage({
  name,
  email,
  phone,
  eventDate,
  eventType,
  message,
}) {
  const formattedDate = eventDate
    ? new Date(`${eventDate}T00:00:00`).toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Not specified';

  return [
    'Hello Shah Events,',
    'I would like to enquire about an event. Here are my details:',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Event Date: ${formattedDate}`,
    `Service Type: ${eventType}`,
    '',
    'Message / Custom Requests:',
    message,
  ].join('\n');
}

/** Open WhatsApp chat. Image link only when includeImage is true (e.g. Events cards). */
export function openWhatsApp(
  message = DEFAULT_WHATSAPP_MESSAGE,
  { includeImage = false, imageUrl = DEFAULT_SHARE_IMAGE } = {}
) {
  const fullMessage = includeImage ? appendImageLink(message, imageUrl) : message;

  window.open(
    `${WHATSAPP_LINK}?text=${encodeURIComponent(fullMessage)}`,
    '_blank',
    'noopener,noreferrer'
  );
}

/** Simple WhatsApp icons/links — text only, no photo link */
export function handleWhatsAppClick(
  e,
  message = DEFAULT_WHATSAPP_MESSAGE,
  options = {}
) {
  e?.preventDefault();
  openWhatsApp(message, { includeImage: false, ...options });
}

if (import.meta.env.DEV && WHATSAPP_NUMBER === '919900000000') {
  console.warn(
    '[Shah Events] WhatsApp still uses the demo number. Update src/config/contact.js'
  );
}
