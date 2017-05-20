(function(app) {
    let Component = ng.core.Component;

    app.AppComponent = Component ({
        selector: 'app',
        template: '<hour></hour>'
    })
    .Class({
        constructor: function AppComponent() {}
    });

})(window.app || (window.app = {}));