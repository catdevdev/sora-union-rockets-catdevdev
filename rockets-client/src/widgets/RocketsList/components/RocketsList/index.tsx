import { useAppSelector } from "@/shared/hooks/redux";

import RocketCard from "../RocketCard";

const Container = () => {
  const rockets = useAppSelector((state) => state.rocketsState.rockets);

  return (
    <div>
      {rockets.map((rocket) => (
        <RocketCard
          key={rocket.id}
          title={rocket.title}
          rocketName={rocket.rocket_name}
          description={rocket.description}
        />
      ))}
    </div>
  );
};

export default Container;
