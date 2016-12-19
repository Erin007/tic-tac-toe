//player.js
import Backbone from 'backbone';
import Game from 'app/models/game';
// import Spot from 'app/models/spot';
// import Board from 'app/collections/board';

const Player = Backbone.Model.extend({

  initialize: function(options) {
    this.set("name", options.name);
    // this.set("wins", 0);
    // this.set("losses", 0);
    // this.set("ties", 0);
  },

  //  defaults: {
  //    id: 1
  //    name: "Xavier"
  //  },
   //
  //  {
  //    id: 2
  //    name: "Octavia"
  //  }
});

export default Player;
