import React from 'react'
import '../styles/styles.scss'
// import Link from 'next/link'
import Header from '../components/Header'


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


  render() {

    console.log("State as of render: ", this.state)
    return <div>

        <Header />

        <section className="section">
            <div className="container">

                {/* <div className="tabs">
                    <ul>
                        <li className="is-active"><a>Pictures</a></li>
                        <li><a>Music</a></li>
                        <li><a>Videos</a></li>
                        <li><a>Documents</a></li>
                    </ul>
                </div> */}

                {/* <div className="box"> */}
                <h1 className="title">Part I: Buying the Tablet and Accessories</h1>



                <div className="box">
                    <div className="columns is-vcentered">
                        <div className="column is-one-third">
                            <figure className="image is-4by3">
                                <img src="/static/taba.webp" />
                            </figure>
                        </div>

                        <div className="column">
                            <div className="content">
                            {/* <p className="subtitle">Samsung Galaxy Tab A - 4G Version</p> */}
                                <p>I recommend the <strong className="highlight">4G version</strong> of the <strong className="highlight">Samsung Galaxy Tab A</strong>.</p>

                                <p>This is a very common tablet.  It can be purchased new on Amazon for about $160.</p>
                                
                                <p>If you plan to add the tablet to your existing family plan, you could also probably buy this tablet directly from you phone carrier.</p>

                                <br />

                                <a href="https://www.amazon.com/Samsung-Cellular-Unlocked-SM-T295-International/dp/B07XC3CW4G">
                                    <button className="button is-fullwidth is-link" >Buy on Amazon</button>
                                </a>

                                {/* <p>Wherever you buy it from, make sure that the product listing says it is:</p>
                                <ul>
                                    <li>4G compatible</li>
                                    <li>Unlocked (unless you're buying from your carrier)</li>
                                </ul> */}

                            </div>
                        </div>
                    </div>
                </div>


                <div className="box">
                    <div className="columns is-vcentered">
                        <div className="column is-one-third">
                            <figure className="image is-4by3">
                                <img src="/static/usb.jpg" />
                            </figure>
                        </div>

                        <div className="column">
                            <div className="content">
                            {/* <p className="subtitle">Samsung Galaxy Tab A - 4G Version</p> */}
                                <p>You might also want to buy an extra-long microUSB charging cable to go with the tablet.  I bought this 25-foot microUSB charging cable for my grandmother.</p>

                                <br />

                                <a href="https://smile.amazon.com/gp/product/B0763358FV">
                                    <button className="button is-fullwidth is-link" >Buy on Amazon</button>
                                </a>

                                {/* <p>Wherever you buy it from, make sure that the product listing says it is:</p>
                                <ul>
                                    <li>4G compatible</li>
                                    <li>Unlocked (unless you're buying from your carrier)</li>
                                </ul> */}

                            </div>
                        </div>

                    </div>
                </div>

                {/* <h1 className="title">Part I: Buy the Tablet</h1>
                <h2 className="subtitle">
                    A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
                </h2> */}


            </div>

            {/* </div> */}
        </section>

    </div>

  }

}