import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import DeleteButton from "./DeleteButton";

export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const supabase = createServerComponentClient({ cookies });

  const { data: ticket } = await supabase
    .from("tickets")
    .select()
    .eq("id", params.id)
    .single();

  return {
    title: `next-new | ${ticket?.title || 'Ticket not found'}`,
  };
}

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:4000/tickets`);

  const tickets = await res.json();

  return tickets.map((t) => ({
    id: t.id,
  }));
}

async function getTicket(id) {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase
    .from("tickets")
    .select()
    .eq("id", id)
    .single();

  

  if (!data) notFound();

  return data;
}

async function TicktDetails({ params }) {
  const { id } = params;
  const ticket = await getTicket(id);

  const supabase = createServerComponentClient({cookies})
  const {data} = await supabase.auth.getSession()

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        <div className="ml-auto">
          {data.session.user.email === ticket.user_email  && (
            <DeleteButton id={id}/>
          )}
        </div>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}

export default TicktDetails;
