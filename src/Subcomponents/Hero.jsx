import { Hero_hood, Hero_sneaker, girl_hood } from "../assets/Hero";
import Arrivals from "./Arrivals";

function Hero() {
  return (
    <>
      <div className="col-md-12   mx-auto row mY-f_3 ">
        <div className="my-bg-secondary col-md-7">
          <div className="txt">
            <h3>New Arrivals</h3>
            <h2>ZIP HOODIE</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
              fugit libero.
            </p>
          </div>
          <div className="discover">
            <h3>Discover Now</h3>
          </div>
          <div className="myRounded"></div>
          <div className="img">
            <img
              className="img"
              src="assets/Hero/wepik-export-20240313000953WE9v.png"
              alt=""
            />
          </div>
        </div>
        <div className="m_flx col-md-4">
          <div className="col-md-12 myOBg">
            <div className="sec_bg">
              <div className="bg_txt">
                <h2>
                  Men's <br /> Summer Sneaker
                </h2>
                <h5>Big Sale off this week</h5>
              </div>
              <img src={Hero_sneaker} alt="" />
            </div>
          </div>
          <div className="m_flx_2 col-md-12">
            <div className="col-md-6 myObg">
              <div className="sec_bg_1">
                <div className="bg_txt">
                  <h2>Clothing No18</h2>
                  <p>Sale off, 20% all store</p>
                </div>
                <img src={girl_hood} alt="" />
              </div>
            </div>
            <div className="col-md-6 myObg">
              <div className="sec_bg_2">
                <div className="bg_txt">
                  <h2>Bag No1</h2>
                  <p>Big Sale, No Limited</p>
                </div>
                <img src={Hero_hood} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Arrivals />
    </>
  );
}

export default Hero;
