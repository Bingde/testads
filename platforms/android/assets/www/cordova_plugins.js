cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.admob.google/www/admob.js",
        "id": "com.admob.google.AdMobAds",
        "clobbers": [
            "window.admob",
            "window.tappx"
        ]
    },
    {
        "file": "plugins/com.connectivity.monitor/www/connectivity.js",
        "id": "com.connectivity.monitor.connectivity",
        "clobbers": [
            "window.connectivity"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.admob.google": "2.0.5",
    "com.connectivity.monitor": "1.0.2",
    "android.support.v4": "1.0.0",
    "com.google.playservices": "21.0.0"
}
// BOTTOM OF METADATA
});