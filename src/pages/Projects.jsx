import "../index.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import websiteMockup from "../assets/images/projects/website-mockup.jpg";
import responsiveMockup from "../assets/images/projects/responsive-mockup.jpg";
import businessWebsite from "../assets/images/projects/business-website.jpg";

function Projects() {
    return (
        <div className="page-wrapper">

            <Navbar activePage="projects" />

            <main className="projects-page">

                <section className="page-hero">

                    <div className="page-hero-content">

                        <span className="hero-label">
                            OUR WORK
                        </span>

                        <h1>
                            Ideas We Turn
                            <br />
                            Into Digital Products.
                        </h1>

                        <p>
                            From business websites to custom digital systems,
                            we create experiences that look professional,
                            work smoothly and are built around real needs.
                        </p>

                    </div>

                </section>


                <section className="projects-section">

                    <div className="section-heading">

                        <span className="section-label">
                            SELECTED PROJECTS
                        </span>

                        <h2>
                            Built for different businesses.
                        </h2>

                        <p>
                            Every business is different. The website or system
                            should reflect that instead of forcing everyone
                            into the same template.
                        </p>

                    </div>


                    <div className="projects-grid">

                        <article className="project-card project-featured">

                            <div className="project-image">

                                <img
                                    src={websiteMockup}
                                    alt="Business website project"
                                />

                            </div>

                            <div className="project-content">

                                <div className="project-meta">

                                    <span>
                                        BUSINESS WEBSITE
                                    </span>

                                    <span>
                                        01
                                    </span>

                                </div>

                                <h3>
                                    Modern Business Presence
                                </h3>

                                <p>
                                    A professional website designed to help a
                                    business present its services, products and
                                    contact information clearly online.
                                </p>

                                <div className="project-tags">

                                    <span>
                                        React
                                    </span>

                                    <span>
                                        Responsive
                                    </span>

                                    <span>
                                        UI Design
                                    </span>

                                </div>

                            </div>

                        </article>


                        <article className="project-card">

                            <div className="project-image">

                                <img
                                    src={responsiveMockup}
                                    alt="Responsive website project"
                                />

                            </div>

                            <div className="project-content">

                                <div className="project-meta">

                                    <span>
                                        RESPONSIVE WEBSITE
                                    </span>

                                    <span>
                                        02
                                    </span>

                                </div>

                                <h3>
                                    Designed for Every Screen
                                </h3>

                                <p>
                                    A responsive experience that adapts
                                    smoothly across phones, tablets and
                                    desktop computers.
                                </p>

                                <div className="project-tags">

                                    <span>
                                        Mobile First
                                    </span>

                                    <span>
                                        React
                                    </span>

                                    <span>
                                        Responsive
                                    </span>

                                </div>

                            </div>

                        </article>


                        <article className="project-card">

                            <div className="project-image">

                                <img
                                    src={businessWebsite}
                                    alt="Business digital platform"
                                />

                            </div>

                            <div className="project-content">

                                <div className="project-meta">

                                    <span>
                                        DIGITAL PLATFORM
                                    </span>

                                    <span>
                                        03
                                    </span>

                                </div>

                                <h3>
                                    Business Digital Platform
                                </h3>

                                <p>
                                    A stronger digital presence combining
                                    business information, products,
                                    customer interaction and future system
                                    functionality.
                                </p>

                                <div className="project-tags">

                                    <span>
                                        Frontend
                                    </span>

                                    <span>
                                        Systems
                                    </span>

                                    <span>
                                        Custom
                                    </span>

                                </div>

                            </div>

                        </article>

                    </div>

                </section>


                <section className="project-process">

                    <div className="process-content">

                        <span className="section-label">
                            HOW WE BUILD
                        </span>

                        <h2>
                            From idea to working product.
                        </h2>

                        <p>
                            We start with what you actually need, then design
                            and build the digital experience around it.
                        </p>

                    </div>


                    <div className="process-list">

                        <div className="process-item">

                            <span>
                                01
                            </span>

                            <div>

                                <h4>
                                    Understand
                                </h4>

                                <p>
                                    We learn about your business, your
                                    customers and the problem you want to
                                    solve.
                                </p>

                            </div>

                        </div>


                        <div className="process-item">

                            <span>
                                02
                            </span>

                            <div>

                                <h4>
                                    Design
                                </h4>

                                <p>
                                    We turn the idea into a clean, modern
                                    interface designed around the people who
                                    will use it.
                                </p>

                            </div>

                        </div>


                        <div className="process-item">

                            <span>
                                03
                            </span>

                            <div>

                                <h4>
                                    Build
                                </h4>

                                <p>
                                    We develop the website or system and make
                                    sure the different parts work together.
                                </p>

                            </div>

                        </div>


                        <div className="process-item">

                            <span>
                                04
                            </span>

                            <div>

                                <h4>
                                    Launch
                                </h4>

                                <p>
                                    The finished product is prepared for real
                                    users and your business can start using
                                    it.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                <section className="cta-section">

                    <div className="cta-content">

                        <span className="section-label">
                            HAVE A PROJECT?
                        </span>

                        <h2>
                            Your business could be next.
                        </h2>

                        <p>
                            Tell us what you want to build and we will help
                            turn the idea into a practical digital solution.
                        </p>

                        <a
                            href="https://wa.me/254758184039"
                            target="_blank"
                            rel="noreferrer"
                            className="primary-button"
                        >
                            Start a Conversation
                        </a>

                    </div>

                </section>

            </main>


            <Footer />

        </div>
    );
}

export default Projects;