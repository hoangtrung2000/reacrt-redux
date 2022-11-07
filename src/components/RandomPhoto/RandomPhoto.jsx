import React from "react";
import PropTypes from "prop-types";
import "./RandomPhoto.scss";
import { Button } from "reactstrap";
import { randomNumber } from "utils/common";

function RandomPhoto(props) {
  const {
    name,
    imageUrl,
    onRandomButtonBlur,
    onImageUrlChange,
    classNames,
    disabled,
  } = props;
  const getRandomImageUrl = () => {
    const randomId = randomNumber(2000, 4000);
    return `https://picsum.photos/id/${randomId}/300/300`;
  };
  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  return (
    <div className={`random-photo ${classNames}`}>
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
          disabled={disabled}
        >
          Random a photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Oops... Not found, please click again"
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
    </div>
  );
}

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  disabled: PropTypes.bool,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  disabled: false,
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

export default RandomPhoto;
