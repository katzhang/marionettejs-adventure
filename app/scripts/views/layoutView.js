var LayoutView = Backbone.Marionette.LayoutView.extend({
	template: '#layout-view-template',
	regions: {
		menu: '#menu',
		content: '#content'
	},

	// render nested children views in a single paint by using onBeforeShow
	
	// Note that inefficient tree rendering will cause the attach event to be fired multiple times. This
	// situation can occur if you render the children views after the parent has been rendered, such as using
	// onShow to render children. As a rule of thumb, most of the time you'll want to render any nested views in
	// the onBeforeShow callback.
	onBeforeShow: function() {
		this.getRegion('menu').show(new ItemView());
	},

	onShow: function() {
		console.log('LayoutView onShow');
	},

	// Start with a Region that's a child of the document and show any LayoutView in it: every view in the tree
	// (including the parent LayoutView) will have the attach event triggered on it when they have been
	// attached to the document.
	onAttach: function() {
		console.log('LayoutView onAttach');
	}
});