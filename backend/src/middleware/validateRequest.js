const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            const errorMessages = error.details.map((detail) => detail.message);
            return res.status(400).json({ success: false, message: 'Validation failed.', errors: errorMessages });
        }

        next();
    };
};

module.exports = validateRequest;
