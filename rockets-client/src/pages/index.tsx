import { wrapper } from "@/app/store/store";
import { fetchRockets } from "@/entities/Rockets";
import { useAppSelector } from "@/shared/hooks/redux";
import { RocketsList } from "@/widgets/RocketsList";

const Index = () => {
  return (
    <div>
      <pre>{}</pre>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  // @ts-ignore
  (store) => async () => {
    await store.dispatch(fetchRockets());
    return {};
  }
);

export default Index;
