import { PolicyTemplate } from '@/components/PolicyTemplate';
const PrivacyPolicy = () => (
  <PolicyTemplate title="Privacy Policy" lastUpdated="April 2026">
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">Information We Collect</h2>
    <p>We collect information you provide directly, such as your name, email address, shipping address, and payment details when you make a purchase or subscribe to our newsletter.</p>
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">How We Use Your Information</h2>
    <p>Your information is used to process orders, communicate with you, improve our products and services, and send marketing communications (with your consent).</p>
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">Data Protection</h2>
    <p>We implement appropriate security measures to protect your personal information. We do not sell or share your data with third parties except as necessary to fulfill orders.</p>
  </PolicyTemplate>
);
export default PrivacyPolicy;
