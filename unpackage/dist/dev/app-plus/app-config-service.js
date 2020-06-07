
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/recommend/recommend","pages/mine/mine","pages/search/search","pages/info/info","pages/comment/comment","pages/comment/detail","pages/login/login","pages/login/register","pages/login/forget","pages/config/config","pages/update/update","pages/myComment/myComment","pages/myCollect/myCollect","pages/myDigg/myDigg","pages/report/report"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"明日头条","navigationBarBackgroundColor":"#ED4040","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#333333","selectedColor":"#ED4040","backgroundColor":"#F5F3F4","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/tabBar/home.png","selectedIconPath":"static/tabBar/homeed0.png"},{"pagePath":"pages/recommend/recommend","text":"推荐","iconPath":"static/tabBar/rcmd.png","selectedIconPath":"static/tabBar/rcmded0.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/tabBar/mine.png","selectedIconPath":"static/tabBar/mineed0.png"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"test1","compilerVersion":"2.6.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"15px","disabled":true,"placeholder":"新闻搜索","placeholderColor":"#6d6c67"},"buttons":[{"color":"#ffffff","colorPressed":"#ffffff","float":"right","fontSize":"16px","fontSrc":"/static/iconfont2.ttf","text":""}]}}},{"path":"/pages/recommend/recommend","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"15px","disabled":true,"placeholder":"新闻搜索","placeholderColor":"#6d6c67"},"buttons":[{"color":"#ffffff","colorPressed":"#ffffff","float":"right","fontSize":"16px","fontSrc":"/static/iconfont2.ttf","text":""}]}}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"backgroundColor":"#f5f7f9","titleText":"我的","buttons":[{"color":"#000000","colorPressed":"#6d6c67","float":"right","fontSize":"16px","fontSrc":"/static/iconfont2.ttf","text":""},{"color":"#000000","colorPressed":"#6d6c67","float":"left","fontSize":"16px","fontSrc":"/static/iconfont2.ttf","text":""}]}}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarBackgroundColor":"#ffffff","titleNView":{"searchInput":{"align":"left","backgroundColor":"#F5F4F2","borderRadius":"15px","disabled":false,"placeholder":"新闻搜索","placeholderColor":"#6d6c67"},"buttons":[{"color":"#333333","colorPressed":"#333333","float":"right","fontSize":"14px","fontSrc":"/static/iconfont.ttf","text":"搜索"}]}}},{"path":"/pages/info/info","meta":{},"window":{"softinputMode":"adjustResize","titleNView":{"backgroundColor":"#DD524D","titleColor":"#FFFFFF","titleText":"NEWS","titleSize":"20px","buttons":[{"text":"","fontSrc":"/static/iconfont.ttf","fontSize":"30px","float":"right"}]}}},{"path":"/pages/comment/comment","meta":{},"window":{"softinputMode":"adjustResize","titleNView":{"backgroundColor":"#DD524D","titleColor":"#FFFFFF","titleText":"COMMENTS","titleSize":"20px"}}},{"path":"/pages/comment/detail","meta":{},"window":{"softinputMode":"adjustResize","titleNView":{"backgroundColor":"#DD524D","titleColor":"#FFFFFF","titleText":"REPLY","titleSize":"20px"}}},{"path":"/pages/login/login","meta":{},"window":{}},{"path":"/pages/login/register","meta":{},"window":{}},{"path":"/pages/login/forget","meta":{},"window":{}},{"path":"/pages/config/config","meta":{},"window":{}},{"path":"/pages/update/update","meta":{},"window":{"titleNView":{"backgroundColor":"#f5f7f9","titleText":"修改资料"}}},{"path":"/pages/myComment/myComment","meta":{},"window":{"titleNView":{"backgroundColor":"#f5f7f9","titleText":"我的评论"}}},{"path":"/pages/myCollect/myCollect","meta":{},"window":{"enablePullDownRefresh":true,"titleNView":{"backgroundColor":"#f5f7f9","titleText":"我的收藏"}}},{"path":"/pages/myDigg/myDigg","meta":{},"window":{"enablePullDownRefresh":true,"titleNView":{"backgroundColor":"#f5f7f9","titleText":"我的点赞"}}},{"path":"/pages/report/report","meta":{},"window":{"softinputMode":"adjustResize","titleNView":{"backgroundColor":"#DD524D","titleColor":"#FFFFFF","titleText":"使用报告","titleSize":"20px"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
