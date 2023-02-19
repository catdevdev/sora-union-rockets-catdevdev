import { Card, Spin } from "antd";

interface RocketCardProps {
  title: string;
  rocketName: string;
  description: string;
  isUploading: boolean;
}

const RocketCard = ({
  title,
  rocketName,
  description,
  isUploading,
}: RocketCardProps) => {
  return (
    <Card title="Card title" bordered={false} style={{ width: "100%" }}>
      {isUploading ? <Spin /> : null}
      {title}, {rocketName}, {description}
    </Card>
  );
};

export default RocketCard;
