import React, {useState, useEffect} from 'react'
import styles from 'styles/Right.module.scss'
import { Galleria } from 'primereact/galleria';


const Gallery = () => {

  const [images, setImages] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0)

  const galleriaService = new PhotoService();

  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

useEffect(() => {
    galleriaService.getImages().then(data => setImages(data));
}, []); // eslint-disable-line react-hooks/exhaustive-deps

const next = () => {
    setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
}

const prev = () => {
    setActiveIndex(prevState => (prevState === images.length + 1) ? 0 : prevState - 1)

}

const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
}

const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.alt} style={{ display: 'block' }} />;
}

  return (
    <>
      <Galleria />
    </>
  )
}

export default Gallery