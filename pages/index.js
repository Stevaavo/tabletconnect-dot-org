import React from 'react'
import '../styles/styles.scss'
import Link from 'next/link'
import Header from '../components/Header'
// import Head from '../components/head'
// import Nav from '../components/nav'
// import user from '../utils/user'
import Footer from '../components/Footer'
import { initGA, logPageView } from '../utils/analytics'


// import RegisterOrLoginBox from '../components/tabs/RegisterOrLoginBox'


export default class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  static getInitialProps(contextObject) {
      return {
          query: contextObject.query
      }
  }


  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }


  render() {

    console.log("State as of render: ", this.state)
    return <div>

      <Header />

      {/* Welcome!  Click <a href="tool">here</a> for the tool. */}

      <section className="hero is-fullheight-with-navbar animated fadeIn">
        <div className="hero-body">
          <div className="container">
            <div className = "columns is-vcentered">


              <div className="column has-text-centered is-hidden-tablet">

                  <p className="">
                    <video autoPlay muted controls loop id="myVideo-mobile">
                      <source src="/static/frontpageClipMed2.mp4" type="video/mp4" />
                    </video>
                  </p>

              </div>




              <div className="column is-half">


                {/* <p className="title is-size-5-mobile">
                  TabletConnect.org is a volunteer-run online guide that will help you set up an iPad or tablet for a senior that has become isolated due to COVID.
                </p> */}

                <br className="is-hidden-mobile"/>

                {/* <p className="subtitle is-size-6-mobile">This website will walk you through the process of:</p> */}

                <div className="content is-size-5">

                  {/* <h3>Hello!</h3> */}

                  <h3>
                    This is a volunteer-run guide that will help you set up a tablet for an elder isolated by COVID.
                  </h3>

                  <p>
                    No need to teach the senior how to use any technology. 
                    This guide will show you how to configure the tablet to <span className="highlight">automatically pick up</span> when you 
                    initiate a video-call over Skype or Facetime.
                  </p>

                  <p>
                    <span className="highlight">No WiFi required</span>. This guide will help you buy a tablet from your wireless carrier that 
                    connects to the internet over the cellular network.
                  </p>

                  <p>
                    When you've finished preparing the tablet, you can <span className="highlight">mail it</span> to the elder, 
                    and <span className="highlight">all they have to do is turn it on and plug in the charger.</span>
                  </p>

                  <p>
                    If you have any trouble, you can reach out to 
                    our <Link  href="/support">
                      <a>
                        volunteer tech support
                      </a>
                    </Link> for help.
                  </p>

                </div>





                {/* <p className="title is-size-5-mobile">Give a senior citizen access to video-chat, <strong className="highlight">without asking them to learn any technology.</strong></p>

                <p className="subtitle is-size-6-mobile">
                  Hello!  This is a volunteer project intended to help families that have become isolated from older loved ones due to the coronavirus crisis.
                </p>

                <p className="subtitle is-size-6-mobile">
                  This guide will walk you through the process of finding a tablet and re-purposing it into an ultra-simple "<strong className="highlight">video phone</strong>"
                  that you can mail to an elder.
                  I originally set up a tablet like this for my 96-year-old grandmother, who has been cut off from visitors by the crisis.
                </p>

                <p className="subtitle is-size-6-mobile">
                  The tablet will <strong className="highlight">automatically pick up Skype video calls</strong> from 
                  you <strong className="highlight">and other family</strong>, so your friend/relative doesn't 
                  need to learn how to use it. 
                  They just need to plug in the charger, and keep it somewhere they can see or hear you when you call.
                </p>
                <p className="subtitle is-size-6-mobile">The tablet will connect to the internet through the cellular network, so <strong className="highlight">no wifi is required</strong>.</p>

                <p className="subtitle is-size-6-mobile">
                  If you have any trouble setting it up, feel free to reach out to 
                  our <Link  href="/support">
                    <a>
                      volunteer tech support
                    </a>
                  </Link> for help.
                </p> */}




                

                <br />

                <Link  href="/instructions">
                  <button className="button is-fullwidth is-success is-large">
                    <span className="icon">
                        <i className="fas fa-book-open"></i>
                    </span>
                    <span>
                      Read the Instructions
                    </span>
                  </button>
                </Link>

                <br />

                <div className="content has-text-centered">
                  <p>...or, <Link  href="/support">
                      <a>
                        get help from a volunteer
                      </a>
                    </Link>.</p>
                </div>

                {/* <br />
                <br />
                
                <Link  href="/support">
                  <button className="button is-fullwidth is-link">
                    <span className="icon">
                        <i className="fas fa-hands-helping"></i>
                    </span>
                    <span>
                      Get Help from a Volunteer
                    </span>
                  </button>
                </Link>

                <br />

                <Link  href="/volunteer">
                  <button className="button is-fullwidth is-info">
                    <span>
                      😇 Volunteer to Give Tech Support to Others
                    </span>
                  </button>
                </Link> */}

              
              </div>


              {/* <div className="column">

              </div> */}



              <div className="column has-text-centered is-hidden-mobile">

                <p>
                  <video autoPlay muted loop id="myVideo-desktop">
                    <source src="/static/frontpageClipMed2.mp4" type="video/mp4" />
                  </video>
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  }


}

// const Home = () => (
//   <div>
//     Welcome!  Click <a href="tool">here</a> for the tool.
//   </div>
// )

// export default Home
