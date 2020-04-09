import React from 'react'
import '../styles/styles.scss'
import config from '../config'
// import Link from 'next/link'
import BuyTabletInstructions from './BuyTabletInstructions'
import TableOfTablets from './TableOfTablets'


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

                <h1 className="title">Part 6: Mark the Buttons</h1>

                <div className="columns is-vcentered">

                    <div className="column is-one-third">
                        <figure class="image">
                            <img src="/static/marked.jpg" />
                        </figure>
                    </div>


                    <div className="column">

                        <div className="content">

                            <p>
                                I recommend marking the buttons for <strong className="highlight">"Power,"</strong> <strong className="highlight">"Volume Up"</strong> and <strong className="highlight">"Volume Down"</strong>.  
                                {/* This might make it easier if you need to help your parent/grandparent troubleshoot an issue with the tablet over the phone. */}
                            </p>

                            <p>
                                You can mark the tablet by putting down a piece of masking tape or duct tape alongside the buttons, and writing on it with a sharpie.
                            </p>

                        </div>

                    </div>

                </div>




            </div>
        </section>



    </div>
    

  }
}