var aulacss = [
    'Aula 1',
    'Aula 2',
    'Aula 3',
    'Aula 4',
    'Aula 5',
    'Aula 6',
    'Aula 7',
    'Aula 8',
];

var linkcss = [
    'https://www.youtube.com/embed/hLZ-rzXIXZg?si=FLazR89X9-WaztTE',
    'https://www.youtube.com/embed/MGpg2o91Cu4?si=WjJW0aTSo1dRnuw5',
    'https://www.youtube.com/embed/CIcADchhwDk?si=khmUGU2v0TGpF2a_',
    'https://www.youtube.com/embed/-dhiAwCiX9I?si=sxUCV314EhwZNC91',
    'https://www.youtube.com/embed/2tnOsnvAdV4?si=cY28XkI-xjNzPwYh',
    'https://www.youtube.com/embed/2ZRs7ZGPOV0?si=4b3JWz_JrcJDml3j',
    'https://www.youtube.com/embed/guLtE-lv6Aw?si=PeAhHNmgFcVBDwvO',
    'https://www.youtube.com/embed/CZ7INZ90yFs?si=Mg8WWsslXBTrArqv',
];

var enumaulacss;
enumaulacss = 0;

var aulajs = [
    'Aula 1',
    'Aula 2',
    'Aula 3',
    'Aula 4',
    'Aula 5',
    'Aula 6',
    'Aula 7',
    'Aula 8',
];

var linkjs = [
    'https://www.youtube.com/embed/zhxDsX6vPpQ?si=6OGlMK8dphMOHzDM',
    'https://www.youtube.com/embed/2YRpIZPjdVM?si=Ccfbju01hmXV8OYX',
    'https://www.youtube.com/embed/ZIJqrx2Hezg?si=SGz_ZOFmJcROo6No',
    'https://www.youtube.com/embed/wHAI3jByrTk?si=iw1nWjCzJITxePLt',
    'https://www.youtube.com/embed/8_QuR5KmPhA?si=KrP5RCUNIesYqTJO',
    'https://www.youtube.com/embed/avKcG--razE?si=9N4ATDaY2QlaC7Of',
    'https://www.youtube.com/embed/Hn2RJMheJtg?si=XriTjGJ_NpLzkIR0',
    'https://www.youtube.com/embed/0vxeWzb79EA?si=th_-3Pp0cCNeadIi',
];

var enumaulajs;
enumaulajs = 0;

function btpcss() {
    console.log(enumaulacss)
    if (enumaulacss==7) {
    } else {
    enumaulacss = enumaulacss+1;

    var titulo = document.getElementById('aulacss');
    titulo.textContent = aulacss[enumaulacss];

    var video = document.getElementById('videocss');
    video.src = linkcss[enumaulacss];}
}

function btacss() {
    console.log(enumaulacss)
    if (enumaulacss==0) {
    } else {
    enumaulacss = enumaulacss-1;

    var titulo = document.getElementById('aulacss');
    titulo.textContent = aulacss[enumaulacss];

    var video = document.getElementById('videocss');
    video.src = linkcss[enumaulacss];}
}

function btpjs() {
    console.log(enumaulajs)
    if (enumaulajs==7) {
    } else {
    enumaulajs = enumaulajs+1;

    var titulo = document.getElementById('aulajs');
    titulo.textContent = aulajs[enumaulajs];

    var video = document.getElementById('videojs');
    video.src = linkjs[enumaulajs];}
}

function btajs() {
    console.log(enumaulajs)
    if (enumaula==0) {
    } else {
    enumaulajs = enumaulajs-1;

    var titulo = document.getElementById('aulajs');
    titulo.textContent = aulajs[enumaulajs];

    var video = document.getElementById('videojs');
    video.src = linkjs[enumaulajs];}
}
