import "../index.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import businessWebsite from "../assets/images/services/business-website.jpg";
import analyticsDashboard from "../assets/images/services/analytics-dashboard.jpg";
import chatSystem from "../assets/images/services/chat-system.jpg";

function Services() {
    return (
        <div className="page-wrapper">

            <Navbar activePage="services" />

            <main className="services-page">

                <section className="page-hero">

                    <div className="page-hero-content">

                        <span className="hero-label">
                            WHAT WE BUILD
                        </span>

                        <h1>
                            Digital Solutions
                            <br />
                            Built Around You.
                        </h1>

                        <p>
                            From beautiful business websites to complete
                            web-based systems, we build digital products
                            designed around how your business actually works.
                        </p>

                    </div>

                </section>


                <section className="services-section">

                    <div className="section-heading">

                        <span className="section-label">
                            OUR SERVICES
                        </span>

                        <h2>
                            More than just websites.
                        </h2>

                        <p>
                            Whether you need an online presence or a complete
                            system for running part of your business, we can
                            build it.
                        </p>

                    </div>


                    <div className="services-grid">

                        <div className="service-card-large">

                            <div className="service-number">
                                01
                            </div>

                            <div className="service-image">
                                <img
                                    src={businessWebsite}
                                    alt="Modern business website"
                                />
                            </div>

                            <div className="service-icon">
                                ◈
                            </div>

                            <h3>
                                Frontend Websites
                            </h3>

                            <p>
                                Modern, responsive websites that make your
                                business look professional and help customers
                                understand what you offer.
                            </p>

                            <ul>
                                <li>Business websites</li>
                                <li>Landing pages</li>
                                <li>Portfolio websites</li>
                                <li>Restaurant websites</li>
                                <li>Product catalogues</li>
                                <li>Mobile-friendly design</li>
                            </ul>

                        </div>


                        <div className="service-card-large featured-service">

                            <div className="service-number">
                                02
                            </div>

                            <div className="service-image">
                                <img
                                    src={analyticsDashboard}
                                    alt="Analytics dashboard"
                                />
                            </div>

                            <div className="service-icon">
                                ◉
                            </div>

                            <h3>
                                Backend Systems
                            </h3>

                            <p>
                                Powerful systems behind the interface that
                                manage information, users, payments, orders,
                                reports and business operations.
                            </p>

                            <ul>
                                <li>User authentication</li>
                                <li>Databases</li>
                                <li>Business management systems</li>
                                <li>APIs</li>
                                <li>Reports and analytics</li>
                                <li>Payment integration</li>
                            </ul>

                        </div>


                        <div className="service-card-large">

                            <div className="service-number">
                                03
                            </div>

                            <div className="service-image">
                                <img
                                    src={chatSystem}
                                    alt="Communication and chat system"
                                />
                            </div>

                            <div className="service-icon">
                                ✦
                            </div>

                            <h3>
                                Smart Web Systems
                            </h3>

                            <p>
                                Custom systems that combine different
                                features into one platform to solve specific
                                problems and improve how people work.
                            </p>

                            <ul>
                                <li>Statistical data analysis</li>
                                <li>Personal guide systems</li>
                                <li>Communication platforms</li>
                                <li>Chat systems</li>
                                <li>Dashboards</li>
                                <li>Custom business tools</li>
                            </ul>

                        </div>

                    </div>

                </section>


                <section className="systems-section">

                    <div className="systems-content">

                        <span className="section-label">
                            COMPLETE SOLUTIONS
                        </span>

                        <h2>
                            We connect the pieces.
                        </h2>

                        <p>
                            A website can show your business to the world.
                            A web system can help your business actually
                            operate. We can build both sides and connect
                            them together.
                        </p>


                        <div className="systems-list">

                            <div className="system-item">

                                <span>01</span>

                                <div>
                                    <h4>
                                        Customer Experience
                                    </h4>

                                    <p>
                                        Websites, forms, catalogues and
                                        customer-facing interfaces.
                                    </p>
                                </div>

                            </div>


                            <div className="system-item">

                                <span>02</span>

                                <div>
                                    <h4>
                                        Business Operations
                                    </h4>

                                    <p>
                                        Dashboards, databases, reports and
                                        management systems.
                                    </p>
                                </div>

                            </div>


                            <div className="system-item">

                                <span>03</span>

                                <div>
                                    <h4>
                                        Payments & Communication
                                    </h4>

                                    <p>
                                        M-Pesa integration, notifications,
                                        messaging and other connected
                                        services.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                <section className="cta-section">

                    <div className="cta-content">

                        <span className="section-label">
                            HAVE AN IDEA?
                        </span>

                        <h2>
                            Let's turn it into something real.
                        </h2>

                        <p>
                            Tell us what you need and we can work out the
                            right digital solution for your business.
                        </p>

                        <a
                            href="https://wa.me/254758184039"
                            target="_blank"
                            rel="noreferrer"
                            className="primary-button"
                        >
                            Talk to Us on WhatsApp
                        </a>

                    </div>

                </section>

            </main>

            <Footer />

        </div>
    );
}

export default Services;