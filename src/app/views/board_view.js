//board_view
import Backbone from 'backbone';
import _ from 'underscore';
import GameView from 'app/views/game_view';
import SpotView from 'app/views/spot_view';

const BoardView = Backbone.View.extend({
  initialize: function() {
    console.log("initializing a board view")
    this.render();
  },

  events: {
  },

  resetBoard: function(){
    //clears all the spots, making them all null
  },


  render: function() {
    // const boardView = new BoardView({
    //   model: this.model.board,
    //   // el: this.$('main')
    // });
    // boardView.render();
    return this;
  }
});

export default BoardView;
