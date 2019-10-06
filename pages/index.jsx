import React from "react";
import Navbar from '../client/components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="page-loader">
        <div className="loader">Loading...</div>
      </div>

      <div className="page" id="top">
        <section
          className="page-section bg-dark bg-dark-alfa-30"
          data-background="/images/S5.jpg"
          id="home"
        >
          <div className="relative container">
            <div className="home-content">
              <div className="home-text">
                <h1 className="hs-line-14 font-alt mb-0">Contact</h1>
              </div>
            </div>
          </div>
        </section>

        <nav className="main-nav dark transparent stick-fixed">
          <div className="full-wrapper relative clearfix">
            <div className="nav-logo-wrap local-scroll">
              <a href="/" className="logo">
                <img src="/images/mamarque.svg" alt="" />
              </a>
            </div>
            <div className="mobile-nav">
              <i className="fa fa-bars"></i>
            </div>

            <div className="inner-nav desktop-nav">
              <ul className="clearlist local-scroll">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/us">Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>

                <li>
                  <a className="active" href="/contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="active" href="/careers">
                    Careers
                  </a>
                </li>

                <li>
                  <a href="tel:205-995-2480">
                    <i className="fa fa-phone"></i> 205-995-2480
                  </a>
                </li>

                <li>
                  <a href="https://www.facebook.com/Morgan-Ashley-Studio-Salon-1831296120421943/">
                    <span className="mn-soc-link tooltip-bot" title="Facebook">
                      <i className="fa fa-facebook"></i>
                    </span>
                  </a>
                  <a href="https://www.instagram.com/morganashleysalon/">
                    <span className="mn-soc-link tolltip-bot" title="Instagram">
                      <i className="fa fa-instagram"></i>
                    </span>
                  </a>
                  <a href="https://www.pinterest.com/morgansalon">
                    <span className="mn-soc-link tooltip-bot" title="Pinterest">
                      <i className="fa fa-pinterest"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="page-section" id="contact">
          <div className="container relative">
            <div className="row mb-60 mb-xs-40">
              <div className="col-md-8 col-md-offset-2">
                <div className="row">
                  <h2>
                    Reach out to us with questions or requests! We would love to
                    get to know you and help however we can!
                  </h2>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="ci-title font-alt">Call Us</div>
                      <div className="ci-text">205-995-2480</div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="ci-title font-alt">Address</div>
                      <div className="ci-text">
                        7350 Cahaba Valley Rd, Birmingham
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-4 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <div className="ci-title font-alt">Email</div>
                      <div className="ci-text">
                        <a href="mailto:info@morganashleysalon.com">
                          info@morganashleysalon.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <form
                  method="POST"
                  action="/contact"
                  className="form contact-form"
                  id="contact_form"
                >
                  <div className="clearfix">
                    <div className="cf-left-col">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="input-md round form-control"
                          placeholder="Name"
                          pattern=".{3,100}"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="input-md round form-control"
                          placeholder="Email"
                          pattern=".{5,100}"
                          required
                        />
                      </div>
                    </div>

                    <div className="cf-right-col">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="input-md round form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="clearfix">
                    <div className="cf-left-col">
                      <div className="form-tip pt-20">
                        <i className="fa fa-info-circle"></i> All the fields are
                        required
                      </div>
                    </div>

                    <div className="cf-right-col">
                      <div className="align-right pt-10">
                        <input
                          type="submit"
                          className="submit_btn btn btn-mod btn-medium btn-round"
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div id="result"></div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div className="google-map">
          <div
            data-address="7350 Cahaba Valley Rd, Birmingham, Alabama, United States"
            id="map-canvas"
          ></div>
        </div>

        <footer className="small-section bg-gray-lighter footer pb-60">
          <div className="container">
            <div className="row mb-40 align-left">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6 col-lg-3 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon">
                        <i className="fa fa-phone"></i>
                      </div>
                      <div className="ci-title font-alt">Call Us</div>
                      <div className="ci-text">205 995 2480</div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-3 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon">
                        <i className="fa fa-envelope"></i>
                      </div>
                      <div className="ci-title font-alt">Email</div>
                      <div className="ci-text">
                        <a href="mailto:info@morganashleysalon.com">
                          info@morganashleysalon.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-3 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon">
                        <i className="fa fa-map-marker"></i>
                      </div>
                      <div className="ci-title font-alt">Address</div>
                      <div className="ci-text">
                        7350 Cahaba Valley Rd, Birmingham
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-lg-3 pt-20 pb-20 pb-xs-0">
                    <div className="contact-item">
                      <div className="ci-icon">
                        <i className="fa fa-clock-o"></i>
                      </div>
                      <div className="ci-title font-alt">We are open</div>
                      <div className="ci-text">
                        Monday-Thursday: 8am to 8pm <br />
                        Friday: 9am to 5pm <br />
                        Saturday: 9am to 4pm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="mt-0 mb-60 " />

            <div className="footer-social-links mb-30">
              <a
                href="https://www.facebook.com/Morgan-Ashley-Studio-Salon-1831296120421943/"
                title="Facebook"
                target="_blank"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://instagram.com/morganashleysalon"
                title="Instagram"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://pinterest.com/morgansalon"
                title="Pinterest"
                target="_blank"
              >
                <i className="fa fa-pinterest"></i>
              </a>
            </div>

            <div className="footer-text">
              Morgan Ashley Studio Salon
              <div className="footer-made">Made with love by Morgan and Daniel</div>
            </div>
          </div>

          <div className="local-scroll">
            <a href="#top" className="link-to-top">
              <i className="fa fa-caret-up"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
