"use client";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Providers = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children};
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;
