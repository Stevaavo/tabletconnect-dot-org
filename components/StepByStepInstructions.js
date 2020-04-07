import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import Header from '../components/Header'
import StepByStepInstructions from '../components/StepByStepInstructions'
import TechSavvyInstructions from '../components/TechSavvyInstructions'


export default class Home extends React.Component {
  constructor(props) {
      super(props)
      this.state = {}
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

    return <section className="section">
        <div className="container">


        </div>
    </section>

  }
}