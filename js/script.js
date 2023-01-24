/* Created by: Justin Lavoie *
 Created on: nov 2022 * 
*/

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Assignment-6-JS/sw.js", {
    scope: "/Assignment-6-JS/",
  })
}

"use strict"

const getbear = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress);
    const jsonData = await request.json();
    console.log(jsonData.url);
    document.getElementById("api-image").innerHTML =
      '<img src="' +
      jsonData.url +
      '" alt="bear image" class="center" width="200% height ="300%" ' +
      ">";
  } catch (err) {
    console.log(err);
  }
};
getbear("https://random.dog/woof.json");