interface PropsType {
  light?: boolean;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  disabled?: boolean;
  fixed?: boolean;
  imgSrc?: any;
  onClick?: (props: any) => void;
}

const Button: React.FC<PropsType> = ({
  type = "button",
  text = "",
  className = "",
  light = false,
  disabled = false,
  onClick,
  fixed = false,
  imgSrc,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`border-white border-[1px] flex justify-between items-center text-base px-6 h-[50px] rounded-full font-nunito ${
          !light ? "gradient-button text-white" : "bg-white text-theme"
        } font-semibold shadow-3xl ${className} ${
          disabled ? "opacity-50" : ""
        } ${fixed ? "w-[139px]" : "w-fit"}`}
      >
        {imgSrc !== undefined && (
          <img src={imgSrc} alt="buttonImage" className="p-1"></img>
        )}
        {text}
      </button>
    </>
  );
};

export default Button;
