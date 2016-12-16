//player.js
import Backbone from 'backbone';
import Game from 'app/models/game';
import Spot from 'app/models/spot';
import Board from 'app/collections/board';

const Player = Backbone.Model.extend({

  initialize: function(options) {
  },

   defaults: {
     id: 1
     name: "Xavier"
   },

   {
     id: 2
     name: "Octavia"
   }
});

export default Player;
