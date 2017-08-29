var validator = require('validator');

module.exports = (req, res, next) =>
{
    if (req.body.ipv4_address && req.body.ipv4_cidr && validator.isIP(req.body.ipv4_address))
    {
        return next();
    }

    return res.sendStatus(400);

    // todo: use validatorjs instead validator-js, it gives possible to create custom validation rules, and add custom validati of IP with possible to validate with incoming mask...
}