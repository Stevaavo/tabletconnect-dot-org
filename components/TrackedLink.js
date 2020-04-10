
import ReactGA from 'react-ga'


const component = (props) => {

    return <ReactGA.OutboundLink
        eventLabel={props.eventLabel || props.href}
        to={props.href}
        target={props.target || "_blank"}
        >
            {props.children}
    </ReactGA.OutboundLink>

}

export default component