import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export function InvoiceDetails() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Invoice INV-2025-0234</h2>
          <span className="text-sm text-muted-foreground">Customer Ref No</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-start space-x-4">
            <Avatar className="w-12 h-12 bg-primary">
              <AvatarFallback className="text-primary-foreground font-semibold">M</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">Jack Smith</h3>
              <p className="text-muted-foreground">Acme Corporation</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Avatar className="w-12 h-12 bg-gray-600">
              <AvatarFallback className="text-white font-semibold">N</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Assigned to</p>
              <h3 className="font-semibold">Emily Wilson</h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Invoice Date</p>
            <p className="font-semibold">March 15, 2024</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Due Date</p>
            <p className="font-semibold">March 15, 2024</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Payment Status:</p>
            <div className="space-y-2">
              <Progress value={45} className="h-2" />
              <p className="text-sm text-muted-foreground">45%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Billing Address:</h4>
            <p className="text-sm text-muted-foreground">
              123 Business Ave, Suite 200, New York, NY 10001, United States
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Shipping Address:</h4>
            <p className="text-sm text-muted-foreground">
              123 Business Ave, Suite 200, New York, NY 10001, United States
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
