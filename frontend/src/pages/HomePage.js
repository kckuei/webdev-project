function Home() {
    return (
        <>
            <h2>About this Application</h2>
            <article>
                <p>
                    <strong>Welcome!</strong> This is the final project for Oregon State's <strong>CS-290
                        Web Development</strong> course of <strong>Winter 2023, with Professor Pam Van London</strong>.
                </p>
                <p>
                    This site uses the <strong>MERN</strong> technology stack (MongoDB, Express, React & Node)
                    for creating a single page application (SPA) with React as the frontend,
                    and a Node Express app server as the backend.
                </p>
                <p>
                    The backend defines endpoints for a <strong>REST</strong>ful application programming
                    interface (API) used for performing <strong>CRUD</strong> (Create, Read, Update, Delete)
                    operations on collections of data stored with MongoDB, as well as for
                    email forwarding.
                </p>
                <p>The code is organized following the Model, View, Controller (<strong>MVC</strong>) paradigm.
                </p>
                <p>The site is organized into several pages:
                    <ul>
                        <li>
                            <code>Home</code> - overview of our SPA
                        </li>
                        <li>
                            <code>Blog</code> - collection of blog articles assignments
                        </li>
                        <li>
                            <code>Gallery</code> - gallery of images using react-image-gallery
                        </li>
                        <li>
                            <code>Staff</code> - populates the page with random staff using the random person API
                        </li>
                        <li>
                            <code>Cats</code> - uses our REST API for performing CRUD operations on collections of cats
                        </li>
                        <li>
                            <code>Order</code> - parses an order form and sends a confirmation message using nodemailer & SendInBlue via the backend
                        </li>
                        <li>
                            <code>Contact</code> - parses a contact form and forwards a message using MailJS in the browser
                        </li>
                    </ul>
                </p>
            </article>
        </>
    );
}

export default Home;