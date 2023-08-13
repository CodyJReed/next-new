import { notFound } from "next/navigation"

export const dynamicParams = true

export async function generateMetadata({params}) {
  const {id} = params

  const res = await fetch(`http://localhost:4000/tickets/${id}`)
  const ticket = await res.json()

  return {
    title: `next-new | ${ticket.title}`
  }
}

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:4000/tickets`);

  const tickets = await res.json()

  return tickets.map(t => ({
    id: t.id
  }))
}

async function getTicket(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    });

    if(!res.ok) notFound()
  
    return res.json();
  }

async function TicktDetails({params}) {
    const {id} = params
    const ticket = await getTicket(id)

  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className='card'>
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
        </div>
    </main>
  )
}

export default TicktDetails