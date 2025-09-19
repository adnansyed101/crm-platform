import { Search, HelpCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function InvoiceHeader() {
  return (
    <header className="bg-primary text-primary-foreground px-5 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-primary font-bold text-sm">S</span>
            </div>
            <span className="font-semibold text-lg">SpareQ</span>
          </div>
          <span className="text-sm opacity-90">Koya Bearing LLC</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Input search text"
              className="pl-10 w-64 bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
          </div>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
            <HelpCircle className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-white/20 text-white text-xs">NR</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium">Nazmul Rabbe</div>
              <div className="text-xs opacity-75">CEO</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
