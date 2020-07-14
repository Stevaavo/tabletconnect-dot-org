import React from 'react'
import NextHead from 'next/head'
import Link from 'next/link'
import config from '../config'

export default class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    toggleMenu = () => {
        this.setState( (prevState) => {
            return {
                menuOpen: !prevState.menuOpen
            }
        })
    }

    render() {

        var title

        if (this.props.title && config.title) {
            title = this.props.title + " - " + config.title
        } else if (this.props.title || config.title) {
            title = this.props.title || config.title
        }

        return <section>
        
            <NextHead>
                {title && <title>{title}</title>}
                {this.props.description && <meta name="description" content={this.props.description} />}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <link href="https://fonts.googleapis.com/css?family=Fugaz+One&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />

            </NextHead>

                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link href="/">
                                <a className="navbar-item logo-font title" >
                                    <span className="is-hidden-mobile">TabletConnect.org</span>
                                    <span className="is-hidden-tablet is-size-4">TabletConnect</span> {/* This shorter title is shown on mobile devices */}
                                </a>
                            </Link>

                            <a role="button" onClick={this.toggleMenu} className={`navbar-burger ${this.state.menuOpen && "is-active"}`} aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className={`navbar-menu ${this.state.menuOpen && "is-active"}`}>
                            <div className="navbar-start">
                                {/* <a className="navbar-item has-text-weight-bold">Test</a> */}
                            </div>

                            <div className="navbar-end">
                                <div className="navbar-item">


                                            <Link href="/instructions">
                                                <a className="button is-success">
                                                    <span className="icon">
                                                        <i className="fas fa-book-open"/>
                                                    </span>
                                                    <span>
                                                        Instructions
                                                    </span>
                                                </a>
                                            </Link>

                                </div>

                                
                                <div className="navbar-item">

                                            <Link href="support">
                                                <a className="button is-link">
                                                    <span className="icon">
                                                        <i className="fas fa-hands-helping"></i>
                                                    </span>
                                                    <span>Tech Support (Volunteer)</span>
                                                </a>
                                            </Link>
                                </div>

                                <div className="navbar-item">
                                    <Link href="/contact">
                                        <a className="navbar-item">
                                            Contact
                                        </a>
                                    </Link>
                                </div>

















                                {/* <a className="navbar-item has-text-weight-bold">Test</a> */}
                                {/* <Link href="/dashboard">
                                    <a className="navbar-item ">Instructions</a>
                                </Link>
                                
                                
                                <a className="navbar-item button is-primary" href="#">
                                    <span className="icon">
                                        <i className="fas fa-download"></i>
                                    </span>
                                    <span>Volunteer Tech Support</span>
                                </a> */}
                                {/* <a className="navbar-item " href="#">Contact</a> */}




                            </div>
                        </div>
                    </div>
                </nav>
            </section>
    }
}