import Tilt from "react-parallax-tilt";
import question from "./question2.png";

const Logo = () => {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <div className="inner-element">
        <img src={question} alt="logo" />
      </div>
    </Tilt>
  );
};

export default Logo;
