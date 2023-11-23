import Link from "next/link"
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <Link className={classes.link} href={props.link}><p className={classes.btn}>{props.children}</p></Link>
    )

}

export default Button