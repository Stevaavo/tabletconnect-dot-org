import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import BuyTabletInstructions from '../components/BuyTabletInstructions'
import TableOfTablets from './TableOfTablets'
import { initGA, logPageView, logEvent } from '../utils/analytics'
import TrackedLink from '../components/TrackedLink'


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
  }


  render() {

    const buyCellNotSavvy = <div>
        <div className="content">

            <p>
                Below is a list of the tablets that I recommend buying for each phone carrier.  If your carrier is not in the list below, I recommend buying a 
                Samsung Galaxy Tab A from your phone carrier.
            </p>

            <p>
                Make sure you have the tablet shipped to you, and not to your relative/friend.  You’ll want to set it up for them first, and then ship it to them.
            </p>

        </div>

        {TableOfTablets}

    </div>

    const buyCellSavvy = <div>
        <div className="content">

            <p>
                I recommend buying a recent 4G-compatible model of the <strong className="highlight"> Samsung Galaxy Tab A</strong>, a common and inexpensive Android tablet.
            </p>

            <p>
                You can buy the international version of the Galaxy Tab A in the 8" size 
                for <TrackedLink href="https://www.amazon.com/Samsung-Cellular-Unlocked-SM-T295-International/dp/B07XC3CW4G" >about $160 on Amazon</TrackedLink>. 
                The international version should work for you if your phone carrier uses the "GSM" phone standard. 
                Within the United States, this includes <strong className="highlight">AT&T</strong>, <strong className="highlight">T-Mobile</strong>, <strong className="highlight">MetroPCS</strong> and <strong className="highlight">Cricket Wireless</strong>. 
                it should also work for <strong className="highlight">most carriers outside the United States</strong>.  
                If you call your cell phone provider, they can probably add the tablet onto your existing cell phone plan. 
                They'll mail you a SIM card for the new line/plan, and you'll just need to insert the SIM card into the tablet.
            </p>

            <p>
                However, if your phone carrier uses CDMA (including <strong className="highlight">Verizon</strong>, <strong className="highlight">Sprint</strong>, <strong className="highlight">US Cellular</strong>, and <strong className="highlight">Boost Mobile</strong>), then you'll need to purchase a CDMA-compatible tablet. 
                I recommend looking at the Android tablets that your phone carrier sells and purchasing the most affordable one (possibly a CDMA version of the Galaxy Tab A).
            </p>

            <p>
                Regardless, make sure you have the tablet shipped to you, and not to your relative/friend.  You’ll want to set it up for them first, and then ship it to them.
            </p>

        </div>

    </div>


    const buyWifi = <div>

        <div className="columns is-vcentered is-centered">

            <div className="column">

                <div className="content">
                    <p>
                        Just about any Android tablet should work.  If you have a tablet around the house that is not an iPad, it is likely an Android tablet.
                    </p>

                    <p>
                        An old Android phone would probably work too, though it may be a little harder for your relative/friend to see you.  If you have a smartphone that 
                        is not an iPhone, it is probably an Android phone.
                    </p>

                    <p>
                        Alternatively, you can buy an inexpensive Android tablet.  I recommend 
                        the <TrackedLink href="https://www.bestbuy.com/site/samsung-galaxy-tab-a-latest-model-8-32gb-black/6368084.p?skuId=6368084" >Samsung Galaxy Tab A - Wifi Version</TrackedLink>, 
                        which costs $149.
                    </p>

                </div>

            </div>

            <div className="column is-one-third">

                <figure class="image">
                    <img src="/static/tabAwifi.jpg" />
                </figure>

            </div>

        </div>

    </div>

    

    return <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                {this.props.cellular && <h1 className="title">Part 2: Getting a Tablet and 4G Service</h1> }
                {!this.props.cellular && <h1 className="title">Part 2: Finding a Wifi Tablet</h1> }

                {this.props.cellular && this.props.techSavvy && buyCellSavvy}
                {this.props.cellular && !this.props.techSavvy && buyCellNotSavvy}
                {this.props.cellular == false && buyWifi}


            </div>
        </section>



    </div>
    

  }
}