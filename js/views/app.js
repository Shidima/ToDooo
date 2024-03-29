// js/views/app.js

var app = app || {};

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.Appview = Backbone.View.extend({

  	// Instead of generating a new element, bind to the existing skeleton of
  	// the App already present in HTML
  	el: '#todoapp',

  	// Our template for the line of statistics at the bottom of the app.
  	statsTemplate: _.template( $('#stats-template').html() ),

  	// At initialization we bind to the relevant events on the 'Todos'
  	// collection, when items are added or changed. Kick thins off by
  	// loading any preexisting todos that might be saved in *localStorage*.
  	initialize: function() {
  		this.allCheckbox = this.$('#toggle-all')[0];
  		this.$input = this.$('new-todo');
  		this.$footer = this.$('footer');
  		this.$main = this.$('#main');

  		this.listenTo(app.Todos, 'add', this.addOne);
  		this.listenTo(app.Todos, 'reset', this.addAll);

  		this.listenTo(app.Todos, 'change:completed', this.filterOne);
  		this.listenTo(app.Todos, 'filter', this.filterAll);
  		this.listenTo(app.Todos, 'all', this.render);

  		app.Todos.fetch();
  	},

  	// Add a single todo item to the list by creating a view for it, and
  	// appending its element to the '<ul>'.
  	addOne: function( todo ) {
  		var view = new app.TodoView({ model: todo });
  		$('#todo-list').append( view.render().el );
  	},

  	// Add all items in the **Todos** collection at once.
  	addAll: function() {
  		this.$('#todo-list').html('');
  		app.Todos.each(this.addOne, this);
  	}
  });