Angular Key Value Storage
=====================

Repository to use local storage or cookies if browser does not have local-storage

[GitHub page](http://cyberdelphos.github.io/angular-key-value-storage)

Sample
------
[Here](http://cyberdelphos.github.io/angular-key-value-storage/sample/) is a live sample of this module

Requirements
------------
This module requires you to use angular 1.2.13 or superior
Also you need to add ngCookies to your app:
```
angular.module('MyApp', [ ... , 'ngCookies' ])


<script src="path/to/lib/angular/angular-cookies.min.js"></script>
```


Installation
------------
Add "localStorage" to your app modules list:
```
angular.module('MyApp', [ ... , 'KeyValueStorage', 'ngCookies' ])
```

Add the file in your scripts list:
```
<script src="path/to/lib/key-value-storage/key-value-storage.js"></script>
```

How to Use
----------
Inject "LocalStorage" in your controller/service's dependencies:
```
myModule.service("MyService", function( ... , KeyValueStorage){
  // Your code
}
```

Store values:
```
LocalStorage.put(key, value);
```

Read values:
```
LocalStorage.get(key);
```

Delete values:
```
LocalStorage.remove(key);
```
