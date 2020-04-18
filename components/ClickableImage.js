
import ReactGA from 'react-ga'
import TrackedLink from '../components/TrackedLink'


const component = (props) => {

    return <TrackedLink href={props.src}>
        <figure class="image">
            <img src={props.src} />
        </figure>
    </TrackedLink>

    // return <ReactGA.OutboundLink
    //     eventLabel={props.eventLabel || props.href}
    //     to={props.href}
    //     target={props.target || "_blank"}
    //     >
    //         {props.children}
    // </ReactGA.OutboundLink>

}

export default component