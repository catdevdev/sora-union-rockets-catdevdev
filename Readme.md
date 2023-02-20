# Rockets Project 🚀

### Demo Link: http://vladsugar.od.ua:5554/

Welcome to the Rockets project! This is a monorepo using pnpm as a package manager with two projects, "rockets-client" and "rockets-server". This project is all about rockets.

# Frontend Structure 🐞

The `rockets-client` project uses a feature-sliced design methodology. https://feature-sliced.design/

![alt text](https://feature-sliced.design/assets/ideal-img/visual_schema.d700567.1030.jpg)

# SSR

In this project, SSR is used to fetch a list of rockets from the API and display them on the main page. The code for fetching the data is located in pages/index.tsx, and looks like this:
```
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchRockets());
    return {};
  }
);
```

# Getting started 🐝

To get started with the project, clone the repository to your local machine and run the following commands:

## Install dependencies

```
pnpm install
```

## Start the project

```
pnpm dev
```

This will start both the client and server projects.

## License

The Rockets project is licensed under the MIT License.
