const ipToInt = (ip = "127.0.0.1") => {
  return ip
    .split(".")
    .map(Number)
    .reduce((acc, byte) => (acc << 8) + byte);
};

console.log(ipToInt('10.0.0.1'))

module.exports = { ipToInt };
