import Background from "../Background";

interface LayoutWrapperProps {
  children: React.ReactElement | React.ReactElement[];
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  return (
    <div>
      <Background />
      {children}
    </div>
  );
};

export default LayoutWrapper;
