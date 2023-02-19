interface RocketCardProps {
  title: string;
  description: string;
}

const RocketCard = ({ title, description }: RocketCardProps) => {
  return (
    <div>
      {title}, {description}
    </div>
  );
};

export default RocketCard;
