import * as React from "react"
import { graphql, Link } from "gatsby"

const VideoListItem = ({ data }) => {
    console.log("🚀 ~ file: video-list-item.js ~ line 5 ~ VideoListItem ~ data", data)
    const dataVideo = data.node;
    return (
        <div className="video_list_item_wrapper">
            <Link to={'/video/' + dataVideo.uid}>
                <div className="video_item_wrapper">
                    <div className="img_wrapper">
                        <img src={dataVideo.data.cover.url} alt="" />
                    </div>
                    <div className="overlay">
                        <p className="program_title">{dataVideo.data.titulo.text}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default VideoListItem
