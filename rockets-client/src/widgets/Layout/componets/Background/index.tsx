import { Canvas } from "@react-three/fiber";

import { Stars } from "../StarsThreeJs";

const Background = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        background: "black",
      }}
    >
      <Stars />
    </Canvas>
  );
};

export default Background;
