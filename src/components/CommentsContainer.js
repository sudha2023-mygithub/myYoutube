const commentsData = [
  {
    name: "Sudharshan Reddy",
    text: "hello guys good evening",
    replies: [
      {
        name: "Sudharshan Reddy",
        text: "hello guys good evening",
        replies: [
          {
            name: "Sudharshan Reddy",
            text: "hello guys good evening",
            replies: [],
          },
          {
            name: "Sudharshan Reddy",
            text: "hello guys good evening",
            replies: [
              {
                name: "Sudharshan Reddy",
                text: "hello guys good evening",
                replies: [],
              },
              {
                name: "Sudharshan Reddy",
                text: "hello guys good evening",
                replies: [
                  {
                    name: "Sudharshan Reddy",
                    text: "hello guys good evening",
                    replies: [],
                  },
                  {
                    name: "Sudharshan Reddy",
                    text: "hello guys good evening",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Sudharshan Reddy",
        text: "hello guys good evening",
        replies: [],
      },
      {
        name: "Sudharshan Reddy",
        text: "hello guys good evening",
        replies: [],
      },
    ],
  },
  {
    name: "Sudharshan Reddy",
    text: "hello guys good evening",
    replies: [],
  },
  {
    name: "Sudharshan Reddy",
    text: "hello guys good evening",
    replies: [],
  },
  {
    name: "Sudharshan Reddy",
    text: "hello guys good evening",
    replies: [],
  },
  {
    name: "Sudharshan Reddy",
    text: "hello guys good evening",
    replies: [],
  },
  {
    name: "Sudharshan Reddy",
    text: "hello guys good evening",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mt-3 shadow-sm bg-gray-100 p-2 rounded-md">
      <img
        className="w-8 h-8 mr-2 mt-2"
        alt="user"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
