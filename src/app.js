//app.js
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';


$(document).ready(function() {

  var game = new Game();

    var gameView = new GameView({
      el: $('.application'),
      model: game
    })

    gameView.render();

});
