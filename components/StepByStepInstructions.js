import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import BuyTabletInstructions from '../components/BuyTabletInstructions'
import BuyCableInstructions from '../components/BuyCableInstructions'
import SetupInstructions from '../components/SetupInstructions'
import TestCallInstructions from './CallingInstructions'
import MarkingInstructions from '../components/MarkingInstructions'
import ShipInstructions from '../components/ShipInstructions'
import OnboardInstructions from '../components/OnboardInstructions'


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

    setTimeout( () => {
  
        this.setState( () => {
            return {
                [name]: !falseButton,
                fadeOut: false
            }
        });

    }, 50)

  }


  render() {

    const remainingInstructions = <div className={`${this.state.fadeOut ? "animated fadeOut" : "animated fadeIn" }`}>

        <BuyTabletInstructions
            techSavvy={this.props.techSavvy} 
            cellular={this.state.cellular}  
        />
        
        <BuyCableInstructions
            techSavvy={this.props.techSavvy} 
        />

        <SetupInstructions  
            techSavvy={this.props.techSavvy} 
            cellular={this.state.cellular} 
        />

        <TestCallInstructions
            techSavvy={this.props.techSavvy} 

        />

        <MarkingInstructions
            techSavvy={this.props.techSavvy} 
        />

        <ShipInstructions  
            techSavvy={this.props.techSavvy} 
        />

        <OnboardInstructions  
            techSavvy={this.props.techSavvy} 
            cellular={this.state.cellular} 
        />

    </div>

    // previousCellVsWifiState = this.state.cellular


    const notSavvyText = <div>
        <h1 className="title">Part 1: Cellular vs. Wifi</h1>

        <div className="content">

            <p>
                I recommend getting a tablet with a 4G cellular connection.  
                That way, the tablet will work immediately “out of the box.”  
                Your parent/grandparent won’t need to connect the tablet to a Wifi network.
            </p>

            <p>
                It will also remain connected if your parent/grandparent goes traveling, or in the unfortunate event that they need to visit a hospital.
            </p>

            <p>
                The most affordable way to set up a tablet with a cellular connection is probably by adding it to your existing cell phone plan. 
                If you call your carrier and ask them to add a tablet to your phone plan (see next section), they will usually let you do that 
                for an additional fee of $10 to $25 per month.
            </p>

            <p>
                On the other hand, if your parent/grandparent has Wifi where they are located, you could avoid paying a monthly cellular service fee by 
                going with a Wifi-only tablet.  However, bear in mind that it might be difficult for your parent/grandparent to go about connecting the 
                tablet to their Wifi network.  You might need to ask a nurse or an aide to set up the connection for them.
            </p>

        </div>

    </div>


    // const savvyText = <div>
    //     <h1 className="title">Part 1: Cellular vs. Wifi</h1>

    //     <div className="content">

    //         <p>
    //             I recommend getting a tablet with a 4G cellular connection, instead of relying on Wifi.  That way, the tablet will work "out of the box." 
    //             Your parent/grandparent won't need to figure out how to connect to Wifi.  Many parents/grandparents also don't have Wifi networks.
    //         </p>

    //         <p>
    //             The tablet will also remain connected if your parent/grandparent brings it with them somewhere.  For example, if they go traveling.  Or, in the unfortunate 
    //             event that they need to visit a hospital.
    //         </p>

    //         <p>
    //             On the other hand, a cellular connection will come with a monthly fee. 
    //             Depending on your phone carrier, adding a tablet to your plan 
    //             may cost between $10 (Verizon) and $30 (Sprint) per month.  There are more details on this in the next section.
    //         </p>

    //         <p>
    //             If you decide to go the Wifi route, and if your parent/grandparent has a nurse, social worker, or aide working with them, you might consider asking 
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

                {notSavvyText}

                <br />

                <p className="title is-size-5 has-text-centered">Would you like to set up this tablet with a cellular connection, or a Wifi connection?</p> 

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