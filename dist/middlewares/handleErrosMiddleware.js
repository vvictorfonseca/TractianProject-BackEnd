function handleErrors(error, req, res, next) {
    if (error.type === "not_found") {
        return res.status(404).send(error.message);
    }
    if (error.type === "unprocessable_entity") {
        return res.status(422).send(error.message);
    }
    if (error.type === "not_allowed") {
        return res.status(401).send(error.message);
    }
    if (error.type === "conflict") {
        return res.status(409).send(error.message);
    }
    if (error.type === "bad_request") {
        return res.send(400).send(error.message);
    }
    return res.status(500).send("Internal server error!");
}
export default handleErrors;
