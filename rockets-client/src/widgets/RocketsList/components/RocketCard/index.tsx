import { DeleteOutlined } from "@ant-design/icons";
import { Card, Col, Divider, List, Row, Spin, Typography } from "antd";
import Image from "next/image";

import { deleteRocketById } from "@/entities/Rockets";
import { editRocket } from "@/entities/Rockets/api/editRocket/editRocket";
import { useAppDispatch } from "@/shared/hooks/redux";

interface RocketCardProps {
  id: number;
  title: string;
  rocketName: string;
  description: string;
  isUploading: boolean;
  githubUserLogin: string;
  githubUserAvatarUrl: string;
}

const { Title, Text } = Typography;

const RocketCard = ({
  id,
  title,
  rocketName,
  description,
  isUploading,
  githubUserLogin,
  githubUserAvatarUrl,
}: RocketCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <Card
      title={title}
      bordered={false}
      extra={
        <>
          {isUploading ? <Spin size={"small"} /> : null}{" "}
          <DeleteOutlined
            onClick={() => {
              dispatch(deleteRocketById({ id }));
            }}
            style={{
              cursor: "pointer",
            }}
          />
        </>
      }
      style={{ width: "100%" }}
    >
      <Row align={"middle"} wrap={false}>
        <Image src={githubUserAvatarUrl} alt={title} width="65" height="65" />
        <Title
          style={{
            margin: "0 12px",
          }}
          level={3}
        >
          {githubUserLogin}
        </Title>
      </Row>
      <Row
        style={{
          marginTop: 12,
        }}
      >
        <Text
          style={{
            width: "100%",
            fontSize: 18,
          }}
        >
          🚀 Rocket Name
        </Text>

        <Text
          style={{
            fontSize: 18,
          }}
          editable={{
            triggerType: ["text", "icon"],
            tooltip: "click to edit 🚀 Rocket Name",
            onChange: (rocket_name) => {
              dispatch(editRocket({ id, rocket_name }));
            },
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
          style={{
            width: "100%",
            fontSize: 18,
          }}
        >
          💬 Description
        </Text>
        <Text
          style={{
            fontSize: 18,
          }}
          editable={{
            triggerType: ["text", "icon"],
            tooltip: "click to edit 🚀 Rocket Name",
            onChange: (description) => {
              dispatch(editRocket({ id, description }));
            },
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
