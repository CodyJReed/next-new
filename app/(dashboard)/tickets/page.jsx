import React from "react";
import TicketList from "./TicketList";

export const metadata = {
  title: "next-new | tickets",
};

export default async function Tickets() {
 
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets</small></p>
          <TicketList/>
        </div>
      </nav>
    </main>
  );
}
