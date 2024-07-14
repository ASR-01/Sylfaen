import "./Home.css";
import Img1 from "../../public/Img.png";
import Img2 from "../../public/Images/Fon1.jpg";
import Img3 from "../../public/Images/Fon2.jpg";
import Img4 from "../../public/Images/fon3.jpg";
import Img5 from "../../public/Images/fon4.jpg";
import Img6 from "../../public/Images/fon5.jpg";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_container_content">
        <div className="home_container_content_grid">
          <img src={Img1} alt="Landing" className="home_img_01" />
          <img src={Img2} alt="Landing" className="home_img_02" />
          <img src={Img3} alt="Landing" className="home_img_03" />
          <img src={Img4} alt="Landing" className="home_img_04" />
          <img src={Img5} alt="Landing" className="home_img_05" />
          <img src={Img6} alt="Landing" className="home_img_06" />
        </div>
      </div>
    </div>
  );
};

export default Home;
