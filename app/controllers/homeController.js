let SubnetCalculator = require('../helpers/subnetCalculator');

exports.index = (req, res, next) => res.render('home');

exports.handleCheck = (req, res, next) =>
{
    let subnetCalc = new SubnetCalculator(req.body.ipv4_address, req.body.ipv4_cidr);

    return res.send({
        ip: subnetCalc.ipv4,
        subnet: subnetCalc.subnet,
        mask: subnetCalc.originMask,
        output: subnetCalc.inSubnetRange()
    });
}