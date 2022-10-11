import Logo from "../Logo";

const LoadingScreen: React.FC = () => {
  return (
    <>
      <div className="absolute w-screen h-screen flex items-center justify-center left-0 top-0 bg-theme opacity-100 z-[200] text-primary">
        <Logo className="w-32 h-32 zoom-animation" />
      </div>
    </>
  );
};

export default LoadingScreen;
