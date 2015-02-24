
var ItemView = Backbone.Marionette.ItemView.extend({

	template: '#itemView',

	className: 'views',

	ui: {
		'p': '.item-view-p'
	},

	events: {
		'click @ui.p': 'bark'
	},

	triggers: {
		'click @ui.p': 'trigger:handler'
	},

	initialize: function() {
		console.log('itemView initialize');
		this.listenTo(this.model, 'change', this.modelChangeHandler);
	},

	//triggered when showing the view in a Region causes it to be attached to the "document"
	//1. require region to be a child of document
	//2. can be passed down to nested children views
	//more interesting info: http://marionettejs.com/docs/v2.3.2/marionette.view.html#view-attach--onattach-event
	onAttach: function() {
		console.log('i\'m attached');
	},

	//called on the view instance when the view has been rendered and displayed
	onShow: function() {
		console.log('itemView onShow');
	},

	onBeforeDestroy: function(m) {
		console.log('before destroy message: ' + m);
	},

	onDestroy: function(m) {
		console.log('destroy message: ' + m);
	},

	modelChangeHandler: function(model) {
		console.log('itemView model changed');
	},

	bark: function(e) {
		console.log('bark');
	}
});