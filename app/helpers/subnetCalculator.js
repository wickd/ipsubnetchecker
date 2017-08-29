class SubnetCalculator
{
    /**
     * SubnetCalculator constructor.
     * 
     * @param {string|null} ipv4 IPv4 Address.
     * @param {string|null} cidr IPv4 CIDR address.
     */
    constructor(ipv4 = null, cidr = null)
    {
        this.ipv4 = ipv4;
        this.cidr = cidr;

        if (cidr)
        {
            let [subnet, mask] = this.cidr.split('/');
            this.subnet = subnet;
            this.originMask = mask;
            this.maskSize = this.getIpMaskSize(mask);
        }
    }

    /**
     * Take apart IPv4 address.
     * 
     * @param {string|null} ip IP address.
     * @return {array}
     */
    apartIPv4(ip = null)
    {
        return (ip || this.ipv4).match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
    }

    /**
     * Calculate binary ipv4 address.
     * 
     * @param {string|null} ip IP address
     * @return {string}
     */
    getBinaryIPv4Address(ip = null)
    {
        ip = this.apartIPv4(ip || this.ipv4);

        return (+ip[1] << 24) + (+ip[2] << 16) + (+ip[3] << 8) + (+ip[4]);
    }

    /**
     * Check if IPv4 address in subnet.
     * 
     * @param {string|null} ip IP address
     * @param {string|null} subnet Subnet
     * @param {int|string|null} maskSize Mask size
     * @return {boolean}
     */
    inSubnetRange(ip = null, subnet = null, maskSize = null)
    {
        ip = ip || this.ipv4;
        subnet = subnet || this.subnet;
        maskSize = maskSize || this.maskSize;

        return (this.getBinaryIPv4Address(ip) & maskSize) == this.getBinaryIPv4Address(subnet);
    }

    /**
     * Mask size getter.
     * 
     * @param {int} size Mask size.
     * @return {int} Mask size.
     */
    getIpMaskSize(size)
    {
        return -1 << (32 - size);
    }
}

module.exports = SubnetCalculator;