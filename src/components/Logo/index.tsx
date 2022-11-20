import LogoIcon from "assets/svg/logo.svg";
import DarkLogoIcon from "assets/svg/dark-logo.svg";

interface PropsType {
  beta?: boolean;
  dark?: boolean;
  className?: string;
}

const Logo: React.FC<PropsType> = ({
  beta = true,
  dark = false,
  className = "",
}) => {
  return (
    <>
      <div className={`flex flex-col items-center ${className}`}>
        <img
          src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-20.png"
          alt="logo"
          className="w-screen h-screen"
        />
      </div>
    </>
  );
};

export default Logo;
