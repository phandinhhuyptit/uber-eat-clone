import * as React from "react";
import { View, Text } from "react-native";
import RootNavigation from "./navigation";
import { Provider as ReduxProvider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import root from "./src/redux/reducers";

const store = createStore(root, applyMiddleware(thunk));

export default function App() {
  return (
    <ReduxProvider store={store}>
      <RootNavigation />
    </ReduxProvider>
  );
}
