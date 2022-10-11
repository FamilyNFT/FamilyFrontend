interface PropsType {
  light?: boolean;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  fixed?: boolean;
  onClick?: () => void;
}

const Button: React.FC<PropsType> = ({
  type = "button",
  text = "",
  className = "",
  light = false,
  disabled = false,
  onClick,
  fixed = false,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`text-base px-6 h-[40px] rounded-full font-nunito ${
          !light ? "bg-[#2F3454] text-white" : "bg-white text-theme"
        } font-semibold shadow-3xl ${className} ${
          disabled ? "opacity-50" : ""
        } ${fixed ? "w-[139px]" : "w-fit"}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
