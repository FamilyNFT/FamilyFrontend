import { FC, PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
};

const ModalWrapper: FC<Props> = ({ isVisible, setVisible, children }) => {
  if (isVisible) {
    return (
      <div className="z-[1000] bg-transparent fixed top-0 left-0 w-full flex justify-center items-center ">
        {children}
      </div>
    );
  }

  return null;
};

export default ModalWrapper;
