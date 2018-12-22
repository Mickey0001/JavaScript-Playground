import React from 'react';
import './ImageList.css';
import Imagecard from './ImageCard';

const ImageList = (props) => 
{
  const images = props.images.map(image => 
  {
    return <Imagecard key={image.id} image={image}/>;
  });
  return <div className="image-list">{images}</div>;
}

export default ImageList;