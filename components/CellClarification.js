import React from 'react'
import '../styles/styles.scss'
import config from '../config'
import Link from 'next/link'
import TrackedLink from '../components/TrackedLink'
import { initGA, logPageView, logEvent } from '../utils/analytics'


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
    
    logEvent(name, (!falseButton).toString() )
  }


  handleCarrierClick = (event) => {
    event.preventDefault()

    const target = event.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;
  
    this.setState( (prevState) => {
        return {
            carrier: name
        }
    });

    
    logEvent("carrier", name)
  }


  

  render() {

    if (this.state.carrier || this.state.USA == false) {
        this.props.tabletChosen("android")
    }

    const iPadWarning = <p>
        <strong className="highlight">Heads Up:</strong> I recommend against going with an iPad, because iPads and iPhones can't be set up to answer Skype calls automatically.
    </p>

    const dataExplanation = <p>
        Your plan might already include unlimited data for the tablet.  Or, you might be asked to choose a plan for the tablet with a limited amount of monthly data.
        If you need to choose how much data to buy for the tablet, a good rule of thumb is that every gigabyte (GB) of "LTE" data works out 
        to roughly 1 hour and 15 minutes of talk-time over video chat.
    </p>


    const microUsbCableRecommendation = <div>
        <p>
            The tablet will come with a charging cable that is about 4 feet long.  Depending on your relative/friend's needs, you might want to buy an extra-long cable, so that the 
            device can charge in whatever spot would be most convenient for them to see/hear/reach it.
        </p>

        <p>
            I recommend <TrackedLink href="https://www.amazon.com/gp/product/B0763358FV">this $7.99 
            25-foot microUSB cable</TrackedLink> that I bought for my grandmother.  It's definitely overkill, but it will get the job done. 
            Just <strong className="highlight">make sure it doesn't get positioned somewhere that it might pose a tripping hazard</strong>.
        </p>
    </div>
    
    const usbCCableRecommendation = <div>
        <p>
            The tablet will come with a charging cable that is about 4 feet long.  Depending on your relative/friend's needs, you might want to buy an extra-long cable, so that the 
            device can charge in whatever spot would be most convenient for them to see/hear/reach it.
        </p>

        <p>
            I recommend <TrackedLink href="https://www.amazon.com/Anker-Powerline-Double-Braided-Charging-Samsung/dp/B07VWLLBP1">this $13.99 10-foot USB-C cable</TrackedLink>.
            Just <strong className="highlight">make sure it doesn't get positioned somewhere that it might pose a tripping hazard</strong>.
        </p>
    </div>
    
    const unknownCableRecommendation = <div>
        <p>
            Most tablets will come with a charging cable that is about 4 feet long.  Depending on your relative/friend's needs, you might want to buy an extra-long cable, so that the 
            device can charge in whatever spot would be most convenient for them to see/hear/reach it.
        </p>

        {this.state.USA && <p>
            If your tablet has a USB-C charging port, <TrackedLink href="https://www.amazon.com/Anker-Powerline-Double-Braided-Charging-Samsung/dp/B07VWLLBP1">this USB-C cable</TrackedLink> is a good choice.  
            Or if it has a microUSB charging port, I recommend <TrackedLink href="https://www.amazon.com/gp/product/B0763358FV">this microUSB cable</TrackedLink>. 
            If you're not sure what type of charging port your tablet has, you can buy both, or you can email us and we'll help you figure it out.
        </p>}
    </div>
    




    const att = <div className="animated fadeIn">

        <br />
        <br />
        <br />

        <div className = "columns is-vcentered">

            <div className="column">

                <div className="content">


                    <p>
                        <strong className="highlight">UPDATED 4/24/2020:</strong> If you followed the previous version of this guide that recommended buying a tablet from 
                        Amazon, and you are now having trouble activating it on the AT&T network, 
                        shoot me an email at <TrackedLink href="mailto:help@tabletconnect.org">help@tabletconnect.org</TrackedLink> and
                        I'll walk you through the solution.
                    </p>

                    <p>------------------------------------</p>

                    <p>
                        Unfortunately AT&T doesn't offer any low-cost tablets. 
                        Thus, I recommend that you actually 
                        get <TrackedLink href="https://prepaid.t-mobile.com/product-details/alcatel-joy-tab/Metallic%20Black">this $168 tablet</TrackedLink> from 
                        T Mobile Prepaid instead, with its own separate plan.
                    </p>

                    <p>
                        T Mobile Prepaid has data plans that start at $10/month for 2 GB of high-speed data, going up to $50/month for unlimited data. 
                        1 GB of high-speed data works out to roughly 1 hour and 15 mintues of talk time.
                        However, T Mobile is also offering 50 GB of high-speed data to all customers for free through May 13 due to COVID, 
                        and there is a chance that this will be extended.
                    </p>

                    {microUsbCableRecommendation}

                </div>

                <div className="content">

                    <p>
                        Alternatively, if you would like to stick with AT&T in spite of the higher tablet cost, I recommend 
                        purchasing <TrackedLink href="https://www.att.com/buy/tablets/samsung-galaxy-tab-s5e-64gb-black.html">this $479 tablet</TrackedLink>. 
                        In that case, if you want a longer charging cable, it will need to be a "USB-C" type cable.  
                        I recommend <TrackedLink href="https://www.amazon.com/Anker-Powerline-Double-Braided-Charging-Samsung/dp/B07VWLLBP1">this $13.99 10-foot USB-C cable</TrackedLink>.
                    </p>









                    {/* <p>
                        <strong className="highlight">UPDATE 4/22/2020:</strong> I've heard from a couple readers that they're having a hard time activating tablets on AT&T. 
                        I'm working on finding a solution now, and hope to have this part of the guide updated by Friday, April 24. 
                        In the meantime, I would recommend that AT&T subscribers hold off on following the instructions below. 
                        You might consider 
                        purchasing <TrackedLink href="https://prepaid.t-mobile.com/product-details/alcatel-joy-tab/Metallic%20Black">this $168 tablet</TrackedLink> from 
                        T Mobile Prepaid instead, with T Mobile Prepaid's $10/month, 2GB/month data plan.
                    </p>

                    <p>
                        If you already bought the tablet that I recommended below, and AT&T won't let you activate it, drop me a line 
                        at <TrackedLink href="mailto:help@tabletconnect.org">help@tabletconnect.org</TrackedLink> and
                        I'll help you get that resolved.
                    </p>

                    <p>------------------------------------</p>



                    <p>
                        I recommend buying <TrackedLink href="https://www.amazon.com/Samsung-Cellular-Unlocked-SM-T295-International/dp/B07XC3CW4G">this tablet from Amazon</TrackedLink>.
                    </p>

                    <p>
                        After the tablet arrives, call {this.state.carrier} and tell them you want to add a tablet to your cell phone plan.  
                        Ask them to send you a SIM card for it.  When you get the SIM card in the mail, insert it into the tablet, and you’re good to go!
                    </p>

                    <p>
                        This video will show you how to insert the SIM card: <TrackedLink href="https://youtu.be/WUhfYauKDTY">https://youtu.be/WUhfYauKDTY</TrackedLink>
                    </p>

                    <p>
                        {this.state.carrier} will usually charge $20 extra per month to add a tablet to your phone plan.
                    </p>

                    {dataExplanation}

                    {microUsbCableRecommendation} */}

                </div>

            </div>

            <div className="column is-one-third">
                <div className="columns is-centered">

                    <div className="column is-half">

                        <figure class="image">
                            <img src="/static/tabA4gHalfsize.jpg" />
                        </figure>

                    </div>
                    
                </div>
            </div>

        </div>
    </div>





    const tmobile = <div className="animated fadeIn">

        <br />
        <br />
        <br />

        <div className = "columns is-vcentered">

            <div className="column">

                <div className="content">
                    <p>
                        I recommend buying <TrackedLink href="https://www.t-mobile.com/tablet/alcatel-joy-tab?sku=610214661333">this tablet</TrackedLink> from {this.state.carrier}.
                    </p>

                    <p>
                        You can buy it and add it to your phone service plan through their website at the link above, or you can call them to arrange the purchase. 
                        When the tablet arrives, it will already be connected to your {this.state.carrier} plan "out of the box."
                    </p>

                    <p>
                        In most cases, {this.state.carrier} will charge between $15 and $35 extra per month to add a tablet to your phone plan.
                    </p>

                    {/* {iPadWarning} */}

                    {dataExplanation}

                    {microUsbCableRecommendation}

                </div>

            </div>

            <div className="column is-one-third">
                <div className="columns is-centered">

                    <div className="column is-half">

                        <figure class="image">
                            <img src="/static/joytab.jpg" />
                        </figure>

                    </div>
                    
                </div>
            </div>

        </div>
    </div>


    const verizon = <div className="animated fadeIn">

        <br />
        <br />
        <br />

        <div className = "columns is-vcentered">

            <div className="column">

                <div className="content">
                    <p>
                        I recommend buying <TrackedLink href="https://www.verizonwireless.com/tablets/samsung-galaxy-tab-a-8-4/?sku=sku3770101">this tablet</TrackedLink> from {this.state.carrier}.
                    </p>

                    <p>
                        You can buy it and add it to your phone service plan through their website at the link above, or you can call them to arrange the purchase. 
                        When the tablet arrives, it will already be connected to your {this.state.carrier} plan "out of the box."
                    </p>

                    <p>
                        In most cases, {this.state.carrier} will charge between $10 and $20 per month to add a tablet to your phone plan.
                    </p>

                    {/* {iPadWarning} */}

                    {dataExplanation}

                    {usbCCableRecommendation}

                </div>

            </div>

            <div className="column is-one-third">
                <div className="columns is-centered">

                    <div className="column is-half">

                        <figure class="image">
                            <img src="/static/tabAverizon.png" />
                        </figure>

                    </div>
                    
                </div>
            </div>

        </div>
    </div>
    


    const sprint = <div className="animated fadeIn">

        <br />
        <br />
        <br />

        <div className = "columns is-vcentered">

            <div className="column">

                <div className="content">
                    <p>
                        I recommend buying <TrackedLink href="https://www.sprint.com/en/shop/tablets/samsung-galaxy-tab-a-101.html?ensembleId=SPHT517TAB&contractName=0-yr-ib&deviceQuantity=1&plan=pln10440007prd&tep=true&protectionPlan=57600082">this tablet</TrackedLink> from {this.state.carrier}.
                    </p>

                    <p>
                        You can buy it and add it to your phone service plan through their website at the link above, or you can call them to arrange the purchase.  
                        When the tablet arrives, it will already be connected to your {this.state.carrier} plan "out of the box."
                    </p>

                    {/* {iPadWarning} */}

                    <p>
                        In most cases, {this.state.carrier} will charge between $15 and $30 per month to add a tablet to your phone plan.
                    </p>

                    {dataExplanation}

                    {usbCCableRecommendation}

                </div>

            </div>

            <div className="column is-one-third">
                <div className="columns is-centered">

                    <div className="column ">

                        <figure class="image">
                            <img src="/static/tabAsprint.jpg" />
                        </figure>

                    </div>
                    
                </div>
            </div>

        </div>
    </div>
    


    const otherCarrier = <div className="animated fadeIn">

        <br />
        <br />
        <br />

        <div className = "columns is-vcentered">

            <div className="column">

                <div className="content">
                    <p>
                        I'd suggest calling your phone carrier and purchasing the cheapest Android tablet that they have available. 
                        {/* I recommend against going with an iPad, because iPads and iPhones can't be set up to answer Skype calls automatically, unfortunately. */}
                    </p>

                    <p>
                        If you're not sure what to choose, or if your carrier doesn't sell tablets, feel free to shoot us an email at <TrackedLink href="mailto:help@tabletconnect.org">help@tabletconnect.org</TrackedLink>.  
                        Tell us which carrier you are using, and we'll find a good option for you.
                    </p>

                    {iPadWarning}

                    {dataExplanation}

                    {unknownCableRecommendation}

                </div>

            </div>

            {/* <div className="column is-one-third">
                <div className="columns is-centered">

                    <div className="column ">

                        <figure class="image">
                            <img src="/static/tabAsprint.jpg" />
                        </figure>

                    </div>
                    
                </div>
            </div> */}

        </div>
    </div>



    const whichCarrier = <div className="animated fadeIn">

        <br />
        <br />
        <br />

        <div className="has-text-centered">

            <h1 className="title is-size-4">
                In most cases, the cheapest way to get a tablet onto a 4G plan is by adding it to your existing phone plan. 
                Which carrier do you use for your current smartphone?
            </h1>

            <br />

            <div className="columns is-centered">
                <div className="column">
                    <button name="Verizon" disabled={this.state.carrier == "Verizon"} className={`button is-medium is-success`} onClick={this.handleCarrierClick}>Verizon</button>
                </div>
                
                <div className="column">
                    <button name="AT&T" disabled={this.state.carrier == "AT&T"} className={`button is-medium is-success`} onClick={this.handleCarrierClick}>AT&T</button>
                </div>
                
                <div className="column ">
                    <button name="T-Mobile" disabled={this.state.carrier == "T-Mobile"} className={`button is-medium is-success`} onClick={this.handleCarrierClick}>T-Mobile</button>
                </div>
                
                <div className="column">
                    <button name="Sprint" disabled={this.state.carrier == "Sprint"} className={`button is-medium is-success`} onClick={this.handleCarrierClick}>Sprint</button>
                </div>
                
                <div className="column">
                    <button name="other" disabled={this.state.carrier == "other"} className={`button is-medium is-success`} onClick={this.handleCarrierClick}>Other</button>
                </div>

            </div>

        </div>





        {(this.state.carrier == "T-Mobile") && tmobile}
        {(this.state.carrier == "AT&T") && att}
        {(this.state.carrier == "Verizon") && verizon}
        {(this.state.carrier == "Sprint") && sprint}
        {(this.state.carrier == "other") && otherCarrier}

    </div>




    return <div>

        <div className="has-text-centered">

            <br />

            <h1 className="title is-size-4">Are you in the United States?</h1>

            <br />

            <div className="columns is-centered">
                <div className="column is-one-third">
                    <button name="USA" disabled={this.state.USA == true} className={`button is-medium is-success`} onClick={this.handleButtonClick}>Yes</button>
                </div>
                
                <div className="column is-one-third">
                    <button name="NOTUSA" disabled={this.state.USA == false} className={`button is-medium is-success`} onClick={this.handleButtonClick}>No</button>
                </div>
            </div>

        </div>

        {this.state.USA == true && whichCarrier}

        {this.state.USA == false && otherCarrier}




    </div>
    

  }
}