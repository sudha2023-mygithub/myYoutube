import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/Helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      // API pooling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);
  return (
    <div>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className=" flex border border-black w-full ml-2 p-3 mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On form submit", liveMessage);
          dispatch(
            addMessage({
              name: "Sudharshan",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="rounded-lg w-80 border border-black"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          type="text"
        />
        <button className=" border border-solid bg-green-100 px-2 m-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
