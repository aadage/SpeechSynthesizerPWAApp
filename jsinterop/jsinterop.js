//Local Storage
window["lsSetItem"] = function (key, value) {
    window.localStorage.setItem(key, value);
};
window["lsGetItem"] = function (key) {
    return window.localStorage.getItem(key);
};
window["lsRemoveItem"] = function (key) {
    window.localStorage.removeItem(key);
};
//Focus
window["setFocus"] = function (elementid) {
    document.getElementById(elementid).focus();
};
//Element Metrics
window["getElementMetrics"] = function (elementid) {
    var metrics = new ElementMetrics();
    var element = document.getElementById(elementid);
    if (element) {
        var rect = element.getBoundingClientRect();
        metrics.Width = rect.width;
        metrics.Height = rect.height;
        metrics.Top = rect.top;
        metrics.Bottom = rect.bottom;
        metrics.Left = rect.left;
        metrics.Right = rect.right;
        metrics.OffsetHeight = element.offsetHeight;
    }
    return metrics;
};
var ElementMetrics = /** @class */ (function () {
    function ElementMetrics() {
        this.Width = 0;
        this.Height = 0;
        this.Top = 0;
        this.Bottom = 0;
        this.Left = 0;
        this.Right = 0;
        this.OffsetHeight = 0;
    }
    return ElementMetrics;
}());
//Scroll Position
window["getScrollPositionY"] = function () {
    if (document.documentElement) {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
    return 0;
};
//Timezone Offset
window["getTimezoneOffset"] = function () {
    var date = new Date();
    return date.getTimezoneOffset();
};
//Speech API
window["getVoices"] = function () {
    var voiceInfos = new Array();
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();
    for (var i = 0; i < voices.length; i++) {
        var voiceInfo = new VoiceInfo();
        voiceInfo.Name = voices[i].name;
        voiceInfo.Lang = voices[i].lang;
        voiceInfo.IsDefaultVoice = voices[i].default;
        voiceInfos.push(voiceInfo);
    }
    return voiceInfos;
};
window["speak"] = function (phrase, voiceName, pitch, rate) {
    var utterance = new SpeechSynthesisUtterance(phrase);
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();
    for (var i = 0; i < voices.length; i++) {
        if (voices[i].name === voiceName) {
            utterance.voice = voices[i];
        }
    }
    //verify pitch is between 0 and 2
    var verifiedPitch = pitch;
    if (pitch < 0)
        verifiedPitch = 0;
    if (pitch > 2)
        verifiedPitch = 2;
    //verify rate is between .1 and 10
    var verifiedRate = rate;
    if (rate < 0.1)
        verifiedRate = 0.1;
    if (rate > 10)
        verifiedRate = 10;
    if (utterance.pitch)
        utterance.pitch = verifiedPitch;
    if (utterance.rate)
        utterance.rate = verifiedRate;
    synth.speak(utterance);
};
window["speechSynthesisIsSupported"] = function () {
    if ('speechSynthesis' in window) {
        return true;
    }
    else {
        return false;
    }
};
var VoiceInfo = /** @class */ (function () {
    function VoiceInfo() {
    }
    return VoiceInfo;
}());
//# sourceMappingURL=jsinterop.js.map