import React from 'react';
import { copy } from 'copy-to-clipboard'
import { makeStyles, IconButton, Grid } from '@material-ui/core';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
const MediaContainer = ({ cover_url, media_type, download_url, tracking }) => {
    const styles = makeStyles({
        root: {
            display: 'grid',
            justifyItems: 'center',
            flex: '0 0 auto',
            margin: '10px 0px'


        },
        media: {
            display: 'flex',
            height: '170px',
            width: '90px',
            alignItems: 'center',
            opacity: '60%',
            backgroundColor: '#030fff',
            backgroundImage: `url(${cover_url})`,
            backgroundSize: 'cover',
            borderRadius: '10px',
            margin: '5px 5px'
        },
        buttonRow: {
            flex: '10px 0 auto',
            display: 'flex',
            alignItems: 'auto',
            border: '1px solid #808080',
            borderRadius: "10px"
        },
        buttons: {
            borderRadius: "5px",
            // flex: '2px 10px 10px',
        },
        play: {
            color: "#ffffff",
            margin: "auto",
            fontSize: "50px"
        }
    });
    const classes = styles();
    console.log(tracking)
    async function copyTextToClipboard(text) {
        console.log(text)
        if ('clipboard' in navigator) {
            const clip = await navigator.clipboard.writeText(text);
            alert("Copied!");
            return clip;
        } else {
            document.execCommand('copy', true, text);
            // alert("Copied!");

        }

    }
    const copyToClipboard = () => {
        copy('tracking');
        alert("Copied!");
    }
    return (
        <Grid className={classes.root} spacing={1}>
            <Grid item>
                <div className={classes.media}>
                    {media_type === 'video' ? <PlayArrowIcon fontSize="100px" className={classes.play} /> : null}
                </div>
            </Grid>
            <Grid item>
                <Grid container className={classes.buttonRow} >
                    <Grid item className={classes.buttons}>
                        <IconButton onClick={() => copyTextToClipboard(tracking)}>
                            <FileCopyOutlinedIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                    <Grid item className={classes.buttons}>
                        <IconButton href={download_url}>
                            <GetAppOutlinedIcon fontSize="small" />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

    )
}

export default MediaContainer;
