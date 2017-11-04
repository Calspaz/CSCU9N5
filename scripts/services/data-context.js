binaryTestApp.factory("_dataContext", ["$http", function (http) {
    // var apiUrl = "http://localhost:60392/"

    // Applications data access
     var applicationData = {
        list: function () {
            return http.get(apiUrl + "api/application");
        },
        one: function (id) {
            return http.get(apiUrl + "api/application/" + id);
        },
        save: function (application) {
            return http.post(apiUrl + "api/application/", application);
        },
        delete: function (id) {
            return http.delete(apiUrl + "api/application/" + id);
        }
    }; 

    // Build container object
    return {
        application: applicationData,
    };

}]);