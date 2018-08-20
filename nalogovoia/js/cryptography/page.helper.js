var cryptoPageHelper = {
    /**
     * РџР°СЂСЃРёРЅРі СЃРїРёСЃРєР° СЃРµСЂС‚РёС„РёРєР°С‚РѕРІ.
     *
     * @param certificates
     * @returns {{valid: Array, invalid: Array}}
     */
    parseCertificateList: function(certificates) {
        var parsed = {
                valid: [],
                invalid: []
            },
            i = 0, cnt = certificates.length,
            certificate;

        for (; i < cnt; i ++) {
            certificate = certificates[i];

            var validFrom,checkDate,
                inn = certificate.extract(certificate.getSubjectName(), ['INN=', 'РРќРќ=', '1.2.643.3.131.1.1=']),
                ogrn = certificate.extract(certificate.getSubjectName(), ['РћР“Р Рќ=', 'OGRN=', '1.2.643.100.1=']),
                ogrnip = certificate.extract(certificate.getSubjectName(), ['РћР“Р РќРРџ=', 'OGRNIP=', '1.2.643.100.5=']),
                surname = certificate.extract(certificate.getSubjectName(), 'SN='),
                name_patronymic = certificate.extract(certificate.getSubjectName(), ['GN=', 'G=']),
                valid = certificate.isValid(),
                snils = certificate.extract(certificate.getSubjectName(), ['РЎРќРР›РЎ=', 'SNILS=', '1.2.643.100.3=']),
                issuerCn = certificate.getIssuerCommonName(),
                commonName = certificate.extract(certificate.getSubjectName(), 'CN='),
                invalid_reason = '',
                now = new Date();

            if (! valid) {
                if (now > certificate.validToDate() || now < certificate.validFromDate()) {
                    invalid_reason = 'РЈ СЃРµСЂС‚РёС„РёРєР°С‚Р° Р·Р°РєРѕРЅС‡РёР»СЃСЏ РёР»Рё РЅРµ РЅР°С‡Р°Р»СЃСЏ СЃСЂРѕРє РґРµР№СЃС‚РІРёСЏ.';
                } else if (issuerCn == commonName) {
                    invalid_reason = 'РЎР°РјРѕРїРѕРґРїРёСЃР°РЅРЅС‹Р№ СЃРµСЂС‚РёС„РёРєР°С‚.';
                }
            }

            if (valid) {
                if (ogrn.length > 0 || inn.length == 10) {
                    valid = false;
                    invalid_reason = 'РЎРµСЂС‚РёС„РёРєР°С‚ СЋСЂРёРґРёС‡РµСЃРєРѕРіРѕ Р»РёС†Р°.'
                } else if (inn.length == 0) {
                    validFrom = certificate.validFromDate();
                    validFrom.setHours(0, 0, 0, 0);
                    checkDate = new Date('07/01/2015');

                    if (validFrom >= checkDate) {
                        valid = false;
                        invalid_reason = 'Р’ СЃРµСЂС‚РёС„РёРєР°С‚Рµ РРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕРіРѕ РїСЂРµРґРїСЂРёРЅРёРјР°С‚РµР»СЏ, РІС‹РїСѓС‰РµРЅРЅРѕРј РїРѕСЃР»Рµ 1 РёСЋР»СЏ 2015 РіРѕРґР° РґРѕР»Р¶РµРЅ РїСЂРёСЃСѓС‚СЃРІРѕРІР°С‚СЊ РРќРќ.'
                    }
                }/* else if (ogrnip.length == 0) {
                 validFrom = certificate.date.from;
                 validFrom.setHours(0, 0, 0, 0);
                 checkDate = new Date('01/30/2016');

                 if (validFrom >= checkDate) {
                 valid = false;
                 invalid_reason = 'Р’ СЃРµСЂС‚РёС„РёРєР°С‚Рµ РРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕРіРѕ РїСЂРµРґРїСЂРёРЅРёРјР°С‚РµР»СЏ, РІС‹РїСѓС‰РµРЅРЅРѕРј РїРѕСЃР»Рµ 30 СЏРЅРІР°СЂСЏ 2016 РіРѕРґР° РґРѕР»Р¶РµРЅ РїСЂРёСЃСѓС‚СЃРІРѕРІР°С‚СЊ РћР“Р РќРРџ.'
                 }
                 }*//*else if (issuerCN == ownerCN) {
                 valid = false;
                 invalid_reason = 'РЎР°РјРѕРїРѕРґРїРёСЃР°РЅРЅС‹Р№ СЃРµСЂС‚РёС„РёРєР°С‚.'
                 }*/
            }

            function formatDate(date) {
                var month = {
                    '0': 'СЏРЅРІР°СЂСЏ',
                    '1': 'С„РµРІСЂР°Р»СЏ',
                    '2': 'РјР°СЂС‚Р°',
                    '3': 'Р°РїСЂРµР»СЏ',
                    '4': 'РјР°СЏ',
                    '5': 'РёСЋРЅСЏ',
                    '6': 'РёСЋР»СЏ',
                    '7': 'Р°РІРіСѓСЃС‚Р°',
                    '8': 'СЃРµРЅС‚СЏР±СЂСЏ',
                    '9': 'РѕРєС‚СЏР±СЂСЏ',
                    '10': 'РЅРѕСЏР±СЂСЏ',
                    '11': 'РґРµРєР°Р±СЂСЏ'
                };

                return date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear() + ' Рі. '
                    + date.getHours() + ':' + date.getMinutes();
            };

            certificate = {
                id: certificate.getId(),
                valid_from: certificate.validFromDate(),
                valid_to: certificate.validToDate(),
                validity_string: 'СЃ ' + formatDate(certificate.validFromDate()) + ' РїРѕ: ' + formatDate(certificate.validToDate()),
                inn: inn,
                ogrnip: ogrnip,
                snils: snils,
                name: surname + ' ' + name_patronymic,
                issuer: issuerCn,
                owner: commonName,
                valid: valid,
                invalid_reason: invalid_reason,
                deviceId: certificate.getDeviceId()
            };

            if (valid) {
                parsed.valid.push(certificate);
            } else {
                parsed.invalid.push(certificate);
            }
        }

        return parsed;
    },

    drawCertificates: function(certificates, valid) {
        var html = '', i=0,cnt = certificates.length, cert;

        html += '<div class="modal-loader-block" id="modal-loader">'+
            '<div class="modal-loader"></div>' +
            '</div>';
        if (cnt > 0) {
            html += '<div class="'+(valid ? 'certificateList__valid' : 'certificateList__invalid')+'">';
            html += '<div class="certificateList__header">'+(valid ? 'Р”РѕСЃС‚СѓРїРЅС‹Рµ СЃРµСЂС‚РёС„РёРєР°С‚С‹' : 'РќРµРґРѕСЃС‚СѓРїРЅС‹Рµ СЃРµСЂС‚РёС„РёРєР°С‚С‹:')+'</div>';
            html += '<div class="certificateList__items"><div class="certificateList__row">';

            for(;i<cnt;i++) {
                cert = certificates[i];
                if (typeof cert.deviceId == "undefined") {
                    cert.deviceId = '';
                }
                html += '<div class="certificateList__item" style="width:350px;">';
                html += '<div class="certificateList__item-inner">';
                html += '<div class="certificateList__item-header">' +
                    '<span class="certificateList__item-icon certificateList__item-header-label">РЎРµСЂС‚РёС„РёРєР°С‚</span>' +
                    (!valid ? '<div class="certificateList__item-error">'+cert.invalid_reason+'</div>': '' )+
                    '</div>';
                html += '<div class="certificateList__item-label">'+cert.validity_string+'</div>';
                html += '<div class="certificateList__item-content">';
                html += '<div class="certificateList__item-formGroup">' +
                    '<span class="certificateList__item-label">Р’Р»Р°РґРµР»РµС†:</span> ' +
                    '<span class="certificateList__item-value">'+cert.owner+'</span> ' +
                    '</div>';
                html += '<div class="certificateList__item-formGroup">' +
                    '<span class="certificateList__item-label">Р’С‹РїРёСЃР°РЅ РЅР°:</span> ' +
                    '<span class="certificateList__item-value">'+cert.name+'</span> ' +
                    '</div>';
                html += '<div class="certificateList__item-formGroup">' +
                    '<span class="certificateList__item-label">РРќРќ:</span> ' +
                    '<span class="certificateList__item-value">'+cert.inn+'</span> ' +
                    '</div>';
                html += '<div class="certificateList__item-formGroup">' +
                    '<span class="certificateList__item-label">РЎРќРР›РЎ:</span> ' +
                    '<span class="certificateList__item-value">'+cert.snils+'</span> ' +
                    '</div>';
                html += '<div class="certificateList__item-formGroup">' +
                    '<span class="certificateList__item-label">РћР“Р РќРРџ:</span> ' +
                    '<span class="certificateList__item-value">'+cert.ogrnip+'</span> ' +
                    '</div>';
                html += '<div class="certificateList__item-formGroup">' +
                    '<span class="certificateList__item-label">Р’С‹РґР°РЅ:</span> ' +
                    '<span class="certificateList__item-value">'+cert.issuer+'</span> ' +
                    '</div>';
                html += '</div>';
                html += '<div class="certificateList__item-footer">' +
                    '<a class="simple-button certificate-afc" data-id="'+cert.id+'" data-deviceId="'+cert.deviceId+'">Р’С‹Р±СЂР°С‚СЊ</a>' +
                    '<div class="certificateList__item-pin">' +
                    '<div><span class="certificateList__item-label">Р’РІРµРґРёС‚Рµ PIN-РєРѕРґ: </span><input type="password" name="pincode" class="inputbox"></div>' +
                    '<div class="certificateList__item-pin-error"></div> ' +
                    '<a class="simple-button certificate-afc-with-pin" data-id="'+cert.id+'" data-deviceId="'+cert.deviceId+'">РћРє</a>' +
                    '<a class="simple-button certificate-afc-with-pin-cancel" style="margin-left: 5px;">РћС‚РјРµРЅР°</a>' +
                    '</div>' +
                    '</div>';
                html += '</div></div>';
            }

            html += '</div></div></div>';
        }

        return html;
    }
};