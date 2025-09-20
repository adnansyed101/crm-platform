import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export function InvoiceDetails() {
  return (
    <Card>
      <CardContent className="px-0">
        <div className="flex items-center justify-between mb-6 px-6">
          <h2 className="text-2xl font-bold">Invoice INV-2025-0234</h2>
          <span className="text-sm text-muted-foreground">Customer Ref No</span>
        </div>

        <div className="flex gap-20 mb-8 bg-[#EFF6FF] p-6">
          <div className="flex gap-4">
            <Avatar className="w-12 h-12 bg-primary">
              <AvatarFallback className="text-primary-foreground bg-primary font-semibold">
                M
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">Jack Smith</h3>
              <p className="text-muted-foreground">Acme Corporation</p>
            </div>
          </div>

          <div className="flex flex-1 gap-20 justify-around ">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Invoice Date
              </p>
              <p className="font-semibold">March 15, 2024</p>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">
                Due Date
              </p>
              <p className="font-semibold">March 15, 2024</p>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground mb-2">
                Payment Status:
              </p>
              <div className="flex gap-2 items-center">
                <Progress value={45} className="h-2" />
                <p className="text-sm text-muted-foreground">45%</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Avatar className="w-12 h-12 bg-primary">
              <AvatarFallback className="text-primary-foreground bg-primary font-semibold">
                N
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Assigned to</p>
              <h3 className="font-semibold">Emily Wilson</h3>
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-8 px-6">
          <div>
            <h4 className="text-2xl font-semibold mb-2">Billing Address:</h4>
            <p className="text-sm text-muted-foreground">
              123 Business Ave, Suite 200, New York, NY 10001, United States
            </p>
          </div>
          <div className="text-end">
            <h4 className="text-2xl font-semibold mb-2">Shipping Address:</h4>
            <p className="text-sm text-muted-foreground">
              123 Business Ave, Suite 200, New York, NY 10001, United States
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
