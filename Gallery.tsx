import React from 'react';

const Gallery = () => {
    const images = [
        '/assets/images/gallery/image1.jpg',
        '/assets/images/gallery/image2.jpg',
        '/assets/images/gallery/image3.jpg',
        '/assets/images/gallery/image4.jpg',
        '/assets/images/gallery/image5.jpg'
    ];

    return (
        <div className="gallery">
            {images.map((src, index) => (
                <img key={index} src={src} alt={`Gallery image ${index + 1}`} />
            ))}
        </div>
    );
};

export default Gallery;
