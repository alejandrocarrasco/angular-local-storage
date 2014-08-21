/**
 * Module to use HTML5's LocalStorage in AngularJS
 * @authors: Miguel Angel Carrasco, Alejandro Carrasco
 */
angular.module('localStorage', ['ngCookies']);

var StorageModule = angular.module('localStorage');
/**
 * Proveedor de servicios para almacenar datos como clave/valor.
 * usa el servicio de html5 local storage si el navegador lo soporta,
 * de lo contrario usa cookies.
 */
StorageModule.provider('StorageProvider', function () {
    function isLocalStorageSupported() {
        try {
            localStorage.setItem("AngularLocalStorageTest", "test");
            localStorage.removeItem("AngularLocalStorageTest");
            return true;
        } catch (e) {
            return false;
        }
    }

    this.$get = function ($cookieStore, LocalStorage) {
        if (isLocalStorageSupported()) {
            return keyValueLocalStorageService;
        } else {
            return $cookieStore;
        }
    };
});

/**
 * Servicio para utilizar el localStorage
 */
StorageModule.service('LocalStorage', function () {
    this.get = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };

    this.put = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

    this.remove = function (key) {
        localStorage.removeItem(key);
    };
});