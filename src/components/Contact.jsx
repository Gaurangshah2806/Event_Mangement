import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGoogle,
  FaCheckCircle,
} from 'react-icons/fa';
import { PHONE_DISPLAY, EMAIL_ADDRESS, getWhatsAppUrl, handleWhatsAppClick, formatContactInquiryMessage, openWhatsApp, OFFICE_ADDRESS, GOOGLE_MAPS_EMBED_URL, SOCIAL_LINKS, BUSINESS_HOURS } from '../config/contact';
import SocialLinks from './SocialLinks';
import { servicesData } from '../data/services';

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID?.trim();

async function sendFormBackup(data) {
  if (!FORMSPREE_ID) return;
  try {
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        eventDate: data.eventDate,
        eventType: data.eventType,
        message: data.message,
        _subject: `New enquiry from ${data.name} — Shah Events`,
      }),
    });
  } catch {
    /* WhatsApp is primary; email backup is optional */
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: servicesData[0]?.title || 'Wedding Planning',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = formatContactInquiryMessage(formData);
    await sendFormBackup(formData);
    openWhatsApp(message, { includeImage: false });

    setIsSubmitting(false);
    setIsSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: servicesData[0]?.title || 'Wedding Planning',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-stone-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-green-950 dark:text-stone-100 tracking-tight">
            Let's Plan Your Next Event
          </h2>
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mt-5" />
          <p className="mt-6 text-stone-600 dark:text-stone-400 font-sans max-w-xl mx-auto text-sm sm:text-base">
            Reach out via phone, email, or social media. Or fill out our planning form to request a detailed quote.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Direct Info & Google Map */}
          <div className="space-y-10">
            <h3 className="font-serif text-3xl font-bold text-brand-green-950 dark:text-gold-200">
              Contact Information
            </h3>
            
            {/* Cards List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Address */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/50 dark:border-zinc-800 flex items-start space-x-4 shadow-sm">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex-shrink-0">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 dark:text-white mb-2">Our Office</h4>
                  <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-sans">
                    {OFFICE_ADDRESS.lines.map((line) => (
                      <span key={line} className="block">{line}</span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Phone / Call */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/50 dark:border-zinc-800 flex items-start space-x-4 shadow-sm">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex-shrink-0">
                  <FaPhoneAlt className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 dark:text-white mb-2">Call Us</h4>
                  <a
                    href={`tel:${PHONE_DISPLAY.replace(/\s+/g, '')}`}
                    className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors font-sans"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-[10px] text-stone-400 mt-1 font-sans">{BUSINESS_HOURS}</p>
                </div>
              </div>

              {/* WhatsApp Enquiry */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/50 dark:border-zinc-800 flex items-start space-x-4 shadow-sm">
                <div className="p-3 rounded-xl bg-[#25D366]/15 text-[#25D366] flex-shrink-0">
                  <FaWhatsapp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-900 dark:text-white mb-2">WhatsApp</h4>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsAppClick}
                    className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors font-sans font-medium cursor-pointer"
                  >
                    Chat With Us
                  </a>
                  <p className="text-[10px] text-stone-400 mt-1 font-sans">Instant responses</p>
                </div>
              </div>

              {/* Email Support */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-stone-200/50 dark:border-zinc-800 flex items-start space-x-4 shadow-sm">
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-600 dark:text-gold-400 flex-shrink-0">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-serif font-bold text-stone-900 dark:text-white mb-2">Email</h4>
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 hover:text-gold-600 dark:hover:text-gold-400 transition-colors font-sans break-all"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                  <p className="text-[10px] text-stone-400 mt-1 font-sans">Enquiries & feedback</p>
                </div>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="flex items-center space-x-6">
              <span className="font-sans font-bold text-xs tracking-wider uppercase text-stone-400">
                Follow us:
              </span>
              <SocialLinks size="md" />
            </div>

          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="relative">
            <div className="p-8 sm:p-10 rounded-3xl glass-card shadow-xl overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="mb-4">
                      <h3 className="font-serif text-3xl font-bold text-brand-green-950 dark:text-stone-100">
                        Inquiry Form
                      </h3>
                      <p className="text-stone-400 font-sans text-xs mt-1 leading-relaxed">
                        Fill in your event details — we will open WhatsApp with your enquiry ready to send.
                      </p>
                    </div>

                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="name" className="font-sans text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-stone-900 dark:text-white font-sans text-sm outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors"
                        placeholder="Aarav Patel"
                      />
                    </div>

                    {/* Grid Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col">
                        <label htmlFor="email" className="font-sans text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-stone-900 dark:text-white font-sans text-sm outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors"
                          placeholder="aarav@gmail.com"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col">
                        <label htmlFor="phone" className="font-sans text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-stone-900 dark:text-white font-sans text-sm outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors"
                          placeholder={PHONE_DISPLAY}
                        />
                      </div>
                    </div>

                    {/* Date and Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Event Date */}
                      <div className="flex flex-col">
                        <label htmlFor="eventDate" className="font-sans text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                          Event Date
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          id="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-stone-900 dark:text-white font-sans text-sm outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors"
                        />
                      </div>

                      {/* Service Type */}
                      <div className="flex flex-col">
                        <label htmlFor="eventType" className="font-sans text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                          Service Type
                        </label>
                        <select
                          name="eventType"
                          id="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-stone-900 dark:text-white font-sans text-sm outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors cursor-pointer"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                      <label htmlFor="message" className="font-sans text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                        Message / Custom Requests
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/40 text-stone-900 dark:text-white font-sans text-sm outline-none focus:border-gold-500 dark:focus:border-gold-500 transition-colors resize-none"
                        placeholder="Briefly describe your dream setup, theme preferences, and expected count of guests..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-brand-green-800 hover:bg-gold-600 hover:text-zinc-950 dark:bg-gold-500 dark:hover:bg-gold-400 dark:text-zinc-950 text-white font-bold tracking-wider font-sans text-sm sm:text-base transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg hover:shadow-gold-500/25 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white dark:border-zinc-950 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <FaWhatsapp className="h-4 w-4" />
                          <span>Send via WhatsApp</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    className="flex flex-col items-center justify-center text-center py-16"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                      className="text-gold-500 dark:text-gold-400 mb-6"
                    >
                      <FaCheckCircle className="h-20 w-20" />
                    </motion.div>
                    
                    <h3 className="font-serif text-3xl font-bold text-brand-green-950 dark:text-stone-100">
                      WhatsApp Opened!
                    </h3>
                    <p className="mt-4 text-xs sm:text-sm text-stone-500 dark:text-stone-400 max-w-md font-sans leading-relaxed">
                      Your enquiry details have been prepared in WhatsApp. Tap <strong>Send</strong> in the chat to deliver your request to Shah Events Vadodara.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-6 py-2.5 rounded-full border border-gold-500 text-gold-600 hover:bg-gold-500 hover:text-white dark:text-gold-400 dark:hover:bg-gold-500 dark:hover:text-zinc-950 text-xs sm:text-sm font-semibold tracking-wide font-sans transition-all duration-300 cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Full-width map — below contact form & info */}
        <div id="location" className="mt-20 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-500 uppercase block mb-3">
              Visit Us
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-green-950 dark:text-stone-100">
              Find Our Office
            </h3>
            <p className="mt-3 text-sm text-stone-500 dark:text-stone-400 font-sans">
              {OFFICE_ADDRESS.full}
            </p>
          </div>
          <div className="w-full h-[min(420px,60vh)] min-h-[280px] rounded-2xl overflow-hidden shadow-lg border border-stone-200/50 dark:border-zinc-800/80">
            <iframe
              title="Shah Events Vadodara Office Location Map"
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-center mt-5">
            <a
              href={SOCIAL_LINKS.google}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 text-sm font-sans font-semibold text-[#4285F4] hover:shadow-md transition-shadow"
            >
              <FaGoogle className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
