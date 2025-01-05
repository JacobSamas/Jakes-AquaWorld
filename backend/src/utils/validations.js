const Joi = require('joi');

// Validation schema for user registration
const userRegistrationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

// Validation schema for user login
const userLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

// Validation schema for creating/updating fish
const fishSchema = Joi.object({
    name: Joi.string().min(3).required(),
    species: Joi.string().min(3).required(),
    price: Joi.number().positive().required(),
    description: Joi.string().optional(),
});

module.exports = {
    userRegistrationSchema,
    userLoginSchema,
    fishSchema,
};
