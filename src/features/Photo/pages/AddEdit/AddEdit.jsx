import { addPhoto } from "features/Photo/photoSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import "./AddEdit.scss";

function AddEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const action = addPhoto(values);
        console.log("Action", action);
        dispatch(action);
        navigate("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEdit;
