import React from "react";

const Message = ({ icon = false, sent = false, content = "" }) => {
  return (
    <div className="flex archivo-font justify-end">
      {icon && (
        <div className="w-[10%]  py-1">
          <div className="h-8 w-8 bg-[#767676] rounded-full"></div>
        </div>
      )}
      <div className={`${sent ? "w-[90%]" : "w-[80%]"}`}>
        <p
          className={` w-fit border px-3 py-2 bg-white/10 border-white/10  rounded-2xl ${
            sent ? " rounded-br-lg" : " rounded-bl-lg"
          }`}
        >
          {content}
        </p>
      </div>
      {!sent && <div className="w-[10%]"></div>}
    </div>
  );
};

export default Message;
