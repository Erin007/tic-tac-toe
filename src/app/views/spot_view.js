//spot_view.js
import Backbone from 'backbone';
import _ from 'underscore';
import BoardView from 'app/views/board_view';
import GameView from  'app/views/game_view';

const SpotView = Backbone.View.extend({
  initialize: function() {
    console.log("initializing a spot view")
    this.template = _.template(Backbone.$('#tmpl-spot').html());
  },

  events: {
    'click': 'drawSymbol'//on a spot lets you change the value of the spot
  },

  drawSymbol: function(){
    //takes the spot and what symbol should be put there and fills in the spot, re-renders the board because the collection has been updated
    console.log("Drawing a symbol")
  }


  render: function() {
    console.log("rendering a spot")
    this.$el.html("X");
    return this;
  }
});

export default SpotView;
