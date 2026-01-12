const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8"
        alt="user-profile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"
      />
      <span className="font-bold px-3">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
