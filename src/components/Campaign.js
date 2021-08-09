import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Paper, Typography } from '@material-ui/core'
import ScrollingContainer from './ScrollingContainer'


const styles = makeStyles({
    wrapper: {
        backgroundColor: '#dbe0e9-'
    },
    header: {
        display: 'flex',
        backgroundColor: '#FFFFFF',
        padding: '10px 10px',
        borderRadius: '0px',

    },
    logo: {
        flex: '0 0 auto',
        height: '60px',
        width: '60px',
        borderRadius: '10px',
        margin: "5px 5px",
    },
    description: {
        display: 'grid',
        margin: "10px 10px",
        flex: '0 0 auto'
    },
    text: {
        color: "#00FF00"
    },
    darkText: {
        color: "#228B22"
    }
});

const Campaign = ({ campaign }) => {
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.header}>
                <img className={classes.logo} src={campaign.campaign_icon_url} alt={campaign.campaign_name} />
                <div className={classes.description}>
                    <Typography variant="h6"><strong>{campaign.campaign_name}</strong></Typography>
                    <Typography className={classes.text}><span className={classes.darkText}><strong>{campaign.pay_per_install}</strong></span> install</Typography>
                </div>
            </Paper>
            <ScrollingContainer medias={campaign.medias} />
        </div>
    )
}

export default Campaign
