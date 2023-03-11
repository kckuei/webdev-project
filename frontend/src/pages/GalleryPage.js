import ImageGallery from 'react-image-gallery';
import images from '../scripts/loadImages.js'


function Gallery() {
    return (
        <>
            <h2 className="pageTitle">Gallery</h2>



            <p className="pageSubtitle">Peruse a collection of mural photos I've snapped from around
                my city, organized using the <strong><code>react-image-gallery</code></strong>.
                More info about the murals available at the <a href="https://www.wideopenwalls.com/">Wide Open Walls</a> website!</p>
            <article>
                <ImageGallery items={images}
                    thumbnailPosition={'left'}
                    showBullets={true}
                    showIndex={true}
                    autoPlay={true}
                    disableThumbnailScroll={true}
                />
            </article>
        </>
    );
}

export default Gallery;