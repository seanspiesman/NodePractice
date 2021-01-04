const fs = require("fs");

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.age = 26;
data.name = "Sean";
fs.writeFileSync("1-json.json", JSON.stringify(data));

console.log(data);
