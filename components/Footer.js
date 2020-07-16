import TrackedLink from '../components/TrackedLink'
import Link from 'next/link'


const component = () => {

    return <footer className="footer">
        <div className="content has-text-centered">
            <p>
                <strong className="has-text-grey-light">TabletConnect.org</strong> - built by Steve Trambert
            </p>

            <p>
                Special thanks to Vercel for their charitable sponsorship.
            </p>

            

            <TrackedLink href="https://www.vercel.com/?utm_source=tabletconnect-dot-org">
                <img src="/static/powered-by-vercel.svg"  />
            </TrackedLink>

            <br />

            <br />


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

            {/* <p className="has-text-grey-light">Dedicated to Maxima Trambert: immigrant, scientist, chemistry teacher, snowbird, loving mother, and one inspiring BAMF of a grandma. 😎</p>
            <p className="has-text-grey-light">May her memory be a blessing.</p> */}
            {/* <p className="has-text-grey-light">Special thanks to Vercel for their sponsorship</p> */}
            


        </div>
    </footer>
}

export default component