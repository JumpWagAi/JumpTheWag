import React from 'react'
import { Link } from 'react-router-dom'

function RefundPolicy() {
  return (
    <div className="min-h-screen bg-void text-text-default px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-accent hover:opacity-70 text-sm mb-8 inline-block">&larr; Back to Home</Link>

        <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
        <p className="text-neutral-light/50 italic mb-10">Last updated March 04, 2026</p>

        <div className="space-y-8 text-neutral-light/80 leading-relaxed text-sm sm:text-base">
          <p>
            This Refund Policy for Jumpwag Limited (<strong>"we," "us," or "our"</strong>) describes our refund and cancellation terms for Jumpwag Pro subscriptions.
          </p>
          <p>
            <strong>Questions or concerns?</strong> If you have any questions about this policy, please contact us at <a href="mailto:jumpwagai@gmail.com" className="text-accent hover:underline">jumpwagai@gmail.com</a>.
          </p>

          <h2 className="text-2xl font-bold text-text-default pt-4">Summary of Key Points</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>No refunds:</strong> Payments for Pro subscriptions are non-refundable</li>
            <li><strong>Cancel anytime:</strong> You can cancel your subscription at any time and keep access until the end of your billing period</li>
            <li><strong>Billing errors:</strong> We'll review and may refund charges made in error</li>
            <li><strong>EU/UK users:</strong> 14-day cooling-off period applies where required by law</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-default pt-4">Table of Contents</h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>No Refunds</li>
            <li>Cancellations</li>
            <li>Billing Errors and Disputes</li>
            <li>EU/UK Consumer Rights</li>
            <li>How Can You Contact Us About This Policy?</li>
          </ol>

          <h2 className="text-2xl font-bold text-text-default pt-4">1. No Refunds</h2>
          <p className="italic text-neutral-light/60">In Short: All sales are final. Payments for Jumpwag Pro subscriptions are non-refundable.</p>
          <p>All purchases of Jumpwag Pro subscriptions (monthly or annual) are final and non-refundable. By purchasing a subscription, you acknowledge and agree that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>All payments are non-refundable</li>
            <li>We do not provide refunds or credits for partial subscription periods</li>
            <li>We do not provide refunds if you do not use the Services during your subscription period</li>
            <li>Canceling your subscription stops future charges but does not provide a refund for the current billing period</li>
          </ul>
          <p>We encourage you to try our Free plan before purchasing a Pro subscription. The Free plan allows you to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Browse all curated trends</li>
            <li>Save favorite trends</li>
            <li>Generate 5 AI ideas per month</li>
            <li>Submit 3 trend links per month for analysis</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-default pt-4">2. Cancellations</h2>
          <p className="italic text-neutral-light/60">In Short: You can cancel your subscription at any time. You'll keep access until the end of your current billing period.</p>
          <p>You can cancel your Jumpwag Pro subscription at any time by:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Logging into your account at jumpwag.com</li>
            <li>Going to Settings</li>
            <li>Clicking "Manage Subscription"</li>
            <li>Following the cancellation steps</li>
          </ul>
          <p>When you cancel:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You keep full access to Pro features until the end of your current billing period (month or year)</li>
            <li>You will not be charged again after your current period ends</li>
            <li>Your account automatically converts to the Free plan when your billing period ends</li>
            <li>You'll lose access to Pro-only features (saved ideas, unlimited AI generations) when your billing period ends</li>
          </ul>
          <p>Canceling does not result in a refund for the current billing period.</p>

          <h2 className="text-2xl font-bold text-text-default pt-4">3. Billing Errors and Disputes</h2>
          <p className="italic text-neutral-light/60">In Short: If you were charged in error, contact us immediately and we'll review your case.</p>
          <p>If you believe you were charged incorrectly, please contact us at <a href="mailto:jumpwagai@gmail.com" className="text-accent hover:underline">jumpwagai@gmail.com</a> within 7 days of the charge with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your account email address</li>
            <li>Description of the billing issue</li>
            <li>Transaction details (date, amount)</li>
          </ul>
          <p>We will review and may issue a refund in the following cases:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You were charged due to a technical error on our part</li>
            <li>You were charged after successfully canceling your subscription (if cancellation was processed before the billing date)</li>
            <li>You were charged multiple times for the same billing period due to a system error</li>
            <li>You were charged for a subscription you did not authorize</li>
          </ul>
          <p>Refunds for billing errors are issued at our sole discretion after review.</p>

          <h2 className="text-2xl font-bold text-text-default pt-4">4. EU/UK Consumer Rights</h2>
          <p className="italic text-neutral-light/60">In Short: If you're in the EU or UK, you have a 14-day right to cancel and receive a refund.</p>
          <p>If you live in the European Union, United Kingdom, or other jurisdictions with mandatory cooling-off periods, you have the right to cancel your Jumpwag Pro subscription within 14 days of purchase and receive a full refund.</p>
          <p>To exercise this right:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact us at <a href="mailto:jumpwagai@gmail.com" className="text-accent hover:underline">jumpwagai@gmail.com</a> within 14 days of your purchase</li>
            <li>Include your account email address</li>
            <li>We'll process your refund within 5–7 business days</li>
          </ul>
          <p>This right applies only to your initial purchase, not to subscription renewals.</p>

          <h2 className="text-2xl font-bold text-text-default pt-4">5. How Can You Contact Us About This Policy?</h2>
          <p>If you have questions or comments about this policy, you may email us at <a href="mailto:jumpwagai@gmail.com" className="text-accent hover:underline">jumpwagai@gmail.com</a>.</p>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy
