import TrackedLink from '../components/TrackedLink'
import Link from 'next/link'


const component = () => {

    return <footer className="footer">
        <div className="content has-text-centered">
            <p>
                <strong className="has-text-grey-light">TabletConnect.org</strong> - built by Steve Trambert
            </p>


            {/* <Link  href="/support">
                  <button className="button is-link">
                    <span className="icon">
                        <i className="fas fa-hands-helping"></i>
                    </span>
                    <span>
                      Get Help from a Volunteer
                    </span>
                  </button>
            </Link> */}

            {/* <p className="has-text-grey-light">Dedicated to the memory of Maxima Trambert</p> */}

            {/* <p className="has-text-grey-light">Special thanks to Vercel for their sponsorship</p> */}

            <TrackedLink href="https://www.vercel.com/?utm_source=tabletconnect-dot-org">
                <img src="/static/powered-by-vercel.svg"  />
            </TrackedLink>
            


        </div>
    </footer>
}

export default component