import React from 'react'
import '../styles/styles.scss'
import Link from 'next/link'
import Header from '../components/Header'
// import Head from '../components/head'
// import Nav from '../components/nav'
// import user from '../utils/user'

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


  render() {

    console.log("State as of render: ", this.state)
    return <div>

      <Header />

      {/* Welcome!  Click <a href="tool">here</a> for the tool. */}

      <section className="hero is-fullheight-with-navbar animated fadeIn">
        <div className="hero-body">
          <div className="container">
            <div className = "columns is-vcentered">
              <div className="column is-half">

                {/* <p className="title is-size-5-mobile">Video-chat a parent/grandparent, without asking them to learn any technology.</p> */}

                {/* <p className="title is-size-5-mobile">The tablet will pick up calls <strong className="highlight">automatically</strong>.  No need for your relative to tap anything.</p> */}
                
                {/* <p className="title is-size-5-mobile">Send your parent/grandparent a tablet that will pick up your video calls automatically.</p>
                <p className="title is-size-5-mobile">No need for them to tap anything, or learn any technology.</p> */}



                {/* <p className="subtitle is-size-6-mobile">Unable to visit a parent/grandparent due to COVID?</p>
                <br className="is-hidden-mobile"/>

                <p className="title is-size-5-mobile">Get them onto video chat, without asking them to learn any technology.</p> */}

                <p className="title is-size-5-mobile">Video-chat a parent/grandparent isolated by COVID, <strong className="highlight">without asking them to learn any technology.</strong></p>

                <p className="title is-size-5-mobile">No need for them to tap or touch anything.</p>

                {/* <p className="title is-size-5-mobile"><strong className="highlight">Video chat</strong> with parents/grandparents under COVID lockdown.</p> */}

                {/* <p className="title is-size-5-mobile">Get them onto video-chat, without asking them to learn any new technology.</p> */}

                {/* <p className="title is-size-5-mobile">Video-chat senior relatives, without asking them to learn anything new.</p> */}

                <br className="is-hidden-mobile"/>

                {/* <p className="subtitle is-size-6-mobile">Many of us are no longer able to visit older relatives due to the risk of COVID.</p> */}
                

                {/* <p className="subtitle is-size-6-mobile">Video chat has allowed many of us to maintain close ties with friends and family in spite of the coronavirus.  However,
                many senior citizens don't have the devices or technical knowledge to participate in video calls.</p> */}

                {/* <p className="subtitle is-size-6-mobile">Video chat has allowed many of us to maintain close ties with friends and family in spite of the coronavirus.  However,
                many senior citizens don't have a phone or computer, or the technical skill to use one for a video call.</p> */}

                <p className="subtitle is-size-6-mobile">This website will show you how to buy and set up a dedicated Skype tablet that you can mail to an older relative.</p>
                <p className="subtitle is-size-6-mobile">The tablet will <strong className="highlight">automatically pick up your video calls</strong>, so your relative doesn't 
                need to learn how to use it.  They just need to keep the tablet somewhere they can see/hear you when you call.</p>
                <p className="subtitle is-size-6-mobile">The tablet will connect to the internet through the cellular network, so <strong className="highlight">no wifi is required</strong>.</p>
                {/* <p className="subtitle is-size-6-mobile"></p> */}
                <p className="subtitle is-size-6-mobile">You can give the Skype username to other friends and relatives, so that they can video-call your parent/grandparent as well.</p>
                <p className="subtitle is-size-6-mobile">I originally set up a tablet like this for my grandmother, who has been cut off from visitors for several weeks now
                due to the crisis.  It has worked great for her, so I'm posting instructions here for others.</p>


                <Link  href="/instructions">
                  <button className="button is-fullwidth is-success">
                    <span className="icon">
                        <i className="fas fa-book-open"></i>
                    </span>
                    <span>
                      Read the Instructions
                    </span>
                  </button>
                </Link>

                <br />
                
                <button className="button is-fullwidth is-link">
                  <span className="icon">
                      <i className="fas fa-hands-helping"></i>
                  </span>
                  <span>
                    Get Help from a Volunteer
                  </span>
                </button>

                
                </div>


              {/* <div className="column">

              </div> */}



              <div className="column has-text-centered	">

                <p className="is-hidden-mobile">
                  <video autoPlay muted controls id="myVideo-desktop">
                    <source src="/static/frontpageClipMed2.mp4" type="video/mp4" />
                  </video>
                </p>

                <p className="is-hidden-tablet">
                  <video autoPlay muted controls loop id="myVideo-mobile">
                    <source src="/static/frontpageClipMed2.mp4" type="video/mp4" />
                  </video>
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  }


}

// const Home = () => (
//   <div>
//     Welcome!  Click <a href="tool">here</a> for the tool.
//   </div>
// )

// export default Home
