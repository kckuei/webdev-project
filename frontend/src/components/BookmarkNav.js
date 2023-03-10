import { useState } from 'react';
import { Link } from 'react-router-dom';

function BookmarkNav({ activeArticle, setActiveArticle }) {

    // Use state to re-render nav bookmark on change.
    const [active, setActive] = useState('article-1');

    // Sets class to 'active' if specified article matches active article.
    function setActiveClass(article) {
        return (article === active) ? 'active' : ''
    }

    const toggleActiveArticle = (e) => {
        // Trigger re-render in parent blog page.
        setActiveArticle(e.target.attributes.article.value);

        // Trigger re-render locally. 
        setActive(e.target.attributes.article.value)
    }

    return (
        <>
            <nav className="nav-articles">
                <Link href="/blog" id="t1" article="article-1" className={setActiveClass('article-1')}
                    onClick={toggleActiveArticle}>
                    Web Servers
                </Link>
                <Link href="/blog" id="t2" article="article-2" className={setActiveClass('article-2')}
                    onClick={toggleActiveArticle}>
                    Frontend Design
                </Link>
                <Link href="/blog" id="t3" article="article-3" className={setActiveClass('article-3')}
                    onClick={toggleActiveArticle}>
                    Optimizing Images
                </Link>
                <Link href="/blog" id="t4" article="article-4" className={setActiveClass('article-4')}
                    onClick={toggleActiveArticle}>
                    CSS
                </Link>
                <Link href="/blog" id="t5" article="article-5" className={setActiveClass('article-5')}
                    onClick={toggleActiveArticle}>
                    Form Usability
                </Link>
                <Link href="/blog" id="t6" article="article-6" className={setActiveClass('article-6')}
                    onClick={toggleActiveArticle}>
                    Web Frameworks
                </Link>
                <Link href="/blog" id="t7" article="article-7" className={setActiveClass('article-7')}
                    onClick={toggleActiveArticle}>
                    JavaScript
                </Link>
                <Link href="/blog" id="t8" article="article-8" className={setActiveClass('article-8')}
                    onClick={toggleActiveArticle}>
                    DOM
                </Link>
            </nav>
            {/* Used previously for linking to bookmarks when blog was monolithic.   */}
            {/* <nav className="nav-articles">
                <a href="/blog#article-1" id="t1">
                    Web Servers
                </a>
                <a href="/blog#article-2" id="t2">
                    Frontend Design
                </a>
                <a href="/blog#article-3" id="t3">
                    Optimizing Images
                </a>
                <a href="/blog#article-4" id="t4">
                    CSS
                </a>
                <a href="/blog#article-5" id="t5">
                    Form Usability
                </a>
                <a href="/blog#article-6" id="t6">
                    Web Frameworks
                </a>
                <a href="/blog#article-7" id="t7">
                    JavaScript
                </a>
                <a href="/blog#article-8" id="t8" >
                    DOM
                </a>
            </nav> */}
        </>
    );
}

export default BookmarkNav;
