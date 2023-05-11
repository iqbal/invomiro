'use stict';

function Route(name, jsName, defaultRoute) {
    try {
        if(!name || !jsName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, jsName, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    jsName: undefined,
    default: undefined,
    constructor: function (name, jsName, defaultRoute) {
        this.name = name;
        this.jsName = jsName;
        this.default = defaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name; 
    }
}