
import ReactGA from 'react-ga'


const component = (props) => {

    return <ReactGA.OutboundLink
        eventLabel={props.target || "linkClick"}
        to={props.href}
        target={props.target || "_blank"}
        >
            {props.children}
    </ReactGA.OutboundLink>

}

export default component