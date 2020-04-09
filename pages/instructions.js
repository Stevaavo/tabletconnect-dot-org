import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import Header from '../components/Header'
import StepByStepInstructions from '../components/StepByStepInstructions'
import Footer from '../components/Footer'


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // techSavvy: true
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


    const techSavvyQuestion = <section className={`animated fadeIn ${typeof this.state.techSavvy == "undefined" ? "hero is-fullheight-with-navbar" : "section"}`}>
        <div className={`${ typeof this.state.techSavvy == "undefined"  && "hero-body"}`}>
            <div className="container has-text-centered">

                <h1 className="title">Would you consider yourself moderately "tech-savvy"?</h1>

                <br />

                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <button name="techSavvy" disabled={this.state.techSavvy == true} className={`button is-large is-success`} onClick={this.handleButtonClick}>Yes</button>
                    </div>
                    
                    <div className="column is-one-third">
                        <button name="NOTtechSavvy" disabled={this.state.techSavvy == false} className={`button is-large is-success`} onClick={this.handleButtonClick}>No</button>
                    </div>
                </div>

            </div>
            
        </div>

    </section>


    const remainingQuestions = <div className={`${this.state.fadeOut ? "animated fadeOut" : "animated fadeIn" }`}>
        <StepByStepInstructions techSavvy={this.state.techSavvy} /> 
    </div>



    console.log("State as of render: ", this.state)
    return <div>

        <Header />

        {techSavvyQuestion}

        { typeof this.state.techSavvy != "undefined" && remainingQuestions }

        <Footer />

    </div>

  }

}