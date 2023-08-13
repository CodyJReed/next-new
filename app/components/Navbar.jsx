import Link from "next/link";
import Image from "next/image";

import React from "react";
import LogoutButton from "./LogoutButton";

function Navbar({user}) {
  return (
    <nav>
      <Link href="/">
        <Image src="/next.svg" width={75} height={75} alt="logo" />
      </Link>
      <Link href="/tickets" className="mr-auto">Tickets</Link>
      {user && (
        <span>Hello, {user.email}</span>
      )}
      <LogoutButton/>
    </nav>
  );
}

export default Navbar;
