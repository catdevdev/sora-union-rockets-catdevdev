import { wrapper } from "@/app/store/store";
import { fetchRockets } from "@/entities/Rockets";
import { useAppSelector } from "@/shared/hooks/redux";
import { LayoutWrapper } from "@/widgets/Layout";
import { RocketsList } from "@/widgets/RocketsList";

const Index = () => {
  return <div>123</div>;
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
