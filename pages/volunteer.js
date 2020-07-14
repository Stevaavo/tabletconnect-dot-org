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

    return <div>

        <Header title="Volunteer" />

        {/* Welcome!  Click <a href="tool">here</a> for the tool. */}

        <section className="hero is-fullheight-with-navbar animated fadeIn">
            <div className="hero-body">

                <div className="container">
                    <h1 className="title">Come on aboard!</h1>

                    <br className="is-hidden-mobile"/>

                    <p className="subtitle is-size-6-mobile">
                      If you consider yourself "tech-savvy," and if you're familiar with using Android phones, we'd love your help providing tech support for others! 
                      Shoot an email to <TrackedLink href="mailto:volunteers@tabletconnect.org">volunteers@tabletconnect.org</TrackedLink>
                    </p>




                </div>

            </div>
        </section>

        <Footer />

    </div>

  }

}