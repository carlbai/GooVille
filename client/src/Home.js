import React from 'react';
import './Home.css';

// Youtube thumbnails: http://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
function Thumbnail(props) {
    return(
        <li className="Thumbnail">
            <a href={props.url}>
                <img src={"https://img.youtube.com/vi/" + props.videoID + "/default.jpg"} alt="title of video here"/>
            </a>
        </li> 
    );
}

function ThumbnailList(props) {
    const videos = props.videos;
    return (
        <ul className="ThumbnailList">
            {videos.map((video) =>
                <Thumbnail key={video.id} url={video.url} videoID={video.videoID}/> 
            )}
        </ul>
    );
}

function Home() {
    // TODO: replace later with call to server
    const dillonvideolist = [
        {"id": "id1","url": "https://www.youtube.com/watch?v=7z54Ybs0DZg", "videoID": "7z54Ybs0DZg"}, 
        {"id": "id2","url": "https://www.youtube.com/watch?v=pmCi7tqrne4", "videoID": "pmCi7tqrne4"}, 
        {"id": "id3","url": "https://www.youtube.com/watch?v=EFig-bHcBLE", "videoID": "EFig-bHcBLE"}, 
        {"id": "id4","url": "https://www.youtube.com/watch?v=UtoPxEFeDrE", "videoID": "UtoPxEFeDrE"}, 
        {"id": "id5","url": "https://www.youtube.com/watch?v=Klq8yYV5cLE", "videoID": "Klq8yYV5cLE"}, 
        {"id": "id6","url": "https://www.youtube.com/watch?v=tRf4S_ArF_A", "videoID": "tRf4S_ArF_A"}
    ];
    return (
        <div>
            <ThumbnailList videos={dillonvideolist} />
        </div>
    );
}

export default Home;
