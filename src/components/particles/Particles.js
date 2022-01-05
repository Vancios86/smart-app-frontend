import Particles from "react-tsparticles";
import particlesConfig from "./config";

export default function ParticlesBackground() {
  return <Particles params={particlesConfig} id="particles" />;
}
