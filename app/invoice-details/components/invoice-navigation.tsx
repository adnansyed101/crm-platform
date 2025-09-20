import { Button } from "@/components/ui/button";
import { CloudDownload, Download, Edit, Printer, Settings } from "lucide-react";

export function InvoiceNavigation() {
  const navItems = [
    { label: "Dashboard", active: false },
    { label: "Inquires", active: false },
    { label: "Quotation", active: false },
    { label: "Sales Order", active: false },
    { label: "Invoices", active: true },
    { label: "Sales Return", active: false },
  ];

  return (
    <div className="bg-[#EFF6FF] border-b">
      <div className="px-10">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-semibold text-gray-900">Invoice</h1>
          </div>

          <div className="flex items-center space-x-2">
            <Button className="bg-success hover:bg-success/90 text-success-foreground rounded-none">
              Mark As Paid
            </Button>
            <Button variant="outline" className="rounded-none bg-white">
              Send Invoice
            </Button>
            <Button variant="outline" className="rounded-none bg-white">
              <CloudDownload className="w-4 h-4" />
              Download PDF
            </Button>
            <Button variant="outline" className="rounded-none bg-white">
              Customization
            </Button>
          </div>
        </div>

        <nav className="flex justify-between">
          <div className="flex space-x-8 ">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`py-3 px-1 border-b-2 font-medium text-sm ${
                  item.active
                    ? "border-primary text-primary"
                    : "border-transparent hover:text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" className="bg-white rounded-none">
              <Edit className="w-4 h-4 mr-2" />
              Edit Invoice
            </Button>
            <Button variant="outline" className="bg-white rounded-none">
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
