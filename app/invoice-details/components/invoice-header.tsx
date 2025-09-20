import { Input } from "@/components/ui/input";
import Image from "next/image";
import Logo from "@/app/favicon.ico";
import NotificationIcon from "@/app/assets/icons/notification-icon.svg";
import UserIcon from "@/app/assets/icons/user-icon.png";
import SearchIcon from "@/app/assets/icons/search-icon.png";

export function InvoiceHeader() {
  return (
    <header className="bg-primary text-primary-foreground px-5 py-2">
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
            <Image src={Logo} width={24} height={24} alt="Company Logo" />
          </div>
          <span className="font-semibold text-2xl">
            Spare<span className="text-[#f26648]">Q</span>
          </span>
        </div>

        <div>
          <span>Koya Bearing LLC</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-[1px]">
            <Input
              placeholder="Input search text"
              className="bg-white text-black rounded-none border-none"
            />
            <div className="flex items-center justify-center min-w-6 bg-white">
              <Image
                src={SearchIcon}
                width={16}
                height={16}
                alt="Notification Icon"
              />
            </div>
          </div>
          <div className="min-w-6">
            <Image
              src={NotificationIcon}
              width={28}
              height={28}
              alt="Notification Icon"
            />
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <Image src={UserIcon} width={28} height={28} alt="User Icon" />
            </div>
            <div className="text-sm">
              <div className="font-medium">Nazmul Rabbe</div>
              <div className="text-xs opacity-75">CEO</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
