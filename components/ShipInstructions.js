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

                <h1 className="title">Part 7: Give it!</h1>

                <div className="content">

                    <p>
                        Let's get the tablet to your parent/grandparent!
                    </p>

                    <p>
                        If you are dropping off the tablet at your parent/grandparent's home, you might consider leaving the tablet on when you do so.  
                        If it arrives at your parent/grandparent already on, then all they need to do is plug it in. 
                        Tablets have larger batteries than phones, and can usually stay on for several days between charges, if they are not in active use. 
                    </p>

                    <p>
                        I would also suggest <strong className="highlight">disinfecting</strong> the tablet before you ship it, since coronavirus can survive for a long time on glass and plastic surfaces.  You can
                        find a guide to disinfecting tablets and smartphones <a href="https://thewirecutter.com/blog/disinfect-your-phone-coronavirus/">here</a>.
                    </p>

                </div>


            </div>
        </section>



    </div>
    

  }
}