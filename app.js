var Vue=require('vue');
var VueRouter=require('vue-router');
var VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.debug = true;
// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend(require('./app.vue'))

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter({
	saveScrollPosition: true,
  	transitionOnLoad: true
})
// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
    '/foo': {
        component: require('./components/foo.vue'),
        subRoutes:{//路由嵌套
        	'/hello': {//  foo/hell 会在foo模板里的router-view内渲染        	
		        component: function (resolve) {
		          require(['./components/hello.vue'], resolve);
		        }
		    }
        }
    },
    '/bar': {
        component:  require('./components/bar.vue')
    },
    '/404':{
    	component:require('./components/404.vue')
    }
})
router.redirect({
    '*': '/404'
});
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')