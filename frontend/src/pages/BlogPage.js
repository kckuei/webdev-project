import { useState } from 'react';
import { CopyBlock, dracula } from "react-code-blocks";
import codeBlocks from "../scripts/codeBlocks.js"
import BookmarkNav from '../components/BookmarkNav.js'


function Blog() {

    // Use state for tracking the active article. 
    // Used in BookmarkNav component. 
    const [activeArticle, setActiveArticle] = useState('article-1');

    // For toggling active article visibility.
    const isActive = (articleName) => {
        console.log(articleName);
        return articleName === activeArticle
    };

    return (
        <>
            <h2 className="pageTitle">Articles</h2>
            <p className="pageSubtitle">Read from a collection of web development article assignments.</p>
            <BookmarkNav
                activeArticle={activeArticle}
                setActiveArticle={setActiveArticle}
            />
            {isActive('article-1') && <article id="article-1">
                <h3>About Web Servers</h3>
                <h4>Creation and Viewing index.html Locally</h4>
                <p>
                    To create this page, I first initialized the file called index.html in
                    terminal, then opened it with VSCode, then used the '!' shortcut (Emmet)
                    to generate boilerplate HTML code. I then updated the title content with my
                    first and last name, and finally populated the body with the required header
                    and paragraph tags and content.
                </p>
                <p>
                    When opened locally in my browser (Firefox), the HTML file is rendered automatically
                    based on the browser's default styling. Some of the elements are styled according
                    to their tags. For example, the h1 and h2 header tags are enlarged, and the h1 text
                    is larger than h2 due to its higher precedence. The text within each of the 'p' pagaraph tags are
                    also automatically indented.
                </p>
                <h4>HTTP Request/Response from OSU Eng. File Space</h4>
                <p>
                    I copied this assignment folder securely to the OSU engineering file space
                    via SSH/SCP. This makes the assignment available at the
                    following <a href=" https://web.engr.oregonstate.edu/~kueik/a1-kueik/" target="_blank" rel="noreferrer">URL</a>. The 'index.html'
                    file is the default name for a 'home' page of a website hosted on the Apache web server,
                    which is what OSU's Engineering server is using.
                </p>
                <p>
                    Opening the link in Firefox, developer tools, and navigating to the network tab, and reloading the
                    page, I can view two successful GET requests. One for /~kueik/a1-kueik/ and one for favicon.ico.
                    The headers sub-tab displays the request line, request and response headers.
                    The display status shows 200 for success for both requests.
                </p>
                <p>
                    The assignment prompt asks 'why the favicon.ico file has a status 200, but the main.css and
                    main.js files do not'. I do not see main.css and main.js in Firefox. If I open this on
                    Chrome, it shows three requests as opposed to two in Firefox: a1-kueik/, content.min.css, and
                    favicon.ico. All three show a status of 200 for success. This suggests that what is shown may be
                    browser-dependent, and also that the assignment prompt may be outdated.
                </p>
                <p>
                    Presumably, the main.js, and main.css would refer to JavaScript file and CSS style sheets
                    file that could exist somewhere in the same directory as index.html. Perhaps the index.html could
                    reference those files in the header or footer. If those files are referenced, but not found
                    in the directory, a status other than 200 could then be returned to the response. HOWEVER, the
                    Assignment does not ask to include references to main.js or main.css file.
                </p>

                <h4>Parts of the URL: https://web.engr.oregonstate.edu/~kueik/a1-kueik/</h4>
                <ul>
                    <li><strong>https:</strong> represents the protocol/schema</li>
                    <li><strong>web.engr.</strong> is the subdomain</li>
                    <li><strong>oregonstate.edu</strong> is the host domain</li>
                    <li><strong>/~kueik/a1-kueik/</strong> is the specific resource requested</li>
                </ul>
            </article>}

            {isActive('article-2') && <article id="article-2">
                <h3>Frontend Design</h3>
                <h4>What is Frontend Design?</h4>
                <p>
                    Frontend design is concerned with the user experience. The frontend basically represents
                    everything that the user might interact with on a web page through their browser. This includes
                    the graphical user-interface (GUI), the visual design of the page, and any interactive
                    experience. The main technologies for frontend design are HTML for the semantic structure and
                    layout of the page, CSS for the styling and appearance of HTML elements (although it can be used
                    for animations as well), and JavaScript for adding more dynamic and interactive experiences.
                </p>
                <h4>Usability Engineering</h4>
                <p>
                    A key aspect of frontend design is usability engineering. Usability encompasses
                    factors that can influence the user's experience. According to <a
                        href="https://info.keylimeinteractive.com/world-usability-day-2022">World Usability Day's
                        2022</a>
                    outline, usability can be distilled to 5 "E"s as follows:
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>Effective at helping users meet their goal(s). Are the results accurate?</dd>
                    <dt>Easy to Navigate</dt>
                    <dd>Easy to navigate, especially for users that have never used it before. Will
                        they immediately understand how to locate their goal by clicking or searching, as well as
                        remember how next time?</dd>
                    <dt>Efficient</dt>
                    <dd>Efficient, so users can perform tasks with the least number of steps. Will
                        the user get those results quickly?</dd>
                    <dt>Error-free</dt>
                    <dd>Error-free, to avoid accessibility and availability issues. Achieve this by
                        learning how the users' create common errors. Will they run into roadblocks for their
                        specific needs?</dd>
                    <dt>Enjoyable to use or Engaging</dt>
                    <dd>It fits the unique needs for the intended audience in content and design. Will they come
                        back because of the previous four "E"s and the overall experience?</dd>
                </dl>

                <h4>Tags</h4>
                <p>
                    Understanding HTML elements and their tags is fundamental to frontend design. HTML documents use
                    HTML elements to define the semantic structure of the web page. Each HTML element generally uses
                    a pair of opening and closing tags, e.g. &lt;elem&gt; &lt;/elem&gt; (although certain HTML
                    elements only require one tag, such as the &lt;img/&gt; tag).
                </p>
                <p>
                    Tags are generally used to define and/or enclose/encapsulate specific content and provide
                    structure to the HTML document. This has important implications with respect to accessibility,
                    search engine optimization, etc. For example, accessibility readers rely on appropriately tagged
                    content for navigational purposes and creating a more pleasant experience for the visually
                    impaired. Using content-specific tags, e.g. head, body, header, main, nav, section, p, h1, etc.
                    is more informative than div's for everything. Search engines may also rely on tagged
                    information in the head tags to appropriately index the page.
                </p>
                <p>
                    In addition, the correct syntactic usage of tags is important for layout and styling. The
                    desired layout will not be achieved if incorrectly nested or missing a bracket. CSS style sheets
                    will often also use CSS selectors based on the semantic structure of the HTML. Some tags
                    such as strong, bold, italic, etc. are in-line which means the specific positions of the start
                    and end tags are particularly important for styling or emphasizing content.
                </p>

                <h4>Anchors and Nav</h4>
                <p>
                    Anchor &lt;a&gt; HTML elements are used to create hyperlinks to web pages, files, email addresses,
                    locations in the same page, or anything else a URL can address. Anchor elements reference the
                    destination content using the <strong>href</strong> attribute. If the <strong>href</strong>
                    attribute is specified, selecting the element will activate it. A few examples are given below:
                </p>
                <CopyBlock
                    language={`HTML`}
                    text={codeBlocks[1]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <p>
                    Anchor elements should be differentiated form &lt;nav&gt; HTML elements which represent a section of
                    a page whose purpose is to provide navigation links, either within the current document or to other
                    documents. &lt;nav&gt; elements themselves do not link to any internal or external resource and do
                    not have <strong>href</strong> attribute. They can, however, be combined with/encapsulate anchors to
                    create a functional navigation bar! An example is given below:
                </p>
                <CopyBlock
                    language={`HTML`}
                    text={codeBlocks[2]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
            </article>}

            {isActive('article-3') && <article id="article-3">
                <h3>Optimizing Images</h3>
                <h4>Image Optimization</h4>
                <p>
                    Images should be optimized to reduce storage space and bandwidth requirements. Optimized images
                    generally meet the following specifications:
                </p>
                <ol>
                    <li><strong>Descriptive file name</strong> - concise to improve SEO,
                        `german-sherpard-puppy-ball.jpg`</li>
                    <li><strong>Small file size</strong> - reduce file size to reduce load time, typically through
                        <code>srcset=""</code> and <code>sizes=""</code>attributes
                    </li>
                    <li><strong>Exact dimensions</strong> - crop and reduce to fit space in web page.</li>
                    <li><strong>Correct file format</strong> - use graphics appropriate for intended purpose, jpg, gif
                        png, etc.</li>
                    <li><strong>Reduced resolution</strong> - provide multiple images based on monitor resolution</li>
                    <li><strong>Color mode</strong> - RGB for .png, .jpg, .svg, .webp, and indexed for .gif</li>
                </ol>

                <h4>Common Image Specifications</h4>
                <p>The common image web specifications according to <a
                    href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types">MDN</a> are as
                    follows:
                </p>
                <dl>
                    <dt>WebP <code>(.webp)</code></dt>
                    <dd>Web Picture Format</dd>
                    <dd>Excellent choice for both images and animated images. WebP offers much better compression than
                        PNG or JPEG with support for higher color depths, animated frames, transparency etc. AVIF offers
                        slightly better compression, but is not quite as well-supported in browsers and does not support
                        progressive rendering.
                    </dd>
                    <dt>SVG <code>(.svg)</code></dt>
                    <dd>Support Vector Graphics</dd>
                    <dd> Vector image format; ideal for user interface elements, icons, diagrams, etc., that must be
                        drawn accurately at different sizes.
                    </dd>
                    <dt>PNG <code>(.png)</code></dt>
                    <dd>Portable Network Graphics</dd>
                    <dd>PNG is preferred over JPEG for more precise reproduction of source images, or when transparency
                        is needed. WebP/AVIF provide even better compression and reproduction, but browser support is
                        more limited.
                    </dd>
                    <dt>JPEG <code>(.jpg, .jpeg, .jif, .pjpeg, .pjp)</code></dt>
                    <dd>Joint Photographic Expert Group Image</dd>
                    <dd>Good choice for lossy compression of still images (currently the most popular). Prefer PNG when
                        more precise reproduction of the image is required, or WebP/AVIF if both better reproduction and
                        higher compression are required.
                    </dd>
                    <dt>GIF <code>(.gif)</code></dt>
                    <dd>Graphics Interchange Format</dd>
                    <dd>Good choice for simple images and animations. Prefer PNG for lossless and indexed still images,
                        and consider WebP, AVIF or APNG for animation sequences.
                    </dd>
                    <dt>AVIF <code>(.avif)</code></dt>
                    <dd>AV1 Image File Format</dd>
                    <dd>Good choice for both images and animated images due to high performance and royalty free image
                        format. It offers much better compression than PNG or JPEG with support for higher color depths,
                        animated frames, transparency, etc. Note that when using AVIF, you should include fallbacks to
                        formats with better browser support (i.e. using the <code>&lt;picture&gt;</code> element).
                    </dd>
                    <dt>APNG <code>(.apng)</code></dt>
                    <dd>Animated Portable Network Graphics</dd>
                    <dd>Good choice for lossless animation sequences (GIF is less performant). AVIF and WebP have better
                        performance, but less broad browser support.
                    </dd>
                </dl>

                <h4>Most Appropriate Formats for Photos and Line Art</h4>
                <ul>
                    <li>The most appropriate formats for still images or photos are generally JPG or WebP.</li>
                    <li>The most appropriate formats for line art are is generally PNG or SVG (depending on the size).
                    </li>
                </ul>

                <h4>This Assignment</h4>
                <p>In this assignment, I optimized the images by batch resizing them, and then reducing the quality of
                    the images using <code>convert</code> in terminal. I was able to reduce the file sizes from up to
                    8MB to a few hundred KB each, as discussed <a href="https://askubuntu.com/questions/781497/how-can-i-compress-images
                    ">here</a>. Example commands for Linux/Ubuntu are given below:
                </p>
                <CopyBlock
                    language={`bash`}
                    text={codeBlocks[3]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
            </article>}

            {isActive('article-4') && <article id="article-4">
                <h3>Cascading Stylesheets</h3>
                <h4>Reasons to Incorporate Stylesheets in Websites and apps</h4>
                <p>The main reasons to incorporate stylesheets into websites and apps is to keep your code
                    well-organized and DRY (Don't Repeat Yourself). CSS stylesheets together with the CSS Cascade (rules
                    for determining precedence of styling) enable more efficient selection and specification of styling
                    on HTML elements. Stylesheets keeps the style declarations congregated in one source file. Rather
                    than having to specify styles repetitively for the same type or categories of HTML elements, you can
                    specify them once in a stylesheet file. This also maximizes the portability of the styles so that
                    they can be re-used on other projects.
                </p>

                <h4>5 Ways to Incorporate Styles</h4>
                <p>Five ways to incorporate styles are as follows: </p>
                <ol>
                    <li>External CSS rules
                        <ul>
                            <li>Link in <code>&lt;head&gt;</code> with
                                <code>&lt;link rel="stylesheet" href="App.css" /&gt;</code>
                            </li>
                            <li>For multiple sylesheet import in the main style sheet at top with:
                                <code>@import "component1.css"</code>
                            </li>
                        </ul>
                    </li>
                    <li>Embedded using style tags
                        <ul>
                            <li>In the HTML file: <code>&lt;style&gt; h1 {`{color: orange; }`} &lt;/style&gt;</code></li>
                        </ul>
                    </li>
                    <li>Inline using element attribute
                        <ul>
                            <li>In the HTML element: <code>&lt;h1 style="color:orange"&gt;</code></li>
                        </ul>
                    </li>
                    <li>In JavaScript template literals
                        <ul>
                            <li>
                                <code>
                                    const orangeHeading = styled.h1`
                                    color: orange;
                                    `;
                                </code>
                            </li>
                            <li>
                                Check out this guide on <a href="https://css-tricks.com/template-literals/">Template
                                    Literals</a> for more details.
                            </li>
                        </ul>
                    </li>
                    <li>In regular JavaScript
                        <ul>
                            <li><code>document.getElementsByTagName('h1').style.color = 'orange';</code></li>
                        </ul>
                    </li>
                </ol>

                <h4>The Purpose of Page Layout Blocks</h4>
                <p>Layout blocks provide meaningful context of the type of content on a web page. Their main purpose is
                    to assist with accessibility readers. Examples of layout tags include:
                    <code>&lt;header&gt;,
                        &lt;nav&gt;, &lt;section&gt;, &lt;articles&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;summary&gt;</code>,
                    etc.
                </p>
            </article>}

            {isActive('article-5') && <article id="article-5">
                <h3>Forms</h3>
                <h4>Form Accessibility Goals</h4>
                <p>
                    Web forms are useful for interacting with users. Most commonly, they are used for collecting
                    data from users, or allowing them to control a user interface. Differently-abled people need
                    to be able to interact with forms. Therefore, striving for accessibility is an important
                    job of web developers. In general, there are 6 major goals of accessible forms. They are:
                </p>
                <ol>
                    <li><strong>Provide clear instructions</strong> above the form and in the labels. Placeholder values
                        are only helpful for users with vision.</li>
                    <li><strong>Let users know why</strong> you're gathering the data and <strong>which fields are
                        required.</strong>
                    </li>
                    <li><strong>Set the first field to autofocus</strong>, so users can start typing without using the
                        keyboard.</li>
                    <li><strong>Ensure each form control can be filled in using the keyboard</strong>, for those that
                        cannot/don't
                        use a
                        mouse or trackpad.</li>
                    <li><strong>Add tab indexing to complex forms</strong>, so it is clear in which order the fields
                        should be
                        filled.</li>
                    <li><strong>Ensure validation messages are screen readable.</strong> The built-in HTML browser
                        messages <em>are not</em> screen-readable.</li>
                </ol>

                <h4>Form Elements and Attributes</h4>
                <p>
                    Lettuce now cover some ground on basic form elements. Specifically, let's cover what
                    are some major tags, their attributes, and their purposes. This isn't intended to be an exhaustive
                    list, so be sure to check out this <a
                        href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls">MDN
                        resource</a> for more info too!
                </p>

                <dl>
                    <dt>&lt;form&gt;</dt>
                    <dd>
                        The <code>&lt;form&gt;</code> tag can contain any form content, including paragraphs, headers,
                        images, and input elements. Important attributes include: <code>action</code> and
                        <code>method</code> attributes. The <code>action</code> attribute refers to a script file, or to
                        a route for the data (where the data goes). Can be absolute or relative (to form). The
                        <code>method</code> attribute refers to a <code>GET</code> or <code>POST</code> request. When
                        the form is submitted, the browser packages all contents of the form and sends it to the URL
                        specified in the action.
                    </dd>
                    <dt>&lt;fieldset&gt;</dt>
                    <dd>
                        The <code>&lt;fieldset&gt;</code> element is used to group several controls and labels within a
                        web form. Complex forms use <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> to
                        separate form controls into logical groups. These groups help make forms more accessible to the
                        visually-impaired. The <code>&lt;fieldset&gt;</code> has a default gray border and some padding,
                        and the <code>&lt;legend&gt;</code> is placed on the top of that border.
                    </dd>
                    <dt>&lt;legend&gt;</dt>
                    <dd>
                        The <code>&lt;legend&gt;</code> element gives a label to the parent
                        <code>&lt;fieldset&gt;</code>. The <code>&lt;legend&gt;</code> should include prompts that help
                        users understand the group's purpose.
                    </dd>
                    <dt>&lt;label&gt;</dt>
                    <dd>
                        Form controls include the <code>label</code> tag to help the user (especially those using a
                        screen reader) to understand the purpose of their data entry. An important attribute is the
                        <code>for</code> attribute. The <code>for=""</code> attribute is added so that it matches up
                        with the form control's <code>id=""</code>. For example:
                    </dd>
                    <CopyBlock
                        language={`HTML`}
                        text={codeBlocks[4]}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock={true}
                    />
                    <dt>&lt;input&gt;</dt>
                    <dd>
                        The <code>&lt;input&gt;</code> tag is used to specify an input form field. Important attributes
                        include the <code>type, name</code> and <code>required</code> attributes. The
                        <code>type=""</code> can be used to specify different types of form inputs, e.g.
                        <code>text, email, radio, chexbox,</code> etc. <a
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)[](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input">This
                            MDN article</a> discusses all 22 input types. When the data submitted by the form is
                        received by the server-side, the <code>name</code> attribute is how the server knows which part
                        of the form each data item is associated with. This is received as a key-value pair. The
                        required attribute can be used to specify whether a form input entry is mandatory or not. Some
                        example inputs are given below:
                    </dd>
                    <CopyBlock
                        language={`HTML`}
                        text={codeBlocks[5]}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock={true}
                    />
                    <dt>&lt;select&gt;</dt>
                    <dd>
                        The <code>&lt;select&gt;</code> tag is used for creating a drop-down menu in conjunction with
                        the <code>&lt;option&gt;</code> tag. Set the <code>name</code> and <code>id</code> attributes.
                        An example is given below:
                    </dd>
                    <CopyBlock
                        language={`HTML`}
                        text={codeBlocks[6]}
                        showLineNumbers={true}
                        theme={dracula}
                        wrapLines={true}
                        codeBlock={true}
                    />
                    <dt>&lt;option&gt;</dt>
                    <dd>
                        <code>&lt;option&gt;</code> tags are nested inside the <code>&lt;select&gt;</code> tag. Set the
                        <code>value</code> attribute. This is the value returned inside the key-value pair.
                    </dd>
                    <dt>&lt;textarea&gt;</dt>
                    <dd>Used for text area input. Important attributes include
                        <code>name, id, min, max, required, placeholder</code>.
                    </dd>
                    <dt>&lt;button&gt;</dt>
                    <dd>
                        The HTML <code>&lt;button&gt;</code> element is typically used instead of an <code>&lt;input
                            type="submit"&gt;</code> and requires a keyboard activation, a mouse click, a voice
                        command, or finger touch. It performs the <code>action=""</code> specified by the
                        <code>&lt;form&gt;</code> tag.
                    </dd>
                </dl>

                <h4>Form Styling</h4>
                <p>
                    Styling forms, especially for improved usability, is important for the user experience. This can be
                    the difference between a visitor successfully completing a form, or leaving in frustration! Most
                    frontend developers will revise the default form elements, so they are easier to read and interact
                    with. Some major style recommendations to improve usability in general are:
                </p>
                <ul>
                    <li>Prefer vertical layout of form inputs to horizontal or mixed vertical and horizontal.</li>
                    <li>fieldset - consider using attributes <code>border margin</code>, and <code> padding.</code></li>
                    <li>label - consider using attributes <code>display: block</code>, and <code>margin</code>.</li>
                    <li>input, button, textarea, select - consider using larger font size, padding, and inherit
                        font-family.</li>
                    <li>Consider autofocusing elements, so that users can type immediately.</li>
                    <li>Consider changing colors to help users realize when they can begin typing. Any field that the
                        mouse focus can change color.</li>
                    <li>Consider using <code>:required</code> status of a field to let users know which fields they
                        must fill in and which they can ignore.</li>
                    <li>Change the visual appearance for invalid input.</li>
                    <li>Update contrasts when using hover/focus affects to improve readability.</li>
                </ul>
            </article>}

            {isActive('article-6') && <article id="article-6">
                <h3>Node, npm, and Express</h3>
                <p>Node, npm, and Express are three technologies that are used to improve the web development
                    experience.
                </p>
                <h4>Node</h4>
                <p> Node.js (Node) is a cross-platform, open-source server environment. It is a back-end JavaScript
                    runtime environment that runs on the JavaScript Engine, and executes JavaScript code outside a web
                    browers. Node can be used to write server-side software in JS, and software in the command line.
                </p>
                <h4>npm</h4>
                <p>In general, <code>npm</code> is Node's software registry, and can be used for installing libraries
                    and dependencies. It is two things:
                </p>
                <ol>
                    <li>It is an online repository for publishing Node.js packages. We can search for `npm` packages on
                        the <a href="https://www.npmjs.com/">Node package manager website.</a>
                    </li>
                    <li>It is a command-line utility that can install packages from the online repository and manage the
                        dependencies we define for our projects.</li>
                </ol>
                <h4>Express</h4>
                <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of
                    features for web and mobile applications. As with most frameworks, it comes with its own tools/API
                    functions and has its own way of structuring projects as to streamline the development process.
                </p>

            </article>}

            {isActive('article-7') && <article id="article-7">
                <h3>JavaScript Primer</h3>
                <h4>Data Types, Objects, Arrays</h4>
                <p>
                    JavaScript supports a number of built-in data types. These include: numbers, boolean values
                    (<code>true</code> or <code>false</code>), strings, symbols, special values (<code>undefined</code>
                    and <code>null</code>), and objects. Values other than objects are generally referred to as
                    primitives. Variables for primitives and object types can be declared in JavaScript using the
                    <code>let</code>, <code>constant</code>, or <code>var</code> keywords, though the use of
                    <code>var</code> is largely deprecated in modern JS. Some example declarations of different types
                    are given below:
                </p>
                <CopyBlock
                    language={`js`}
                    text={codeBlocks[7]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <p>
                    JavaScript objects are extremely versatile and used to store collections of data or properties
                    (e.g., primitive types or even other objects), but the general idea is that the <em>data</em> is
                    associated with a <em>name</em>. Objects use <em>key-value</em> (or <em>property-value</em>) pairs
                    for accessing and storing data. The keys (or properties) are used for access, and the values are
                    used for storage.
                </p>
                <CopyBlock
                    language={`js`}
                    text={codeBlocks[8]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <p>
                    A useful type of JavaScript object is the array. An array is like a list or linear data structure.
                    Arrays can be used to store a sequence of disparate data types (again, e.g. primitives or objects).
                    The data values are accessed using notation similar/akin to random access with arrays in
                    <code>C</code>. JavaScript arrays are basically objects with property names '0', '1', '2', etc. (or
                    using integers), that get accessed by indexing.
                </p>
                <CopyBlock
                    language={`js`}
                    text={codeBlocks[9]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <p>
                    Objects and arrays come with their own useful built-in properties (methods and attributes). For
                    example, the <code>.key</code> method can be applied on JavaScript objects to return a list of all
                    their properties. Arrays can make use of the <code>.map</code>, <code>.filter</code>, or
                    <code>.reduce</code> methods to iterate over their values for applying an operation, filtering by
                    some criteria, or accumulating by some operation, respectively. Other common and useful array
                    methods include the <code>.isArray</code> method for checking if the object is an array, and the
                    <code>.length</code>, <code>.pop</code>, <code>.push</code>, and <code>.includes</code> methods.
                </p>
                <CopyBlock
                    language={`js`}
                    text={codeBlocks[10]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />

                <h4>Who is Jason?</h4>
                <p>
                    Perhaps you've heard of some mysterious 'Jason' fellow in your web-development class. Who
                    is this <em>Jason</em> fellow, and why is he so popular? Actually, the question is actually not
                    who is <em>Jason</em>, but rather, what is <em>JSON</em>?
                </p>
                <p>
                    JavaScript Object Notation (JSON) is basically a human-readable way of formatting, storing and
                    representing data using key-value pairs. In contrast to serializing data which converts it to
                    non-readable binary, JSON can be stored in a simple text file and quickly inspected by a human,
                    which is probably why it's a popular storage format (though, not without tradeoffs which are context
                    dependent--not discussed here).
                </p>
                <p>
                    In JSON format, all the properties of the object are delimited by double quotes, and all string
                    values are delimited by double quotes, and array elements are separated by commas. JavaScript has
                    two build in functions which allow one to convert JavaScript objects to and from JSON using
                    <code>JSON.stringify()</code> for creating JSON string from an object, and <code>JSON.parse()</code>
                    for creating an object from a JSON string.
                </p>
                <p>Here's an example of what turning a JavaScript object into JSON looks like:</p>
                <CopyBlock
                    language={`js`}
                    text={codeBlocks[11]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <p>Returns in JSON:</p>
                <CopyBlock
                    language={`json`}
                    text={codeBlocks[12]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />

                <h4>Conditional Branching</h4>
                <p>
                    Conditional branching in JavaScript is generally done using either an
                    <strong>if-statement</strong> or <strong>switch-statement</strong> block. Examples are given below
                    using both approaches.
                </p>
                <CopyBlock
                    language={`hs`}
                    text={codeBlocks[13]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <p>
                    The if-statement block works by sequentially moving down the chain and evaluating the expression in
                    the parenthesis. The parenthesis could contain an inequality or equality expression, or anything
                    that evaluates to something truthy or falsey. Once an expression is found to evaluate to true, the
                    corresponding block of code contained in the { } is executed.
                </p>
                <p>
                    A switch statement works somewhat differently. The thread of execution cascades through each case
                    unless/until a <code>break</code> statement is encountered. A <code>default</code> case
                    is offered with switch blocks which is analogous to the <code>else</code> in if-statements paradigm,
                    and executes only if all other case statements evaluate to a false.
                </p>
                <p>For shorter uncomplicated expressions, <strong>ternary operators</strong> may also be used as a
                    compact alternative for writing a succinct branching expression. The syntax follows the structure:
                    <code> (expression)? (do A if true) : (otherwise do B if false).</code> An example is given below:
                </p>
                <CopyBlock
                    language={`hs`}
                    text={codeBlocks[14]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <h4>Looping</h4>
                <p>
                    JavaScript offers the standard while-, do-while-, and for-loop looping paradigms which appear in
                    other programming languages. In addition, JavaScript allows you to iterate over arrays (for-of) or
                    object properties or keys (for-key-in). Some examples are provided below. The <code>break</code>
                    keyword can be used to break out of the innermost loop. The <code>continue</code> keyword is used to
                    skip immediately to the next iteration of the loop or the top of the code block.
                </p>
                <CopyBlock
                    language={`js`}
                    text={codeBlocks[15]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <h4>Object-Oriented Programming</h4>
                <p>
                    JavaScript also supports the object-oriented programming (OOP) paradigm wherein distinct objects get
                    instantiated from a class (identity), have attributes (state), and definitions (its class methods).
                    To follow the OOP paradigm, classes must be defined with a constructor function, class attributes,
                    and methods (functions).
                </p>
                <p>
                    In modern JavaScript, classes are declared with the <code>class</code> syntax. Each class requires
                    definition of a <code>constructor</code> function which gets executed each time an object is
                    instantiated. Initialization variables may be optionally passed. Attributes are defined
                    inside the constructor using the <code>this</code> syntax. Instances of a class are
                    instantiated by invoking the <code>new</code> keyword. An example of a simple class is given below:
                </p>
                <CopyBlock
                    language={`js`}
                    text={codeBlocks[16]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <p>
                    Classes can also support static methods and fields using the <code>static</code> keyword. Static
                    methods and fields act at the class level, and not individual objects. Hence, static variables
                    are declared outside the constructor in the body of the class. Static fields and methods are
                    accessed by prefacing them with the name of the class.
                </p>
                <CopyBlock
                    language={`js`}
                    text={codeBlocks[17]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />
                <p>
                    Subclasses can also be defined by using the <code>extends</code> command to extend classes, and
                    <code>super</code> method in the constructor. Subclasses inherit properties and methods of the
                    superclass. The subclass can then add its own properties and methods, or override inherited methods
                    by redefining them.
                </p>
                <CopyBlock
                    language={`js`}
                    text={codeBlocks[18]}
                    showLineNumbers={true}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock={true}
                />

                <h4>Functional Programming</h4>
                <p>
                    Functional programming is a different programming paradigm that avoids working
                    with state and focuses on working with pure functions. This is generally to avoid changes to state,
                    and potentially unwanted 'side effects'. This
                    <a href="https://www.freecodecamp.org/news/functional-programming-in-javascript/">article</a>
                    provides some additional info.
                </p>
                <p>
                    The idea of functional programming basically boils down to architecting software out of pure,
                    isolated functions, and avoiding mutability and side-effects. By pure functions, this refers to
                    the fact that functions that receive the same input, should produce the same output (indempotence).
                    Isolated functions means that there is no dependence on the state of the program, including global
                    variables. By avoiding mutability and side effects, this generally refers to the fact that once
                    variables are made, they should not be changed (immutable). If changes are needed, we make changes
                    to a copy instead.
                </p>
                <p>
                    Functional programming focuses on reusability through higher order functions. JavaScript supports
                    the use of first class functions, which means functions can be assigned to a variable, passed into
                    another function, or returned from other functions. The built-in Array methods <code>.map</code>,
                    <code>.reduce</code>, and <code>.filter</code> are examples of higher order functions.
                </p>
            </article>}

            {isActive('article-8') && <article id="article-8">
                <h3>One DOM to Rule them All</h3>
                <p>
                    Who is DOM? Is he related to JSON? Or are we talking about DOM(inic) Toretto from the Fast and
                    Furious? :D Terrible jokes aside, we're actually referring to the Document Object Model (DOM).
                    <em>That</em>
                    DOM.
                </p>
                <h4>So <em>what</em> is the DOM, and what is it <em>useful</em> for?</h4>
                <p>
                    The DOM is basically a model representation for a web page. Whenever a <code>.html</code> file gets
                    read or parsed by a web browser, the content gets represented as a DOM tree. The DOM can be
                    visualized as a tree on account of the hierarchical nature of HTML documents (i.e., elements can be
                    children and/or parents of other elements, and each element has distinct properties such as their
                    text content or styling attributes for how it appears in the web browser).
                </p>
                <p>
                    In addition, modern web browsers provide API methods to directly interact with and manipulate the
                    DOM using JavaScript. This is extremely useful since it allows web developers to programmatically
                    manipulate web pages and add user-interactivity dynamically.
                </p>
                <p>
                    In web browsers like Chrome and Firefox, the DOM is represented by the <code>document</code> object.
                    The document object affords several useful methods for searching and querying elements. Some
                    examples include:
                </p>
                <ul>
                    <li><code>document.getElementById() - returns the element of a specified ID attribute</code></li>
                    <li><code>document.getElementsByTagName() - returns the elements of a specified tag.</code></li>
                    <li><code>document.getElementsByClassName() - returns the elements of specified class
                        attribute.</code></li>
                    <li><code>document.getAttribute() - returns the value of a specified attribute on the element</code>
                    </li>
                    <li><code>document.querySelector() - returns the first element that matches the specified CSS selector(s).</code>
                    </li>
                    <li><code>document.querySelectorAll() - returns all elements that matches the specified CSS selector(s).</code>
                    </li>
                </ul>
                <p>
                    From a given node (or element), one can get the children using <code>.children()</code>, traverse
                    to the next node or access the node properties. New HTML elements can be created using the
                    <code>document.createElement()</code> method, and appended to the DOM tree by applying the
                    <code>.appendChild()</code> method on an existing node in the DOM. Callback functions can also be
                    assigned to elements in the DOM for specific events or actions (e.g. click, hover, submit, mouseup,
                    mousedown, keystrokes, etc.) using <code>.addEventListener(eventType, eventCallBackFcn)</code>
                    method to improve the user interactivity and experience .
                </p>
                <h4>Example Application</h4>
                <p>
                    Check out the Staff page demo as an example of how JavaScript, Express,
                    and the DOM can be used to dynamically update a page with random data.
                </p>
            </article>}

        </>
    );
}

export default Blog;