// HomeResult.jsx
import React from "react";
import { Header } from "./header/Header";
import { Section1 } from "./sections/Section1";
import { Footer } from "./footer/Footer";

import scss from './HomeResult.module.scss';
export const HomeResult = () => {
	return (
		<div className={scss.div}>
			<Header />
			<Section1 />
			<Footer />
		</div>
	);
};
