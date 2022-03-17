import React from "react";
import store from "./common/store";
import FriendMain from "./friend/container/FriendMain";
import TimelineMain from "./timeline/container/TimelineMain";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <div>
        {/* 실전 리액트 */}
        <FriendMain />
        <TimelineMain />
      </div>
    </Provider>
  );
}
