import { Input } from "antd";
import { useFormContext } from "react-hook-form";

const PHInput = ({ type, name, label }) => {
  const { register } = useFormContext();
  return (
    <>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <Input type={type} id={name} {...register(name)} />
    </>
  );
};

export default PHInput;
