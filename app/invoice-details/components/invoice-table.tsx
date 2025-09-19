import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Plus } from "lucide-react"

const invoiceItems = [
  {
    sNo: 1,
    customerPartNo: "123564787989",
    item: "Electric",
    brand: "LG",
    origin: "USA",
    qty: 60,
    unitPrice: 2500,
    amount: 3000,
    tax: "5%",
    taxAmount: 2500,
    weight: "1200 KG",
  },
  {
    sNo: 2,
    customerPartNo: "123563178989",
    item: "Magnetic",
    brand: "Samsung",
    origin: "Turkey",
    qty: 150,
    unitPrice: 3500,
    amount: 5000,
    tax: "10%",
    taxAmount: 9000,
    weight: "3000 KG",
  },
  {
    sNo: 3,
    customerPartNo: "123564787989",
    item: "Electric",
    brand: "LG",
    origin: "USA",
    qty: 60,
    unitPrice: 2500,
    amount: 2500,
    tax: "5%",
    taxAmount: 2500,
    weight: "1200 KG",
  },
  {
    sNo: 4,
    customerPartNo: "123564787989",
    item: "Electric",
    brand: "LG",
    origin: "USA",
    qty: 60,
    unitPrice: 2500,
    amount: 2500,
    tax: "5%",
    taxAmount: 2500,
    weight: "1200 KG",
  },
  {
    sNo: 5,
    customerPartNo: "123564787989",
    item: "Electric",
    brand: "LG",
    origin: "USA",
    qty: 60,
    unitPrice: 2500,
    amount: 2500,
    tax: "5%",
    taxAmount: 2500,
    weight: "1200 KG",
  },
  {
    sNo: 6,
    customerPartNo: "123564787989",
    item: "Electric",
    brand: "LG",
    origin: "USA",
    qty: 60,
    unitPrice: 2500,
    amount: 2500,
    tax: "5%",
    taxAmount: 2500,
    weight: "1200 KG",
  },
  {
    sNo: 7,
    customerPartNo: "123564787989",
    item: "Electric",
    brand: "LG",
    origin: "USA",
    qty: 60,
    unitPrice: 2500,
    amount: 2500,
    tax: "5%",
    taxAmount: 2500,
    weight: "1200 KG",
  },
]

export function InvoiceTable() {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="border-b p-4">
          <div className="flex space-x-2 mb-4">
            <Button variant="default" size="sm">
              Invoice Item
            </Button>
            <Button variant="ghost" size="sm">
              Internal Notes
            </Button>
            <Button variant="ghost" size="sm">
              Attachments
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Product Search" className="pl-10" />
            </div>
            <Badge variant="secondary" className="bg-primary text-primary-foreground">
              USD
            </Badge>
            <Button variant="outline" size="sm">
              Total Line 2
            </Button>
            <Button variant="outline" size="sm">
              Total QTY 12
            </Button>
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Item
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="text-left p-3 font-medium">S.No</th>
                <th className="text-left p-3 font-medium">Customer Part no</th>
                <th className="text-left p-3 font-medium">Item</th>
                <th className="text-left p-3 font-medium">Brand</th>
                <th className="text-left p-3 font-medium">Origin</th>
                <th className="text-left p-3 font-medium">QTY</th>
                <th className="text-left p-3 font-medium">Unit Price</th>
                <th className="text-left p-3 font-medium">Amount</th>
                <th className="text-left p-3 font-medium">Tax</th>
                <th className="text-left p-3 font-medium">Tax Amount</th>
                <th className="text-left p-3 font-medium">Weight</th>
              </tr>
            </thead>
            <tbody>
              {invoiceItems.map((item, index) => (
                <tr key={item.sNo} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-3">
                    <input type="checkbox" className="mr-2" />
                    {item.sNo}
                  </td>
                  <td className="p-3 text-sm">{item.customerPartNo}</td>
                  <td className="p-3">
                    <span className="text-primary font-medium">{item.item}</span>
                  </td>
                  <td className="p-3">{item.brand}</td>
                  <td className="p-3">{item.origin}</td>
                  <td className="p-3 text-primary font-medium">{item.qty}</td>
                  <td className="p-3">{item.unitPrice}</td>
                  <td className="p-3 font-medium">{item.amount}</td>
                  <td className="p-3">{item.tax}</td>
                  <td className="p-3">{item.taxAmount}</td>
                  <td className="p-3 text-sm">{item.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
