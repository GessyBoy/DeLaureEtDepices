const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 19,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      req.body.password = hashedPassword;

      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.Users.password, req.body.password)
    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.Users.id };

        const token = jwt.sign(payload, process.env.PRIVATE_KEY_TOKEN_SECRET, {
          expiresIn: "1h",
        });

        delete req.Users.password;

        res.cookie("auth_token", token, { httpOnly: true, secure: false });
        res.status(200).json({ Users: req.Users });
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyToken = (req, res, next) => {
  try {
    const authToken = req.cookies.auth_token;

    if (authToken == null) {
      throw new Error("Authorization header is missing");
    }

    req.payload = jwt.verify(authToken, process.env.PRIVATE_KEY_TOKEN_SECRET);

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

const logout = (req, res) => {
  res.clearCookie("auth_token").sendStatus(200);
};

module.exports = { hashPassword, verifyPassword, verifyToken, logout };
