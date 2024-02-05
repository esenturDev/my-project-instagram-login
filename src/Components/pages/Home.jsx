import axios from "axios";
import scss from "./Home.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "../ul/button/Button";
import { useNavigate } from "react-router-dom";
import { Footer } from "../layout/homeResult/footer/Footer";

export const Home = () => {
	const url =
		"https://api.elchocrud.pro/api/v1/3771dd9210fe0d48a9539bbe52347b3b/instagramlogin";
	const navigate = useNavigate();
	const [getLogin, setGetLogin] = useState([]);
	const getLoginResult = async () => {
		try {
			const response = await axios.get(url);
			setGetLogin([...response.data]);
		} catch (error) {
			console.error(error);
		}
	};
	const deleteTodo = async (id) => {
		try {
			const response = await axios.delete(`${url}/${id}`);
			localStorage.removeItem("key");
			setGetLogin(response.data);
			getLoginResult();
		} catch (error) {
			console.error(error);
		}
	};
	function homeResultFunk() {
		navigate("/");
		localStorage.removeItem("key");
	}
	useEffect(() => {
		getLoginResult();
	}, []);
	return (
		<div className={scss.homeDiv}>
			<div className="container">
				<div className={scss.content}>
					<header className={scss.header}>
						<div className={scss.headerdiv}>
							<img
								src="https://st-1.akipress.org/cdn-st-0/qd3/S/md-356.jpg"
								alt="logo peaksoft"
							/>
							<p>PeakSoft House</p>
						</div>
						<div className={scss.headerdiv}>
							<img
								src="https://pbs.twimg.com/profile_images/1311639669952729094/EfqAooet_400x400.jpg"
								alt="logo omks kg"
							/>
							<p>omks kg</p>
						</div>
						<div className={scss.headerdiv}>
							<img
								src="https://avatars.githubusercontent.com/u/152500412?v=4"
								alt="logo me"
							/>
							<p>_0sm0n0v_17</p>
						</div>
						<div className={scss.headerdiv}>
							<img
								src="https://play-lh.googleusercontent.com/tVi14YB2SnxQg3XsQfprbIgeeZUtJlDiKbcCw2EB8Osjf3bQIkYHlfF9K7ESJRrpew"
								alt="logo насаат медиа"
							/>
							<p>насаат медиа</p>
						</div>
						<div className={scss.headerdiv}>
							<img
								src="https://pbs.twimg.com/media/F-rox7_W8AAPiac?format=jpg&name=large"
								alt="logo cristiano"
							/>
							<p>cristiano</p>
						</div>
					</header>
					<div className={scss.buttondiv}>
						<Button onClick={homeResultFunk}>Exit</Button>
					</div>
					<div className={scss.cardsDiv}>
						{getLogin.map((item, index) => (
							<div className={scss.card} key={index}>
								<h2>{item.value1}</h2>
								<p>{item.value2}</p>
								<img src={item.value3} alt={item.value1} />
								<div className={scss.deleteButton}>
									<Button onClick={() => deleteTodo(item._id)}>delete</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};
