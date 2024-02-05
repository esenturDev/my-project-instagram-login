import axios from "axios";
import scss from "./Registration .module.scss";
import { useState } from "react";
import { Input } from "../ul/input/Input";
import { Button } from "../ul/button/Button";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
	const url =
		"https://api.elchocrud.pro/api/v1/3771dd9210fe0d48a9539bbe52347b3b/instagramlogin";
	const navigate = useNavigate();
	const [data, setData] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [photo, setPhoto] = useState("");
	const handlePost = async () => {
		const newData = {
			value1: email,
			value2: password,
			value3: photo,
		};
		setEmail("");
		setPassword("");
		setPhoto("");
		try {
			const response = await axios.post(url, newData);
			localStorage.setItem("key", JSON.stringify(newData));
			setData([...response.data]);
			navigate("/login");
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className={scss.registration}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.form}>
            <h2>регистрация</h2>
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
						<Input
							type="url"
							value={photo}
							setData={setPhoto}
							placeholder="photo"
						/>
						<Button onClick={() => handlePost()}>Add</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
