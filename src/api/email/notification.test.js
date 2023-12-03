const { sendEmail } = require("./notification");

test("Check the inbox", async () => {
  const result = await sendEmail();
  expect(Array.isArray(result.accepted)).toBe(true);
});
