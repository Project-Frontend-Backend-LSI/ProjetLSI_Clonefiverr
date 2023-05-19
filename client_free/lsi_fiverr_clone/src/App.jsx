import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Navbare from './Component/Navbare/Navbare';
import Form from './pages/Formlog/Form';
import  Login  from "./pages/FromLogin/Login";
import Frelancer from './pages/Pfreelencer/Frelancer';
import Home from './pages/Home/Home';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.forEach(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3000/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  const Layout = () => {
    return (
      <>
        <Navbare />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Pfrelancer",
          element: <Frelancer />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Form />,
        },
      ]
    },
  ]);

  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </ApolloProvider>
  );
}

export default App;
