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
    datafile: JSON.parse(datafile),
    skipJSONValidation: true
  });
});

// Write your code here
//