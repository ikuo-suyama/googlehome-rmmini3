var firebase = require("firebase");
var config = require("config")

console.log(config)
firebase.initializeApp(config.firebase)

const path = "/appliance";
const key = "message";
const db = firebase.database();

db.ref().on("child_changed", (changedSnapshot) =>  {
  //値取得
  console.log("onChange");
  console.log(changedSnapshot.val());
  const value = changedSnapshot.child(key).val();
  if (value) {
    console.log(value);
  }
})

db.ref().once('value')
  .then(function(dataSnapshot) {
    console.log(dataSnapshot.val())
  });