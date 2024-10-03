eval(`
    var crypto = require('crypto');
    function Crypto() {
        this.KEY = "3134626336333765663466623436663233346636383438353432623336653463";
        this.IV = "6436346335333638333537633633323763333232633632633961346233653663"
    }
    Crypto.prototype = {
        encrypt: function(a, b, c) {
            if (!b) b = this.decodeHex(this.KEY);
            if (!c) c = this.decodeHex(this.IV);
            var d = crypto.createCipheriv('aes-128-cbc', Buffer.from(b, 'hex'), Buffer.from(c, 'hex'));
            return d.update(a, 'utf8', 'hex') + d.final('hex')
        },
        decrypt: function(a, b, c) {
            if (!b) b = this.decodeHex(this.KEY);
            if (!c) c = this.decodeHex(this.IV);
            var d = crypto.createDecipheriv('aes-128-cbc', Buffer.from(b, 'hex'), Buffer.from(c, 'hex'));
            return d.update(a, 'hex', 'utf8') + d.final('utf8')
        },
        hashing: function(a, b) {
            if (!b) b = "sha256";
            var c = crypto.createHash(b);
            c.update(a);
            return c.digest('hex')
        },
        encodeBase64: function(a, b) {
            if (!b) b = "utf8";
            return Buffer.from(a, b).toString('base64')
        },
        decodeBase64: function(a, b) {
            if (!b) b = "utf8";
            return Buffer.from(a, 'base64').toString(b)
        },
        encodeHex: function(a, b) {
            if (!b) b = "utf8";
            return Buffer.from(a, b).toString('hex')
        },
        decodeHex: function(a, b) {
            if (!b) b = "utf8";
            return Buffer.from(a, 'hex').toString(b)
        }
    };
    module.exports = c = new Crypto();
    `);