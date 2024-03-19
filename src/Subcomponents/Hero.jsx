import { Hero_hood, Hero_sneaker, girl_hood } from "../assets/Hero";

function Hero() {
  return (
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
            <img src={Hero_sneaker} alt="" />
          </div>
        </div>
        <div className="m_flx_2 col-md-12">
          <div className="col-md-6 myObg">
            <div className="sec_bg_1">
              <img src={girl_hood} alt="" />
            </div>
          </div>
          <div className="col-md-6 myObg">
            <div className="sec_bg_2">
              <img src={Hero_hood} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
