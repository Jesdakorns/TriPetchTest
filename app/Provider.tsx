"use client";

import { AppProvider } from "@/context/AppProvider";

interface Props {
  children: React.ReactNode;
}

const CustomProviders = ({ children }: Props) => {

  return (
    <>
      <AppProvider>{children}</AppProvider>
    </>
  );
};

export default CustomProviders;
