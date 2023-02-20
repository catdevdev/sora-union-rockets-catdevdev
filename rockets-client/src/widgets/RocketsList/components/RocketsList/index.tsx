import { Col, Row, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetchMoreRockets, fetchRockets } from "@/entities/Rockets";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";

import RocketCard from "../RocketCard";

const RocketList = () => {
  const dispatch = useAppDispatch();

  const { isLoading, isPaginationLoading, hasMore } = useAppSelector(
    (state) => state.rocketsState
  );

  const rockets = useAppSelector((state) => state.rocketsState.rockets);

  const fetchMoreData = () => {
    if (!isLoading && hasMore) {
      dispatch(fetchMoreRockets());
    }
  };

  return (
    <InfiniteScroll
      dataLength={rockets.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Spin />}
    >
      <Row
        style={{
          flexDirection: "column-reverse",
        }}
        gutter={[0, 24]}
      >
        {[...rockets]
          .sort((rocketA, rocketB) => rocketA.id + rocketB.id)
          .map((rocket) => (
            <RocketCard
              key={rocket.id}
              id={rocket.id}
              title={`${rocket.title} + ${rocket.id}`}
              rocketName={rocket.rocket_name}
              description={rocket.description}
              isUploading={rocket.isUploading}
              githubUserAvatarUrl={rocket.githubUser.avatar_url}
              githubUserLogin={rocket.githubUser.login}
            />
          ))}
      </Row>
    </InfiniteScroll>
  );
};

export default RocketList;
