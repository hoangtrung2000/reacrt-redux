import React from "react";
import Banner from "../../components/Banner";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import "./AddEdit.scss";

function AddEdit() {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={(values) => console.log("Form submitL:", values)}
        />
      </div>
    </div>
  );
}

export default AddEdit;
