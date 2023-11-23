import EventItem from "./Event-item"
import classes from "./Event-list.module.css"

const EventList = (props) =>
{
    const {items} = props
    return(
        <div>
            <ul className={classes.list}>
                {
                    items.map(item => <EventItem key={item.id} item = {item}></EventItem>)
                }
            </ul>
        </div>
    )
}

export default EventList