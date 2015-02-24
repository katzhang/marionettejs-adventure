var ItemViewModel = Backbone.Model.extend({});

var itemViewModel = new ItemViewModel({
	'name': 'John'
});

var itemView = new ItemView({model: itemViewModel});

$('.item-view-container').append(itemView.render().el);

$('.destroy-button').on('click', function(e) {
	e.preventDefault();
	itemView.destroy('destroy message');
});

itemView.on('trigger:handler', function(e) {
	console.log('trigger handler');
});

itemView.ui.p.trigger('click');