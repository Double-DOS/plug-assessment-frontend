import MediaContainer from './MediaContainer'
import './scroll.css'
import React from 'react'
import { CssBaseline } from '@material-ui/core'
const ScrollingContainer = ({ medias }) => {
    return (
        <div className="scroll">
            <CssBaseline />
            {medias.map((media) => <MediaContainer cover_url={media.cover_photo_url} media_type={media.media_type} download_url={media.download_url} tracking={media.tracking_link} />)}
        </div>
    )
}

export default ScrollingContainer
