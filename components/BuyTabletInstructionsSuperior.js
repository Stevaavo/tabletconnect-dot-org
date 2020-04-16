import React from 'react'
import '../styles/styles.scss'
import config from '../config'
import Link from 'next/link'
// import BuyTabletInstructions from './BuyTabletInstructions'
// import TableOfTablets from './TableOfTablets'
import CellClarification from './CellClarification'
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



    const buyWifi = <div>
        <div className="columns is-vcentered is-centered">

            <div className="column">

                <div className="content">
                    <p>
                        Just about any Android tablet should work.  If you have a tablet around the house that is not an iPad, it is likely an Android tablet.
                    </p>

                    <p>
                        Alternatively, you can buy an inexpensive Android tablet.  I recommend 
                        the <TrackedLink href="https://www.bestbuy.com/site/samsung-galaxy-tab-a-latest-model-8-32gb-black/6368084.p?skuId=6368084" >Samsung Galaxy Tab A - Wifi Version</TrackedLink>, 
                        which costs $149.  You can also find these used on eBay at a pretty low cost.
                    </p>

                    <p>
                        An old Android phone would probably work too.  You can just use it on WiFi, instead of setting up a cellular plan for it.
                        If you have a smartphone that is not an iPhone, it is probably an Android phone.
                    </p>

                    <p>
                        It is also possible to use an iPad or iPhone. 
                        Unfortunately though, <strong className="highlight">iPads and iPhones can't be set up to answer calls automatically</strong>. 
                        Only the Android version of the Skype app offers that setting. 
                    </p>

                </div>

            </div>

            <div className="column is-one-third">

                <figure class="image">
                    <img src="/static/tabAwifi.jpg" />
                </figure>

            </div>

        </div>
    </div>

    

    return <div className="container">

        <div className="tabs">
            <ul></ul>
        </div>

        <section className="section">
            <div className="container">

                {this.props.cellular && <h1 className="title">Part {this.props.stepNumber}: Getting a Tablet and 4G Service</h1> }
                {!this.props.cellular && <h1 className="title">Part {this.props.stepNumber}: Finding a Wifi Tablet</h1> }

                {this.props.cellular == false && buyWifi}

                
                {this.props.cellular && <CellClarification techSavvy={this.props.techSavvy} tabletChosen={this.props.tabletChosen} />}
                {/* {this.props.cellular && !this.props.techSavvy && buyCellNotSavvy} */}


            </div>
        </section>



    </div>
    

  }
}