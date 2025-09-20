import { InvoiceHeader } from "./components/invoice-header";
import { InvoiceNavigation } from "./components/invoice-navigation";
import { InvoiceDetails } from "./components/invoice-details";
import { InvoiceTable } from "./components/invoice-table";
import { PaymentDetails } from "./components/payment-details";
import { ActivityTimeline } from "./components/activity-timeline";
import { BottomNavigation } from "./components/bottom-navigation";

export default function InvoiceDetailsPage() {
  return (
    <div className="min-h-screen bg-background">
      <InvoiceHeader />
      <InvoiceNavigation />

      <div className="px-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <InvoiceDetails />
            <InvoiceTable />
          </div>

          <div className="space-y-6">
            <PaymentDetails />
            <ActivityTimeline />
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
