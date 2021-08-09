import axios from "axios";
const plugsUrl = "https://www.plugco.in/public/take_home_sample_feed";

export function fetchPlugs() {
    return (dispatch) => axios.get(plugsUrl).then(
        (response) => dispatch(updateCampaigns(response.data.campaigns))
    )
}


export function updateCampaigns(campaigns) {
    return {
        type: 'FETCH_PLUGS',
        campaigns: campaigns
    }
}