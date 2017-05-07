"use strict";
var router_1 = require("@angular/router");
var contestant_component_1 = require("./components/contestant.component");
var about_component_1 = require("./components/about.component");
var appRoutes = [
    {
        path: '',
        component: contestant_component_1.ContestantComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map