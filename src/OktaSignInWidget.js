
// src/OktaSignInWidget.js

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

export default class OktaSignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: this.props.baseUrl,
      clientId: '0oa1363wazZjRL5Yn357',
      redirectUri: window.location.origin + '/implicit/callback',
      idpDiscovery: {
        requestContext: '/home/oidc_client/0oa1363wazZjRL5Yn357/0oa1223y32HZMhR8n357 '
      },
      authParams: {
          grantType: 'authorization_code',
          responseType: 'code'
      },
      features: {
        idpDiscovery: true,
        registration: false,
      },
    });
    this.widget.renderEl({el}, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div />;
  }
};
