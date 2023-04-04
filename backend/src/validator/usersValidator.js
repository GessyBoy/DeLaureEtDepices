// eslint-disable-next-line import/no-extraneous-dependencies
const Joi = require("joi");

const passwordSchema = Joi.string()
  .min(8)
  .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/)
  .message(
    "Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre."
  );

const userSchema = Joi.object({
  mail: Joi.string().email().required(),
  password: passwordSchema.required(),
});

const validateUser = (Users) => {
  const result = userSchema.validate(Users, { abortEarly: false });
  if (result.error) {
    return result.error.details.map((error) => ({
      property: error.path[0],
      message: error.message,
    }));
  }
  return [];
};

module.exports = validateUser;
