import scss from "./Modal.module.scss";

export const Modal = ({ children }) => {
	return (
		<div className={scss.divmodal}>
			<div className={scss.modalka}>{children}</div>
		</div>
	);
};
