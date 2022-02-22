const check = (req, res, next) => {
  const d = new Date();
  let day = d.getDate();
  let time = d.getHours();
  if (time >= 9 && time <= 16 && day >= 1 && day <= 6) {
    next();
  } else {
    res.status(401).send("come back later");
  }
};
module.exports = check;
