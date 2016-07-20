// Namespace our BestBuy POC app 
var app = app || {};

app.landingView = Backbone.View.extend({

     template:_.template($('#welcome-template').html()),
    
        initialize:function(){
            this.render();
        },
    
        render:function(){
            this.$el.html(this.template);
        }
    
});
    
    
//  tagName: "section",
//
//  render: function() {
// 	  this.collection.each(this.addFlower, this);
// 		return this;
//  },
//
// addFlower: function(flower) {
// 		var flowerView = new app.singleFlowerView ({ model: flower });
// 		this.$el.append(flowerView.render().el);
// }


  