"use client";

import { Provider } from "react-redux";
import { store, persistor } from "@/store/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PersistGate } from "redux-persist/integration/react";

import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
