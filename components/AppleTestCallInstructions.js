import React from 'react'
import '../styles/styles.scss'
import config from '../config'
// import Link from 'next/link'
// import BuyTabletInstructions from './BuyTabletInstructions'
// import TableOfTablets from './TableOfTablets'
import TrackedLink from '../components/TrackedLink'
import ClickableImage from '../components/ClickableImage'



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
  }


  render() {

    

    return <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                <h1 className="title">Part {this.props.stepNumber}: Make a Test FaceTime Call</h1>

                <div className="columns is-centered is-vcentered">

                    <div className="column">

                        <div className="content">

                            <p>
                                Restart the iPad or iPhone.  
                                When it's finished restarting, don't touch it or unlock it.  
                                Instead, try making a FaceTime call to the iPad or iPhone.
                            </p>

                            <p>
                                Confirm that your call is picked up automatically with video.  If it does, you're in business!
                            </p>

                            <p>
                                During this test call, you may want to <strong className="highlight">adjust the iPad/iPhone's volume</strong> up or down to the level that you think your relative/friend would prefer.
                            </p>

                        </div>

                    </div>


                </div>





            </div>
        </section>



    </div>
    

  }
}