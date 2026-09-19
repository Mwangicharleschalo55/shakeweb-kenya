import "../index.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
    return (
        <div className="page-wrapper">

            <Navbar activePage="about" />

            <main className="about-page">

                <section className="page-hero about-hero">

                    <div className="page-hero-content">

                        <span className="hero-label">
                            ABOUT SHAKEWEB
                        </span>

                        <h1>
                            We Build Digital
                            <br />
                            Tools for Real Businesses.
                        </h1>

                        <p>
                            ShakeWeb helps businesses establish a stronger
                            digital presence through modern websites, custom
                            systems and practical technology.
                        </p>

                    </div>

                </section>


                <section className="about-intro">

                    <div className="about-intro-content">

                        <span className="section-label">
                            WHY SHAKEWEB
                        </span>

                        <h2>
                            Technology should solve problems,
                            not create more of them.
                        </h2>

                        <p>
                            Many businesses have great products and services
                            but struggle to present themselves professionally
                            online or manage parts of their operations
                            digitally.
                        </p>

                        <p>
                            We build digital experiences around the business,
                            whether that means a simple website that brings in
                            customers or a complete system that helps a team
                            manage information and workflows.
                        </p>

                    </div>

                </section>


                <section className="about-values">

                    <div className="about-values-heading">

                        <span className="section-label">
                            WHAT WE FOCUS ON
                        </span>

                        <h2>
                            Practical technology.
                            <br />
                            Beautiful execution.
                        </h2>

                    </div>


                    <div className="values-grid">

                        <article className="value-card">

                            <span className="value-number">
                                01
                            </span>

                            <h3>
                                Business First
                            </h3>

                            <p>
                                We start by understanding what the business
                                actually needs instead of choosing technology
                                first and finding a problem for it afterward.
                            </p>

                        </article>


                        <article className="value-card">

                            <span className="value-number">
                                02
                            </span>

                            <h3>
                                Modern Design
                            </h3>

                            <p>
                                Every website should look professional,
                                communicate clearly and give customers a
                                reason to trust the business.
                            </p>

                        </article>


                        <article className="value-card">

                            <span className="value-number">
                                03
                            </span>

                            <h3>
                                Useful Systems
                            </h3>

                            <p>
                                When a business needs more than a website, we
                                can build systems around data, users,
                                communication, payments and workflows.
                            </p>

                        </article>


                        <article className="value-card">

                            <span className="value-number">
                                04
                            </span>

                            <h3>
                                Built to Grow
                            </h3>

                            <p>
                                We design solutions that can start small and
                                develop as the business gains customers,
                                processes and new requirements.
                            </p>

                        </article>

                    </div>

                </section>


                <section className="about-capabilities">

                    <div className="capabilities-content">

                        <span className="section-label">
                            WHAT WE BUILD
                        </span>

                        <h2>
                            From simple websites
                            to complete systems.
                        </h2>

                        <p>
                            A business might only need a professional website
                            today. Another might need customer accounts,
                            databases, dashboards, reports and payment
                            integration.
                        </p>

                        <p>
                            ShakeWeb works across both ends of that spectrum,
                            creating the right level of technology for the
                            problem being solved.
                        </p>

                    </div>


                    <div className="capabilities-list">

                        <div className="capability-item">

                            <span>
                                01
                            </span>

                            <div>

                                <h4>
                                    Websites
                                </h4>

                                <p>
                                    Business websites, landing pages,
                                    portfolios and product catalogues.
                                </p>

                            </div>

                        </div>


                        <div className="capability-item">

                            <span>
                                02
                            </span>

                            <div>

                                <h4>
                                    Business Systems
                                </h4>

                                <p>
                                    Custom tools for managing users, data,
                                    operations and business workflows.
                                </p>

                            </div>

                        </div>


                        <div className="capability-item">

                            <span>
                                03
                            </span>

                            <div>

                                <h4>
                                    Analytics
                                </h4>

                                <p>
                                    Dashboards, reports and statistical
                                    insights that turn business data into
                                    useful information.
                                </p>

                            </div>

                        </div>


                        <div className="capability-item">

                            <span>
                                04
                            </span>

                            <div>

                                <h4>
                                    Integrations
                                </h4>

                                <p>
                                    Payment systems, communication tools and
                                    other services connected to your digital
                                    platform.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                <section className="cta-section">

                    <div className="cta-content">

                        <span className="section-label">
                            WORK WITH US
                        </span>

                        <h2>
                            Let's build something useful.
                        </h2>

                        <p>
                            Have an idea, a business problem or simply need a
                            better online presence? Let's turn it into a
                            practical digital solution.
                        </p>

                        <a
                            href="https://wa.me/254758184039"
                            target="_blank"
                            rel="noreferrer"
                            className="primary-button"
                        >
                            Talk to ShakeWeb
                        </a>

                    </div>

                </section>

            </main>


            <Footer />

        </div>
    );
}

export default About;