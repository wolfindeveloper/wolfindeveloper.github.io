var CryptoApi = function () {
    var me = this;

    me.pluginInfo = {};
    me.pluginEnabled = false;
    me.binded = true;
};

CryptoApi.prototype.newProcess = function (callback, params) {
    var me = this,
        process = new Process();

    params = params || [];

    process.start();

    params.unshift(process);
    me.runProcess(callback, params);

    return process;
};

CryptoApi.prototype.getPluginVersion = function () {
    return this.versionToString(this.pluginInfo.pluginVersion);
};

CryptoApi.prototype.versionToString = function (v) {
    if (typeof(v) == "string") {
        return v;
    } else {
        return v.MajorVersion + "." + v.MinorVersion + "." + v.BuildVersion;
    }
};

CryptoApi.prototype.isPluginEnabled = function (e) {

    return this.pluginEnabled;
};

CryptoApi.prototype.setPluginException = function (e) {
    var me = this;

    me.pluginInfo.exception = e;
    me.pluginEnabled = false;

    return me;
};

CryptoApi.prototype.resetPluginException = function(e) {
    var me = this;

    me.pluginInfo.exception = undefined;
    me.pluginEnabled = true;

    return me;
};

CryptoApi.prototype.getPluginException = function () {
    var me = this;

    return me.pluginInfo.exception;
};

CryptoApi.prototype.isBinded = function (process, options) {
    process.setResult(true);
    process.stop();
};

CryptoApi.prototype.getBindWindowTitle = function () {
    return this.bindWindowTitle;
};

CryptoApi.prototype.getCertificateContent = function (certificateIdentifier) {
    var me = this,
        certificate = me.getCertificate(certificateIdentifier);

    return typeof certificate != "undefined"
        ? certificate.getB64()
        : undefined;
};

CryptoApi.prototype.getCertificateSerial = function (certificateIdentifier) {
    var me = this,
        certificate = me.getCertificate(certificateIdentifier);

    return typeof certificate != "undefined"
        ? certificate.getSerialNumber()
        : undefined;
};

CryptoApi.prototype.getCertificate = function (certificateIdentifier) {
    var me = this,
        certificate = undefined;

    Ext.Array.each(me.certificateList, function (v) {
        if (v.getId() == certificateIdentifier) {
            certificate = v;
            return false;
        }
    });

    return certificate;
};

CryptoApi.prototype.base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        do {
            chr1 = input.charCodeAt(i ++);
            chr2 = input.charCodeAt(i ++);
            chr3 = input.charCodeAt(i ++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                this._keyStr.charAt(enc1) +
                this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) +
                this._keyStr.charAt(enc4);
            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";
        } while (i < input.length);

        return output;
    },

    // public method for decoding
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;

        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
            return null;
        }

        do {
            enc1 = this._keyStr.indexOf(input.charAt(i ++));
            enc2 = this._keyStr.indexOf(input.charAt(i ++));
            enc3 = this._keyStr.indexOf(input.charAt(i ++));
            enc4 = this._keyStr.indexOf(input.charAt(i ++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";

        } while (i < input.length);

        return output;
    }
};

CryptoApi.prototype.hex = {
    d2h : function(d) {
        var res = d.toString(16).toUpperCase();

        if (res.length == 1) {
            res = '0' + res;
        }

        return res;
    },

    h2d : function (h) {
        return parseInt(h, 16);
    },

    stringToHex : function (str) {
        var hex = '';

        for (var i = 0; i < str.length; i++) {
            hex += this.d2h(str.charCodeAt(i));
        }

        return hex;
    },

    hexToString : function (hex) {
        var string = '';

        for (var b = 0; b < hex.length; b += 2) {
            string += String.fromCharCode(parseInt(hex.substr(b, 2), 16));
        }

        return string;
    }
};