//app.js
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Game from 'app/models/game';
import GameView from 'app/views/game_view';


$(document).ready(function() {

  $(".greet-playerX").hide()
  $(".greet-playerO").hide()
  $(".x-wins").hide()
  $(".o-wins").hide()
  $(".tie").hide()
  $('.btn-new-game').hide()


  var game = new Game();
  game.fetch()

    var gameView = new GameView({
      el: $('.application'),
      model: game
    })

    gameView.render();

});
