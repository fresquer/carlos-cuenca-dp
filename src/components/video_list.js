import * as React from "react"
import VideoListItem from "./video-list-item"

const VideoList = ({ data }) => {
    return (
        <div className="video_list_wrapper">
            {
                data.map((item, i) => <VideoListItem data={item.video.document} key={i + 'video'}></VideoListItem>)
            }
        </div>
    )
}
export default VideoList
    