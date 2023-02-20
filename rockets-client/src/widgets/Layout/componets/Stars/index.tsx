import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
  BufferGeometry,
  Float32BufferAttribute,
  MathUtils,
  PointsMaterial,
} from "three";

const randomDecimal = () => {
  const precision = 100;
  return (
    Math.floor(
      Math.random() * (10 * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision)
  );
};

const angleVector = (angle: number, distance: number) => {
  const angleRadians = (angle * Math.PI) / 180 + (90 * Math.PI) / 180;
  return {
    x: distance * Math.cos(angleRadians),
    y: distance * Math.sin(angleRadians),
  };
};

const bearing = 235;

export const Stars = () => {
  const particleCount = 400;
  const particleSize = 0.02;
  const particleTrailSize = 25;
  const particleTrailGap = 0.01;
  const particleSpeed = 0.01;
  const particleDepth = 10;
  const scale = 50;

  const { size } = useThree();
  const width = size.width / scale;
  const height = size.height / scale;
  const bounds = {
    top: -(height / 2),
    bottom: height / 2,
    left: -(width / 2),
    right: width / 2,
  };

  const particles = [];
  // @ts-ignore
  const particleOptions = [];

  for (var p = 0; p < particleCount; p++) {
    const x = MathUtils.randFloatSpread(width);
    const y = MathUtils.randFloatSpread(height);

    const z = MathUtils.randFloatSpread(particleDepth);
    particles.push(x, y, z);
    for (let i = 0; i < particleTrailSize; i++) {
      particles.push(x, y, z);
    }
    particleOptions.push({
      speed: particleSpeed + (0.5 - randomDecimal()) / 10000,
    });
  }

  const geometry = new BufferGeometry();
  // @ts-ignore
  geometry.dynamic = true;
  geometry.setAttribute("position", new Float32BufferAttribute(particles, 3));
  const material = new PointsMaterial({ color: "white", size: particleSize });

  let log = true;
  let count = 0;
  useFrame(() => {
    // @ts-ignore
    const particles = geometry.attributes.position.array;
    // @ts-ignore
    particleOptions.forEach((p, i) => {
      const index = i * (3 + particleTrailSize * 3);
      const particle = {
        x: index,
        y: index + 1,
        z: index + 2,
      };
      const vector = angleVector(bearing, p.speed);

      particles[particle.x] += vector.x;
      if (particles[particle.x] > bounds.right) {
        particles[particle.x] = bounds.left;
      } else if (particles[particle.x] < bounds.left) {
        particles[particle.x] = bounds.right;
      }

      particles[particle.y] += vector.y;
      if (particles[particle.y] > bounds.bottom) {
        particles[particle.y] = bounds.top;
      } else if (particles[particle.y] < bounds.top) {
        particles[particle.y] = bounds.bottom;
      }

      const gap = angleVector(bearing, particleTrailGap);
      for (let n = 0; n < particleTrailSize; n++) {
        const x = particle.x + 3 * (n + 1);
        const y = particle.y + 3 * (n + 1);
        const z = particle.z + 3 * (n + 1);
        particles[x] = particles[particle.x] - gap.x * n;
        particles[y] = particles[particle.y] - gap.y * n;
        particles[z] = particles[particle.z];
      }
    });
    if (count === 1) {
      log = false;
    }
    count++;
    geometry.attributes.position.needsUpdate = true;
  });
  // @ts-ignore
  return <points args={[geometry, material]} sortParticles={true} />;
};
