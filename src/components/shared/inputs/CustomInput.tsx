import { InputProps } from "../../../types/Interface";

export const CustomInput: React.FC<InputProps> = ({
  handleChange,
  label,
  type,
  name,
  placeholder,
}) => {
  return (
    <>
      <section className="w-full mb-3">
        {label && (
          <label className="text-para text-xs font-medium mb-3">
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          className="w-full bg-transparent py-3 px-4 rounded-md border border-para text-white text-sm font-medium outline-none"
          placeholder={placeholder}
          autoComplete="off"
          onChange={() => handleChange()}
        />
      </section>
    </>
  );
};
