const tableOfTablets = <div className="columns is-centered">
    <div className="column is-narrow">
        <table className="table">
            <thead>
                <tr>
                    <td>Carrier</td>
                    <td>Device</td>
                    <td>Price w/ 2 Year Commitment</td>
                    <td>Full Price w/o Commitment</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td rowSpan={2}>
                        <strong>Verizon</strong>
                    </td>

                    <td>
                        <a href="https://www.verizonwireless.com/tablets/samsung-galaxy-tab-a/">
                            Samsung Galaxy Tab A - 8.0 inch
                        </a>
                    </td>
                    <td>$200</td>
                    <td>$250</td>
                </tr>

                <tr>
                    {/* <td rowSpan={2}>Verizon</td> */}
                    <td>
                        <a href="https://www.verizonwireless.com/tablets/samsung-galaxy-tab-a-8-4/?sku=sku3770101">
                            Samsung Galaxy Tab A - 8.4 inch
                        </a>
                    </td>

                    <td>$230</td>
                    <td>$280</td>
                </tr>



            
                
                <tr>
                    <td rowSpan={2}>
                        <strong>AT&T</strong>
                    </td>

                    <td>
                        <a href="https://www.att.com/buy/tablets/samsung-galaxy-tab-a-32gb-black-refurbished.html">
                            Samsung Galaxy Tab A - 8.0" - Refurb
                        </a>
                    </td>
                    <td>$187</td>
                    <td>$187</td>
                </tr>

                <tr>
                    {/* <td rowSpan={2}>Verizon</td> */}
                    <td>
                        <a href="https://www.att.com/buy/tablets/samsung-galaxy-tab-s5e-64gb-black.html">
                            Samsung Galaxy Tab S5e
                        </a>
                    </td>

                    <td>$480</td>
                    <td>$480</td>
                </tr>



            
                
                <tr>
                    <td rowSpan={2}>
                        <strong>T-Mobile</strong>
                    </td>

                    <td>
                        <a href="https://www.t-mobile.com/tablet/alcatel-joy-tab?sku=610214661333">
                            Alcatel Joy Tab
                        </a>
                    </td>
                    <td>$168</td>
                    <td>$168</td>
                </tr>

                <tr>
                    {/* <td rowSpan={2}>Verizon</td> */}
                    <td>
                        <a href="https://www.t-mobile.com/tablet/samsung-galaxy-tab-a-8-4?sku=610214704696">
                            Samsung Galaxy Tab A - 8.4 inch
                        </a>
                    </td>

                    <td>$264</td>
                    <td>$264</td>
                </tr>



            
                
                <tr>
                    <td rowSpan={1}>
                        <strong>Sprint</strong>
                    </td>

                    <td>
                        <a href="https://www.sprint.com/en/shop/tablets/samsung-galaxy-tab-a-101.html">
                            Samsung Galaxy Tab A - 10.1 inch
                        </a>
                    </td>
                    <td>$0</td>
                    <td>$339</td>
                </tr>


            
                
                <tr>
                    <td rowSpan={1}>
                        <strong>Other</strong>
                    </td>

                    <td>
                        {/* <a > */}
                            Samsung Galaxy Tab A - Any Size
                        {/* </a> */}
                    </td>
                    <td>n/a</td>
                    <td>n/a</td>
                </tr>


            </tbody>
        </table>
    </div>
</div>


export default tableOfTablets