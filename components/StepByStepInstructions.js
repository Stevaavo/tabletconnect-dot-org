import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import Encouragement from '../components/Encouragement'
import BuyTabletInstructions from '../components/BuyTabletInstructions'
import BuyTabletInstructionsSuperior from '../components/BuyTabletInstructionsSuperior'
import BuyCableInstructions from '../components/BuyCableInstructions'
import SetupInstructions from '../components/SetupInstructions'
import TestCallInstructions from './CallingInstructions'
import MarkingInstructions from '../components/MarkingInstructions'
import ShipInstructions from '../components/ShipInstructions'
import OnboardInstructions from '../components/OnboardInstructions'
import { initGA, logPageView, logEvent } from '../utils/analytics'
// import scrollToComponent from 'react-scroll-to-component'

var scrollToComponent

export default class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
        //   cellular: true
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
            // [name]: undefined,
            fadeOut: true
        }
    });

    logEvent(name, (!falseButton).toString() )

    setTimeout( () => {
  
        this.setState( () => {
            return {
                [name]: !falseButton,
                fadeOut: false
            }
        });

    }, 50)
  
    scrollToComponent(this.wifiOrCellQuestion, { offset: 0, align: 'top', duration: 1000})
   

  }


  componentDidMount () {

    // scrollToComponent = require('react-scroll-to-component')
    scrollToComponent = require('ssr-scroll-to')

    
  }


  render() {

    let stepNumber = 2

    const remainingInstructions = <div className={`${this.state.fadeOut ? "animated fadeOut" : "animated fadeIn" }`}>

        <Encouragement />

        <BuyTabletInstructionsSuperior
            techSavvy={this.props.techSavvy} 
            cellular={this.state.cellular}  
            stepNumber={stepNumber++}
        />
        
        {/* <BuyCableInstructions
            techSavvy={this.props.techSavvy} 
        /> */}

        <SetupInstructions  
            techSavvy={this.props.techSavvy} 
            cellular={this.state.cellular} 
            stepNumber={stepNumber++}
        />

        <TestCallInstructions
            techSavvy={this.props.techSavvy} 
            stepNumber={stepNumber++}

        />

        <MarkingInstructions
            techSavvy={this.props.techSavvy} 
            stepNumber={stepNumber++}
        />

        <ShipInstructions  
            techSavvy={this.props.techSavvy} 
            stepNumber={stepNumber++}
        />

        <OnboardInstructions  
            techSavvy={this.props.techSavvy} 
            cellular={this.state.cellular} 
        />

    </div>

    // previousCellVsWifiState = this.state.cellular


    const text = <div>
        <h1 className="title">Part 1: Cellular vs. Wifi</h1>

        <div className="content">

            <p>
                I recommend getting a tablet with a 4G cellular connection.  
                You'll need to pay a monthly cost of <strong className="highlight">between $10 and $30</strong> for a cellular plan for the tablet, but it will bring several advantages:
            </p>


            {/* <p className="title is-size-6">Advantages of a Cellular Connection</p> */}

            <ul>
                <li>
                    No setup needed - the tablet will work "out of the box"
                </li>

                <li>
                    No Wifi network required
                </li>

                <li>
                    The tablet will stay connected if your relative/friend travels domestically
                </li>

                <li>
                    The tablet will stay connected if your relative/friend brings it to a hospital or rehab facility
                </li>

            </ul>



            {!this.props.techSavvy && <p>
                On the other hand, if your relative/friend has Wifi where they are located, you could avoid paying a monthly cellular service fee by 
                going with a Wifi-only tablet.  However, bear in mind that it might be difficult for them to go about connecting the 
                tablet to their Wifi network.  You might need to ask a nurse or an aide to set up the connection for them.
            </p>}

        </div>

    </div>


    // const savvyText = <div>
    //     <h1 className="title">Part 1: Cellular vs. Wifi</h1>

    //     <div className="content">

    //         <p>
    //             I recommend getting a tablet with a 4G cellular connection, instead of relying on Wifi.  That way, the tablet will work "out of the box." 
    //             Your relative/friend won't need to figure out how to connect to Wifi.  Many senior citizens also don't have Wifi networks.
    //         </p>

    //         <p>
    //             The tablet will also remain connected if your relative/friend brings it with them somewhere.  For example, if they go traveling.  Or, in the unfortunate 
    //             event that they need to visit a hospital.
    //         </p>

    //         <p>
    //             On the other hand, a cellular connection will come with a monthly fee. 
    //             Depending on your phone carrier, adding a tablet to your plan 
    //             may cost between $10 (Verizon) and $30 (Sprint) per month.  There are more details on this in the next section.
    //         </p>

    //         <p>
    //             If you decide to go the Wifi route, and if your relative/friend has a nurse, social worker, or aide working with them, you might consider asking 
    //             them to set up the Wifi connection.
    //         </p>

    //     </div>

    // </div>

    

    return <div className="container animated fadeIn">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                {/* {this.props.techSavvy ? savvyText : notSavvyText } */}

                {text}

                <br />

                <p className="title is-size-5 has-text-centered" ref={(p) => { this.wifiOrCellQuestion = p; }} >Would you like to set up this tablet with a cellular connection, or a Wifi connection?</p> 

                <div className="columns is-centered">
                    <div className="column is-one-third has-text-centered">
                        <button name="cellular" disabled={this.state.cellular == true} className="button is-large is-success" onClick={this.handleButtonClick}>Cellular</button>
                    </div>
                    <div className="column is-one-third has-text-centered">
                        <button name="NOTcellular" disabled={this.state.cellular == false} className="button is-large is-success" onClick={this.handleButtonClick}>Wifi Only</button>
                    </div>
                </div>            

            </div>
        </section>


        { typeof this.state.cellular != "undefined" && remainingInstructions }

    </div>
    

  }
}