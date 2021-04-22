import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export const GalleryImg = ({ gallery }) => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {
                gallery.map((item, i) =>
                (<div className="gallery_item" key={i}>
                    {/* <GatsbyImage
                            loading="lazy"
                            placeholder="blurred"
                            alt={'gallery image'}
                            fluid={
                                getImage(item.img.fluid)
                            }
                        /> */}
                    <img src={item.img.url} onClick={() => { setIsOpen(true); setPhotoIndex(i) }} alt="image" />
                </div>))
            }

            {isOpen && (
                <Lightbox
                    mainSrc={gallery[photoIndex].img.url}
                    nextSrc={gallery[(photoIndex + 1) % gallery.length].img.url}
                    prevSrc={gallery[(photoIndex + gallery.length - 1) % gallery.length].img.url}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex(photoIndex + gallery.length - 1)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % gallery.length)

                    }
                />
            )}
        </>
    );
}