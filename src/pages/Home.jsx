import "../index.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return (
        <main className="home-page">

            {/* HERO SECTION */}
            <section className="hero-section">

                <Navbar activePage="home" />

                <div className="hero-content">

                    <div className="hero-text">

                        <p className="hero-label">
                            WEB DESIGN • DEVELOPMENT • DIGITAL SYSTEMS
                        </p>

                        <h1>
                            We Build Websites
                            <span> That Work.</span>
                        </h1>

                        <p className="hero-description">
                            From beautiful business websites to powerful
                            web systems, ShakeWeb creates digital experiences
                            designed to help businesses grow, connect and
                            get things done.
                        </p>

                        <div className="hero-buttons">

                            <a
                                href="/services"
                                className="primary-button"
                            >
                                Explore Our Services
                            </a>

                            <a
                                href="https://wa.me/254758184039"
                                className="secondary-button"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Talk to Us on WhatsApp
                            </a>

                        </div>

                    </div>

                    <div className="hero-visual">

                        <div className="floating-card card-one">

                            <span>⚡</span>

                            <div>
                                <strong>
                                    Fast & Responsive
                                </strong>

                                <small>
                                    Built for every screen
                                </small>
                            </div>

                        </div>

                        <div className="website-window">

                            <div className="window-top">

                                <div className="window-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="window-address">
                                    shakeweb.dev
                                </div>

                            </div>

                            <div className="mockup-content">

                                <div className="mockup-sidebar">

                                    <div className="mockup-logo">
                                        SW
                                    </div>

                                    <div className="sidebar-line"></div>
                                    <div className="sidebar-line"></div>
                                    <div className="sidebar-line"></div>
                                    <div className="sidebar-line short"></div>

                                </div>

                                <div className="mockup-main">

                                    <div className="mockup-header">

                                        <div>

                                            <div className="mockup-small">
                                                YOUR DIGITAL PRESENCE
                                            </div>

                                            <div className="mockup-title">
                                                Built to do more.
                                            </div>

                                        </div>

                                        <div className="mockup-avatar">
                                            SW
                                        </div>

                                    </div>

                                    <div className="mockup-stats">

                                        <div className="stat-box">

                                            <span>
                                                Visitors
                                            </span>

                                            <strong>
                                                24.8K
                                            </strong>

                                            <small>
                                                +18.4%
                                            </small>

                                        </div>

                                        <div className="stat-box">

                                            <span>
                                                Orders
                                            </span>

                                            <strong>
                                                1,284
                                            </strong>

                                            <small>
                                                +24.7%
                                            </small>

                                        </div>

                                        <div className="stat-box">

                                            <span>
                                                Growth
                                            </span>

                                            <strong>
                                                68%
                                            </strong>

                                            <small>
                                                +12.2%
                                            </small>

                                        </div>

                                    </div>

                                    <div className="mockup-chart">

                                        <div className="chart-heading">

                                            <span>
                                                Business Performance
                                            </span>

                                            <span>
                                                2026
                                            </span>

                                        </div>

                                        <div className="chart-bars">

                                            <div style={{ height: "35%" }}></div>
                                            <div style={{ height: "48%" }}></div>
                                            <div style={{ height: "42%" }}></div>
                                            <div style={{ height: "61%" }}></div>
                                            <div style={{ height: "55%" }}></div>
                                            <div style={{ height: "73%" }}></div>
                                            <div style={{ height: "67%" }}></div>
                                            <div style={{ height: "88%" }}></div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <div className="floating-card card-two">

                            <span>✓</span>

                            <div>

                                <strong>
                                    Powerful Systems
                                </strong>

                                <small>
                                    Frontend + Backend
                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* INTRODUCTION */}
            <section className="intro-section">

                <div className="section-label">
                    WHAT WE DO
                </div>

                <h2>
                    More than a website.
                    <span>
                        {" "}A digital system built around your needs.
                    </span>
                </h2>

                <p>
                    Whether you need a simple online presence or a complete
                    system that handles customers, payments, information
                    and communication, we build technology around the way
                    your business works.
                </p>

            </section>


            {/* SERVICES PREVIEW */}
            <section className="services-preview">

                <div className="service-card">

                    <div className="service-number">
                        01
                    </div>

                    <h3>
                        Frontend Websites
                    </h3>

                    <p>
                        The frontend is what your visitors see and use:
                        pages, menus, buttons, products, forms, animations
                        and the overall experience.
                    </p>

                    <a href="/services">
                        Learn more →
                    </a>

                </div>

                <div className="service-card featured-service">

                    <div className="service-number">
                        02
                    </div>

                    <h3>
                        Backend Systems
                    </h3>

                    <p>
                        The backend works behind the scenes. It manages
                        information, users, orders, databases, payments
                        and the logic that makes a website actually do things.
                    </p>

                    <a href="/services">
                        Learn more →
                    </a>

                </div>

                <div className="service-card">

                    <div className="service-number">
                        03
                    </div>

                    <h3>
                        Smart Web Systems
                    </h3>

                    <p>
                        Need more? We can build systems with M-Pesa payments,
                        analytics, dashboards, communication and custom
                        business workflows.
                    </p>

                    <a href="/services">
                        Learn more →
                    </a>

                </div>

            </section>


            {/* M-PESA / SYSTEMS SECTION */}
            <section className="systems-section">

                <div className="systems-text">

                    <div className="section-label">
                        BUILT TO DO MORE
                    </div>

                    <h2>
                        Your website can become
                        <span>
                            {" "}part of your business.
                        </span>
                    </h2>

                    <p>
                        We can create websites that go beyond displaying
                        information. Your system can accept M-Pesa payments,
                        manage customers, analyse data, handle orders and
                        connect people.
                    </p>

                    <a
                        href="https://wa.me/254758184039"
                        className="primary-button"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Discuss Your Idea
                    </a>

                </div>

                <div className="system-diagram">

                    <div className="diagram-center">
                        YOUR
                        <br />
                        BUSINESS
                    </div>

                    <div className="diagram-item item-one">
                        💳
                        <span>
                            M-Pesa
                        </span>
                    </div>

                    <div className="diagram-item item-two">
                        📊
                        <span>
                            Analytics
                        </span>
                    </div>

                    <div className="diagram-item item-three">
                        💬
                        <span>
                            Communication
                        </span>
                    </div>

                    <div className="diagram-item item-four">
                        👥
                        <span>
                            Users
                        </span>
                    </div>

                </div>

            </section>


            {/* PRICING PREVIEW */}
            <section className="pricing-preview">

                <div className="section-label">
                    SIMPLE START
                </div>

                <h2>
                    Websites from
                    <span>
                        {" "}KSh 8,000
                    </span>
                </h2>

                <p>
                    Every business is different. Simple websites start at
                    KSh 8,000, while larger websites and custom systems are
                    priced according to their structure and functionality.
                </p>

                <a
                    href="/pricing"
                    className="secondary-button"
                >
                    View Pricing
                </a>

            </section>


            {/* FINAL CTA */}
            <section className="final-cta">

                <div>

                    <div className="section-label">
                        HAVE AN IDEA?
                    </div>

                    <h2>
                        Let's build something
                        <span>
                            {" "}worth seeing.
                        </span>
                    </h2>

                    <p>
                        Tell us what you need and let's turn your idea
                        into a website or web system.
                    </p>

                </div>

                <a
                    href="https://wa.me/254758184039"
                    className="primary-button"
                    target="_blank"
                    rel="noreferrer"
                >
                    Start a Conversation
                </a>

            </section>


            <Footer />

        </main>
    );
}

export default Home;