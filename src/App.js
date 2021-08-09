import React, { useEffect } from 'react';
import './App.css'
import { connect } from 'react-redux';
import * as actionCreators from './actions/fetchAction'
import Campaign from './components/Campaign';
import { CssBaseline, Typography, CircularProgress } from '@material-ui/core'
function App({ campaigns, fetchPlugs }) {
  console.log(campaigns);
  console.log('.campaigns');

  useEffect(() => {
    const handleFetch = () => {
      fetchPlugs();
    }
    handleFetch();
  }, [fetchPlugs])
  return (
    <div className="App">
      <Typography align="center" gutterBottom style={{ paddingTop: "10px" }}><strong>PLUGS</strong></Typography>
      {campaigns === [] ? <CircularProgress /> : campaigns.map((campaign) => <Campaign campaign={campaign} />)}
      <CssBaseline />
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    campaigns: state.campaigns
  }
}

export default connect(mapStateToProps, actionCreators)(App);
