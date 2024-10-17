"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui";

function UserSection() {
  return (
    <div className="p-4 flex items-center justify-between border-b-2 border-neutral-600/80">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-1 text-center text-xl font-bold">User Name</div>
    </div>
  );
}

export default UserSection;
