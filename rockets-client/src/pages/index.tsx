import { wrapper } from "@/app/store/store";
import { useAppSelector } from "@/shared/hooks/redux";

const Index = () => {
  const rockets = useAppSelector((state) => state.rocketsState.rockets);

  return <div>{123}</div>;
};

export const getStaticProps = wrapper.getStaticProps(
  // @ts-ignore
  (store) => async () => {
    const {
      colours: { selected: selectedColours },
      shapes: { selected: selectedShapes },
    } = store.getState().filtersState.filterOptions;

    await store.dispatch(fetchCollections());
    store.dispatch(
      collectionsSlice.actions.setSelectedCollection({
        id: 1,
      })
    );
    await store.dispatch(
      fetchGlasses({ colours: selectedColours, shapes: selectedShapes })
    );
  }
);

export default Index;
