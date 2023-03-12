import schematic from '.././imgs/schematic.svg';

function Home() {
    return (
        <>
            <h2 className="pageTitle">About this Application</h2>
            <p className="pageSubtitle">Watch or read overview of this SPA.</p>
            <article>
                <p>
                    <strong>Welcome!</strong> This is the final course project for OSU's <strong>CS-290
                        Web Development</strong> class of <strong>Winter 2023, with Professor Pam Van Londen</strong>.
                </p>
                <p>
                    This site uses the <strong>MERN</strong> technology stack (MongoDB, Express, React & Node)
                    for creating a single page application (SPA) with React as the frontend,
                    and a Node Express app as the backend.
                </p>
                <p>
                    The backend defines endpoints for a <strong>RESTful</strong> application programming
                    interface (API) for performing <strong>CRUD</strong> (Create, Read, Update, Delete)
                    operations on collections of data stored with MongoDB. Endpoints are also defined for
                    email forwarding or calling other APIs.
                </p>
                <p>Code is organized following the Model, View, Controller (<strong>MVC</strong>) paradigm.
                </p>
                <p>This SPA includes several pages:
                    <ul>
                        <li>
                            <strong><code>Home</code></strong> - provides an overview of our SPA
                        </li>
                        <li>
                            <strong><code>Blog</code></strong> - a collection of blog article assignments
                        </li>
                        <li>
                            <strong><code>Gallery</code></strong> - gallery of images using the react-image-gallery
                        </li>
                        <li>
                            <strong><code>Staff</code></strong> - populates the page with staff using the random person API using using two approaches
                        </li>
                        <li>
                            <strong><code>Cats</code></strong> - uses our REST API for performing CRUD operations on collections of cats
                        </li>
                        <li>
                            <strong><code>Order</code></strong> - parses an order form and sends confirmation messages using the backend
                        </li>
                        <li>
                            <strong><code>Contact</code></strong> - parses a contact form and forwards a message using the browser
                        </li>
                    </ul>
                </p>
                <div className="videoWrapper">
                    {/* Must use an embed link! */}
                    <iframe
                        className="demoVideo"
                        // src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        // src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                        src='https://www.youtube.com/embed/kVgrN9wMP1E'
                        frameborder='2'
                        allow='autoplay; encrypted-media'
                        title='Demo Video'
                        allowFullScreen="true"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowfullscreen
                    />
                </div>
                <figcaption>Video demo of our SPA.</figcaption>
                <img class="diagramImg" src={schematic} alt="app diagram" />
                <figcaption>Schematic diagram of how the app works.</figcaption>
            </article>
        </>
    );
}

export default Home;