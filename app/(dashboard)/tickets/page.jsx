import React from "react";
import TicketList from "./TicketList";
import Link from "next/link";

export const metadata = {
  title: "next-new | tickets",
};

export default async function Tickets() {
 
  return (
    <main>
      <nav>
        <div>
          <div className="flex justify-between items-end">
          <h2>Tickets</h2>
          <Link className="btn-primary py-2 px-3 rounded-sm" href="/tickets/create">New Ticket</Link>
          </div>
          <p><small>Currently open tickets</small></p>
          <TicketList/>
        </div>
      </nav>
    </main>
  );
}
