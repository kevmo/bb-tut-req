define(
    ['jquery', 'underscore', 'backbone'],
    function($, _, Backbone){
        var AppRouter = Backbone.router.extend({
            routes: {
                '/stuff': 'stuff',

                '*actions': 'default'

            }
        });

        var initialize = function(){
            var app_router = new AppRouter();

            app_router.on('stuff', function(){
                console.log("YOU CALLED STUFF");
            });

            Backbone.history.start();
        };

        return {
            initialize: initialize
        }
    }
)