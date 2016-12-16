//game_view.js
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import SpotView from 'app/views/spot_view';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

events: {
  'click .btn-play': //clear the form, take in the names and prompt for player one to pick a box,
},

clearForm: function() {
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
