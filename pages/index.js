import React from 'react'
import '../styles/styles.scss'
import Link from 'next/link'
import Header from '../components/Header'
// import Head from '../components/head'
// import Nav from '../components/nav'
// import user from '../utils/user'
import Footer from '../components/Footer'
import { initGA, logPageView } from '../utils/analytics'
import TrackedLink from '../components/TrackedLink'


// import RegisterOrLoginBox from '../components/tabs/RegisterOrLoginBox'


export default class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
  }

  // static getInitialProps(contextObject) {
  //     return {
  //         query: contextObject.query
  //     }
  // }


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

      <Header description="A volunteer-written online guide that will help you set up a tablet for an elder isolated by COVID."/>

      {/* Welcome!  Click <a href="tool">here</a> for the tool. */}

      <section className="hero">

        {/* <div className="hero-head">
          <Header description="A volunteer-written online guide that will help you set up a tablet for an elder isolated by COVID."/>
        </div> */}

        <div className="hero-body animated fadeIn">
          <div className="container">
            <div className = "columns is-vcentered is-centered">


              {/* <div className="column has-text-centered is-hidden-tablet">

                  <div className="content is-hidden-tablet has-text-left">
                    <h3>
                      This is a volunteer-run guide that will help you set up a tablet for an elder isolated by COVID.
                    </h3>

                    <br />
                    
                  </div>

                  <p className="">
                    <video autoPlay muted controls loop id="myVideo-mobile">
                      <source src="/static/frontpageClipMed2.mp4" type="video/mp4" />
                    </video>
                  </p>

              </div> */}




              <div className="column is-half">


                {/* <p className="title is-size-5-mobile">
                  TabletConnect.org is a volunteer-run online guide that will help you set up an iPad or tablet for a senior that has become isolated due to COVID.
                </p> */}

                <br className="is-hidden-mobile"/>

                {/* <p className="subtitle is-size-6-mobile">This website will walk you through the process of:</p> */}

                <div className="content is-size-5">

                  {/* <h3>Hello!</h3> */}

                  <h3 >
                    This is a volunteer-run guide that will help you set up a tablet for an elder isolated by COVID.
                  </h3>

                  <p>
                    No need to teach the senior how to use any technology. 
                    This guide will show you how to configure a tablet to <span className="highlight">automatically pick up</span> when you 
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

                

                <br />

                <Link  href="/instructions">
                  <button className="button is-fullwidth is-success is-large">
                    <span className="icon">
                        <i className="fas fa-book-open"></i>
                    </span>
                    <span className="is-hidden-mobile">
                      Read the Instructions
                    </span>
                    <span className="is-hidden-tablet">
                      Get Started
                    </span>
                  </button>
                </Link>


                <br />

                {/* <div className="content has-text-centered">
                  <p>...or, <Link  href="/support">
                      <a>
                        get help from a volunteer
                      </a>
                    </Link>.</p>
                </div> */}

                <div className="columns is-centered is-vcentered is-mobile">
                  <div className="column">
                    <div className="content is-size-2 has-text-right">
                      <p>↓</p>
                    </div>
                  </div>


                  <div className="column is-three-fifths">
                    <div className="content has-text-centered">
                      <p>Read more below</p>
                    </div>
                  </div>

                  
                  <div className="column">
                    <div className="content is-size-2 has-text-left">
                      <p>↓</p>
                    </div>
                  </div>
                  
                </div>

              
              </div>


              {/* <div className="column has-text-centered is-hidden-tablet">

                <div className="box">
                  <div className="content logo-font">
                    <h1>How it looks in action:</h1>
                  </div>
                  

                  <p>
                    <video autoPlay playsInline muted loop controls id="myVideo-mobile">
                      <source src="/static/frontpageClipMed2.mp4" type="video/mp4" />
                    </video>
                  </p>
                </div>
              </div> */}

              <div className="column has-text-centered">

                <div className="content logo-font is-hidden-tablet">
                  <h1>How it looks in action:</h1>
                </div>

                <p>
                  <video autoPlay playsInline muted loop id="myVideo-desktop" className="is-hidden-mobile">
                    <source src="/static/frontpageClipMed2.mp4" type="video/mp4" />
                  </video>

                  <video autoPlay playsInline muted loop controls id="myVideo-mobile" className="is-hidden-tablet">
                      <source src="/static/frontpageClipMed2.mp4" type="video/mp4" />
                  </video>
                </p>
              </div>

            </div>

            {/* <div className="content has-text-centered is-size-2 is-hidden-mobile">
              ↓  ↓  ↓  ↓
            </div> */}

          </div>

        </div>

        {/* <div className="hero-foot is-hidden-mobile animated fadeIn">
          <div className="container">
            <div className="content has-text-centered is-size-2">
              ↓  ↓  ↓  ↓
            </div>
          </div>
        </div> */}
      </section>



      <section className="hero is-light">
        <div className="container">

          <br/>

          {/* <div className="content has-text-centered">
            <h1 className="logo-font">The impact:</h1>
          </div> */}

          {/* <div className="content has-text-centered"> */}

            <blockquote className="blockquote">
              <p>
              My grandmother is in a senior facility and has mild dementia. I can't visit with her, so being able to get her this tablet and video with her has been incredible for us both.
              </p>
            </blockquote>

            <blockquote className="blockquote">
              <p>
              I followed your instructions and got a tablet and data plan set up for my 83 year old grandma. 
              She has used it for the past 3 months without a hitch and has not had to even touch the tablet during the entire time! Thanks again.
              </p>
            </blockquote>            

            <blockquote className="blockquote">
              <p>
              We set it up for my immuno-compromised 80-yr old mother in law who is feeling extremely isolated. 
              She cried. She’s talked to several family members now today and got tours of gardens and great grandkids projects. 
              </p>
            </blockquote>

          {/* </div> */}

        </div>
      </section>

      <section className="hero">

        <div className="container">
          <br />
          <br />

            <div className="content has-text-centered">
              <h1 className="logo-font">Read more about the project at:</h1>
              <br className="is-hidden-tablet"/>
            </div>

            

            <div className="columns is-vcentered">

              <div className="column has-text-centered">
                <TrackedLink href="https://hackaday.com/2020/04/25/checking-in-on-relatives-using-old-android-tablets/">
                  <img src="/static/hackaday_logo_halfsize.png" height="50%"/>
                </TrackedLink>

                <br className="is-hidden-tablet" />
                <br className="is-hidden-tablet" />
                <br className="is-hidden-tablet" />
              </div>
              
              <div className="column has-text-centered">
                <TrackedLink href="https://www.reddit.com/r/LifeProTips/comments/g263iu/lpt_do_you_have_an_older_relative_who_you_want_to/">
                  <img src="/static/reddit_logo_halfsize.png" height="50%"/>
                </TrackedLink>
              </div>

              
              
          </div>

          <br className="" />

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
