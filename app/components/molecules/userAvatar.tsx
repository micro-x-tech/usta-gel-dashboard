import { LogOut, Settings, User } from "lucide-react";
import { AvatarFallback, AvatarImage } from "../atoms/avatar";

import { Avatar } from "../atoms/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../atoms/dropdown-menu";

export default function UserAvatar() {
  // TODO: get from backend
  const user = {
    name: "John Doe",
    image: "https://picsum.photos/id/237/200/300",
  };
  const userNameInitials =
    user.name.split(" ")[0][0] + user.name.split(" ")[1][0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer hover:opacity-80 transition-opacity">
          <AvatarImage src={user.image} />
          <AvatarFallback>{userNameInitials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Hesabım</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User color="black" />
            Profil
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings color="black" />
            Ayarlar
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut color="black" />
          Çıkış
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
