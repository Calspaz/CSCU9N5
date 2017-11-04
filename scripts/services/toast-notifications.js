binaryTestApp.factory("_toast", ["$rootScope", function (rootScope) {

    var infoToast = function (message) {
        var $toastContent = $('<span class="green-text">' + message + '</span>');
        Materialize.toast($toastContent, 5000);
    };

    var errorToast = function (message) {
        var $toastContent = $('<span class="red-text">' + message + '</span>');
        Materialize.toast($toastContent, 5000);
    };

    var warnToast = function (message) {
        var $toastContent = $('<span class="orange-text">' + message + '</span>');
        Materialize.toast($toastContent, 5000);
    };

    return {
        info: infoToast,
        error: errorToast,
        warn: warnToast,
    };
    
}]);