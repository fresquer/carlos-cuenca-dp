import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const VideoListItem = ({ data }) => {
    const dataVideo = data.node;
    return (
        <div className="video_list_item_wrapper">
            <Link to={'/video/' + dataVideo.uid}>
                <div className="video_item_wrapper">
                    <div className="img_wrapper">
                        {/* <GatsbyImage
                            loading="lazy"
                            placeholder="blurred"
                            fluid={
                                getImage(dataVideo.data.cover.fluid)
                            } alt={'dafd'} /> */}
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
