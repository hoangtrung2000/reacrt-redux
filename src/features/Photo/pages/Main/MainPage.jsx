import React from "react";
import { Container } from "reactstrap";
import Banner from "../../components/Banner";
import Images from "../../../../constants/images";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
function MainPage() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditPhoto = (photo) => {
    const editPhotoUrl = `/photos/${photo.id}`;
    navigate(editPhotoUrl);
  };
  const handleRemovePhoto = (photo) => {
    const idPhotoRemoved = photo.id;
    const action = removePhoto(idPhotoRemoved);
    dispatch(action);
  };
  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.PINK_BG}
      />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handleEditPhoto}
          onPhotoRemoveClick={handleRemovePhoto}
        />
      </Container>
    </div>
  );
}

export default MainPage;
