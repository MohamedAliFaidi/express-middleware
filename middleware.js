async function check(req, res, next) {
  let value = false;
  if (value) {
    next();
  } else {
    return res.status(401).json({ message: "unauthorized" });
  }
}

module.exports = check;
