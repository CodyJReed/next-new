"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({id}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE",
    });

    const json = await res.json();

    if (json.error) {
      console.log(json.error);
      setIsLoading(false);
    } else if (!json.error) {
      router.refresh();
      router.push("/tickets");
    }
  };
  return (
    <button className="btn-primary" onClick={handleClick} disabled={isLoading}>
      {isLoading ? "Deleteing..." : "Delete Ticket"}
    </button>
  );
}
