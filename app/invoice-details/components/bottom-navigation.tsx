import { Button } from "@/components/ui/button"
import {
  Home,
  Clock,
  Star,
  Users,
  DollarSign,
  Package,
  CreditCard,
  Building,
  Warehouse,
  FileText,
  Settings,
} from "lucide-react"

const navItems = [
  { icon: Home, label: "Dashboard", active: false },
  { icon: Users, label: "Leads", active: false },
  { icon: Users, label: "Customers", active: false },
  { icon: DollarSign, label: "Sales", active: false },
  { icon: Package, label: "Inventory", active: false },
  { icon: CreditCard, label: "Purchase", active: false },
  { icon: Building, label: "Accounts", active: false },
  { icon: Warehouse, label: "Warehouse", active: false },
  { icon: FileText, label: "Reports", active: false },
  { icon: Settings, label: "Setup", active: false },
]

export function BottomNavigation() {
  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Home className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Clock className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Star className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className={`flex flex-col items-center space-y-1 px-2 py-1 rounded text-xs ${
                    item.active ? "bg-orange-500 text-white" : "text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>

          <div className="w-16"></div>
        </div>
      </div>
    </nav>
  )
}
