var config = {
    paths: {
        uikit: 'js/uikit/uikit.min',
        uikiticons: 'js/uikit/uikit-icons.min',
        uikitWidget: 'js/widget/uikitWidget'
    },
    shim: {
        uikit: {
            exports: 'UIkit'
        },
        uikiticons: {
            deps: ['uikit']
        }
    },
};
