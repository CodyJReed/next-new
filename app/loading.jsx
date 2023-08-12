import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <main className="text-center">
      <Image
        className="mx-auto mt-32 mb-12"
        src="/vercel.svg"
        width={150}
        height={150}
      />
      <h2 className="text-primary text-xl">Loading...</h2>
    </main>
  );
}
