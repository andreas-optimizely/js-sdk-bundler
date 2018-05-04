'use strict'
import optimizely from 'optimizely-client-sdk';
import { getDatafile } from './src/helpers';

// Insert your project ID here
let projectID = '10683461849';
let datafileUrl = `https://cdn.optimizely.com/public/8177152216/s/${projectID}_${projectID}.json`
let optimizelyDemoClient;

// Helper function to grab a query param and return the value
var getQueryParam = function(name) {
   var match = window.location.search.match(name + '=([^&]*)');
   return match ? match[1] : undefined;
 }

// Initialize Optimizely SDK
getDatafile(datafileUrl, (datafile) => {
  console.log('OPTIMIZELY DEMO: Grabbed Datafile');
  optimizelyDemoClient = optimizely.createInstance({
    datafile: datafile,
    skipJSONValidation: true
  });
  var userId = getQueryParam('alexaId');

  console.log('OPTIMIZELY DEMO: User ID = ', userId);
  
  // If a user ID is found in the url, then track a conversion
  if (userId) {
    optimizelyDemoClient.track('viewedProduct', userId);  
  }
  
});
