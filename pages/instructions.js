import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import Header from '../components/Header'
import StepByStepInstructions from '../components/StepByStepInstructions'
import Footer from '../components/Footer'
import { initGA, logPageView, logEvent } from '../utils/analytics'
import VerySavvyInstructions from '../components/VerySavvyInstructions'
// import scrollToComponent from 'react-scroll-to-component'
// import scrollToComponent from 'ssr-scroll-to'

// var scrollToComponent

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // techSavvy: true,
            // verySavvy: true,
        }
    }

//   static getInitialProps(contextObject) {
//       return {
//           query: contextObject.query
//       }
//   }

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
                fadeOut: false,
                verySavvy: false
            }
        });

    }, 50)
  
    // scrollToComponent(this.question, { offset: 0, align: 'top', duration: 1000})

  }

  handleVerySavvyClick = (event) => {
    event.preventDefault()
  
    this.setState( (prevState) => {
        return {
            // [name]: undefined,
            fadeOut: true
        }
    });

    logEvent("techSavvy", "very" )

    setTimeout( () => {
  
        this.setState( () => {
            return {
                verySavvy: true,
                techSavvy: undefined,
                fadeOut: false
            }
        });

    }, 50)


  }


  componentDidMount () {

    // scrollToComponent = require('react-scroll-to-component')
    // scrollToComponent = require('ssr-scroll-to')

    
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }


  render() {

    const optionChosen = this.state.techSavvy != undefined || this.state.verySavvy


    const techSavvyQuestion = <section className={`animated fadeIn ${!optionChosen ? "hero is-fullheight-with-navbar" : "section"}`}>
        <div className={`${ !optionChosen  && "hero-body"}`}>
            <div className="container has-text-centered">

                <h1 className="title" ref={(thisComponent) => { this.question = thisComponent; }} >How would you rate your level of technical expertise?</h1>

                <br />

                <button name="NOTtechSavvy" disabled={this.state.techSavvy == false} className={`button is-large is-success`} onClick={this.handleButtonClick}>Beginner</button>

                <br />

                <br />

                <button name="techSavvy" disabled={this.state.techSavvy == true} className={`button is-large is-success`} onClick={this.handleButtonClick}>Intermediate</button>

                <br />

                <br />

                <button disabled={this.state.verySavvy == true} className={`button is-large is-success`} onClick={this.handleVerySavvyClick}>Expert</button>

                {/* <br />

                <br /> */}





                {/* <div>
                    <button name="NOTtechSavvy" disabled={this.state.techSavvy == false} className={`button is-large is-success`} onClick={this.handleButtonClick}>Beginner</button>

                </div>

                <div>
                    <button name="techSavvy" disabled={this.state.techSavvy == true} className={`button is-large is-success`} onClick={this.handleButtonClick}>Intermediate</button>

                </div>

                <div>
                    <button disabled={this.state.verySavvy == true} className={`button is-large is-success`} onClick={this.handleVerySavvyClick}>Expert</button>

                </div> */}

                {/* <div className="columns is-centered">
                    
                    <div className="column is-one-third">
                        <button name="NOTtechSavvy" disabled={this.state.techSavvy == false} className={`button is-large is-success`} onClick={this.handleButtonClick}>Beginner</button>
                    </div>

                    <div className="column is-one-third">
                        <button name="techSavvy" disabled={this.state.techSavvy == true} className={`button is-large is-success`} onClick={this.handleButtonClick}>Intermediate</button>
                    </div>

                    <div className="column is-one-third">
                        <button disabled={this.state.verySavvy == true} className={`button is-large is-success`} onClick={this.handleVerySavvyClick}>Expert</button>
                    </div>


                </div> */}

            </div>
            
        </div>

    </section>


    const remainingQuestions = <div className={`${this.state.fadeOut ? "animated fadeOut" : "animated fadeIn" }`}>

        {typeof this.state.techSavvy != "undefined" && <StepByStepInstructions techSavvy={this.state.techSavvy} /> }

        {this.state.verySavvy && <VerySavvyInstructions />}


    </div>



    console.log("State as of render: ", this.state)
    return <div>

        <Header title="Instructions" />

        {techSavvyQuestion}

        { optionChosen && remainingQuestions }

        <Footer />

    </div>

  }

}