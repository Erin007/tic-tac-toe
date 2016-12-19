//spot_view.js
import Backbone from 'backbone';
import BoardView from 'app/views/board_view';
import GameView from  'app/views/game_view';

const SpotView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  events: {
    'click': //on a spot lets you change the value of the spot
  },

  drawSymbol: function(){
    //takes the spot and what symbol should be put there and fills in the spot, re-renders the board because the collection has been updated 
  }


  render: function() {
    // const rolodexView = new RolodexView({
    //   model: this.model.rolodex,
    //   el: this.$('main')
    // });
    // rolodexView.render();

    return this;
  }
});

export default SpotView;
