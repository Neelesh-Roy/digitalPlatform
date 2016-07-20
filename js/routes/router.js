// Namespace our flowerApp
var app = app || {};

//routing the page 
app.Router = Backbone.Router.extend({
 routes:{
            '':'landingPage',
            'landingURL' : 'landingPage',
            'signupPath' : 'signupRoute',
            'appliancerepair' : 'applianceRepairRoute',
            'computerrepair' : 'computerRepairRoute',
        },
        landingPage:function(){         
            var welcome = new app.landingView();
            $("#bestbuyview").html(welcome.el);
        },
        signupRoute:function(){
            var signup = new app.signUpView();
            $("#bestbuyview").html(signup.el);
        },
        applianceRepairRoute:function(){
            var apprepairvar = new app.applicanceRepairView();
            $("#bestbuyview").html(apprepairvar.el);
        },
        computerRepairRoute:function(){
            var computerrapirvar = new app.ComputerRepairView();
            $("#bestbuyview").html(computerrapirvar.el);
        }
        
    });
    

//  var approuter = new app.Router();
//  Backbone.history.start();  

