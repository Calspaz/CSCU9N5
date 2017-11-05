binaryTestApp.factory("_toast", ["$rootScope", function (rootScope) {

    var infoToast = function (message) {
        var $toastContent = $('<div class="col s12 m12"><span class="green-text" style="margin:0 auto;"><b>' + message + '</b></span></div>');
        Materialize.toast($toastContent, 5000);
    };

    var errorToast = function (message) {
        var $toastContent = $('<div class="col s12 m12"><span class="red-text" style="margin:0 auto;"><b>' + message + '</b></span></div>');
        Materialize.toast($toastContent, 5000);
    };

    var warnToast = function (message) {
        var $toastContent = $('<div class="col s12 m12"><span class="orange-text" style="margin:0 auto;"><b>' + message + '</b></span></div>');
        Materialize.toast($toastContent, 5000);
    };

    return {
        info: infoToast,
        error: errorToast,
        warn: warnToast,
    };
}]);