import scss from "./Input.module.scss";

export const Input = ({type, placeholder, value, setData}) => {
	return <input className={scss.inputs} type={type} placeholder={placeholder} value={value} onChange={(e) => {
    setData(e.target.value);
  }}/>;
};
