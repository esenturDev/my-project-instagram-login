import axios from "axios";
import { Button } from "../ul/button/Button";
import { Input } from "../ul/input/Input";
import scss from "./Login.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { Modal } from "../modal/Modal";

export const Login = () => {
	const url =
		"https://api.elchocrud.pro/api/v1/3771dd9210fe0d48a9539bbe52347b3b/instagramlogin";
	const [modalyess, setModalYess] = useState(false);
	const [modal2, setModal2] = useState(false);
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleResults = async () => {
		if (email === "" || password === "") {
			setModalYess(true);
		} else {
			const response = await axios.get(url);
			const responseData = response.data;
			const findResult = responseData.find(
				(item) => item.value1 === email && item.value2 === password
			);
			if (findResult) {
				navigate("/home");
			} else {
				setModal2(true);
			}
		}
	};
	function registrHandle() {
		navigate("/Registration");
	}
	return (
		<>
			<div className={scss.logincontainer}>
				<div className="container">
					<div className={scss.content}>
						<h1>Instagram</h1>
						<div className={scss.form}>
							<Input
								type="email"
								value={email}
								setData={setEmail}
								placeholder="email"
							/>
							<Input
								type="password"
								value={password}
								setData={setPassword}
								placeholder="password"
							/>
							<Button onClick={handleResults}>войти</Button>
							<Button onClick={registrHandle}>регистрация</Button>
						</div>
						<div className={scss.content2}>
							<img
								src="https://e7.pngegg.com/pngimages/346/146/png-clipart-computer-icons-facebook-inc-facebook-blue-angle.png"
								alt=""
							/>
							<span>Log in with Facebook</span>
						</div>
						<div className={scss.content3}>
							<p>
								Don't have an account? <span>Sign up.</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			{modalyess &&
				createPortal(
					<Modal>
						<div className={scss.modal}>
							<h3>Заполнить пустые места!</h3>
							<Button
								onClick={() => {
									setModalYess(false);
								}}>
								Modal noo
							</Button>
						</div>
					</Modal>,
					document.getElementById("modal")
				)}
			{modal2 &&
				createPortal(
					<Modal>
						<div className={scss.div}>
							<h3>Неверный логин или пароль</h3>
							<Button
								onClick={() => {
									setModal2(false);
								}}>
								Modal noo
							</Button>
						</div>
					</Modal>,
					document.getElementById("modal")
				)}
		</>
	);
};
