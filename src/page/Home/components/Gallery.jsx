import React from 'react';
import PhotoAlbum from "react-photo-album";
const Gallery = () => {

    const photos = [
        { src: "https://images.unsplash.com/photo-1456082902841-3335005c3082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", width: 800, height: 600 },
        { src: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", width: 1600, height: 900 },
        { src: "https://images.unsplash.com/photo-1559940033-a887678af2f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FyJTIwdG95c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", width: 2000, height: 900 },
        { src: "https://images.unsplash.com/photo-1587839871379-2d6c28071f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhciUyMHRveXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", width: 1000, height: 900 },
    ];

    return (
        <div className='container'>
            <div className="row py-5">
                <div className="col-md-12 text-center">
                    <h5 className='text-danger'>Gallery</h5>
                    <h2 className='pb-4'>Our Beautiful Car Toys</h2>
                <PhotoAlbum layout="rows" photos={photos} />
                </div>
            </div>
        </div>
    );
};

export default Gallery;