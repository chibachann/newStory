import "./global.css"
import { Amplify } from 'aws-amplify';

Amplify.configure({
  API: {
    endpoints: [{
      name: 'contactapi',
      endpoint: process.env.GATSBY_API_ENDPOINT
    }]
  }
});
