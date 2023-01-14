import React from "react";

const Container = (props: any) => {
  const Item = () => (
    <div className=" flex justify-between items-center pt-4 pb-3">
      <p className="text-white/70 archivo-font">
        James made an offer on your <span className="underline">Hoodie</span>
      </p>
      <p className="text-white/50 text-xs">2 min ago</p>
    </div>
  );
  return (
    <div
      className={` ${props.className} bg-[#363636] border border-white/10   max-w-sm p-4 rounded-xl `}
    >
      <div className="flex items-center justify-between">
        <p className="clash-font text-xl text-white font-semibold">
          Notifications (3)
        </p>
        <button className="px-5 py-1.5 bg-white/10 rounded-full text-white text-md archivo-font">
          Mark all as read
        </button>
      </div>

      <div className="mt-4 max-h-[20rem] overflow-auto pr-2">
        <Item />
        <hr className="border border-white/10" />
        <Item />
        <hr className="border border-white/10" />
        <Item />
        <hr className="border border-white/10" />
        <Item />
        <hr className="border border-white/10" />
        <Item /> <hr className="border border-white/10" />
        <Item /> <hr className="border border-white/10" />
        <Item /> <hr className="border border-white/10" />
        <Item /> <hr className="border border-white/10" />
        <Item /> <hr className="border border-white/10" />
        <Item /> <hr className="border border-white/10" />
        <Item /> <hr className="border border-white/10" />
        <Item /> <hr className="border border-white/10" />
        <Item /> <hr className="border border-white/10" />
        <Item />
      </div>
    </div>
  );
};

export default Container;
