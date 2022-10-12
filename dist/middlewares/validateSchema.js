export function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error) {
            throw {
                type: "unprocessable_entity",
                message: error.details.map(function (detail) { return detail.message; })
            };
        }
        next();
    };
}
