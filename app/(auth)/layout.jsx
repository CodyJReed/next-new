import Image from "next/image";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({children}) {
  const supabase = createServerComponentClient({cookies});
  const {data} = await supabase.auth.getSession()

  if(data.session) {
    redirect('/')
  }

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
