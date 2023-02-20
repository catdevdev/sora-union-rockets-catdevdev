import { Card, Row, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

import useInfinityScroling from "../../hooks/useInfinityScroling";
import RocketCard from "../RocketCard";

const RocketList = () => {
  const { rockets, fetchMoreData, hasMore } = useInfinityScroling();

  return (
    <InfiniteScroll
      dataLength={rockets.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <Card
          style={{
            width: "100%",
            height: 250,
            marginTop: 28,
            marginBottom: 28,
          }}
        >
          <Skeleton loading={true} avatar active></Skeleton>
        </Card>
      }
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
              title={rocket.title}
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
