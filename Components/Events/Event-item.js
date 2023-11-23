import Link from "next/link"
import classes from "./Event-item.module.css"
import Button from "../UI/Button";
import DateIcon from "../Icons/date-icon";
import AddressIcon from "../Icons/address-icon";
import ArrowRightIcon from "../Icons/arrow-right-icon";
const EventItem =(props) =>
{
    const {item} = props;

    const {title , image , date ,location , id} = item;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US',{
        day : 'numeric',
        month :'long',
        year : 'numeric'
    })


    const formattedAddress = location.replace(',' , '\n')
  

    const exploreLink = `/Events/${id}`
    return(
        <li className={classes.item}>
            <img src={'/'+ image} alt=""/>
            <div className={classes.content}>
                <div className={classes.summury}>
                    <h1>{title}</h1>
                    <div className={classes.date}>
                        <DateIcon></DateIcon>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon></AddressIcon>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span> 
                        <span className={classes.icon}><ArrowRightIcon></ArrowRightIcon></span> 
                        </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem