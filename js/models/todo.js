// js/models/todo.js

var app = app || {};

// Todo Model 
// ----------
// Our basic **Todo** model has 'title', 'order' and 'completed' attributes.

app.Todo = Backbone.Model.extend({

	// Default attributes ensure that each todo created has 'title and 'completed keys.
	defaults: {
		title: '',
		completed: false
	},

	// togle the 'completed' state of this todo item.
	toggle: function() {
		this.save({
			completed: !this.get('completed')
		});
	}
});