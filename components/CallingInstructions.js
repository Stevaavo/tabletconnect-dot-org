import React from 'react'
import '../styles/styles.scss'
import config from '../config'
// import Link from 'next/link'
// import BuyTabletInstructions from './BuyTabletInstructions'
// import TableOfTablets from './TableOfTablets'
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

    

    return <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                <h1 className="title">Part {this.props.stepNumber}: Make a Test Call</h1>

                <div className="columns is-centered is-vcentered">

                    <div className="column">

                        <div className="content">

                            <p>
                                Restart the tablet.  When it's finished restarting, don't touch it or unlock it.  Instead, try calling it, to see if it picks up your call correctly.
                            </p>

                            <p>
                                If the call doesn't go through on the first attempt, or if there's a problem with the video, 
                                try to hang up and call again once or twice.  You can even try again later in the day.  Skype can be a little unpredictable sometimes.
                            </p>

                        </div>


                        <div className="columns is-centered">
                            <div className="column is-half">
                                <figure class="image">
                                    <img src="/static/skypeCallExample.png" />
                                </figure>
                            </div>
                        </div>

                        <div className="content">

                            <p>
                                To place the call, go into the Skype app on your computer or smartphone (make sure to log in with your own personal Skype account, and not the Skype
                                account that you created for your relative/friend).  Then, look up your relative/friend by going to the search box and typing in the email address 
                                that you used to sign them up for Skype (in the case of our example, this was JaneSmithTablet170@gmail.com).
                            </p>

                            <p>
                                The video below will walk you through this process.  You can also share this video with others, to show them how they can call your 
                                relative/friend as well.  Here is a direct link to the video: <TrackedLink href="https://youtu.be/2-_5YfV9DDw">https://youtu.be/2-_5YfV9DDw</TrackedLink>
                            </p>

                        </div>

                    </div>


                </div>


                <div className="columns is-centered">
                    <div className="column is-half">
                        <div className="video-container">
                            <iframe width={config.youtubeWidth} height={config.youtubeHeight} src="https://www.youtube.com/embed/2-_5YfV9DDw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>


            </div>
        </section>



    </div>
    

  }
}