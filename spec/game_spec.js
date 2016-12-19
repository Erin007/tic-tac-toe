// game.spec.js
import Game from "app/models/game";

describe('Game', function() {
  var testGame = new Game;

  describe('board', function() {
    it('should display an empty board, array of arrays', function() {
        expect(testGame.get("board")[0]).toEqual([" "," "," "]);
        expect(testGame.get("board")[1]).toEqual([" "," "," "]);
        expect(testGame.get("board")[2]).toEqual([" "," "," "]);
    });
  });

  describe('playerX', function() {
    it('Game should initialize with playerX', function() {
        expect(testGame.get("playerX")).toBeDefined();
        expect(testGame.get("playerX")).toEqual("Xavier"); //<-- hardcode for now until input comes in from the form
    });
  });

  describe('playerO', function() {
    it('Game should initialize with playerO', function() {
        expect(testGame.get("playerO")).toBeDefined();
        expect(testGame.get("playerO")).toEqual("Octavia");//<-- hardcode for now until input comes in from the form
    });
  });

  describe('winner and announceWinner', function() {
    it('There should not be winner on an empty board', function() {
        expect(testGame.winner()).toBeDefined();
        expect(testGame.winner()).toEqual(false);
        //expect(testGame.announceWinner()).toEqual(false);
    });

    it('should return the winner for horizontal wins', function() {
      testGame.set("board", [
              ["X","X","X"],
              [" "," "," "],
              [" "," "," "],
            ]);
        expect(testGame.winner()).toEqual("X");
        //expect(testGame.announceWinner()).toEqual(true);

        testGame.set("board", [
              [" "," "," "],
              ["X","X","X"],
              [" "," "," "],
            ]);
        expect(testGame.winner()).toEqual("X");
        //expect(testGame.announceWinner()).toEqual(true);

        testGame.set("board", [
              [" "," "," "],
              [" "," "," "],
              ["X","X","X"],
            ]);
        expect(testGame.winner()).toEqual("X");
        //expect(testGame.announceWinner()).toEqual(true);
    });

      it('should return the winner for vertical wins', function() {
        testGame.set("board", [
                ["O"," "," "],
                ["O"," "," "],
                ["O"," "," "],
              ]);
        expect(testGame.winner()).toEqual("O");
        //expect(testGame.announceWinner()).toEqual(true);

        testGame.set("board", [
                [" ","O"," "],
                [" ","O"," "],
                [" ","O"," "],
              ]);
        expect(testGame.winner()).toEqual("O");
        //expect(testGame.announceWinner()).toEqual(true);

        testGame.set("board", [
                [" "," ","O"],
                [" "," ","O"],
                [" "," ","O"],
              ]);
        expect(testGame.winner()).toEqual("O");
        //expect(testGame.announceWinner()).toEqual(true);
    });

    it('should return the winner for diagonal wins', function() {
      testGame.set("board", [
              ["O"," "," "],
              [" ","O"," "],
              [" "," ","O"],
            ]);
      expect(testGame.winner()).toEqual("O");
      //expect(testGame.announceWinner()).toEqual(true);

      testGame.set("board", [
              [" "," ","X"],
              [" ","X"," "],
              ["X"," "," "],
            ]);
      expect(testGame.winner()).toEqual("X");
      //expect(testGame.announceWinner()).toEqual(true);
    });
  });

  describe('moreXs, countX, countO', function() {
    it("should return true when there are more X's than O's", function() {
      testGame.set("board", [  //all Xs, no Os
              [" "," ","X"],
              [" ","X"," "],
              ["X"," "," "],
            ]);
      expect(testGame.moreXs()).toEqual(true);
      expect(testGame.countX()).toEqual(3);
      expect(testGame.countO()).toEqual(0);

      testGame.set("board", [  // same # Xs and Os
              ["O","O","X"],
              [" ","X","O"],
              ["X"," "," "],
            ]);
      expect(testGame.moreXs()).toEqual(false);
      expect(testGame.countX()).toEqual(3);
      expect(testGame.countO()).toEqual(3);

      testGame.set("board", [ //more Os than Xs note: this should never occur given our game set up because X always goes first
              ["O","O","X"],
              [" ","X","O"],
              ["X"," ","O"],
            ]);
      expect(testGame.moreXs()).toEqual(false);
      expect(testGame.countX()).toEqual(3);
      expect(testGame.countO()).toEqual(4);

      testGame.set("board", [ //more Xs than Os
              ["O","O","X"],
              [" ","X","O"],
              ["X"," ","X"],
            ]);
      expect(testGame.moreXs()).toEqual(true);
      expect(testGame.countX()).toEqual(4);
      expect(testGame.countO()).toEqual(3);

      testGame.set("board", [ //empty board
              [" "," "," "],
              [" "," "," "],
              [" "," "," "],
            ]);
      expect(testGame.moreXs()).toEqual(false);
      expect(testGame.countX()).toEqual(0);
      expect(testGame.countO()).toEqual(0);
    });
  });
  //
  // describe('drawSymbol', function() {
  //   it('should let a player put their symbol in each of the 9 spots, if the spots are empty (spot can be number or word)', function() {
  //       testGame.drawSymbol("X", "1");
  //       expect(testGame.board[0][0]).toEqual("X")
  //       testGame.drawSymbol("X", "2");
  //       expect(testGame.board[0][1]).toEqual("X")
  //       testGame.drawSymbol("X", "three");
  //       expect(testGame.board[0][2]).toEqual("X")
  //       testGame.drawSymbol("O", "4");
  //       expect(testGame.board[1][0]).toEqual("O")
  //       testGame.drawSymbol("X", "5");
  //       expect(testGame.board[1][1]).toEqual("X")
  //       testGame.drawSymbol("O", "6");
  //       expect(testGame.board[1][2]).toEqual("O")
  //       testGame.drawSymbol("X", "7");
  //       expect(testGame.board[2][0]).toEqual("X")
  //       testGame.drawSymbol("X", "8");
  //       expect(testGame.board[2][1]).toEqual("X")
  //       testGame.drawSymbol("O", "nine");
  //       expect(testGame.board[2][2]).toEqual("O")
  //   });
  //
  //   it('should NOT let a player put their symbol in a spot if the spot is already filled', function() {
  //       testGame.boardReset()
  //       expect(testGame.board[0][0]).toEqual(" ") //ensures spot 1 is empty
  //       testGame.drawSymbol("X", "1");
  //       expect(testGame.board[0][0]).toEqual("X")
  //       testGame.drawSymbol("O", "1");
  //       expect(testGame.board[0][0]).toEqual("X") //should still be X
  //   });
  //
  //   it('should only accept digits 1-9 or words one...nine as valid spots', function() {
  //       testGame.boardReset()
  //       testGame.drawSymbol("X", "bacon");
  //       testGame.drawSymbol("0", "10");
  //       expect(testGame.board[0][0]).toEqual(" ")
  //       expect(testGame.board[0][1]).toEqual(" ")
  //       expect(testGame.board[0][2]).toEqual(" ")
  //       expect(testGame.board[1][0]).toEqual(" ")
  //       expect(testGame.board[1][1]).toEqual(" ")
  //       expect(testGame.board[1][2]).toEqual(" ")
  //       expect(testGame.board[2][0]).toEqual(" ")
  //       expect(testGame.board[2][1]).toEqual(" ")
  //       expect(testGame.board[2][2]).toEqual(" ")
  //   });
  // });
  //
  describe('tie', function() {
    it('should declare a tie game if there is not a winner', function() {
      testGame.set("board", [
                      [" "," "," "],
                      [" "," "," "],
                      [" "," "," "],
                    ]);
      expect(testGame.tie()).toEqual(false)
      //expect(testGame.announceWinner()).toEqual(false);

      testGame.set("board", [
              ["X","O","X"],
              ["X","X","O"],
              ["O","X","O"],
            ]);
      expect(testGame.tie()).toEqual(true)
      //expect(testGame.announceWinner()).toEqual(true);
    });
  });


});
