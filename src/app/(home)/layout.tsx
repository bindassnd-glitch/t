import React from "react";
import Popup from "./_components/Popup";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <>
          {children}
          <Popup />
    </>
  );
}
