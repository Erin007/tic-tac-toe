//board_view
import Backbone from 'backbone';
import GameView from 'app/views/game_view';
import SpotView from 'app/views/spot_view';

const BoardView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
  },

  resetBoard: function(){
    //clears all the spots, making them all null
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

export default BoardView;
