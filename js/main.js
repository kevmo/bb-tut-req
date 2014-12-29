require.config({
    paths: {
        jquery: '../bower_components/jquery/src/jquery',
        underscore: '../bower_components/underscore/underscore',
        backbone: '../bower_components/backbone/backbone'
    }
});

require(
    ['app'],
    function(App){
        App.initialize();
    }
);