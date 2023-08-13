import Link from "next/link";
import { cookies } from 'next/headers'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

async function getTickets() {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from('tickets')
    .select()

  if (error) {
    console.log(error.message)
  }

  return data
}

export default async function TicketList() {
  const tickets = await getTickets()

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