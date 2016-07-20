// Namespace our BestBuy POC app 
var app = app || {};

app.signUpView = Backbone.View.extend({    
     template:_.template($('#signup-template').html()),
        initialize:function(){
            this.render();
        },
        render:function(){
            this.$el.html(this.template);
        }
});