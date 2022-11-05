import React from "react";
import { Container } from "reactstrap";
import Banner from "../../components/Banner";
import Images from "../../../../constants/images";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function MainPage() {
  const photos = useSelector((state) => state.photos);
  console.log("List of photos", photos);
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
      </Container>
    </div>
  );
}

export default MainPage;
