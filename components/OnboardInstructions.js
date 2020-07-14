import React from 'react'
import '../styles/styles.scss'
import config from '../config'
import Link from 'next/link'
// import BuyTabletInstructions from './BuyTabletInstructions'
// import TableOfTablets from './TableOfTablets'


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

                <h1 className="title">Last Step: Onboarding</h1>

                <div className="content">

                    <p>
                        Your relative/friend has received the tablet, and now it's time to get them introduced to it!
                    </p>

                    <p>
                        If your relative/friend has a nurse or aide, you might consider asking for their help in this.  
                        If they are currently in a hospital or rehab facility, you could try calling the nurse's station to see if one of them can help.
                    </p>

                    <p>
                        This is all that's left to do:
                    </p>

                    <ul>
                        <li>Turn the tablet on</li>
                        {this.props.cellular == false && <li>Connect the tablet to wifi</li>}
                        <li>Plug the charger into a wall outlet</li>
                        <li>Plug the charger cable into the tablet</li>
                        <li>Put the tablet somewhere they will hear your voice or see your face when you call</li>
                    </ul>


                    <p>
                        That's it!  Hope you find this helpful.  If you have any trouble, feel free to ask for help <Link href="/support"><a>here</a></Link>.
                    </p>
                    

                </div>



            </div>
        </section>



    </div>
    

  }
}