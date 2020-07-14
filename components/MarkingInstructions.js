import React from 'react'
import '../styles/styles.scss'
import config from '../config'
// import Link from 'next/link'
// import BuyTabletInstructions from './BuyTabletInstructions'
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

                <h1 className="title">Part {this.props.stepNumber}: Mark the Buttons/Charger</h1>

                <div className="columns is-vcentered">

                    

                    <div className="column is-one-third">
                        <ClickableImage src="/static/markedWithCharger.jpg" />
                    </div>


                    <div className="column">

                        <div className="content">

                            <p>
                                I recommend marking the buttons for <strong className="highlight">"Power,"</strong> <strong className="highlight">"Volume Up"</strong> and <strong className="highlight">"Volume Down"</strong>, as well as the location of the <strong className="highlight">charging port</strong>.  
                                {/* This might make it easier if you need to help your relative/friend troubleshoot an issue with the tablet over the phone. */}
                            </p>

                            <p>
                                You can mark the tablet by putting down masking tape or duct tape, and writing on it with a sharpie.
                            </p>

                        </div>

                    </div>

                </div>




            </div>
        </section>



    </div>
    

  }
}