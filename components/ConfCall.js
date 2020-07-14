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

    logEvent("confCallInstructions", (!falseButton).toString() )
  }


  render() {


    const instructions = <div className="animated fadeIn">

        <div className="content">

            <p>
                The process is very simple.  This video will walk you through it.  Have a good time!
            </p>

        </div>

        <div className="columns is-centered">
            <div className="column is-half">
                <div className="video-container">
                    <iframe width={config.youtubeWidth} height={config.youtubeHeight} src="https://www.youtube.com/embed/Ij6oNMFKFZM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>

        {/* <div className="content">

            <p>
                Enjoy!
            </p>

        </div> */}


        {/* <div className="columns is-centered is-vcentered">

            <div className="column">
                <ClickableImage src="/static/camera_marking_front.jpg" />
            </div>

            <div className="column">
                <ClickableImage src="/static/camera_marking_holes.png" />
            </div>

        </div> */}

    </div>

    

    return <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                <h1 className="title"><strong className="highlight">Bonus:</strong> Setting Up a Conference Call</h1>

                <div className="columns is-vcentered">

                    

                    {/* <div className="column is-one-third">
                        <ClickableImage src="/static/markedWithCharger.jpg" />
                    </div> */}


                    <div className="column">

                        <div className="content">

                            <p>
                                A few people have asked if it's possible to set up a "conference call" with the tablet. You absolutely can!
                                For example, through the tablet, my grandmother was able to join several of her kids and grandkids across the country for a Passover Seder.
                            </p>

                            <p>
                                Click below for instructions.
                            </p>



                        </div>

                        <div className = "has-text-centered">

                            {!this.state.showInstructions && <button name="showInstructions" className={`button is-large is-success is-hidden-mobile`} onClick={this.handleButtonClick}>Conference Call Instructions</button>}

                            {!this.state.showInstructions && <button name="showInstructions" className={`button is-success is-hidden-tablet`} onClick={this.handleButtonClick}>Conference Call Instructions</button>}
                        </div>

                        {this.state.showInstructions && instructions}

                        

                    </div>

                    {!this.state.showInstructions && <div className="column is-one-fifth">

                        <ClickableImage src="/static/tablet_conference_view.jpg" />
                        
                    </div>}

                    

                </div>

                




            </div>
        </section>



    </div>
    

  }
}