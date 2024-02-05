import scss from "./Button.module.scss";

export const Button = ({children, onClick}) => {
	return <button className={`${scss.buttons} ${scss.button2}`} onClick={onClick}>{children}</button>
};
