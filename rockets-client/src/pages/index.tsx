import { Col, Row } from "antd";

import { wrapper } from "@/app/store/store";
import { fetchRockets } from "@/entities/Rockets";
import { useAppSelector } from "@/shared/hooks/redux";
import FormAddRocket from "@/widgets/FormAddRocket";
import { LayoutWrapper } from "@/widgets/Layout";
import { RocketsList } from "@/widgets/RocketsList";

const Index = () => {
  return (
    <Row
      style={{
        background: "rgba(255,255,255, 0.2)",
        position: "relative",
        // zIndex: 1000000000000;
        width: "fit-content",
        margin: "0 auto",
        backdropFilter: "blur(5px)",
      }}
      justify="center"
      gutter={[36, 0]}
    >
      <Col style={{ width: 350 }}>
        <RocketsList />
      </Col>
      <Col style={{ width: 300 }}>
        <FormAddRocket />
      </Col>
    </Row>
  );
};

Index.getLayout = (page: React.ReactElement) => (
  <LayoutWrapper>{page}</LayoutWrapper>
);

export const getServerSideProps = wrapper.getServerSideProps(
  // @ts-ignore
  (store) => async () => {
    await store.dispatch(fetchRockets());
    return {};
  }
);

export default Index;
