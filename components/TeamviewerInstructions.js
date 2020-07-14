import React from 'react'
import '../styles/styles.scss'
import config from '../config'
// import Link from 'next/link'
// import BuyTabletInstructions from './BuyTabletInstructions'
import ClickableImage from '../components/ClickableImage'
import { initGA, logPageView, logEvent } from '../utils/analytics'


export default class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          techSavvy: 0,
          notTechSavvy: 0
      }
  }


  handleButtonClick = (event) => {
    event.preventDefault()

    const target = event.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    const falseButton = name.startsWith("NOT")

    if (falseButton) {
        name = name.substr(3)
    }
  
    this.setState( (prevState) => {
        return {
            [name]: !falseButton
        }
    });

    logEvent("teamviewerInstructions", (!falseButton).toString() )
  }


  render() {


    const instructions = <div className="animated fadeIn">

        <div className="content">

            <p>
                Talleyho!
            </p>

            <p>
                The remote control software we'll use is a free program called TeamViewer Host.  
                You can follow the video below to set it up.
            </p>

        </div>

        <div className="columns is-centered">
            <div className="column is-half">
                <div className="video-container">
                    <iframe width={config.youtubeWidth} height={config.youtubeHeight} src="https://www.youtube.com/embed/x62Zfrq1HyQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>

        <div className="content">

            <p>
                Unfortunately TeamViewer is not very reliable on phones/tablets, but it's still the best option available.
                If the TeamViewer program on your computer fails to connect to the tablet, you may need to try again repeatedly before it will work.
                I once had to try 10 or 15 times, over the course of several days, before I finally succeeded in connecting to a tablet via TeamViewer.
            </p>

            <p>
                If you find that you can't connect, it may help if your relative/friend is able to restart the tablet for you.
            </p>

            <p>
                Despite all this hassle, TeamViewer can still be a lifesaver!
            </p>

        </div>


        {/* <div className="columns is-centered">
            <div className="column is-half">
                <div className="video-container">
                    <iframe width={config.youtubeWidth} height={config.youtubeHeight} src="https://www.youtube.com/embed/cHrAGN5SL0g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div> */}

    </div>

    

    return <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                <h1 className="title">Part {this.props.stepNumber}: Install Remote Control Software <strong className="highlight">(OPTIONAL)</strong></h1>

                <div className="columns is-vcentered">

                    

                    {/* <div className="column is-one-third">
                        <ClickableImage src="/static/markedWithCharger.jpg" />
                    </div> */}


                    <div className="column">

                        <div className="content">

                            <p>
                                This step is another optional step.
                            </p>

                            <p>
                                If something goes wrong with the tablet, and you're not there to fix it for your relative/friend, 
                                they may be unable to continue using it.
                            </p>

                            <p>
                                As an extra safeguard against this, you can install free "remote control" software on the tablet that will 
                                allow you to control the tablet over the internet.
                                From your computer you will get a live feed of the tablet's screen, and you'll use your computer mouse as a virtual "finger" to tap the screen.
                            </p>

                            <p>
                                This remote control software is a bit unreliable - it has a habit of quitting on you when you need it. 
                                You should not count on it. 
                                On the other hand, it can't hurt, and it might save you in a pinch
                            </p>

                            <p>
                                If you'd like to set this up, click below for instructions.
                            </p>



                        </div>

                        <div className = "has-text-centered">

                            {!this.state.showInstructions && <button name="showInstructions" className={`button is-large is-success is-hidden-mobile`} onClick={this.handleButtonClick}>Show Optional Instructions</button>}

                            {!this.state.showInstructions && <button name="showInstructions" className={`button is-success is-hidden-tablet`} onClick={this.handleButtonClick}>Show Optional Instructions</button>}
                        </div>

                        {this.state.showInstructions && instructions}

                    </div>

                </div>




            </div>
        </section>



    </div>
    

  }
}