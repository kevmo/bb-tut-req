define(
    ['jquery', 'underscore', 'backbone', 'router'],
    function($, _, Backbone, Router){
        var initialize = Router.initialize();

        return {
            initialize: initialize
        };
    }
);

