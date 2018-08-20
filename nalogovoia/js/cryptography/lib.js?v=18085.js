function extend(object)
{
    var mixins = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < mixins.length; ++i)
    {
        for (var prop in mixins[i])
        {
            object.prototype[prop] = mixins[i][prop];
        }
    }
}

function Certificate(certificate) {
    var me = this;

    me.certificate = certificate;

    me.clearName = function(name) {
        name = name.replace(/^"?|"?$/g, "").replace(/""/g, '"');

        return name;
    },

        me.extract = function(from, what){
            var start, endC, endS, end;
            if (Array.isArray(what)) {
                var i = 0, cnt = what.length;

                for(;i<cnt;i++) {
                    start = from.indexOf(what[i]);
                    if (start >= 0) {
                        endS = from.indexOf('/', start);
                        endC = from.indexOf(', ', start);
                        if (endS == -1) {
                            end = endC;
                        } else if (endC == -1) {
                            end = endS;
                        } else {
                            end = endC > endS ? endS : endC;
                        }

                        start = start + what[i].length;
                        return (end < 0)
                            ? from.substr(start)
                            : from.substr(start, end - start);
                    }
                }
            } else {
                start = from.indexOf(what);
                if (start >= 0) {
                    endS = from.indexOf('/', start);
                    endC = from.indexOf(', ', start);
                    if (endS == -1) {
                        end = endC;
                    } else if (endC == -1) {
                        end = endS;
                    } else {
                        end = endC > endS ? endS : endC;
                    }

                    start = start + what.length;
                    return (end < 0)
                        ? from.substr(start)
                        : from.substr(start, end - start);
                }
            }


            return '';
        },

        me.validToDate = function () {
            return new Date(certificate.ValidToDate);
        },

        me.validFromDate = function () {
            return new Date(certificate.ValidFromDate);
        },

        me.getSubject = function() {
            return me.certificate.SubjectName;
        },

        me.getIssuer = function() {
            return me.certificate.IssuerName;
        },

        me.getCommonName = function () {
            return me.clearName(me.extract(me.certificate.SubjectName, 'CN='));
        },

        me.getIssuerCommonName = function () {
            return me.clearName(me.extract(me.certificate.IssuerName, 'CN='));
        },

        me.getSubjectName = function () {
            return me.certificate.SubjectName;
        },

        me.getThumbprint = function () {
            return me.certificate.Thumbprint;
        },

        me.getSha1 = function () {
            return me.getThumbprint().split(" ").reverse().join("").replace(/\s/g, "").toUpperCase();
        },

        me.getId = function() {
            return typeof me.certificate.id != "undefined" ? me.certificate.id : me.getSha1();
        },

        me.hasPrivateKey = function () {
            return me.certificate.HasPrivateKey;
        },

        me.isValid = function () {
            return me.certificate.IsValid;
        },
        
        me.getSerialNumber = function() {
            return me.certificate.serial;
        },

        me.getDeviceId = function() {
            return me.certificate.deviceId;
        }
}

Certificate.prototype.getB64 = function() {
    return this.certificate.b64;
};

var Process = function() {
    var me = this;

    me.processing = false;
    me.processStatus = true;
    me.processResult = undefined;
    me.lastError = undefined;
    me.attempt = 0;
    me.maxAttempts = 50;
};

Process.prototype.incrementAttempts = function() {
    this.attempt++;
};

Process.prototype.hasAttempts = function() {
    return this.attempt <= this.maxAttempts;
};

Process.prototype.stopWithNoAttemptsLeft = function() {
    this.stop('No attempts left');
};

Process.prototype.start = function() {
    this.processing = true;

    return this;
};

Process.prototype.stop = function(status) {
    if (typeof status == "undefined") {
        status = true;
    }

    if (typeof status != "boolean") {
        this.lastError = status;
        status = false;
    }

    this.processing = false;
    this.processStatus = status;

    return this;
};

Process.prototype.isInProcess = function() {
    return this.processing;
};

Process.prototype.isReady = function() {
    return ! this.processing;
};

Process.prototype.getError = function() {
    return this.lastError
};

Process.prototype.isSuccessful = function() {
    return this.isReady() && typeof this.lastError == "undefined";
};

Process.prototype.setResult = function(result) {
    return this.processResult = result;
};

Process.prototype.getResult = function() {
    return this.processResult;
};


// Crypto functions

var asyncResolver, asyncPromise;

function cadespluginIsDefined() {
    return typeof cadesplugin != "undefined";
}

function canAsync() {
    return typeof cadesplugin != "undefined" && ! ! cadesplugin.CreateObjectAsync;
}

function includeNpapiCode() {
    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", '/js/cryptography/drivers/cryptopro.npapi.js');
    document.getElementsByTagName("head")[0].appendChild(script);
}

function includeAsyncCode() {
    if (typeof asyncPromise != "undefined") {
        return asyncPromise;
    }

    var script = document.createElement('script');
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", '/js/cryptography/drivers/cryptopro.async.js');
    document.getElementsByTagName("head")[0].appendChild(script);
    asyncPromise = new Promise(function (resolve, reject) {
        asyncResolver = resolve;
    });

    return asyncPromise;
}