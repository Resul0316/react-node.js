import "./App.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import Apis from "./api/Apis";
import Post from "./api/Post";
import Post2 from "./api/Post2";
import Mongoose from "./component/mongoose/Mongoose.js";
import Details from "./component/mongoose/UserDetails";
import Cart from "./component/Cart";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          {/* <Apis /> */}
          {/* <Post /> */}
          {/* <Post2/> */}
          <Mongoose />
          {/* <Cart /> */}
          {/* <Details /> */}
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
