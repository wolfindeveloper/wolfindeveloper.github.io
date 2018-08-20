
CryptoApi.prototype.getCspName = function() {
    return this.pluginInfo.cspName;
};

CryptoApi.prototype.getCspVersion = function(e) {
    return this.versionToString(this.pluginInfo.cspVersion);
};