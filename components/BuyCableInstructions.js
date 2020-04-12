import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import BuyTabletInstructions from '../components/BuyTabletInstructions'
import TableOfTablets from './TableOfTablets'
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


    const notSavvyText = <div className="content">

        <p>
            The tablet will probably come with a charging cable that is about 4 feet long.  I recommend buying a extra-long cable to use instead, so that the 
            device can charge in whatever spot your relative/friend feels would be most convenient for them to see/hear/reach it.  
            This is especially true if the tablet needs to reach the side of a hospital bed.
        </p>

        <p>
            Just make sure the tablet isn't placed in a location where the long cable will pose a tripping hazard for your relative/friend.
        </p>

        
        <p>
            If you're going with a Samsung Galaxy Tab A 8", or an Alcatel Joy Tab, I recommend <TrackedLink href="https://www.amazon.com/gp/product/B0763358FV">this $7.99 
            25-foot microUSB cable</TrackedLink> that I bought for my grandmother.  It's definitely overkill, but it will get the job done.
        </p>

        <p>
            Other tablets (such as the Samsung Galaxy Tab A 8.4") may require a different cable type called "USB-C."  I haven't tested any extra-long USB-C cables, 
            but <TrackedLink href="https://www.amazon.com/Anker-Powerline-Double-Braided-Charging-Samsung/dp/B07VWLLBP1">this $13.99 10-foot cable</TrackedLink> comes from a good brand.
        </p>

        <p>
            If you're not sure which cable your tablet needs, I'd suggest buying both, and then seeing which one fits.  
            You can also reach out to me here and I can try to help you figure it out.
        </p>

    </div>

    const savvyText = <div className="content">

        <p>
            The tablet will come with a charging cable that is about 4 feet long.  I recommend buying a extra-long cable to use instead, so that the 
            device can charge in whatever spot your relative/friend feels would be most convenient for them to see/hear/reach it.  This is especially true if the tablet needs
            to reach the side of a hospital bed.
        </p>

        <p>
            Just make sure the tablet isn't placed in a location where the long cable will pose a tripping hazard for your relative/friend.
        </p>
        
        <p>
            If you're going with the 2019 Samsung Galaxy Tab A 8" that I recommended above, it uses a microUSB charging port.  
            I recommend <TrackedLink href="https://www.amazon.com/gp/product/B0763358FV">this $7.99 25-foot microUSB cable</TrackedLink> that I bought for my grandmother.  
            It's definitely overkill, but it will get the job done.
        </p>

        <p>
            Other tablets, or more recent versions of the Galaxy Tab A, might have a USB-C type charging port.  I haven't tested any extra-long USB-C cables, 
            but <TrackedLink href="https://www.amazon.com/Anker-Powerline-Double-Braided-Charging-Samsung/dp/B07VWLLBP1">this $13.99 10-foot cable</TrackedLink> comes from a good brand.
        </p>

    </div>


    

    return <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                <h1 className="title">Part 3: Buying a Long Charging Cable</h1>

                <div className="columns is-vcentered is-centered">

                    <div className="column">
                        {this.props.techSavvy ? savvyText : notSavvyText}
                    </div>
                
                    <div className="column is-one-third">
                        <figure class="image">
                            <img src="/static/usb.jpg" />
                        </figure>
                    </div>

                </div>

            </div>
        </section>


    </div>
    

  }
}