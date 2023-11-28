const axios = require("axios");

const sendEmail = async (
  email = "dplopez.sioux@gmail.com",
  name = "Name",
  subject = "This is a test email",
  htmlContent = "<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>"
) => {
  let data = JSON.stringify({
    sender: {
      name: "This is a test email",
      email: "info@blueaiassistance.com",
    },
    to: [
      {
        email: email,
        name: name,
      },
    ],
    subject: subject,
    htmlContent: htmlContent,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.brevo.com/v3/smtp/email",
    headers: {
      accept: "application/json",
      "api-key":
        "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",
      "content-type": "application/json",
      Cookie:
        "__cf_bm=_bp2MByzWnzwzhA4uYT6RSY42_lSoKh1caRoeDaQOw8-1700886853-0-ARvrlHmWIR3mEEAz/Uj4DNIkc/CUtl/GEqqys8/VSglx0bQbUnUTlo+JLP6Ngm0Bf82WTmrIAgZpEARvVEa3zOw=",
    },
    data: data,
  };

  const response = await axios.request(config);

  return response;
};

module.exports = { sendEmail };
