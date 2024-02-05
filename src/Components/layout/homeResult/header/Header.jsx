// import { useNavigate } from 'react-router-dom';
import scss from "./Header.module.scss";
import { Routes, Route, useNavigate } from "react-router-dom";

// import { Login } from "../../../pages/Login";
import { Button } from "../../../ul/button/Button";
export const Header = () => {
	const navigate = useNavigate();
	const layoutistrue = () => {
		navigate("/login");
	};
	return (
		<>
			<header className={scss.header}>
				<div className="container">
					<div className={scss.content}>
						<img
							src="https://i.pinimg.com/originals/6a/8d/ae/6a8dae207b423873cba5b6c532bf57a1.png"
							alt="instagram photo"
						/>
						<h3>instagram приложение</h3>
						<div className={scss.buttondiv}>
							<Button onClick={() => layoutistrue()}>Login</Button>
						</div>
					</div>
				</div>
			</header>
			{/* <Routes>
				<Route path="/login" element={<Login />} />
			</Routes> */}
		</>
	);
};
