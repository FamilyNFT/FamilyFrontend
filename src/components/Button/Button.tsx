interface PropsType {
  light?: boolean;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  imgClassName?: string;
  imgPositionReverse?: boolean;
  disabled?: boolean;
  fixed?: boolean;
  imgSrc?: any;
  rightImgSrc?: any;
  onClick?: (props: any) => void;
}

const Button: React.FC<PropsType> = ({
  type = "button",
  text = "",
  className = "",
  imgClassName = "",
  imgPositionReverse = false,
  light = false,
  disabled = false,
  onClick,
  fixed = false,
  imgSrc,
  rightImgSrc,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`border-[#B7B7B7] border-[1px]  flex  justify-center items-center  px-6 h-[50px] rounded-full gap-2 ${
          !light ? " text-white" : "bg-white text-theme"
        } font-semibold  ${className} ${disabled ? "opacity-70" : ""} ${
          fixed ? "" : ""
        } whitespace-nowrap	`}
        // gradient-button
      >
        {imgSrc !== undefined && (
          <img
            src={imgSrc}
            alt="buttonImage"
            className={`${imgClassName}`}
          ></img>
        )}
        {text}
        {rightImgSrc !== undefined && (
          <img
            src={rightImgSrc}
            alt="buttonImage"
            className={`${imgClassName}`}
          ></img>
        )}
      </button>
    </>
  );
};

export default Button;
