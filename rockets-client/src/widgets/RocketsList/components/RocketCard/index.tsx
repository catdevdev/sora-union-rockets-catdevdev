import { DeleteOutlined } from "@ant-design/icons";
import { Card, Col, Divider, List, Row, Spin, Typography } from "antd";
import Image from "next/image";

interface RocketCardProps {
  title: string;
  rocketName: string;
  description: string;
  isUploading: boolean;
}

const { Title, Text } = Typography;

const RocketCard = ({
  title,
  rocketName,
  description,
  isUploading,
}: RocketCardProps) => {
  return (
    <Card
      title={title}
      bordered={false}
      extra={
        <>
          <Spin size={"small"} />
          {"  "}
          <DeleteOutlined />
        </>
      }
      style={{ width: "100%" }}
    >
      <Row align={"middle"} wrap={false}>
        <Image
          src="https://thumbs.gfycat.com/MemorableBetterCockroach-size_restricted.gif"
          alt={title}
          width="65"
          height="65"
        />
        <Title
          style={{
            margin: "0 12px",
          }}
          level={3}
        >
          test
        </Title>
      </Row>
      <Row
        style={{
          marginTop: 12,
        }}
      >
        <Text>🚀 Rocket Name is</Text>
        <Text
          editable={{
            triggerType: ["text", "icon"],
            tooltip: "click to edit 🚀 Rocket Name",
            onChange: () => {},
          }}
          keyboard
          italic
        >
          {rocketName}
        </Text>
      </Row>
      <Row
        style={{
          marginTop: 12,
        }}
      >
        <Text
          editable={{
            triggerType: ["text", "icon"],
            tooltip: "click to edit 🚀 Rocket Name",
            onChange: () => {},
          }}
          italic
        >
          {description}
        </Text>
      </Row>
    </Card>
  );
};

export default RocketCard;
