import { ReactElement } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer/Footer";

export const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
        <Header />
            { children }
        <Footer />
    </>
  )
}