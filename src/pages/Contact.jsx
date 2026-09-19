import "../index.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const contact = form.contact.value;
        const service = form.service.value;
        const message = form.message.value;

        const whatsappMessage =
            "Hello ShakeWeb,\n\n" +
            "My name is " + name + ".\n" +
            "My contact is: " + contact + "\n" +
            "I am interested in: " + service + "\n\n" +
            "Project details:\n" +
            message;

        const whatsappUrl =
            "https://wa.me/254758184039?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappUrl, "_blank");
    }

    return (
        <div className="page-wrapper">

            <Navbar activePage="contact" />

            <main className="contact-page">

                <section className="page-hero contact-hero">

                    <div className="page-hero-content">

                        <span className="hero-label">
                            LET'S WORK TOGETHER
                        </span>

                        <h1>
                            Have an Idea?
                            <br />
                            Let's Build It.
                        </h1>

                        <p>
                            Tell us what you need and we will help turn the
                            idea into a practical digital solution.
                        </p>

                    </div>

                </section>


                <section className="contact-main">

                    <div className="contact-intro">

                        <span className="section-label">
                            GET IN TOUCH
                        </span>

                        <h2>
                            Start with a conversation.
                        </h2>

                        <p>
                            Whether you need a simple business website,
                            an online catalogue or a complete business
                            system, you can reach ShakeWeb directly.
                        </p>

                    </div>


                    <div className="contact-layout">

                        <div className="contact-details">

                            <div className="contact-card">

                                <span className="contact-card-number">
                                    01
                                </span>

                                <h3>
                                    WhatsApp
                                </h3>

                                <p>
                                    The fastest way to discuss your project
                                    and share ideas, requirements or examples.
                                </p>

                                <a
                                    href="https://wa.me/254758184039"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Chat on WhatsApp →
                                </a>

                            </div>


                            <div className="contact-card">

                                <span className="contact-card-number">
                                    02
                                </span>

                                <h3>
                                    Call
                                </h3>

                                <p>
                                    Prefer speaking directly? Give ShakeWeb
                                    a call and let's discuss what you need.
                                </p>

                                <a href="tel:0758184039">
                                    0758 184 039 →
                                </a>

                            </div>


                            <div className="contact-card">

                                <span className="contact-card-number">
                                    03
                                </span>

                                <h3>
                                    Email
                                </h3>

                                <p>
                                    For detailed project discussions,
                                    requirements and business enquiries.
                                </p>

                                <a href="mailto:charlesgacheru4@gmail.com">
                                    charlesgacheru4@gmail.com →
                                </a>

                            </div>

                        </div>


                        <div className="contact-form-wrapper">

                            <div className="form-heading">

                                <span className="section-label">
                                    PROJECT ENQUIRY
                                </span>

                                <h3>
                                    Tell us what you want to build.
                                </h3>

                            </div>


                            <form
                                className="contact-form"
                                onSubmit={handleSubmit}
                            >

                                <div className="form-row">

                                    <div className="form-group">

                                        <label htmlFor="name">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            required
                                        />

                                    </div>


                                    <div className="form-group">

                                        <label htmlFor="contact">
                                            Phone or Email
                                        </label>

                                        <input
                                            type="text"
                                            id="contact"
                                            name="contact"
                                            placeholder="Phone or email"
                                            required
                                        />

                                    </div>

                                </div>


                                <div className="form-group">

                                    <label htmlFor="service">
                                        What do you need?
                                    </label>

                                    <select
                                        id="service"
                                        name="service"
                                        defaultValue=""
                                        required
                                    >

                                        <option value="" disabled>
                                            Select a service
                                        </option>

                                        <option value="Business Website">
                                            Business Website
                                        </option>

                                        <option value="Landing Page">
                                            Landing Page
                                        </option>

                                        <option value="Product Catalogue">
                                            Product Catalogue
                                        </option>

                                        <option value="Business System">
                                            Business System
                                        </option>

                                        <option value="Analytics Dashboard">
                                            Analytics Dashboard
                                        </option>

                                        <option value="Communication / Chat System">
                                            Communication / Chat System
                                        </option>

                                        <option value="Custom Digital Solution">
                                            Custom Digital Solution
                                        </option>

                                    </select>

                                </div>


                                <div className="form-group">

                                    <label htmlFor="message">
                                        Project Details
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="7"
                                        placeholder="Tell us about your business, what you want to build, and what you want the website or system to do."
                                        required
                                    ></textarea>

                                </div>


                                <button
                                    type="submit"
                                    className="primary-button form-submit"
                                >
                                    Continue on WhatsApp →
                                </button>

                                <p className="form-note">
                                    Your message will open in WhatsApp so you
                                    can send it directly to ShakeWeb.
                                </p>

                            </form>

                        </div>

                    </div>

                </section>


                <section className="cta-section">

                    <div className="cta-content">

                        <span className="section-label">
                            SHAKEWEB
                        </span>

                        <h2>
                            Websites. Systems.
                            <br />
                            Digital Solutions.
                        </h2>

                        <p>
                            Build something that makes your business easier
                            to discover, understand and use.
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

export default Contact;