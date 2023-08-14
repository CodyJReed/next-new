"use client";

import { deleteTicket } from "@/app/actions";
import { useTransition } from "react";

export default function DeleteButton({id}) {
  const [isPending, startTransition] = useTransition()

  return (
    <button className="btn-primary" onClick={() => startTransition(() => deleteTicket(id))} disabled={isPending}>
      {isPending ? "Deleteing..." : "Delete Ticket"}
    </button>
  );
}
