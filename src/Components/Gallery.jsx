import "../Styles/Gallery.css";
import imageFile from "./../assets/Images/01.jpg"

const Gallery = () => {
    const images = [
        { id: 1, scr: imageFile},
        { id: 2, scr: imageFile},
        { id: 3, scr: imageFile},
        { id: 4, scr: imageFile},
        { id: 5, scr: imageFile},
        { id: 6, scr: imageFile},
        { id: 7, scr: imageFile},
        { id: 8, scr: imageFile},
        { id: 9, scr: imageFile},
      
    ];
    return ( 
        <>
            <div className="gallery">
                {images.map((image) => {
                    return (
                        <div className="image-container">
                            <img className="image" src={image.src} key={image.id} />
                        </div>
                    )
                })}
            </div>
        </>
     );
}
 
export default Gallery;

