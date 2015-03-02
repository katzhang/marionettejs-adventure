var CollectionChildView = Marionette.ItemView.extend({
	onRender: function() {
		console.log('CollectionChildView on render');
	}
});

// loop through collection render each model a childView
var CollectionView = Marionette.CollectionView.extend({
	childView: CollectionChildView
})