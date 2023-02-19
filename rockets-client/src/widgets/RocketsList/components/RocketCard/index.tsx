import { Card } from "antd";

interface RocketCardProps {
  title: string;
  rocketName: string;
  description: string;
}



const RocketCard = ({ title, rocketName, description }: RocketCardProps) => {
  return (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      {title}, {rocketName}, {description}
    </Card>
  );
};

export default RocketCard;
