import ImageGallery from 'react-image-gallery';
import images from '../scripts/loadImages.js'


function Gallery() {
    return (
        <>
            <h2>Gallery</h2>
            <p className="description">I enjoy perusing the city grid and snapping photos of murals on my walks.
                It's very much like a treasure hunt! Here are a few favorites! More info about the murals can be found on
                the <a href="https://www.wideopenwalls.com/">Wide Open Walls</a> website!</p>
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