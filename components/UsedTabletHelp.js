import Link from 'next/link'
import TrackedLink from '../components/TrackedLink'

const component = () => {

    
    return <div className="section">
        <div className="container ">
        <div className="columns is-centered">
            <div className="column is-two-thirds">

            <br />

            <div className="tabs">
                <ul></ul>
            </div>

            {/* <br /> */}



            <p className="title is-size-4">Too expensive?</p>

            <div className="content">
                <p className="">
                    If the tablet below is outside your budget, drop us an email at <TrackedLink href="mailto:help@TabletConnect.org">help@TabletConnect.org</TrackedLink>.
                </p>

                <p>
                    We can't help with the monthly cost of the cellular service, but we might be able to point you to a used tablet on eBay that you can buy at a discount.
                </p>

                <p className="">
                    In your email, make sure to mention which country you're in, and which cellular carrier you use.
                </p>
            </div>

            {/* <br /> */}

            <div className="tabs">
                <ul></ul>
            </div>
                
                </div>
            </div>

        </div>
    </div>
}

export default component