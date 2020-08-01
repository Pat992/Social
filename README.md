## Social
A small Facebook-like app.

### To run this app, use following steps

#### You can run the application with XAMPP
#### or any other Webserver wich supports PHP

##### 1.
```
In your Database run import with following file:
social-api/options/social.sql
```

##### 2.
```
Change the connection string in following file:
social-api/controller/databaseConnect.php Line 28
```

##### 3.
```
Run mpn install in social-spa
```

#### That's it, the aplication should run on your machine now.

### Future changes
```
Build messenger
```

```
Build Profilepage
```

```
Create web-socket
(eventually Racket)
```

```
Change frontend into React app
and therefore create Rest-API with PHP
```