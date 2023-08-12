import Link from "next/link";
import Image from "next/image";

import React from "react";

function Navbar() {
  return (
    <nav>
      <Link href="/">
        <Image src="/next.svg" width={75} height={75} alt="logo" />
      </Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

export default Navbar;
