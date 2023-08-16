import { Provider } from "react-redux";
import { store } from "./src/_store";

import Home from "./src";
import { Text } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      {/* <Home /> */}
      <Text> Hello WOrd</Text>
    </Provider>
  );
}

