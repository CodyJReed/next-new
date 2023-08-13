import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({children}) {
  return (
    <>
      <nav>
        <Link href="/">
          <Image src="/next.svg" width={75} height={75} alt="logo" />
        </Link>
        <Link href="/login">Log In</Link>
        <Link href="/signup">Sign Up</Link>
      </nav>
      {children}
    </>
  );
}
