const AWS = require("aws-sdk");
require('dotenv').config();

var ses = new AWS.SES();

let sendEmail = async (event) => {
  var params = {
    Destination: {
      ToAddresses: [process.env.SES_FROM_EMAIL], 
    },
    Message: {
      Body: {
        Text: { Data: "Test" },
      },

      Subject: { Data: "Test Email" },
    },
    Source: process.env.SES_FROM_NAME+" <"+process.env.SES_FROM_EMAIL+">",
  };
 
  return await ses.sendEmail(params).promise()
};

sendEmail()
.then(email => {
  console.log(email);
})
.catch(err => {
  console.log(err);
});