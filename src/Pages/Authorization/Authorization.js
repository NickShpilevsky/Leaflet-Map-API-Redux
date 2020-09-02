import React from 'react';
import { connect } from 'react-redux';
import { Paper } from "@material-ui/core";
import FacebookLogin from 'react-facebook-login';

import { authorized, setUser } from "../../Reducers";

import '../../Static/style.less';

const Authorization = (props) => {

  const responseFacebook = response => {
    if (response) {
      props.authorized();
      props.setUser(response);
    } else {
      console.log('No response');
    }
  };

  return(
    <div className="wrapper">
      <Paper elevation={6} className="paperWrapper">
        <FacebookLogin
          appId="320314542705859"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </Paper>
    </div>
  )
};

export default connect(null, { authorized, setUser })(Authorization);