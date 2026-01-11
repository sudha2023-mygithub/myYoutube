
const VideoCard = ({info}) => {
  const {snippet,statistics} = info;
  const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className="p-2 m-2 w-64 rounded-lg shadow-lg">
      <img alt="thumbnail" src={thumbnails.medium.url}/>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

 export const AdVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 border border-red-500">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard