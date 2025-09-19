import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function PaymentDetails() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Payment Method</span>
          <span className="font-medium">Bank Transfer</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Payment Reference</span>
          <span className="font-medium">TRX-78923456</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Paid Amount</span>
          <span className="font-medium text-success">$5,000.00</span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Outstanding Balance</span>
          <span className="font-medium text-destructive">$6,080.00</span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Payment Progress</span>
            <span className="text-sm">45%</span>
          </div>
          <Progress value={45} className="h-2" />
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Partial Payments</span>
            <span className="text-sm text-muted-foreground">March 20, 2025</span>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-sm">Bank Transfer</span>
            <span className="font-medium text-success">$5,000.00</span>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-primary">€5,090.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
