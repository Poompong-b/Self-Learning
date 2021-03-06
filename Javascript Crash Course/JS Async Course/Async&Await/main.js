//Promise way
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing Response");
    resolve(`Extra Information + ${response}`);
  });
}

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response Received");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Async Await way
async function doWork() {
  const response = await makeRequest("Google");
  console.log(response);
  const processResponse = await processRequest(response);
  console.log(processResponse);
}

doWork();
