import React from 'react';

const Navbar = () => {
    return (
        <nav className="main-nav dark stick-fixed js-transparent small-height">
            <div className="full-wrapper relative clearfix">

                <div className="nav-logo-wrap local-scroll">
                    <a href="/" className="logo small-height">
                        <img src="/images/mamarque.svg" alt=""/>
                        </a>
                    </div>
                    <div className="mobile-nav small-height" style="height: 75px; line-height: 75px; width: 75px;">
                        <i className="fa fa-bars"></i>
                    </div>

                    <div className="inner-nav desktop-nav">
                        <ul className="clearlist local-scroll">

                            <li><a href="/" style="height: 75px; line-height: 75px;">Home</a></li>

                            <li><a href="/us" style="height: 75px; line-height: 75px;">Us</a></li>
                            <li><a className="active" href="/services" style="height: 75px; line-height: 75px;">Services</a></li>

                            <li><a href="/contact" style="height: 75px; line-height: 75px;">Contact</a></li>
                            <li><a href="/careers" style="height: 75px; line-height: 75px;">Careers</a></li>

                            <li><a href="tel:205-995-2480" style="height: 75px; line-height: 75px;"><i className="fa fa-phone"></i> 205-995-2480</a></li>


                            <li>
                                <a href="https://www.facebook.com/Morgan-Ashley-Studio-Salon-1831296120421943/" style="height: 75px; line-height: 75px;"><span className="mn-soc-link tooltip-bot" title="" data-original-title="Facebook"><i className="fa fa-facebook"></i></span></a>
                                <a href="https://www.instagram.com/morganashleysalon/" style="height: 75px; line-height: 75px;"><span className="mn-soc-link tolltip-bot" title="Instagram"><i className="fa fa-instagram"></i></span></a>
                                <a href="https://www.pinterest.com/morgansalon" style="height: 75px; line-height: 75px;"><span className="mn-soc-link tooltip-bot" title="" data-original-title="Pinterest"><i className="fa fa-pinterest"></i></span></a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
            )
        };
        
export default Navbar;