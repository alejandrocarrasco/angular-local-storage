angular-local-storage
=====================

Repository to use local storage or cookies if browser does not have local-storage

Installation
------------
Add "localStorage" to your app modules list:
```
angular.module('MyApp', [ ... , 'localStorage' ])
```

Add the file in your scripts list:
```
<script src="path/to/lib/local-storage/local-storage.js"></script>
```

How to Use
----------
Inject "LocalStorage" in your controller/service's dependencies:
```
myModule.service("MyService", function( ... , LocalStorage){
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
