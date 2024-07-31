import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { CartContextProvider } from "./Contexts/CartContext";

import { DefaultLayout } from "./Components/Layout/DefaultLayout";
import { UserContextProvider } from "./Contexts/UserContext";

function App() {
  return (
    <CartContextProvider>
      <UserContextProvider>
        <ToastContainer
          pauseOnHover
          closeOnClick
          theme="light"
        />
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </UserContextProvider>
    </CartContextProvider>
  )
}

export default App;
