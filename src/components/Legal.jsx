import { handleSectionClick } from '../utils/navigation';

export default function Legal() {
  return (
    <section id="legal" className="py-20 bg-stone-100 dark:bg-zinc-900/40 border-t border-stone-200 dark:border-zinc-800 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="privacy" className="scroll-mt-24 mb-16">
          <h2 className="font-serif text-3xl font-bold text-brand-green-950 dark:text-stone-100 mb-4">
            Privacy Policy
          </h2>
          <div className="prose prose-sm dark:prose-invert max-w-none text-stone-600 dark:text-stone-400 font-sans space-y-3 text-sm leading-relaxed">
            <p>
              Shah Events Vadodara (&quot;we&quot;, &quot;us&quot;) respects your privacy. Information you submit through our contact form or WhatsApp — including name, email, phone, event date, and message — is used only to respond to your enquiry and plan your event.
            </p>
            <p>
              We do not sell your personal data. We may store enquiry details for business records and follow-up. Third-party services (WhatsApp, Google Maps, Instagram) have their own privacy policies when you interact with them via links on this site.
            </p>
            <p>
              For data requests or deletion, contact us at the phone number or email listed on this website.
            </p>
          </div>
        </div>

        <div id="terms" className="scroll-mt-24">
          <h2 className="font-serif text-3xl font-bold text-brand-green-950 dark:text-stone-100 mb-4">
            Terms of Service
          </h2>
          <div className="prose prose-sm dark:prose-invert max-w-none text-stone-600 dark:text-stone-400 font-sans space-y-3 text-sm leading-relaxed">
            <p>
              By using this website and engaging Shah Events Vadodara for event planning or decoration services, you agree to the following:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Quotes and packages shown are indicative; final pricing is confirmed in a written quotation after consultation.</li>
              <li>Bookings require advance confirmation and agreed payment terms as per your contract.</li>
              <li>Design concepts, images, and content on this site are owned by Shah Events unless otherwise stated.</li>
              <li>Cancellation and rescheduling policies will be communicated at the time of booking.</li>
              <li>We are not liable for delays caused by venue restrictions, weather, or third-party vendors outside our control.</li>
            </ul>
            <p>
              These terms may be updated periodically. Continued use of our services constitutes acceptance of the current terms.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center">
          <a
            href="#contact"
            onClick={(e) => handleSectionClick(e, '#contact')}
            className="text-sm font-semibold text-gold-600 hover:text-gold-700 dark:text-gold-400"
          >
            Questions? Contact us →
          </a>
        </p>
      </div>
    </section>
  );
}
