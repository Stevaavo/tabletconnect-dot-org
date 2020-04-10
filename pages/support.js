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

    return <div>

        <Header />

        {/* Welcome!  Click <a href="tool">here</a> for the tool. */}

        <section className="hero is-fullheight-with-navbar animated fadeIn">
            <div className="hero-body">

                <div className="container">
                    <h1 className="title">Get tech support from a volunteer.</h1>

                    <br className="is-hidden-mobile"/>

                    <p className="subtitle is-size-6-mobile">Having trouble setting up your tablet?  Feel free to email <a href="mailto:help@tabletconnect.org">help@tabletconnect.org</a> for assistance.</p>

                    <p className="subtitle is-size-6-mobile">If you want, you can also provide your phone number and we'll get back to you by phone.</p>

                    <p className="subtitle is-size-6-mobile">Or, if you'd like to volunteer to offer tech support to others, we'd be grateful for the help! Shoot an email to <a href="mailto:volunteers@tabletconnect.org">volunteers@tabletconnect.org</a></p>




                </div>

            </div>
        </section>

        <Footer />

    </div>

  }

}