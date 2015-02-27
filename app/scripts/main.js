$(document).ready(function() {
	//View
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

	//the trigger handler's arg contains view, model, collection bound to that view
	itemView.on('trigger:handler', function(arg) {
		console.log('trigger handler');
		console.log(arg.model);
	});

	itemView.ui.p.trigger('click');

	//serialize a model
	console.log(itemView.serializeModel(itemViewModel));

	//LayoutView

	var layoutView = new LayoutView();

	// $('.layout-view-container').append(layoutView.render().el);

	var ItemView_2 = Marionette.ItemView.extend({
		className: 'miabu',
		template: '#miabu',
		onShow: function() {
			console.log('itemview 2 onShow');
		}
	});

	var layoutView_2 = new LayoutView();

	var myApp = new Marionette.Application();

	myApp.addRegions({
		container: '.container'
	});

	myApp.getRegion('container').show(layoutView_2);
});