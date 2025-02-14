import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import productStore from "../../store/productStore.js";


const GalleryImage = () => {
    // Assuming productStore is a Zustand store
    const { ProductDetails } = productStore(); // Correctly calling the store function

    // Ensure ProductDetails exists before accessing properties
    const images = ProductDetails?.[0]?.details
        ? [
            { original: ProductDetails[0].details.img1, thumbnail: ProductDetails[0].details.img1 },
            { original: ProductDetails[0].details.img2, thumbnail: ProductDetails[0].details.img2 },
            { original: ProductDetails[0].details.img3, thumbnail: ProductDetails[0].details.img3 },
            { original: ProductDetails[0].details.img4, thumbnail: ProductDetails[0].details.img4 },
            { original: ProductDetails[0].details.img5, thumbnail: ProductDetails[0].details.img5 },
            { original: ProductDetails[0].details.img6, thumbnail: ProductDetails[0].details.img6 },
            { original: ProductDetails[0].details.img7, thumbnail: ProductDetails[0].details.img7 },
            { original: ProductDetails[0].details.img8, thumbnail: ProductDetails[0].details.img8 },
        ]
        : []; // Fallback in case ProductDetails is undefined

    return (
        <div>
            <ImageGallery autoPlay={true} items={images} />
        </div>
    );
};

export default GalleryImage;
