import { PolicyTemplate } from '@/components/PolicyTemplate';
const ShippingPolicy = () => (
  <PolicyTemplate title="Shipping Policy" lastUpdated="April 2026">
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">Processing Time</h2>
    <p>Orders are processed within 1–3 business days. You will receive a confirmation email with tracking information once your order has shipped.</p>
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">Domestic Shipping</h2>
    <p>Standard shipping: 5–7 business days. Express shipping: 2–3 business days. Free standard shipping on orders over $50.</p>
    <h2 className="font-heading text-xl text-foreground mt-8 mb-3">International Shipping</h2>
    <p>We ship to select international destinations. Delivery times vary by location (typically 7–14 business days). Import duties and taxes may apply and are the responsibility of the customer.</p>
  </PolicyTemplate>
);
export default ShippingPolicy;
