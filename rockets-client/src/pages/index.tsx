import { wrapper } from "@/app/store/store";
import { fetchRockets } from "@/entities/Rockets";
import { useAppSelector } from "@/shared/hooks/redux";
import axios from "@/shared/axios/axiosInstance";

const Index = () => {
  const rockets = useAppSelector((state) => state.rocketsState.rockets);
  const a = axios.get("/rockets");

  return <div>{123}</div>;
};

export const getStaticProps = wrapper.getStaticProps(
  // @ts-ignore
  (store) => async () => {
    await store.dispatch(fetchRockets());
  }
);

export default Index;
