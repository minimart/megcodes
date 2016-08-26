angular.module('megCodes', ['ngMaterial', 'ngRoute']);


angular.module('megCodes').config(function ($mdThemingProvider) {
    var customPrimary = {
        '50': '#54ecff',
        '100': '#3be9ff',
        '200': '#21e6ff',
        '300': '#08e3ff',
        '400': '#00d3ed',
        '500': '#00BCD4',
        '600': '#00a5ba',
        '700': '#008fa1',
        '800': '#007887',
        '900': '#00626e',
        'A100': '#6eefff',
        'A200': '#87f1ff',
        'A400': '#a1f4ff',
        'A700': '#004b54'
    };
    $mdThemingProvider
        .definePalette('customPrimary',
                        customPrimary);

    var customAccent = {
        '50': '#6d5200',
        '100': '#866500',
        '200': '#a07800',
        '300': '#b98b00',
        '400': '#d39e00',
        '500': '#ecb100',
        '600': '#ffc720',
        '700': '#ffce3a',
        '800': '#ffd453',
        '900': '#ffda6d',
        'A100': '#ffc720',
        'A200': '#FFC107',
        'A400': '#ecb100',
        'A700': '#ffe186'
    };
    $mdThemingProvider
        .definePalette('customAccent',
                        customAccent);

    var customWarn = {
        '50': '#b5b5b5',
        '100': '#a8a8a8',
        '200': '#9b9b9b',
        '300': '#8e8e8e',
        '400': '#828282',
        '500': '#757575',
        '600': '#686868',
        '700': '#5b5b5b',
        '800': '#4f4f4f',
        '900': '#424242',
        'A100': '#c1c1c1',
        'A200': '#cecece',
        'A400': '#dbdbdb',
        'A700': '#353535'
    };
    $mdThemingProvider
        .definePalette('customWarn',
                        customWarn);

    var customBackground = {
        '50': '#616161',
        '100': '#545454',
        '200': '#474747',
        '300': '#3a3a3a',
        '400': '#2e2e2e',
        '500': '#212121',
        '600': '#141414',
        '700': '#070707',
        '800': '#000000',
        '900': '#000000',
        'A100': '#6d6d6d',
        'A200': '#7a7a7a',
        'A400': '#878787',
        'A700': '#000000'
    };
    $mdThemingProvider
        .definePalette('customBackground',
                        customBackground);

   $mdThemingProvider.theme('default')
       .primaryPalette('customPrimary')
       .accentPalette('customAccent')
       .warnPalette('customWarn')
       .backgroundPalette('customBackground')
});
