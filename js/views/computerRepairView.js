// Namespace our BestBuy POC app 
var app = app || {};

//Computer Repair section
app.ComputerRepairView = Backbone.View.extend({
      
        tagName:"section",
        className: "Applicance-repair-section", 
        template:_.template($('#computer-repair').html()),
  //  my_template:_.template($('#Appliance-repair').html()),
        initialize:function(){
            this.render();
             this.template = _.template($("#Appliance-repair").html());   
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
         
             this.template = _.template($("#Appliance-repair").html());  
        }
        
    });