import "./global.css"
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure({
  ...awsconfig,
  API: {
    ...awsconfig.API,
    endpoints: [{
      name: 'contactapi',
      endpoint: process.env.GATSBY_API_ENDPOINT
    }]
  }
});
