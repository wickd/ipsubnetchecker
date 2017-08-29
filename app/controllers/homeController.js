let SubnetCalculator = require('../helpers/subnetCalculator');

exports.index = (req, res, next) => res.render('home');

exports.handleCheck = (req, res, next) =>
{
    let ipv4_address = req.body.ipv4_address;
    let [ subnet, mask ] = req.body.ipv4_cidr.split('/');

    let sc = new SubnetCalculator(req.body.ipv4_address, req.body.ipv4_cidr);

    console.log(sc.inSubnetRange());

    return res.redirect('back');

    return res.sendStatus(200);
}