import { Col, Row } from "antd";

import { useAppSelector } from "@/shared/hooks/redux";

import RocketCard from "../RocketCard";

const RocketList = () => {
  const rockets = useAppSelector((state) => state.rocketsState.rockets);

  return (
    <Row gutter={[0, 24]}>
      {[...rockets].reverse().map((rocket) => (
        <RocketCard
          key={rocket.id}
          title={rocket.title}
          rocketName={rocket.rocket_name}
          description={rocket.description}
          isUploading={rocket.isUploading}
        />
      ))}
    </Row>
  );
};

export default RocketList;
