import {useQuery, gql } from "@apollo/client"
import { FETCH_EVENTS } from "../graphql/Queries"
import { useEffect, useState } from "react"
import { Edge, EventResponse } from "../types"
import './EventList.css'

function EventList() {
    const {error, loading, data} = useQuery(FETCH_EVENTS)
    const [events, setEvents] = useState<EventResponse[]>([])

    useEffect(() => {
        if(data) {
            const events = data.events.edges.map((edge: Edge) => {
                return edge.node
            })
            setEvents(events)
        }
    }, [data])

    return (
        <ul className="event-list">
            {
                events.map((event) => {
                    return (
                        <li key={event.id}>
                            <h2>{event.title}</h2>
                            <div>{event.description}</div>
                            <div>{new Date(event.date).toLocaleDateString("en-US")}</div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default EventList