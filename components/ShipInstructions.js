import React from 'react'
import '../styles/styles.scss'
import config from '../config'
// import Link from 'next/link'
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

                <h1 className="title">Part {this.props.stepNumber}: Give it!</h1>

                <div className="content">

                    <p>
                        Let's get the tablet to your relative/friend!
                    </p>

                    <p>
                        If you are dropping off the tablet at your relative/friend's home, or at a hospital/rehab front desk, you might consider leaving the tablet on and plugged into its charger when you do so.  
                        Then all they need to do is plug the charger into an electrical outlet. 
                        Tablets have larger batteries than phones, and can usually stay on for several days between charges, if they are not in active use. 
                    </p>

                    <p>
                        If you are shipping the tablet, you may want to leave the tablet plugged into its charger when you package it. 
                        Just make sure to box it up in a way that no pressure will be placed on the charging connector when the package is kicked around in transit. 
                        Here is a <TrackedLink href="/static/packaging.png">photo of an example packaging arrangement</TrackedLink>.
                    </p>

                    <p>
                        Either way, <strong className="highlight">make sure to disinfect</strong> the tablet before you ship it, since coronavirus can survive for a long time on glass and plastic surfaces.  You can
                        find a guide to disinfecting tablets and smartphones <TrackedLink href="https://thewirecutter.com/blog/disinfect-your-phone-coronavirus/">here</TrackedLink>. 
                        In my case, I wet a paper towel with Lysol, and then wiped down the tablet, the charger, and the inside of the packaging that I used to ship it all.
                    </p>

                </div>


            </div>
        </section>



    </div>
    

  }
}