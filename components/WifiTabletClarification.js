import React from 'react'
import '../styles/styles.scss'
import config from '../config'
import Link from 'next/link'
// import BuyTabletInstructions from './BuyTabletInstructions'
// import TableOfTablets from './TableOfTablets'
import CellClarification from './CellClarification'
import TrackedLink from '../components/TrackedLink'
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

    // logEvent(name, (!falseButton).toString() )


  }


  render() {

    if (this.state.ipad == true) {
        this.props.tabletChosen("ipad")
    } else if (this.state.ipad == false) {
        this.props.tabletChosen("android")
    }

    const buyWifiAndroid = <div>
        <div className="columns is-vcentered is-centered">

            <div className="column">

                <div className="content">

                    <p>
                        We're going to use an Android tablet for this project.  Just about any Android tablet from the last 2 or 3 years should work.  
                        If you have a tablet around the house that is not an iPad, it is likely an Android tablet.
                    </p>

                    <p>
                        Android tablets can be pretty affordable.  I recommend 
                        the <TrackedLink href="https://www.bestbuy.com/site/samsung-galaxy-tab-a-latest-model-8-32gb-black/6368084.p?skuId=6368084" >Samsung Galaxy Tab A - Wifi Version</TrackedLink>, 
                        which costs $149.
                    </p>

                    <p>
                        An old Android phone would probably work too.  You can just use it on WiFi, instead of setting up a cellular plan for it.
                        If you have a smartphone that is not an iPhone, it is probably an Android phone.
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

    const buyWifiIpad = <div>
        <div className="columns is-vcentered is-centered">

            <div className="column">

                <div className="content">

                    <p>
                        Great!  Most iPads/iPhones produced since 2013 can be configured to automatically answer FaceTime video
                        calls. 
                    </p>

                    <p>
                        Start by resetting the iPad or iPhone, and then setting it up again with a new Apple iCloud account specifically for your relative/friend. 
                        You don't want to use your own Apple iCloud account on your relative/friend's device, because that would mean that their device is going to receive
                        and automatically pick up calls that are intended for you.
                    </p>

                    <p>
                        Once you've done that, follow the steps
                        in <TrackedLink href="https://mcmw.abilitynet.org.uk/auto-answer-call-ios-13-iphone-ipad-and-ipod-touch" >this guide</TrackedLink> to
                        configure the iPad/iPhone to automatically pick up calls.
                    </p>

                    <p>
                        If you don't see the "Auto Answer" setting highlighted by that guide, you may have an older version of iOS.  
                        Try updating your device.  You can also try searching Settings for "Auto-Answer."
                    </p>

                    <p>
                        <strong className="highlight">There is a downside</strong> to using an iPad or iPhone.  iPads and iPhones can only be configured to automatically answer video calls over FaceTime. 
                        It's possible to automatically answer Skype calls as well, but only with audio, not with video. 
                        Thus, <strong className="highlight">anyone who wants to video-call your relative/friend will need their own iPhone, iPad, iPod Touch, or Mac computer</strong>. 
                    </p>

                    <p>
                        If you and your family are already Apple devices, however, this should be no problem.
                    </p>

                </div>

            </div>

            {/* <div className="column is-one-third">

                <figure class="image">
                    <img src="/static/tabAwifi.jpg" />
                </figure>

            </div> */}

        </div>
    </div>


    return <div>
        <div className="has-text-centered">

            <br />

            <h1 className="title is-size-4">Do you own an old iPad or iPhone that you'd like to use for this project?</h1>

            <br />

            <div className="columns is-centered">
                <div className="column is-one-third">
                    <button name="ipad" disabled={this.state.ipad == true} className={`button is-medium is-success`} onClick={this.handleButtonClick}>Yes</button>
                </div>
                
                <div className="column is-one-third">
                    <button name="NOTipad" disabled={this.state.ipad == false} className={`button is-medium is-success`} onClick={this.handleButtonClick}>No</button>
                </div>
            </div>

        </div>

        {typeof this.state.ipad != "undefined" && <br/> }

        {this.state.ipad == true && buyWifiIpad}

        {this.state.ipad == false && buyWifiAndroid}

    </div>

  }


  

}