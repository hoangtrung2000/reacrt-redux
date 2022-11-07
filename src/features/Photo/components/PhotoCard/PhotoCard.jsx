import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./PhotoCard.scss";

function PhotoCard(props) {
  const { photo, onEditClick, onRemoveClick } = props;
  const handleRemove = () => {
    if (onRemoveClick) onRemoveClick(photo);
  };
  const handleEdit = () => {
    if (onEditClick) onEditClick(photo);
  };
  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />
      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>
        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEdit}>
              Edit
            </Button>
          </div>
          <div>
            <Button outline size="sm" color="danger" onClick={handleRemove}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onEditClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onEditClick: null,
  onRemovelick: null,
};

export default PhotoCard;
