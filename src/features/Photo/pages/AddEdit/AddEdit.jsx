import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { randomNumber } from "utils/common";
import Banner from "../../components/Banner";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import "./AddEdit.scss";

function AddEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isAddMode = !photoId;
  const editPhotoId = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );
  const initialValues = isAddMode
    ? {
        title: "", // undefined = uncontrolled component
        categoryId: null,
        photo: "",
      }
    : editPhotoId;
  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        navigate("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}

export default AddEdit;
