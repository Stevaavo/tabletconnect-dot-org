import React from 'react'
import '../styles/styles.scss'
import config from '../config'
// import Link from 'next/link'
// import BuyTabletInstructions from './BuyTabletInstructions'
import ClickableImage from '../components/ClickableImage'
import { initGA, logPageView, logEvent } from '../utils/analytics'
import TrackedLink from '../components/TrackedLink'
import StepByStepInstructions from '../components/StepByStepInstructions'


export default class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          techSavvy: 0,
          notTechSavvy: 0
      }
  }

  static getInitialProps(contextObject) {
      return {
          query: contextObject.query
      }
  }

  handleContinueClick = (event) => {
    event.preventDefault()
  
    this.setState( (prevState) => {
        return {
            // [name]: undefined,
            fadeOut: true
        }
    });

    logEvent("techSavvy", "continue, despite very savvy" )

    setTimeout( () => {
  
        this.setState( () => {
            return {
                continue: true,
                fadeOut: false
            }
        });

    }, 50)


  }

  render() {
    

    return <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                {/* <h1 className="title">Part {this.props.stepNumber}: Install Remote Control Software <strong className="highlight">(OPTIONAL)</strong></h1> */}

                <div className="columns is-vcentered">

                    

                    {/* <div className="column is-one-third">
                        <ClickableImage src="/static/markedWithCharger.jpg" />
                    </div> */}


                    <div className="column">

                        <div className="content has-text-centered">

                            {/* <p>
                                The guide here at TabletConnect.org offers step-by-step instructions that aim to be detailed enough for anyone to follow, regardless of their
                                level of tech literacy.
                            </p> */}

                            <p>
                                Given your level of tech literacy, you might prefer to read the much shorter version of this guide that I've written at Hackaday.io.  
                            </p>

                            <p>
                                The Hackaday.io guide imparts the same information as the guide here at TabletConnect.org, but at a higher level with fewer details.  
                                {/* For example: when it instructs you to change a setting in the Skype app, it doesn't take the time to show you how to open the Skype settings menu. */}
                            </p>

                            {/* <p>
                                The Hackaday.io guide imparts the same information as the guide here at TabletConnect.org, but at a higher level.  
                                For example: when it instructs you to change a setting in the Skype app, it doesn't take the time to show you how to open the Skype settings menu.
                            </p> */}

                            <p>
                                Alternatively, you can continue reading the "Intermediate" version of the guide here at TabletConnect.org.
                            </p>

                        </div>

                        <br />

                        <div className="columns is-centered">

                            <div className="column has-text-centered">
                                <TrackedLink href="https://hackaday.io/project/171101-mail-a-video-phone-to-a-covid-isolated-senior">
                                    <button className={`button is-large is-link`}>Visit the Hackaday.io Guide</button>
                                </TrackedLink>
                            </div>

                        </div>

                        <div className="columns is-centered">

                            <div className="column has-text-centered">
                                <button className={`button is-small is-success`} disabled={this.state.continue} onClick={this.handleContinueClick}>Continue Here</button>
                            </div>

                        </div>

                    </div>

                </div>




            </div>
        </section>


        {this.state.continue && <StepByStepInstructions techSavvy={true} /> }



    </div>
    

  }
}