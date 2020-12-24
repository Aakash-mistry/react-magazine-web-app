import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Root from "./pages";
import { configureStore, store } from "./store";
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

configureStore();

const App: React.FC = () => {
     return (
          <Provider store={store}>
               <BrowserRouter>
                    <SnackbarProvider
                         anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                         }}>
                         <Root />
                    </SnackbarProvider>
               </BrowserRouter>
          </Provider>
     );
};

export default App;
