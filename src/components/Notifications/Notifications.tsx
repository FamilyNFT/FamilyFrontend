import { useState } from "react";
import { useClickOutside } from "@mantine/hooks";
import { VscBell, VscBellDot } from "react-icons/vsc";
import Container from "./Container";

const Notifications = (props: any) => {
  const [opened, setOpened] = useState(false);

  const [dropdown, setDropdown] = useState<HTMLDivElement | null>(null);
  const [control, setControl] = useState<HTMLDivElement | null>(null);

  useClickOutside(() => setOpened(false), null, [control, dropdown]);

  return (
    <div className="relative ">
      <div
        className="rounded-[50%] w-[48px] h-[48px] social-icon flex justify-center items-center border border-white/10 text-white/70 hover:text-white "
        onClick={() => setOpened((o) => !o)}
        ref={setControl}
      >
        {/* <VscBell className="text-2xl transition-all duration-200" /> */}
        <VscBellDot className="text-2xl transition-all duration-200" />
      </div>

      {/* notification container */}
      {opened && (
        <div ref={setDropdown}>
          <Container className="absolute z-50 right-[-4.8rem] md:right-0 mt-2 w-[95vw] " />
        </div>
      )}
    </div>
  );
};

export default Notifications;
