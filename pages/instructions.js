import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import Header from '../components/Header'
import StepByStepInstructions from '../components/StepByStepInstructions'
import TechSavvyInstructions from '../components/TechSavvyInstructions'


export default class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          notTechSavvy: true
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
    const name = target.name;
  
    this.setState( (prevState) => {
        return {
            [name]: !prevState[name]
        }
    });
  }


  render() {


    const techSavvyQuestion = <section className="hero is-fullheight-with-navbar animated fadeIn">
        <div className="hero-body">
            <div className="container has-text-centered">

                <h1 className="title">Would you consider yourself moderately "tech-savvy"?</h1>

                <br />

                <div className="columns is-centered">
                    <div className="column is-one-third">
                        <button name="techSavvy" className="button is-large is-success" onClick={this.handleButtonClick}>Yes</button>
                    </div>
                    
                    <div className="column is-one-third">
                        <button name="notTechSavvy" className="button is-large is-success" onClick={this.handleButtonClick}>No</button>
                    </div>
                </div>

            </div>
            
        </div>

    </section>



    console.log("State as of render: ", this.state)
    return <div>

        <Header />

        {!this.state.techSavvy && !this.state.notTechSavvy && techSavvyQuestion}

        {this.state.techSavvy && <TechSavvyInstructions /> }

        {this.state.notTechSavvy && <StepByStepInstructions /> }




    </div>

  }

}