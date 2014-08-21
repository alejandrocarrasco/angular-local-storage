/**
 * Module to use HTML5's KeyValueStorage in AngularJS
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
    function isKeyValueStorageSupported() {
        try {
            localStorage.setItem("AngularKeyValueStorageTest", "test");
            localStorage.removeItem("AngularKeyValueStorageTest");
            return true;
        } catch (e) {
            return false;
        }
    }

    this.$get = function ($cookieStore, KeyValueStorage) {
        if (isKeyValueStorageSupported()) {
            return KeyValueStorage;
        } else {
            return $cookieStore;
        }
    };
});

/**
 * Servicio para utilizar el localStorage
 */
StorageModule.service('KeyValueStorage', function () {
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
