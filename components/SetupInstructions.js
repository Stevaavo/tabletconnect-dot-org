import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import config from '../config'


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

    

    const notSavvyText = <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                <h1 className="title">Part 4: Set Up the Tablet</h1>

                <div className="content">

                    <p>
                        You’ve received your new tablet!  Awesome!
                    </p>

                    
                    <p>
                        Consider keeping the shipping box and packing materials so that you can re-use them to mail the tablet to your parent/grandparent when you’re finished.
                    </p>

                    <p>
                        Now, let’s turn on the tablet and get started.  The video below will walk you through initial setup.  Or, refer to the written instructions below.
                    </p>


                </div>

                <div className="columns is-centered">
                    <div className="column is-half">
                        <div className="video-container">
                            <iframe width={config.youtubeWidth} height={config.youtubeHeight} src="https://www.youtube.com/embed/x4vbgYM_2zI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>


                <p className="title is-size-5">Initial Setup</p>
                <div className="content">

                    <p>
                        When you turn on the tablet for the first time, it will walk you through an initial set up process.  As you go through it, I recommend making
                        the following choices.  You may not be given all of these choices, and they may be offered in a different order.
                    </p>

                    <ul>
                        {this.props.cellular == false && <li>Connect to your home wifi network.</li>}
                        <li>When prompted, create a new Google account for your parent/grandparent's tablet.  Something like "JaneSmithTablet170@gmail.com"</li>
                        <li>When asked to set up a PIN or pattern for the tablet, choose “not now.”</li>
                        <li>If it asks you to install updates, go for it.</li>
                        <li>When you’re asked to add a phone number, choose “Skip.”</li>
                        <li>If/when asked, don't enable Google Assistant, unless you think your parent/grandparent will enjoy it.</li>
                        <li>Accept the other Google services and agreements.</li>
                        <li>When you finally reach the home screen, turn on "Do Not Disturb" mode so that your parent/grandparent isn't bothered by notification sounds.  This will not
                        prevent the tablet from picking up your Skype calls.</li>
                    </ul>


                </div>

                <p className="title is-size-5">Skype Setup</p>

                <div className="content">

                    <p>
                        Once you've reached the "home screen" and turned on Do Not Disturb mode, it's time to get Skype installed and set up to automatically answer calls:
                    </p>

                    <ol>
                        <li>Go to the Play Store and install Skype.</li>
                        <li>Set up a Skype account for your parent/grandparent. When asked to provide a phone number, choose to sign up with an email address instead. Use the Gmail address from the Google account that you just created for the tablet (i.e. JaneSmithTablet170@gmail.com)</li>
                        <li>Once you're logged in, tap the icon with your parent/grandparent's initials at the top of the screen.  This should bring up a menu where you can choose "settings."</li>
                        <li>Within settings, look for a menu entry labeled "Calling."</li>
                        <li>Within the calling menu, turn on <strong className="highlight">"Answer incoming calls automatically."</strong></li>
                        <li>When you turn that on, a new option should appear called <strong className="highlight">"Start my video automatically."</strong> Turn that on too.</li>
                        <li>You're all set!</li>
                    </ol>

                </div>



            </div>
        </section>



    </div>
    






    const savvyText = <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                <h1 className="title">Part 4: Set Up the Tablet</h1>

                <div className="content">

                    <p>
                        You’ve received your new tablet!  Awesome!
                    </p>

                    
                    <p>
                        Consider keeping the shipping box and packing materials so that you can re-use them to mail the tablet to your parent/grandparent when you’re finished.
                    </p>

                </div>

                <p className="title is-size-5">Initial Setup</p>
                <div className="content">

                    <p>
                        When you turn on the tablet for the first time, it will walk you through an initial set up process.  As you go through it, I recommend making
                        the following choices.  You may not be given all of these choices, and they may be offered in a different order.
                    </p>

                    <ul>
                        {this.props.cellular == false && <li>Connect to your home wifi network.</li>}
                        <li>When prompted, create a new Google account for your parent/grandparent's tablet.  Something like "JaneSmithTablet170@gmail.com"</li>
                        <li>When asked to set up a PIN or pattern for the tablet, choose “not now.”</li>
                        <li>If it asks you to install updates, go for it.</li>
                        <li>When you’re asked to add a phone number, choose “Skip.”</li>
                        <li>If/when asked, don't enable Google Assistant, unless you think your parent/grandparent will enjoy it.</li>
                        <li>Accept the other Google services and agreements.</li>
                        <li>When you finally finish the initial setup and reach the tablet's home screen, turn on "<strong className="highlight">Do Not Disturb</strong>" mode so that your parent/grandparent isn't bothered by notification sounds.  This will not
                        prevent the tablet from picking up your Skype calls.</li>
                    </ul>

                </div>

                <p className="title is-size-5">Skype Setup</p>

                <div className="content">

                    <p>
                        Once you've reached the "home screen" and turned on Do Not Disturb mode, it's time to get Skype installed and set up to automatically answer calls. 
                        You can follow the video, or the written instructions below.
                    </p>

                    <div className="columns is-centered">
                        <div className="column is-half">
                            <div className="video-container">
                                <iframe width={config.youtubeWidth} height={config.youtubeHeight} src="https://www.youtube.com/embed/B5XbHsLpEqI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>


                    <ol>
                        <li>Go to the Play Store and install Skype.</li>
                        <li>Set up a Skype account for your parent/grandparent. When asked to provide a phone number, choose to sign up with an email address instead. Use the Gmail address from the Google account that you just created for the tablet (i.e. JaneSmithTablet170@gmail.com)</li>
                        <li>Once you're logged in, tap the icon with your parent/grandparent's initials at the top of the screen.  This should bring up a menu where you can choose "settings."</li>
                        <li>Within settings, look for a menu entry labeled "Calling."</li>
                        <li>Within the calling menu, turn on <strong className="highlight">"Answer incoming calls automatically."</strong></li>
                        <li>When you turn that on, a new option should appear called <strong className="highlight">"Start my video automatically."</strong> Turn that on too.</li>
                        <li>You're all set!</li>
                    </ol>

                </div>



            </div>
        </section>



    </div>





    return <div>
        {this.props.techSavvy ? savvyText : notSavvyText}
    </div>

  }
}