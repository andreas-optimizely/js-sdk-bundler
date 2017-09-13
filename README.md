# JS SDK Bundler
---

[Optimizely Full Stack](https://developers.optimizely.com/x/solutions/sdks/reference/?language=javascript) provides a JS SDK that enables customers to activate and track experiments client side. One exciting benefit of Full Stack is the ability to activate and track experiments across SDKs/channels. For example, you might want to start an experiment in one channel using the Python SDK, and then track conversions clientside back to the experiment with JS.

This repo is an example of how to bundle and initialize Optimizely Full Stack JS SDK into a single file.

## How to use
---

**Requirements**
- Must be an Optimizely Full Stack customer
  - [Learn More](https://www.optimizely.com/)
- Must have Node installed

1. Create an Optimizely Full Stack Project
2. Fork this repo and clone it
3. Run ```npm install``` in a new terminal window
4. Run ```gulp watch``` to start watching for changes to bundle
4. Enter your Optimizely Full Stack project ID in line 6 of index.js
5. Write your code!

Your code will be bundled into the ```/build``` directory. Either serve this code locally, or host in on a service such as AWS S3 to serve the js file client side
