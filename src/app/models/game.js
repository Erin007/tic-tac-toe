//game.js
import Backbone from 'backbone';
import Player from 'app/models/player';
import Spot from 'app/models/spot';
import Board from 'app/collections/board';

const Game = Backbone.Model.extend({
  // This model represents the overall application.
  initialize: function(options) {
  //   var contacts = options.contacts.map(function(attrs) {
  //     return new Contact(attrs);
  //   });
  //   this.rolodex = new Rolodex(contacts);
  // }
});

export default Game;
