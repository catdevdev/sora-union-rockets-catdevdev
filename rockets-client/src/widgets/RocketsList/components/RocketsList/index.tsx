import { useAppSelector } from "@/shared/hooks/redux";

import RocketCard from "../RocketCard";

const Container = () => {
  const rockets = useAppSelector((state) => state.rocketsState.rockets);

  return (
    <div>
      {rockets.map((rocket) => {
        return (
          <RocketCard key={rocket.id} title={rocket.name} description={""} />
        );
      })}
    </div>
  );
};

export default Container;
