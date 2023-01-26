import Logo from "../Logo";

const LoadingScreen: React.FC = () => {
  return (
    <>
      <div className="fixed w-screen h-screen flex items-center justify-center left-0 top-0 bg-[#101010] opacity-100 z-[200] text-primary">
        <Logo className="w-32 h-32 zoom-animation" />
      </div>
    </>
  );
};

export default LoadingScreen;
