// import scss from './Layout.module.scss';
// import { HomeResult } from './homeResult/HomeResult';

// export const Layout = () => {
//   return (
//     <div className={scss.layout}>
//       <HomeResult/>
//     </div>
//   )
// }

import React from "react";
import scss from "./Layout.module.scss";
import { HomeResult } from "./homeResult/HomeResult";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration ";
import { Home } from "../pages/Home";
// import { useState } from "react";

export const Layout = () => {
  // const [state, setState] = useState(false);
  // function result () {
  //   setState(true);
  //   if (state === true) {
      
  //   }
  // }
	return (
		<Router>
			<div className={scss.layout}>
				<Routes>
          <Route path="/" element={<HomeResult/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/Registration" element={<Registration/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
			</div>
		</Router>
	);
};
