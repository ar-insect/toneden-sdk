require.config({
    namespace: 'ToneDen',
    waitSeconds: 0
});

// Web setup. Makes ToneDen a global variable.
if(typeof window !== 'undefined') {
    exports = window;

    if(!window.ToneDen) {
        window.ToneDen = {};
    }

    ToneDen = window.ToneDen;
}

require(['utils'], function(utils) {
    ToneDen.define = define;
    ToneDen.require = require;
    ToneDen.requirejs = requirejs;

    var baseUrl = utils.getBaseUrl();

    ToneDen.require.config({
        baseUrl: baseUrl,
        enforceDefine: true
    });
    
    // Load fontawesome.
    utils.loadStylesheet('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css?cache=' + new Date().getTime());

    ToneDen.require(['toneden'], function(sdk) {
        ToneDen = utils.extend(ToneDen, sdk);

        if(window.ToneDenReady && window.ToneDenReady.length > 0) {
            for(var i = 0; i < ToneDenReady.length; i++) {
                ToneDenReady[i]();
            }
        }
    });
});
