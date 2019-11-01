import React, { useContext } from "react";
import styled from "styled-components";
import content from "../../utils/content";
import { LanguageContext } from "../../utils/LanguageContext";
const GalleryContainer = styled.div`
  padding-top: 90px;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  ul {
    -webkit-columns: 200px;
    -moz-columns: 200px;
    columns: 200px;
    -webkit-column-break-inside: avoid;
    page-break-inside: avoid;
    break-inside: avoid;
    margin-left: 20px;
    margin-right: 20px;
  }

  img {
    width: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    margin-top: 0px;
    margin-bottom: 20px;
    border: 1px solid black;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  }
`;

const Gallery = () => {
  const { language } = useContext(LanguageContext);
  const galleryContent = content[language].gallery;
  const { images } = galleryContent;

  return (
    <GalleryContainer>
      <ul>
        {Object.keys(images).map(imgKey => {
          return (
            <li>
              <img src={images[imgKey]} alt="randomst"></img>
            </li>
          );
        })}
      </ul>
    </GalleryContainer>
  );
};

export default Gallery;
