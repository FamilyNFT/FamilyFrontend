import { Oval } from "react-loader-spinner";

interface PropsType {
  light?: boolean;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  imgClassName?: string;
  textClassName?: string;
  imgPositionReverse?: boolean;
  disabled?: boolean;
  fixed?: boolean;
  imgSrc?: any;
  rightImgSrc?: any;
  isLoading?: boolean;
  onClick?: (props: any) => void;
}

const Button: React.FC<PropsType> = ({
  type = "button",
  text = "",
  className = "",
  imgClassName = "",
  textClassName = "",
  imgPositionReverse = false,
  light = false,
  disabled = false,
  onClick,
  fixed = false,
  imgSrc,
  isLoading,
  rightImgSrc,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
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
        <span className={`${textClassName}`}>{text}</span>
        {isLoading && (
          <Oval
            height={20}
            width={20}
            strokeWidth={5}
            strokeWidthSecondary={5}
            color={"rgba(255, 255, 255)"}
            secondaryColor="rgba(255, 255, 255, 0.1)"
          />
        )}
        {rightImgSrc !== undefined && !isLoading && (
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
