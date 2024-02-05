import scss from "./Section1.module.scss";
export const Section1 = () => {
	return (
		<section className={scss.section}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.texts}>
						<h2>Кто придумал Инстаграм национальность?</h2>
						<div className={scss.divtext}>
							<h3>Кто руководитель Инстаграм?</h3>
							<p>
								Генеральный директор социальной сети Instagram Адам Моссери
								впервые дал
							</p>
							<p>
								показания перед Конгрессом. Выступая перед коллегией Сената, он
								заявил, что
							</p>
							<p>
								гордится достижениями соцсети по обеспечению безопасности
								молодежи и
							</p>
							<p>
								отказался прекратить работы на версией Instagram для подростков,
								передает <br />
								CNBC
							</p>
						</div>
					</div>
					<div className={scss.photos}>
						<img
							src="https://nastroy.net/pic/images/201809/551284-1537207224.jpg"
							alt="logo"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
