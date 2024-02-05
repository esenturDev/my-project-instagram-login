import scss from "./Footer.module.scss";
export const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className={scss.content}>
					<h3>Instagram 2024😍</h3>
					<div className={scss.divPhotos}>
						<img
							src="https://resizer.mail.ru/p/5122ddeb-5f1a-5c55-8af9-1f262ecb8232/AQAKX9-qFJI5DjwBXAaB3QRLGdQks9PFWsCdE521EjSVkIKGCcRbeyYCoJnL00_T_A-ktgWwcFDOUcAyFrHhRH1zwnc.jpg"
							alt="logo"
						/>
						<img
							src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
							alt="logo"
						/>
						<img src="https://w7.pngwing.com/pngs/402/10/png-transparent-telegram-logo-scalable-graphics-icon-logo-blue-angle-triangle.png" alt="logo" />
					</div>
				</div>
			</div>
		</footer>
	);
};
