import * as React from "react"
import { Link } from "gatsby"

const VideoListItem = ({ siteTitle }) => (
    <div className="video_list_item_wrapper">
        <Link to={'/video-detail-template'}>
            <div className="video_item_wrapper">
                <div className="img_wrapper">
                    <img src="https://placekitten.com/600/600" alt="" srcset="" />
                </div>
                <div className="overlay">
                    <p className="program_title">aaaaaaa</p>
                </div>
            </div>
        </Link>
    </div>
)

export default VideoListItem
