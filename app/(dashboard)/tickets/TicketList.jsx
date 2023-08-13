import React from "react";
import Link from "next/link";

async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

async function TicketList() {
  await new Promise(resolve => setTimeout(resolve, 1750))

  const tickets = await getTickets();

  return (
    <>
      {tickets.map((t) => (
        <Link
          href={`/tickets/${t.id}`}
          key={t.id}
          className="block card my-5 hover:bg-slate-300 transition duration-150 hover:ease-in"
        >
          <h3>{t.title}</h3>
          <p>{t.body.slice(0, 200)}...</p>
          <div className={`pill ${t.priority}`}>{t.priority} priority</div>
        </Link>
      ))}
      {tickets.length === 0 && <p className="text-center">No open tickets!</p>}
    </>
  );
}

export default TicketList;
