(function(app) {
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var TimerService = app.TimerService;
  var HourComponent = app.HourComponent;
  var AppComponent = app.AppComponent;

    app.AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, HourComponent],
        providers: [TimerService],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function(){}
    });

})(window.app || (window.app = {}));