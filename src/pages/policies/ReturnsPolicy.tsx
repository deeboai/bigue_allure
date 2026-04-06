import { PolicyTemplate } from '@/components/PolicyTemplate';
const ReturnsPolicy = () => (
  <PolicyTemplate title="Returns Policy" lastUpdated="April 2026">
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">Return Window</h2>
    <p>We accept returns within 30 days of delivery. Items must be unused, unopened, and in their original packaging.</p>
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">How to Return</h2>
    <p>Contact us at hello@bigueallure.com with your order number and reason for return. We will provide return shipping instructions.</p>
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">Refunds</h2>
    <p>Refunds are processed within 5–7 business days of receiving the returned item. Original shipping costs are non-refundable.</p>
  </PolicyTemplate>
);
export default ReturnsPolicy;
