import { PolicyTemplate } from '@/components/PolicyTemplate';
const Terms = () => (
  <PolicyTemplate title="Terms of Service" lastUpdated="April 2026">
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">Agreement</h2>
    <p>By accessing and using the Bigue Allure website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site.</p>
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">Products & Pricing</h2>
    <p>All product descriptions and pricing are subject to change without notice. We reserve the right to modify or discontinue any product at any time.</p>
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">Intellectual Property</h2>
    <p>All content on this website — including text, images, logos, and design — is the property of Bigue Allure and is protected by applicable intellectual property laws.</p>
  </PolicyTemplate>
);
export default Terms;
