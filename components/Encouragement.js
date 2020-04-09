import Link from 'next/link'

const component = () => {

    
    return <div className="container has-text-centered">

        <div className="tabs">
            <ul></ul>
        </div>

        <br />
        <br />
        <br />



        <p className="title">These instructions look long, but they're actually very simple.</p>
        
        <br />

        <p className="subtitle is-size-6-mobile">These instructions are long because I've included a lot of detail.  In reality, this is a very easy process.</p>

        <p className="subtitle is-size-6-mobile">If you do have any trouble though, feel free to arrange a call with our "volunteer" tech support <Link href="/support"><a>here</a></Link>.</p>
        
        <br />
        <br />
        <br />






    </div>
}

export default component