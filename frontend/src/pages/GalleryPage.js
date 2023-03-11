import ImageGallery from 'react-image-gallery';
import images from '../scripts/loadImages.js'


function Gallery() {
    return (
        <>
            <h2 className="pageTitle">Gallery</h2>
            <p className="description">Photos of murals I've snapped on my walks around the city,
                organized using the <strong><code>react-image-gallery</code></strong> node module.
                More info about the murals can be found on the <a href="https://www.wideopenwalls.com/">Wide Open Walls</a> website!</p>
            <ImageGallery items={images}
                thumbnailPosition={'left'}
                showBullets={true}
                showIndex={true}
                autoPlay={true}
                disableThumbnailScroll={true}
            />
        </>
    );
}

export default Gallery;