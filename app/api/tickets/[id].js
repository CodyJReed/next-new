import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function GET(_, {params}) {
    const {id} = params

    const res = await fetch(`http://localhost:4000/tickets/${id}`)

    const tickets = await res.json()

    if(!res.ok) NextResponse.json({error: "Not Found"}, {
        status: 404
    })

    return NextResponse.json(tickets, {
        status: 200
    })
}