import { CgCloseO } from "react-icons/cg";
import messageImg from "assets/img/symbols/ChatsTeardrop.svg";
import Message from "./Message";
import { HiOutlineCheckCircle } from "react-icons/hi";
import seenCheck from "assets/svg/seen-check.svg";
import EmojiPicker from "emoji-picker-react";
import { RxPaperPlane } from "react-icons/rx";
import { MdOutlineEmojiEmotions, MdClose } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";
import { BsCheckCircle } from "react-icons/bs";

const Chatbox = (props: any) => {
  const [emojiKeyboard, setEmojiKeyboard] = useState(false);

  return (
    <div className="">
      <div className="fixed flex flex-col top-0 left-0 w-full h-full pt-6 px-4 ">
        {/* header */}
        <div className="">
          <div className="">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 clash-font">
                <img src={messageImg} alt="" />
                <p className="text-2xl font-semibold">Direct Messaging</p>
              </div>
              <CgCloseO
                className="text-2xl text-white/50 hover:text-white/90 transition-all duration-200 cursor-pointer"
                onClick={props.closeModal}
              />
            </div>

            <div className="archivo-font flex items-center justify-center mt-8 gap-4 text-xl font-medium tracking-wide">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-white/40"></div>
                <p className="">Ninja</p>
              </div>
              <p>&</p>
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded-full bg-white/40"></div>
                <p className="">Ninja</p>
              </div>
            </div>
            <hr className="border-white/20 mt-3" />
          </div>
        </div>
        {/* messages */}
        <div className=" overflow-auto">
          <div className=" ">
            <p className="text-white/70 pb-1 ">13 March</p>

            <div className="flex flex-col gap-1 ">
              <Message
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"
                icon={true}
              />
              <Message content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              <Message content="No." />
            </div>
            <p className="text-white/70 ml-[10%] text-sm mt-1">15:03</p>
            <div className=" flex flex-col gap-1 mt-3">
              <Message
                sent={true}
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
              />
              <Message
                sent={true}
                content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"
              />
            </div>
            <p className="text-white/70 ml-[10%] text-sm  mt-1 flex items-center gap-2 justify-end">
              15:03
              <BsCheckCircle />
            </p>
            <div className=" flex flex-col gap-1 mt-3">
              <Message content="Yes." icon={true} />
              <Message content="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
              <Message content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. " />
            </div>

            <p className="text-white/70 ml-[10%] text-sm  mt-1">15:03</p>
          </div>
        </div>
        {/* controls */}
        <div className="">
          <div className="controls relative py-4 ">
            {emojiKeyboard && (
              <div className="absolute bottom-full">
                <EmojiPicker />
              </div>
            )}
            <div className="flex items-center justify-center gap-2">
              <div className="relative flex-1 flex items-center">
                {emojiKeyboard ? (
                  <MdClose
                    className="absolute text-[1.5rem] text-white left-3 "
                    onClick={() => setEmojiKeyboard(false)}
                  />
                ) : (
                  <MdOutlineEmojiEmotions
                    className="absolute text-[1.6rem] text-white/70 ml-3"
                    onClick={() => setEmojiKeyboard(true)}
                  />
                )}
                <input
                  className="w-full bg-white/10 border border-white/10 py-2.5 rounded-full pl-11 outline-none"
                  placeholder="Type your message"
                />
                <AiOutlinePlusCircle className="absolute text-[1.7rem] text-white/70 right-3 " />
              </div>

              <div>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10">
                  <RxPaperPlane className="  text-white text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;
