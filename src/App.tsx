import { Provider } from "react-redux";
import store from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Application from "../src/Application";
import { Toaster } from "react-hot-toast";

/**CREATE STORE PERSIST INSTANCE */
let persistor = persistStore(store);

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Toaster />
          <Application />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
