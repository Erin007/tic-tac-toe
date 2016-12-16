import Backbone from 'backbone';
//import Contact from 'app/models/contact';

const Board = Backbone.Collection.extend({
  // This Board represents a collection of spots
  // and should include any methods or attributes
  // that are involved in working with more than one
  // spot.
  model: Spot
});

export default Board;
