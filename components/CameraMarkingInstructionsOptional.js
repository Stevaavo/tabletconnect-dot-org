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

  static getInitialProps(contextObject) {
      return {
          query: contextObject.query
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

    logEvent("choice", name, (!falseButton).toString() )
  }


  render() {


    const instructions = <div className="animated fadeIn">

        <div className="content">

            <p>
                To avoid covering the light sensor, I recommend squeezing in the masking/duct tape for this label above the camera, instead of next to it. 
                It might be a tight fit. 
                The ambient light sensor is usually located horizontally to the right or left of the front camera, however, so by placing the tape above the camera your
                will probably be safe.
            </p>

            <p>
                Also be careful not to cover any holes/ports on the side of the tablet with this tape. 
                A small pinhole on the side of the device may be the tablet's microphone.
            </p>

            <p>
                When you're done, place the tablet in a bright location (i.e. facing a lit window, or facing a lamp), and make another test call to it to confirm:
            </p>

            <ul>

                <li>
                    The camera on the tablet has not been obscured by the tape.
                </li>

                <li>
                    The microphone on the tablet is still working well.
                </li>

                <li>
                    The screen is not set to a dim level.  If the screen seems unnaturally dim, that might indicate that you covered the light sensor.
                </li>

            </ul>

        </div>


        <div className="columns is-centered is-vcentered">

            <div className="column">
                <ClickableImage src="/static/camera_marking_front.jpg" />
            </div>

            <div className="column">
                <ClickableImage src="/static/camera_marking_holes.png" />
            </div>

        </div>

    </div>

    

    return <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                <h1 className="title">Part {this.props.stepNumber}: Mark the Camera <strong className="highlight">(OPTIONAL)</strong></h1>

                <div className="columns is-vcentered">

                    

                    {/* <div className="column is-one-third">
                        <ClickableImage src="/static/markedWithCharger.jpg" />
                    </div> */}


                    <div className="column">

                        <div className="content">

                            <p>
                                I recommend marking the front-facing camera, so that your relative/friend doesn't accidentally cover it with their hand while they're holding the tablet.
                            </p>

                            <p>
                                <strong className="highlight">Heads up:</strong> This is harder than it sounds, 
                                because the tablet may have a hidden "ambient light sensor" located near the camera.
                                The tablet uses this light sensor to automatically adjust the brightness of the screen to the amount of light in the room. 
                                If you cover it, the device may turn the screen brightness all the way down.
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