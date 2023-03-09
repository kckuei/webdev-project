import img0 from '.././imgs/m0-moth-girl-800x-50p.jpg';
import img1 from '.././imgs/m1-feather-lady-800x-50p.jpg';
import img2 from '.././imgs/m2-astronaut-800x-50p.jpg';
import img3 from '.././imgs/m3-back-alley-800x-50p.jpg';
import img4 from '.././imgs/m4-john-lennon-800x-50p.jpg';
import img5 from '.././imgs/m5-afghan-lady-800x-50p.jpg';
import img6 from '.././imgs/m6-bear-cubs-800x-50p.jpg';
import img7 from '.././imgs/m7-panda-ghosts-800x-50p.jpg';
import img8 from '.././imgs/m8-interstellar-kiss-800x-50p.jpg';
import img9 from '.././imgs/m9-pouty-rose-guy-800x-50p.jpg';
import img10 from '.././imgs/m10-thoguhtful-rose-guy-800x-50p.jpg';
import img11 from '.././imgs/m11-asian-meets-black-800x-50p.jpg';
import img12 from '.././imgs/m12-downtown-800x-50p.jpg';
import img13 from '.././imgs/m13-four-eyes-800x-50p.jpg';
import img14 from '.././imgs/m14-fish-800x-50p.jpg';
import img15 from '.././imgs/m15-tiger-800x-50p.jpg';
import img16 from '.././imgs/m16-rainbow-geometric-800x-50p.jpg';
import img17 from '.././imgs/m17-greek-lady-800x-50p.jpg';
import img18 from '.././imgs/m18-squid-battle-800x-50p.jpg';
import img19 from '.././imgs/m19-yellow-dress-800x-50p.jpg';
import img20 from '.././imgs/m20-strawberries-800x-50p.jpg';
import img21 from '.././imgs/m21-rose-guy-800x-50p.jpg';
import img22 from '.././imgs/m22-three-girls-one-cat-800x-50p.jpg';
import img23 from '.././imgs/m23-symmetry-800x-50p.jpg';
import img24 from '.././imgs/m24-tug-of-war-800x-50p.jpg';
import img25 from '.././imgs/m25-i-love-you-800x-50p.jpg';
import img26 from '.././imgs/m26-rosie-800x-50p.jpg';
import img27 from '.././imgs/m27-paint-removal-800x-50p.jpg';
import img28 from '.././imgs/m28-three-portraits-800x-50p.jpg';
import img29 from '.././imgs/m29-bear-800x-50p.jpg';
import img30 from '.././imgs/m30-quail-800x-50p.jpg';
import img31 from '.././imgs/m31-acid-trip-800x-50p.jpg';
import img32 from '.././imgs/m32-anime-girl-800x-50p.jpg';
import img33 from '.././imgs/m33-peacock-corner-800x-50p.jpg';
import img34 from '.././imgs/m34-face-touchers-800x-50p.jpg';
import img35 from '.././imgs/m35-southside-park-800x-50p.jpg';

const descriptions = [
    'Moth Girl',
    'Feather Lady',
    'Astronauts',
    'Back Alley',
    'John Lennon',
    'Afghan Woman',
    'Bear Cubs',
    'Panda Dreams',
    'Interstellar Kiss',
    'Pouty Rose Guy',
    'Thoughtful Rose Guy',
    'Cultural Exchange',
    'Downtown',
    'Four Eyes',
    'Coi Fish',
    'Tiger',
    'Rainbow Geometric',
    'Greek Lady',
    'Squid Battle',
    'Yellow Dress (Lingering Lady)',
    'Strawberry Gremlins',
    'Smouldering Rose Guy',
    'Three Girls One Cat',
    'Symmetry',
    'Tug of War',
    'I Love You',
    'Rosie the Snake Lady',
    'Paint Removal',
    'Three Portraits',
    'Bear',
    'Quail',
    'Acid Trip',
    'Anime Girl',
    'Peacock Corner',
    'Face Touchers',
    'Southside Park'
];

const image_sources = [
    img0, img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17, img18, img19,
    img20, img21, img22, img23, img24, img25, img26, img27, img28, img29,
    img30, img31, img32, img33, img34, img35
];

let images = []
for (let i = 0; i < image_sources.length; i++) {
    images.push({
        original: image_sources[i],
        thumbnail: image_sources[i],
        description: descriptions[i],
        originalWidth: '800px',
        originalHeight: '800px',
    });
}

export default images;