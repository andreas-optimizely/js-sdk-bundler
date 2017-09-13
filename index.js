'use strict'
import optimizely from 'optimizely-client-sdk';
import { getDatafile } from './src/helpers';

// Insert your project ID here
let projectID = '1234567';
let datafileUrl = `https://cdn.optimizely.com/json/${projectID}.json`;
let optimizelyClient;

// Initialize Optimizely SDK
getDatafile(datafileUrl, (datafile) => {
  optimizelyClient = optimizely.createInstance({
    datafile: datafile,
    skipJSONValidation: true
  });
});

// Write your code here 

/*** EXAMPLE ***

  optimizelyClient.activate('SOME_EXPERIMENT_KEY', userId);

  document.querySelector('body').addEventListener('click', function(){
    optimizelyClient.track('SOME_EVENT_KEY', 'userId');
  });

*** END EXAMPLE ***/