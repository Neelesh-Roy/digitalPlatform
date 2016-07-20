// Namespace our flowerApp
var app = app || {};

//Appliance Repair
app.applicanceRepairView = Backbone.View.extend({
        tagName:"section",
        className: "Applicance-repair-section",
        template:_.template($('#Appliance-repair').html()),
        initialize:function(){
            this.render();
        },
        render:function(){
            this.$el.html(this.template);
        },
     events: {
        'click #yes': 'yesEvent',
        'click #no': 'noEvent'
    },
      yesEvent: function() {
       $('.yessection').css("display", "block");
       $('.nosection').css("display", "none");
    },
     noEvent: function() {
       $('.nosection').css("display", "block");
       $('.yessection').css("display", "none");
    }
 });


//this is testing