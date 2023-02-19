import { Canvas } from "@react-three/fiber";

import { Stars } from "../Stars";

const Background = () => {
  return (
    <Canvas
      style={{
        height: "100vh",
        background: "black",
        position: "fixed",
      }}
    >
      <Stars />
    </Canvas>
  );
};

export default Background;
