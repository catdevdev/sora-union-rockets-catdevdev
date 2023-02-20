import { Col, Row } from "antd";

import { wrapper } from "@/app/store/store";
import { fetchRockets } from "@/entities/Rockets";
import FormAddRocket from "@/widgets/FormAddRocket";
import { LayoutWrapper } from "@/widgets/Layout";
import { RocketsList } from "@/widgets/RocketsList";

import styles from "./index.module.scss";

const Index = () => {
  return (
    <Row
      style={{
        background: "rgba(255,255,255, 0.2)",
        position: "relative",
        width: "fit-content",
        margin: "0 auto",
        backdropFilter: "blur(5px)",
      }}
      className={styles.container}
      justify="center"
      gutter={[36, 0]}
    >
      <Col style={{ width: 350, marginTop: 45 }}>
        <RocketsList />
      </Col>
      <Col style={{ width: 350, marginTop: 45 }}>
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
