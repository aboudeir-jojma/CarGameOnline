/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

// //锁帧
// (function () {
//     var lastTimer = 0;
//     var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
//     window.requestAnimationFrame = rAF ? stTimeWithRAF : stTime;

//     function stTime(callback) {
//         let currTime = performance.now();
//         let elapseTime = Math.max(0, currTime - lastTimer);
//         let timeToCall = Math.max(0, 16.7 - elapseTime);
//         window.setTimeout(callback, timeToCall);
//         lastTimer = currTime + timeToCall;
//     }

//     function stTimeWithRAF(callback) {
//         let currTime = performance.now();
//         let elapseTime = Math.max(0, currTime - lastTimer);
//         let timeToCall = Math.max(0, 16.7 - elapseTime);
//         window.setTimeout(function () {
//             rAF(callback);
//         }, timeToCall);
//         lastTimer = currTime + timeToCall;
//     }
// }());

//-----libs-begin-----
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.9.0/laya.core.js");
// loadLib("./libs/laya.core.js")
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.9.0/laya.ui.js");
loadLib("https://h5gamessdk.yyggames.com/sdk/laya/2.9.0/laya.d3.js");
//-----libs-end-------
YYGGames.assetManager.enableVersionControl().then(() => {
  YYGGames.assetManager.loadDir("raw-assets/base");
  YYGGames.assetManager.loadDir("raw-assets/Common");
  YYGGames.assetManager.loadDir("raw-assets/res");
  YYGGames.assetManager.loadDir("raw-assets/scene");
  YYGGames.assetManager.loadDir("raw-assets/ui");

  loadLib("js/bundle.js");
});
