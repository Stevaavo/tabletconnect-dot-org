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

    logEvent("fbMessengerInstructions", (!falseButton).toString() )
  }


  render() {


    const instructions = <div className="animated fadeIn">

        <div className="content">

            <p>
                Great!
            </p>

            <p>
                I suggest using Facebook Messenger as the backup, since it is highly reliable, and because - unlike WhatsApp and Duo - Facebook Messenger
                let's you register an account without tying it to a phone number.  
                Also, if your relative/friend eventually learns how to use the tablet at a more advanced level, they may enjoy having access to the Facebook app.
            </p>

            <ul>


                <li>
                    We'll start by installing the Facebook app on the tablet.  
                    On the tablet, go to the Play Store (like we did to install Skype), and search for the Facebook app. 
                    Hit the "Install" button.
                </li>

                <li>
                    If your relative/friend doesn't have a Facebook account already, create one for them.  
                    Or, log in with their existing Facebook account.
                    If you create a new account for them, make sure to record the password you choose.
                </li>

                <li>
                    Add your own Facebook account as a friend.  Also add the Facebook accounts of anyone else who you want to be able to call your relative/friend. 
                    Only your relative/friend's Facebook friends will be able to call them through Facebook Messenger.
                </li>

                <li>
                    Now return to the Play Store, search for "Facebook Messenger," and install it.  
                    This is a separate app from the regular Facebook app.
                    It will look like this in the Play Store:
                </li>

                <div className="has-text-centered">
                        <img src="/static/fbMessengerStoreListingB.png" />
                </div>
                

                <li>
                    When Facebook Messenger is finished installing, open the app and log in with your relative/friend's Facebook account.
                </li>

                <li>
                    Make a test call from your own Facebook account on your smartphone/computer, to your relative/friend's Facebook account.
                </li>

                <li>
                    Pick up the test call on your relative/friend's tablet. Messenger may ask you to allow it to access the tablet's camera and microphone. 
                    Choose "allow".
                </li>

                <li>
                    Hang up, and make another test call to the tablet.  Pick up the call, and confirm that the video call is working properly.
                </li>
            </ul>

            <p>
                When someone calls the tablet over Facebook Messenger, the screen will turn on and show the 
                caller's Facebook profile picture (see video below), but there will be no "ringing" sound on their end. 
                You might consider calling your relative/friend over the phone before you call them over Facebook, to let them know to walk 
                over to the tablet for your video call.
            </p>

            <p>
                To pick up your call, they just need to tap the green "Answer" button in the lower right corner.  Here's what that looks like on their end:
            </p>

        </div>


        <div className="columns is-centered">
            <div className="column is-half has-text-centered">
                <p>
                    <video autoPlay muted loop controls id="myVideo-desktop">
                        <source src="/static/fbMessengerReceiveCall.mp4" type="video/mp4" />
                    </video>
                </p>
            </div>
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

                <h1 className="title">Part {this.props.stepNumber}: Install a "Backup" Video Chat App <strong className="highlight">(OPTIONAL)</strong></h1>

                <div className="columns is-vcentered">

                    

                    {/* <div className="column is-one-third">
                        <ClickableImage src="/static/markedWithCharger.jpg" />
                    </div> */}


                    <div className="column">

                        <div className="content">

                            <p>
                                This step is recommended, but optional.
                            </p>

                            <p>
                                Skype is great, because it can pick up our calls automatically. 
                                However, some readers of this guide have reported that the Skype app has spontaneously signed itself out on their relative/friend's tablet. 
                                If you're not there to show your relative/friend how sign back in, it may not be possible to continue using Skype at that point.
                            </p>

                            <p>
                                Thus, I recommend installing a "backup" video chat app, which you can use as a fallback option if Skype stops working. 
                                This chat app won't be able to pick up your calls automatically, but perhaps your relative/friend will be able to learn to pick 
                                up your calls manually.
                            </p>

                            <p>
                                If you'd like to do this, click below for instructions.
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