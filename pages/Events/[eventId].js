import EventContent from "@/Components/event-detail/event-content"
import EventLogistics from "@/Components/event-detail/event-logistics"
import EventSummary from "@/Components/event-detail/event-summary"
import { getEventById } from "@/Data"
import { useRouter } from "next/router"
import { Fragment } from "react"

const Event = () => {

    const router = useRouter()
    const eventId = router.query.eventId
    const event = getEventById(eventId)

    if (!event) {
        return <p>No Event found!</p>
    }
    return (
        <Fragment>
            <EventSummary title={event.title}></EventSummary>
            <EventLogistics date={event.date} address={event.location} image = {event.image} imageAlt={event.title}></EventLogistics>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export default Event