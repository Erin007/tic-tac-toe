//game_view.js
import Backbone from 'backbone';
// import BoardView from 'app/views/board_view';
// import SpotView from 'app/views/spot_view';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

events: {
  'click .btn-play': 'saveNames'
},

saveNames: function(e){
    e.preventDefault();
    console.log("Setting the player names")
    this.model.set("playerX", this.$('#X').val())
    this.model.set("playerO", this.$('#O').val())
    this.greetPlayer()
    this.clearForm();
  },

greetPlayer : function(){
  this.$(".player-names-form").hide();
  this.$(".greet-player").show()
},


clearForm: function() {
  console.log("Clearing the form")
  this.$('.player-names-form input').val('');
  // if this isn't working make sure the class name is in the correct div...
},



render: function() {
  // const rolodexView = new RolodexView({
  //   model: this.model.rolodex,
  //   el: this.$('main')
  // });
  // rolodexView.render();

  return this;
}
});

export default GameView;
