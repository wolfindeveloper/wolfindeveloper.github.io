
//custom select
var el = document.getElementsByClassName('js-vinilla-select');
var close = function(el) {
    if (el)
        el.querySelectorAll('.js-vinilla-select-current').forEach(function(elem) {
            elem.classList.remove('js-vinilla-select_state_active');
        });
};
var open1 = function(el) {
    if (el)
        el.querySelector('.js-vinilla-select-current').classList.add('js-vinilla-select_state_active');
};
var changeSelect = function(e) {
    var et = e.target;
    if (!(et.classList.contains('js-vinilla-select') || et.closest('.js-vinilla-select'))) {
        close(et.closest('body'));
    }
    if (et.classList.contains('js-vinilla-select-current')) {
        if (et.classList.contains('js-vinilla-select_state_active'))
            close(et.closest('.js-vinilla-select'));
        else
            open1(et.closest('.js-vinilla-select'));
    } else if (et.classList.contains('js-vinilla-select-option') || et.classList.contains('js-vinilla-select-option-value')) {
        if (et.dataset.click_price)
            document.getElementById('price-per-click').innerHTML = et.dataset.click_price;
        if (et.querySelector('.js-vinilla-select-option-value')) {
            et.closest('.js-vinilla-select').getElementsByClassName('js-vinilla-select-current')[0].innerHTML = et.querySelector('.js-vinilla-select-option-value').innerHTML;
            et.closest('.js-vinilla-select').getElementsByClassName('js-vinilla-select-input')[0].value = et.querySelector('.js-vinilla-select-option-value').innerHTML;
        } else {
            et.closest('.js-vinilla-select').getElementsByClassName('js-vinilla-select-current')[0].innerHTML = et.innerHTML;
            et.closest('.js-vinilla-select').getElementsByClassName('js-vinilla-select-input')[0].value = et.innerHTML;
        }
        close(et.closest('.js-vinilla-select'));
    }
};
document.addEventListener('click', changeSelect, false);
//calculator
var getLindingPrice = function(z, p) {
    if (z === void 0) {
        z = 10000;
    }
    if (p === void 0) {
        p = 1000;
    }
    return 100 * Math.sqrt(z * 4) + p;
};
var getIncome = function(z, p, click_price) {
    if (z === void 0) {
        z = 10000;
    }
    if (p === void 0) {
        p = 1000;
    }
    if (click_price === void 0) {
        click_price = 1;
    }
    return p * (z / click_price / 100 * 7.5 / 100);
};
//slider-diapazon
$('#slider-diapazon-1').ionRangeSlider({
    type: "single",
    min: 10000,
    max: 1000000,
    from: 10000,
    to: 100000,
    grid: true,
    onChange: function(e) {
        if (e.from)
            var b = parseInt(e.from).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        else
            b = e.from;
        $('#price-1').text(b + " Р.");
        document.getElementById('slider_diapazon_1_input').value = b + " Р.";
        //calc price_landing
        var z = e.from;
        var p = parseInt($('#price-2').text().toString().replace(/\s+/g, ''), 10);
        var priceLanding = getLindingPrice(z, p);
        var bPrice;
        if (priceLanding)
            bPrice = parseInt(priceLanding, 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        else
            bPrice = priceLanding;
        document.getElementById('landing-price').innerHTML = bPrice;
        document.getElementById('landing-price-result').value = bPrice;
        //calc income
        var click_price = parseInt(document.getElementById('price-per-click').innerHTML, 10);
        document.getElementById('price_one_click').value = click_price;
        var income;
        var inconeLanding = getIncome(z, p, click_price);
        if (priceLanding)
            income = parseInt(inconeLanding, 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        else
            income = inconeLanding;
        document.getElementById('income').innerHTML = income;
        document.getElementById('landing-income-result').value = income;
    }
});
$('#slider-diapazon-2').ionRangeSlider({
    type: "single",
    min: 1000,
    max: 500000,
    from: 1000,
    to: 500000,
    grid: true,
    onChange: function(e) {
        if (e.from)
            var b = parseInt(e.from).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        else
            b = e.from;
        $('#price-2').text(b + " Р.");
        document.getElementById('slider_diapazon_2_input').value = b + " Р.";
        //calc price_landing
        var p = e.from;
        var z = parseInt($('#price-1').text().toString().replace(/\s+/g, ''), 10);
        var priceLanding = getLindingPrice(z, p);
        var bPrice;
        if (priceLanding)
            bPrice = parseInt(priceLanding, 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        else
            bPrice = priceLanding;
        document.getElementById('landing-price').innerHTML = bPrice;
        document.getElementById('landing-price-result').value = bPrice;
        //calc income
        var click_price = parseInt(document.getElementById('price-per-click').innerHTML, 10);
        document.getElementById('price_one_click').value = click_price;
        var income;
        var inconeLanding = getIncome(z, p, click_price);
        if (priceLanding)
            income = parseInt(inconeLanding, 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        else
            income = inconeLanding;
        document.getElementById('income').innerHTML = income;
        document.getElementById('landing-income-result').value = income;
    }
});
//change price_click in category
document.querySelectorAll('.services .vinilla-select-options .vinilla-select-option').forEach(function(el) {
    el.addEventListener('click', function(e) {
        var ect = e.currentTarget;
        var click_price = ect.dataset.click_price;
        var p = parseInt(document.getElementById('price-1').innerHTML.replace(/\s+/g, ''), 10);
        var z = parseInt(document.getElementById('price-2').innerHTML.replace(/\s+/g, ''), 10);
        var priceLanding = getLindingPrice(p, z);
        var bPrice;
        if (priceLanding)
            bPrice = parseInt(priceLanding, 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        else
            bPrice = priceLanding;
        document.getElementById('landing-price').innerHTML = bPrice;
        document.getElementById('landing-price-result').value = bPrice;
        var income;
        var inconeLanding = getIncome(p, z, click_price);
        if (priceLanding)
            income = parseInt(inconeLanding, 10).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
        else
            income = inconeLanding;
        document.getElementById('income').innerHTML = income;
        document.getElementById('landing-income-result').value = income;
    });
});


