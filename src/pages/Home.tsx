import "./Home.css";
import Img1 from "../../public/images/8.png";
import Img2 from "../../public/images/1.png";
import Img3 from "../../public/images/2.png";
import Img4 from "../../public/images/3.png";
import Img6 from "../../public/images/9.png";
import Img5 from "../../public/logo.jpg";
import Img8 from "../../public/images/5.png";
import Img7 from "../../public/images/6.png";
import Img9 from "../../public/images/3.png";

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
          <img src={Img7} alt="Landing" className="home_img_07" />
          <img src={Img8} alt="Landing" className="home_img_08" />
          <img src={Img9} alt="Landing" className="home_img_09" />
        </div>

        <div className="Home_para">
          <div className="box1"></div>
          <div className="box2"></div>
          <p>
            <span>Sylfaen</span> is your comprehensive solution for multilingual
            font and text processing needs. Designed to support various Indian
            languages, Sylfaen combines ease of use with powerful features to
            provide an unparalleled typing and text processing experience.
          </p>
        </div>

    
        
      </div>
    </div>
  );
};

export default Home;
