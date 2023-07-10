import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {registerMicroApps,start,setDefaultMountApp} from "qiankun";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerMicroApps([
  {
    name: "submodule-one",
    entry: "//localhost:3001",
    container: "#subapp-viewport1",
    activeRule: "/submodule-one",
    props: { Routerbase: "/submodule-one" }
  },
  {
    name: "submodule-two",
    entry: "//localhost:3002",
    container: "#subapp-viewport2",
    activeRule: "/submodule-two",
    props: { Routerbase: "/submodule-two" }
  }
]);
// setDefaultMountApp("/submodule-one") //optional

start()