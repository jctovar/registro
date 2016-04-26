angular.module('main.auth', ['ngResource'])

.factory("auth", function($cookies, $cookieStore, $location, login) {
    return{
        login : function(username, password)
        {
            //creamos la cookie con el nombre que nos han pasado
            var query = login.get({ id: username, password:  password}, function () {
                $scope.login = query.login[0]; 
            });
            
            
            $cookies.username = username,
            $cookies.password = password;
            //mandamos a la home
            $location.path("/dashboard");
        },
        logout : function()
        {
            //al hacer logout eliminamos la cookie con $cookieStore.remove
            $cookieStore.remove("username"),
            $cookieStore.remove("password");
            //mandamos al login
            $location.path("/");
        },
        checkStatus : function()
        {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/dashboard","/profile","/password","/requests","/bank"];
            
            if(this.in_array($location.path(),rutasPrivadas) && typeof($cookies.username) == "undefined")
            {
                $location.path("/login");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if(this.in_array("/login",rutasPrivadas) && typeof($cookies.username) != "undefined")
            {
                $location.path("/");
            }
        },
        in_array : function(needle, haystack)
        {
            var key = '';
            for(key in haystack)
            {
                if(haystack[key] == needle)
                {
                    return true;
                }
            }
            return false;
        }
    }
});