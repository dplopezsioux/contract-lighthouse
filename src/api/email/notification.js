const axios = require("axios");
const nodemailer = require("nodemailer");

const sendEmailBlue = async (
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
    },
    data: data,
  };

  const response = await axios.request(config);

  return response;
};
const sendEmail = async (
  email = "dplopez.sioux@gmail.com",
  name = "Name",
  subject = "This is a test email",
  htmlContent = "<html><head></head><body><p>Hello,</p>This is my first transactional email sent from Brevo.</p></body></html>"
) => {
  const smtpConfig = {
    host: "smtp.email.us-ashburn-1.oci.oraclecloud.com",
    port: 587,
    secure: false,
    auth: {
      user: "ocid1.user.oc1..aaaaaaaal4ojruxzj632adbiftzciicop64r5r573ckb2s6deaclkrfozfha@ocid1.tenancy.oc1..aaaaaaaatj5vdm6sz5xqo3snq54x6z2zgtz5n4sqokdf7wqfru7oyr5abluq.mo.com",
      pass: "Qo>X4nGG[xtSRH+ND4ma",
    },
  };
  try {
    const transporter = nodemailer.createTransport(smtpConfig);

    const mailOptions = {
      from: "blueaiassistance_not_replay@blueaiassistance.com",
      to: email,
      subject: subject,
      text: subject,
      html: htmlContent,
    };

    let resp = await transporter.sendMail(mailOptions);

    return resp;
  } catch (error) {
    return error;
  }
};

module.exports = { sendEmail };
