function showStraightLine() {
    document.querySelector('.reducingbalance').style.display = "none";
    document.querySelector('.straightline').style.display = "block";
    return true;
}

function showReducingBalance() {
    document.querySelector('.straightline').style.display = "none";
    document.querySelector('.reducingbalance').style.display = "block";
    return true;
}

function life() {
    let usefulLife = document.getElementById('usefulLife');
    let depreciationPercentage = document.getElementById('SdepreciationPercentage');
    if (usefulLife.value.length > 0) {
        depreciationPercentage.value = '';
        return true;
    }
}

function percent() {
    let usefulLife = document.getElementById('usefulLife');
    let depreciationPercentage = document.getElementById('SdepreciationPercentage');
    if (depreciationPercentage.value.length > 0) {
        usefulLife.value = '';
    }
    if (depreciationPercentage.value > 100) {
        depreciationPercentage.value = 100;
    }


}

function straightLine() {
    let cost = document.getElementById('Scost').value;
    let residualValue = document.getElementById('SresidualValue').value;
    let usefulLife = document.getElementById('usefulLife').value;
    let depreciationPercentage = document.getElementById('SdepreciationPercentage').value;
    let answers = document.querySelector('.Sanswers');
    let accumulatedDepreciation = 0;
    let depreciation = (cost - residualValue) / usefulLife;
    if (depreciationPercentage.length != 0) {
        depreciation = (cost - residualValue) * (depreciationPercentage / 100);
        answers.innerHTML = 'Annual Depreciation:' + depreciation + '<br>';
        for (i = 1; i <= ((cost - residualValue) / depreciation); i++) {
            accumulatedDepreciation += depreciation;
            answers.innerHTML += '<span>Accumulated depreciation for year ' + i + ':' + accumulatedDepreciation + '</span><br>';
        }
    }
    if (usefulLife.length != 0) {
        answers.innerHTML = 'Annual Depreciation:' + depreciation + '<br>';
        for (i = 1; i <= usefulLife; i++) {
            accumulatedDepreciation += depreciation;
            answers.innerHTML += '<span>Accumulated depreciation for year ' + i + ':' + accumulatedDepreciation + '</span><br>';
        }
    }
    return true;
}

function reducingBalance() {
    let cost = document.getElementById('Rcost').value;
    let residualValue = document.getElementById('RresidualValue').value;
    let years = document.getElementById('years').value;
    let depreciationPercentage = document.getElementById('RdepreciationPercentage').value;
    let answers = document.querySelector('.Ranswers');
    let accAnswers = document.querySelector('.accdep');
    let deprciableValue = cost - residualValue;
    let accumulatedDepreciation = 0;
    for (i = 1; i <= years; i++) {
        depreciation = deprciableValue * (depreciationPercentage / 100);
        deprciableValue = deprciableValue - depreciation;
        accumulatedDepreciation += depreciation;
        answers.innerHTML += '<span>depreciation for year ' + i + ':' + depreciation + '</span><br>'
        accAnswers.innerHTML += '<span>Accumulated depreciation for year ' + i + ':' + accumulatedDepreciation + '</span><br>'

    }
}