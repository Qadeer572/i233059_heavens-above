const utils = require("../src/utils.js");

test("getTimestamp converts time to seconds", () => {
  expect(utils.getTimestamp("01:02:03")).toBe(3723);
});

test("md5 hashes correctly", () => {
  expect(utils.md5("abc")).toBe("900150983cd24fb0d6963f7d28e17f72");
});

test("get_options returns valid GET request", () => {
  const opt = utils.get_options("TestPage.aspx?");
  expect(opt.url).toContain("TestPage.aspx?");
  expect(opt.method).toBe("GET");
});

test("post_options returns valid POST request", () => {
  const opt = utils.post_options("Submit.aspx?", { key: "value" });
  expect(opt.method).toBe("POST");
  expect(opt.body.key).toBe("value");
});

test("image_options builds correct URL", () => {
  const opt = utils.image_options("https://heavensabove.com/img.png");
  expect(opt.method).toBe("GET");
  expect(opt.url).toContain("heavensabove.com");
});

test("iridium_options builds correct URL", () => {
  const opt = utils.iridium_options("https://heavensabove.com/test");
  expect(opt.method).toBe("GET");
  expect(opt.url).toContain("heavensabove.com");
});
