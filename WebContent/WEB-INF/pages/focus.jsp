<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>

		<link rel="stylesheet" media="all" href="../css/entry-411db55503f2371ff51f.css">
		<link rel="stylesheet" media="all" href="../css/web-096a5331e66d587e2ffe.css">

		<style>
			@font-face {
				font-family: uc-nexus-iconfont;
				src: url(chrome-extension://pogijhnlcfmcppgimcaccdkmbedjkmhi/res/font_9qmmi8b8jsxxbt9.woff) format('woff'), url(chrome-extension://pogijhnlcfmcppgimcaccdkmbedjkmhi/res/font_9qmmi8b8jsxxbt9.ttf) format('truetype')
			}s
		</style>

		<script type="text/javascript" defer="" async="" src="../js/uaest.js"></script>
		<script src="../js/push.js"></script>
		<script src="../js/hm.js"></script>

		<script async="" src="../js/analytics.js"></script>

		<script>
			(function(i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;
				i[r] = i[r] || function() {
					(i[r].q = i[r].q || []).push(arguments)
				}, i[r].l = 1 * new Date();
				a = s.createElement(o),
					m = s.getElementsByTagName(o)[0];
				a.async = 1;
				a.src = g;
				m.parentNode.insertBefore(a, m)
			})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

			ga('create', 'UA-35169517-1', 'auto');
			ga('send', 'pageview');
		</script>
		<script>
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "//hm.baidu.com/hm.js?0c0e9d9b1e7d617b3e6842e85b9fb068";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
		</script>
		
	
	</head>

	<body lang="zh-CN" class="reader-black-font" style="overflow-y: scroll; background-color: rgb(204, 232, 207);">
		<!-- 全局顶部导航栏 -->
		<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
			<div class="width-limit">
				<!-- 左上方 Logo -->
				<a class="logo" href="/"><img src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt="Logo"></a>

				<!-- 右上角 -->
				<!-- 登录显示写文章 -->
				<a class="btn write-btn" target="_blank" href="/writer#/">
					<i class="iconfont ic-write"></i>写文章
				</a>
				<!-- 如果用户登录，显示下拉菜单 -->
				<div class="user">
					<div data-hover="dropdown">
						<a class="avatar" href="/u/38d1d73cc871"><img src="//upload.jianshu.io/users/upload_avatars/2800016/0e8475d0-227d-4a7f-97e5-c828816f55da.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" alt="120"></a>
					</div>
					<ul class="dropdown-menu">
						<li>
							<a href="/u/38d1d73cc871">
								<i class="iconfont ic-navigation-profile"></i><span>我的主页</span>
							</a>
						</li>
						<li>
							<!-- TODO bookmarks_path -->
							<a href="/bookmarks">
								<i class="iconfont ic-navigation-mark"></i><span>收藏的文章</span>
							</a>
						</li>
						<li>
							<a href="/users/38d1d73cc871/liked_notes">
								<i class="iconfont ic-navigation-like"></i><span>喜欢的文章</span>
							</a>
						</li>
						<li>
							<a href="/wallet">
								<i class="iconfont ic-navigation-wallet"></i><span>我的钱包</span>
							</a>
						</li>
						<li>
							<a href="/settings">
								<i class="iconfont ic-navigation-settings"></i><span>设置</span>
							</a>
						</li>
						<li>
							<a href="/faqs">
								<i class="iconfont ic-navigation-feedback"></i><span>帮助与反馈</span>
							</a>
						</li>
						<li>
							<a rel="nofollow" data-method="delete" href="/sign_out">
								<i class="iconfont ic-navigation-signout"></i><span>退出</span>
							</a>
						</li>
					</ul>
				</div>

				<div class="style-mode"><a class="style-mode-btn"><i class="iconfont ic-navigation-mode"></i></a>
					<div class="popover-modal" style="left: 0px; display: none;">
						<div class="meta"><i class="iconfont ic-navigation-night"></i><span>夜间模式</span></div>
						<div class="switch day-night-group"><a class="switch-btn">开</a> <a class="switch-btn active">关</a></div>
						<hr>
						<div class="switch font-family-group"><a class="switch-btn font-song">宋体</a> <a class="switch-btn font-hei active">黑体</a></div>
						<div class="switch"><a class="switch-btn active">简</a> <a class="switch-btn">繁</a></div>
					</div>
				</div>
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
					</div>
					<div class="collapse navbar-collapse" id="menu">
						<ul class="nav navbar-nav">
							<li class="">
								<a href="/">
									<span class="menu-text">发现</span><i class="iconfont ic-navigation-discover menu-icon"></i>
								</a>
							</li>
							<li class="active">
								<a href="/subscriptions">
									<span class="menu-text">关注</span><i class="iconfont ic-navigation-follow menu-icon"></i>
								</a>
							</li>
							<li class="notification"><a data-hover="dropdown" href="/notifications" class="notification-btn"><span class="menu-text">消息</span> <i class="iconfont ic-navigation-notification menu-icon"></i> <!----> <!----></a>
								<ul class="dropdown-menu">
									<li><a href="/notifications#/comments"><i class="iconfont ic-comments"></i> <span>评论</span> <!----></a></li>
									<li><a href="/notifications#/chats"><i class="iconfont ic-chats"></i> <span>简信</span> <!----></a></li>
									<li><a href="/notifications#/requests"><i class="iconfont ic-requests"></i> <span>投稿请求</span> <!----></a></li>
									<li><a href="/notifications#/likes"><i class="iconfont ic-likes"></i> <span>喜欢和赞</span> <!----></a></li>
									<li><a href="/notifications#/follows"><i class="iconfont ic-follows"></i> <span>关注</span> <!----></a></li>
									<li><a href="/notifications#/money"><i class="iconfont ic-money"></i> <span>赞赏</span> <!----></a></li>
									<li><a href="/notifications#/others"><i class="iconfont ic-others"></i> <span>其他消息</span> <!----></a></li>
								</ul>
							</li>
							<li class="search">
								<form target="_blank" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
									<input type="text" name="q" id="q" value="" autocomplete="off" placeholder="搜索" class="search-input">
									<a class="search-btn" href="javascript:void(null)"><i class="iconfont ic-search"></i></a>
								</form>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>

		<div class="container subscription">
			<div class="row">
				<div class="aside"><a data-toggle="dropdown" class="change-type">全部关注<i class="iconfont ic-filter"></i></a>
					<ul class="dropdown-menu arrow-top">
						<li><a>全部关注</a></li>
						<li><a>只看作者</a></li>
						<li><a>只看专题</a></li>
						<li><a>只看文集</a></li>
						<li><a>只看推送更新</a></li>
					</ul> <a href="#/recommendation" class="add-people"><i class="iconfont ic-addpeople"></i> <span>添加关注</span></a>
					<ul class="js-subscription-list">
						<li class="router-link-exact-active active">
							<a href="#/timeline" class="wrap">
								<div class="avatar"><img src="//cdn2.jianshu.io/assets/web/jianyouquan-2fb0cd72e35147c79d6507c3a3a2591b.png" style="border: none;"></div>
								<div class="name">简友圈</div>
							</a>
						</li>
						<li class="">
							<a href="#/subscriptions/137409/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/3183/1416528891_3612.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Android开发经验谈</div> <span class="count">6236</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/300999/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/14739/android.graphics.Bitmap_15f127c2.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Android开发</div> <span class="count">19</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/14/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">@IT·互联网</div> <span class="count">151</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/65506/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/1084/03bcf61363c33043de4728026e5f5128.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Web前端之路</div> <span class="count">2454</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/3156530/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/279918/%E5%9B%9B%E5%B7%9D.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">四川省</div> <span class="count">1</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/64735/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/937/u_1798560928_4196156950_fm_90_gp_0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">让前端飞</div> <span class="count">7514</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/3/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/16/computer_guy.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">程序员</div> <span class="count">213</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/209326/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/7230/Android_L.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Android Tech</div> <span class="count">121</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/1680243/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/241651/71d21cea3e2d4031a8b9a8f1acba7da8.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Kotlin</div> <span class="count">316</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/6416358/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/414966/Kotlin.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Kotlin专题</div> <span class="count">1</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/39157/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/284/android.graphics.Bitmap_3d178cba.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Android知识</div> <span class="count">138</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/607746/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/32732/android.graphics.Bitmap_1329dce8.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Android技术知识</div> <span class="count">8228</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/1070710/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/226308/ff55916a6a0c2db84ebb1ffdcef539dd.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Android开发</div> <span class="count">2734</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/1895067/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/248729/java1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Java开发那些事</div>
								<!---->
							</a>
						</li>
						<li class="">
							<a href="#/subscriptions/2310012/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/259026/android.graphics.Bitmap_bf88bf8.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Java 杂谈</div> <span class="count">326</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/3240023/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/283433/android.graphics.Bitmap_2ef3570.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">微信小程序开发</div> <span class="count">231</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/6244914/user" class="wrap">
								<div class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/5954965/1ecb4ad8-ad74-47c0-b110-26ed3da29830.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">架构之路</div> <span class="count">15</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/4372607/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/316280/android.graphics.Bitmap_31a8e04.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">javaEE学习笔记</div> <span class="count">154</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/42944/user" class="wrap">
								<div class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/44770/379687fdfdb4.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">杜琪</div> <span class="count">3</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/52276/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/655/20140608110805836_easyicon_net_128.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Web 前端开发 </div> <span class="count">3030</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/4059112/user" class="wrap">
								<div class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/3879403/f944d9d81b04.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">爱清风</div> <span class="count">3</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/1655010/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/240973/1.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Tomcat</div> <span class="count">23</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/741544/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/37379/android.graphics.Bitmap_5be8d38.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">技术干货</div> <span class="count">3410</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/795246/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/208008/android.graphics.Bitmap_2e3e36e9.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Java学习笔记</div> <span class="count">3390</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/61905/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/975/1444817620.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">前端开发</div> <span class="count">160</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/2032481/user" class="wrap">
								<div class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/2038379/9be2afbc-0424-4fc1-93db-cc4059d121d3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">crossoverJie</div> <span class="count">1</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/1670745/user" class="wrap">
								<div class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1689895/69faaa03caff.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">Wing_Li</div> <span class="count">8</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/2694130/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/268775/java_Logo.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">JavaEE</div> <span class="count">1</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/2096613/collection" class="wrap">
								<div class="avatar-collection"><img src="//upload.jianshu.io/collections/images/255208/javaweb_web_php2.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">JavaWeb</div> <span class="count">2</span></a>
						</li>
						<li class="">
							<a href="#/subscriptions/1636383/user" class="wrap">
								<div class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1656668/eea091dac7e3?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"></div>
								<div class="name">朱立志</div> <span class="count">3</span></a>
						</li>
					</ul>
					<!---->
					<!---->
				</div>
				<div class="col-xs-16 col-xs-offset-8 main">
					<div>
						<ul class="note-list">
							<li class="">
								<!---->
								<div class="content">
									<div class="author">
										<a href="/u/25c50c845c4f" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/5954965/1ecb4ad8-ad74-47c0-b110-26ed3da29830.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/25c50c845c4f" target="_blank" class="nickname">架构之路</a>
											<!----><span>发表了文章 · 前天 17:12</span></div>
									</div> <a href="/p/4aa826ce0da8?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">阿里高级Java面试题（首发，70道，带详细答案）</a>
									<p class="abstract">整理的70道阿里的Java面试题，都来挑战一下，看看自己有多厉害。下面题目都带超详细的解答，详情见底部。 1、java事件机制包括哪三个部分？分别介绍。 2、为什么要使用线程...</p>
									<div class="meta"><a href="/p/4aa826ce0da8?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 143</a> <a href="/p/4aa826ce0da8#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 2</a> <span><i class="iconfont ic-list-like"></i> 27</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/b343fcff51b0?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/972352-9911637db5512613.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/320f9e8f7fc9" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1689895/69faaa03caff.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/320f9e8f7fc9" target="_blank" class="nickname">Wing_Li</a>
											<!----><span>喜欢了文章 · 11.10 16:56</span></div>
									</div> <a href="/p/b343fcff51b0?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">BRVAH官方使用指南（持续更新）</a>
									<p class="abstract">官方网站：www.recyclerview.org BRVAH是一个强大的RecyclerAdapter框架(什么是RecyclerView？)，它能节约开发者大量的开发时间...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/f958e66439f0" target="_blank">陈宇明</a></div> <a href="/p/b343fcff51b0?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 102779</a>
										<a href="/p/b343fcff51b0#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 615</a> <span><i class="iconfont ic-list-like"></i> 531</span> <span><i class="iconfont ic-list-money"></i> 10</span></div>
								</div>
							</li>
							<li class="">
								<!---->
								<div class="content">
									<div class="author">
										<a href="/u/25c50c845c4f" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/5954965/1ecb4ad8-ad74-47c0-b110-26ed3da29830.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/25c50c845c4f" target="_blank" class="nickname">架构之路</a>
											<!----><span>发表了文章 · 11.10 08:52</span></div>
									</div> <a href="/p/a6e23229e006?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Spring Boot整合Thymeleaf模板引擎</a>
									<p class="abstract">什么是Thymeleaf Thymeleaf是一款用于渲染XML、XHTML、HTML5内容的模板引擎。类似Velocity，FreeMaker模板引擎，它也可以轻易的与Sp...</p>
									<div class="meta"><a href="/p/a6e23229e006?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 26</a> <a href="/p/a6e23229e006#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 0</a> <span><i class="iconfont ic-list-like"></i> 3</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="">
								<!---->
								<div class="content">
									<div class="author">
										<a href="/u/28d7875c78df" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/44770/379687fdfdb4.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/28d7875c78df" target="_blank" class="nickname">杜琪</a>
											<!----><span>发表了文章 · 11.09 21:46</span></div>
									</div> <a href="/p/f862216b36f5?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Java并发-CopyOnWriteArrayList</a>
									<p class="abstract">前言 今天我们一起学习下java.util.concurrent并发包里的CopyOnWriteArrayList工具类。当有多个线程可能同时遍历、修改某个公共数组时候，如果...</p>
									<div class="meta"><a href="/p/f862216b36f5?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 114</a> <a href="/p/f862216b36f5#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 0</a> <span><i class="iconfont ic-list-like"></i> 8</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/ce61eec5520a?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/5954965-e3bab06feb400353.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/25c50c845c4f" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/5954965/1ecb4ad8-ad74-47c0-b110-26ed3da29830.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/25c50c845c4f" target="_blank" class="nickname">架构之路</a>
											<!----><span>发表了文章 · 11.08 13:26</span></div>
									</div> <a href="/p/ce61eec5520a?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Spring Boot日志集成</a>
									<p class="abstract">Spring Boot日志框架 Spring Boot支持Java Util Logging,Log4j2,Lockback作为日志框架，如果你使用starters启动器，S...</p>
									<div class="meta"><a href="/p/ce61eec5520a?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 55</a> <a href="/p/ce61eec5520a#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 0</a> <span><i class="iconfont ic-list-like"></i> 4</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="">
								<!---->
								<div class="content">
									<div class="author">
										<a href="/u/25c50c845c4f" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/5954965/1ecb4ad8-ad74-47c0-b110-26ed3da29830.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/25c50c845c4f" target="_blank" class="nickname">架构之路</a>
											<!----><span>发表了文章 · 11.08 13:25</span></div>
									</div> <a href="/p/a7a2709fe3eb?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Spring面试题（70道，史上最全）</a>
									<p class="abstract">1.什么是spring? 2.使用Spring框架的好处是什么？ 3.Spring由哪些模块组成? 4.核心容器（应用上下文)模块。 5.BeanFactory–BeanFa...</p>
									<div class="meta"><a href="/p/a7a2709fe3eb?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 58</a> <a href="/p/a7a2709fe3eb#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 0</a> <span><i class="iconfont ic-list-like"></i> 5</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/0b6f06c7464a?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/5872721-d5916fcb541c89d4.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/f5909165c1e8" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1915184/3d01becf0b0e.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/f5909165c1e8" target="_blank" class="nickname">MeloDev</a>
											<!----><span>喜欢了文章 · 11.08 11:55</span></div>
									</div> <a href="/p/0b6f06c7464a?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Android Studio 3.0项目迁移所遇到的坑</a>
									<p class="abstract">最近 Android Studio 3.0 版本正式推出，趁着项目刚发完版本，赶紧更新试试水，结果发现项目完全跑不起来，折腾了几个小时才搞好。记录一下填坑过程，希望能帮助其他...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/e82f07d68cd6" target="_blank">ThinkNuo</a></div> <a href="/p/0b6f06c7464a?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 846</a>
										<a href="/p/0b6f06c7464a#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 25</a> <span><i class="iconfont ic-list-like"></i> 46</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/7031752823e7?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/3301720-db890fabf626e0ac.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/f5909165c1e8" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1915184/3d01becf0b0e.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/f5909165c1e8" target="_blank" class="nickname">MeloDev</a>
											<!----><span>喜欢了文章 · 11.08 10:58</span></div>
									</div> <a href="/p/7031752823e7?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">简书一年，我找到了一份好工作</a>
									<p class="abstract">这是我的亲身经历，没有虚构，虽然它听起来不像真的。 2017年11月7日 星期二 晴 说起来很惭愧，在简书写了一年的文，至今，我还是原来的我，既没有签约，也没有写出爆文，甚至...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/0aba71a90d02" target="_blank">陌上红裙</a></div> <a href="/p/7031752823e7?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 35667</a>
										<a href="/p/7031752823e7#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 1001</a> <span><i class="iconfont ic-list-like"></i> 1934</span> <span><i class="iconfont ic-list-money"></i> 29</span></div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/3f207a8e32cb?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/2761423-d261fd1cceeab116.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/320f9e8f7fc9" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1689895/69faaa03caff.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/320f9e8f7fc9" target="_blank" class="nickname">Wing_Li</a>
											<!----><span>喜欢了文章 · 11.08 08:53</span></div>
									</div> <a href="/p/3f207a8e32cb?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">获取WebView加载的网页内容并进行动态修改</a>
									<p class="abstract">效果图 如图所示，整个界面只有一个webView控件，程序初始化的时候webView会去加载assets文件夹下面的JsoupParHtml.html文件，等webView成...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/0e4907a8f36b" target="_blank">AFinalStone</a></div> <a href="/p/3f207a8e32cb?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 5933</a>
										<a href="/p/3f207a8e32cb#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 12</a> <span><i class="iconfont ic-list-like"></i> 7</span> <span><i class="iconfont ic-list-money"></i> 1</span></div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/f525d574fff2?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/3806049-3821b1192987c1fe.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/f5909165c1e8" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1915184/3d01becf0b0e.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/f5909165c1e8" target="_blank" class="nickname">MeloDev</a>
											<!----><span>喜欢了文章 · 11.07 16:45</span></div>
									</div> <a href="/p/f525d574fff2?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Raspberry Pi 3刷入Android Things</a>
									<p class="abstract">Raspberry Pi 3 B型是世界上最受欢迎的单板电脑的最新版本。 它运行在一颗1.2GHz的四核64位ARM Cortex-A53 CPU上，四个USB 2.0端口，...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/3b8ec786a266" target="_blank">化作春泥_</a></div> <a href="/p/f525d574fff2?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 3557</a>
										<a href="/p/f525d574fff2#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 10</a> <span><i class="iconfont ic-list-like"></i> 17</span> <span><i class="iconfont ic-list-money"></i> 1</span></div>
								</div>
							</li>
							<li class="">
								<!---->
								<div class="content">
									<div class="author">
										<a href="/u/c87569a18050" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1099585/608e058d-e63f-4fdd-8b28-d4913e7126f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/c87569a18050" target="_blank" class="nickname">食梦兽</a>
											<!----><span>喜欢了文章 · 11.06 18:51</span></div>
									</div> <a href="/p/168bef5526ae?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Android二维码（仿微信，轻量Zxing）</a>
									<p class="abstract">前言 要做一个功能，二维码识别。网上找一堆相关的Demo，但是总不是想要的效果，或者都是多年前的版本，权衡考虑之后，决定亲自操刀。不纠结直接选中Zxing框架，https:/...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/f5b307af2a0d" target="_blank">美猴王丶</a></div> <a href="/p/168bef5526ae?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 4020</a>
										<a href="/p/168bef5526ae#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 17</a> <span><i class="iconfont ic-list-like"></i> 80</span> <span><i class="iconfont ic-list-money"></i> 2</span></div>
								</div>
							</li>
							<li class="">
								<!---->
								<div class="content">
									<div class="author">
										<a href="/u/f5909165c1e8" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1915184/3d01becf0b0e.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/f5909165c1e8" target="_blank" class="nickname">MeloDev</a>
											<!----><span>喜欢了文章 · 11.06 15:03</span></div>
									</div> <a href="/p/5ee6b471970e?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">LeakCanary 内存泄露监测原理研究</a>
									<p class="abstract">"Readthefuckingsourcecode"--linus一句名言体现出了阅读源码的重要性，学习别人得代码是提升自己的重要途径。最近用到了LeakCanary，顺便看...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/1292bf77533e" target="_blank">呆萌狗和求疵喵</a></div> <a href="/p/5ee6b471970e?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 6472</a>
										<a href="/p/5ee6b471970e#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 7</a> <span><i class="iconfont ic-list-like"></i> 23</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/969dc85deb39?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/5954965-a52c8bedad8acb2e?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/25c50c845c4f" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/5954965/1ecb4ad8-ad74-47c0-b110-26ed3da29830.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/25c50c845c4f" target="_blank" class="nickname">架构之路</a>
											<!----><span>发表了文章 · 11.06 09:57</span></div>
									</div> <a href="/p/969dc85deb39?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">2017派卧底去阿里、京东、美团、滴滴带回来的面试题及答案</a>
									<p class="abstract">最近有很多朋友去目前主流的大型互联网公司面试（阿里巴巴、京东、美团、滴滴），面试回来之后会发给我一些面试题。有些朋友轻松过关，拿到offer，但是有一些是来询问我答案的。 我...</p>
									<div class="meta"><a href="/p/969dc85deb39?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 121</a> <a href="/p/969dc85deb39#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 0</a> <span><i class="iconfont ic-list-like"></i> 8</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="">
								<!---->
								<div class="content">
									<div class="author">
										<a href="/u/f788647332b4" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/3879403/f944d9d81b04.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/f788647332b4" target="_blank" class="nickname">爱清风</a>
											<!----><span>发表了文章 · 11.06 09:48</span></div>
									</div> <a href="/p/abc643799ce3?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Android Html.fromHtml(String)过时的替代方法</a>
									<p class="abstract">转载自：wildma_ 的 blog。此处用来作为记录整理收集之用。 问题 当我们想用TextView来显示一段html代码时，则会用到Html.fromHtml(Strin...</p>
									<div class="meta"><a href="/p/abc643799ce3?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 2</a> <a href="/p/abc643799ce3#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 0</a> <span><i class="iconfont ic-list-like"></i> 0</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="">
								<!---->
								<div class="content">
									<div class="author">
										<a href="/u/28d7875c78df" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/44770/379687fdfdb4.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/28d7875c78df" target="_blank" class="nickname">杜琪</a>
											<!----><span>喜欢了文章 · 11.03 10:10</span></div>
									</div> <a href="/p/ff0947529de4?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Dubbo高级特性实践-泛化调用</a>
									<p class="abstract">引言当后端Java服务用Dubbo协议作为RPC方案的基础，但部分消费方是前端Restful的PHP服务，不能直接调用，于是在中间架设了Router服务提供统一的基于HTTP...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/75f14e286c8e" target="_blank">阿羅</a></div> <a href="/p/ff0947529de4?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 2436</a>
										<a href="/p/ff0947529de4#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 3</a> <span><i class="iconfont ic-list-like"></i> 11</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/d4ff559df412?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/2038379-3e3c04f9d7997121.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/e2d07947c112" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/2038379/9be2afbc-0424-4fc1-93db-cc4059d121d3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/e2d07947c112" target="_blank" class="nickname">crossoverJie</a>
											<!----><span>发表了文章 · 11.02 10:44</span></div>
									</div> <a href="/p/d4ff559df412?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">SSM(十七) MQ应用</a>
									<p class="abstract">前言 写这篇文章的起因是由于之前的一篇关于Kafka异常消费，当时为了解决问题不得不使用临时的方案。 总结起来归根结底还是对Kafka不熟悉导致的，加上平时工作的需要，之后就...</p>
									<div class="meta"><a href="/p/d4ff559df412?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 67</a> <a href="/p/d4ff559df412#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 0</a> <span><i class="iconfont ic-list-like"></i> 2</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/b9164500d3fb?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/6098829-8c3dcee8f9498de8.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/c87569a18050" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1099585/608e058d-e63f-4fdd-8b28-d4913e7126f3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/c87569a18050" target="_blank" class="nickname">食梦兽</a>
											<!----><span>喜欢了文章 · 11.02 00:34</span></div>
									</div> <a href="/p/b9164500d3fb?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">深度学习js与安卓的交互以及WebView的那些坑</a>
									<p class="abstract">前言：随着市场需求的不断变化，原生安卓已经无法满足客户的需要了，现在很多app都在使用Android和h5的交互实现某些功能，比如商品详情页，文章详情页面，商品点评页面，还有...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/f408bdadacce" target="_blank">阿韦爱Android</a></div> <a href="/p/b9164500d3fb?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 3855</a>
										<a href="/p/b9164500d3fb#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 10</a> <span><i class="iconfont ic-list-like"></i> 73</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/8a7d059da746?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/1187237-980b91b5aba2c24d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/f5909165c1e8" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1915184/3d01becf0b0e.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/f5909165c1e8" target="_blank" class="nickname">MeloDev</a>
											<!----><span>喜欢了文章 · 11.01 16:07</span></div>
									</div> <a href="/p/8a7d059da746?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">Android中RelativeLayout和LinearLayout性能分析</a>
									<p class="abstract">先看一些现象吧：用eclipse或者Androidstudio，新建一个Activity自动生成的布局文件都是RelativeLayout，或许你会认为这是IDE的默认设置问...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/bd3befbe51d0" target="_blank">尹star</a></div> <a href="/p/8a7d059da746?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 15354</a>
										<a href="/p/8a7d059da746#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 21</a> <span><i class="iconfont ic-list-like"></i> 125</span> <span><i class="iconfont ic-list-money"></i> 1</span></div>
								</div>
							</li>
							<li class="">
								<!---->
								<div class="content">
									<div class="author">
										<a href="/u/f788647332b4" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/3879403/f944d9d81b04.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/f788647332b4" target="_blank" class="nickname">爱清风</a>
											<!----><span>发表了文章 · 11.01 10:00</span></div>
									</div> <a href="/p/93189e339045?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">如何从平淡日子感到快乐</a>
									<p class="abstract">从平淡日子感到快乐，你就拥有了稳稳的幸福。 最近有人喜欢了我以前写的一篇文章，准确说是一张日常计划记录表。我自己再去看当时写的这篇文章，又有了新的感触，所有有了文章开头的一句...</p>
									<div class="meta"><a href="/p/93189e339045?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 13</a> <a href="/p/93189e339045#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 0</a> <span><i class="iconfont ic-list-like"></i> 0</span>
										<!---->
									</div>
								</div>
							</li>
							<li class="have-img">
								<a href="/p/637258136008?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="wrap-img"><img src="//upload-images.jianshu.io/upload_images/1353090-7a46f276fe52b115?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"></a>
								<div class="content">
									<div class="author">
										<a href="/u/0cb2e1a7eec8" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/5463918/def6b7f8-918e-4e1b-b053-fe59a5599c08.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
										<div class="info"><a href="/u/0cb2e1a7eec8" target="_blank" class="nickname">孔垂云</a>
											<!----><span>喜欢了文章 · 10.31 13:15</span></div>
									</div> <a href="/p/637258136008?utm_source=desktop&amp;utm_medium=timeline" target="_blank" class="title">金融从业者需要了解的区块链常识④：如何5分钟讲明白区块链？</a>
									<p class="abstract">王爷爷和王阿婆这两天一直在犯愁，上个星期社区发通知——金婚夫妻可以免费领取一床绣花被，可王爷爷夫妇的结婚证却怎么也找不到了，到民政局一打听，50多年前的档案也找不到了，没法补...</p>
									<div class="meta">
										<div class="origin-author"><a href="/u/440c430a738f" target="_blank">苏宁金融研究院</a></div> <a href="/p/637258136008?utm_source=desktop&amp;utm_medium=timeline" target="_blank"><i class="iconfont ic-list-read"></i> 22</a>
										<a href="/p/637258136008#comments" target="_blank"><i class="iconfont ic-list-comments"></i> 0</a> <span><i class="iconfont ic-list-like"></i> 1</span>
										<!---->
									</div>
								</div>
							</li>
							<!----><a class="load-more">阅读更多</a></ul>
						<!---->
					</div>
				</div>
			</div>
		</div>
		<!-- 因为添加关注的时候，分两种情况 -->
		<!-- 一种是当前用户没有关注任何用户，这种情况推荐默认的用户或者专题 -->
		<!-- 另一种情况是当前用户有关注用户， 这种情况推荐所关注用户关注的专题或者用户 -->
		<!-- 需要根据当前用户有没有关注过对象，来判断 vue router 入口 -->

		<script type="application/json" data-name="page-data">
			{
				"user_signed_in": true,
				"locale": "zh-CN",
				"os": "windows",
				"read_mode": "day",
				"read_font": "font2",
				"current_user": {
					"id": 2800016,
					"nickname": "Vampire丶黑狐",
					"slug": "38d1d73cc871",
					"avatar": "http://upload.jianshu.io/users/upload_avatars/2800016/0e8475d0-227d-4a7f-97e5-c828816f55da.png",
					"unread_counts": {
						"chats": 0,
						"total": 0
					}
				},
				"has_following_users": true,
				"has_subscriptions": true
			}
		</script>

		<script src="../js/babel-polyfill-e27dec85eeb94683dfc7.js" crossorigin="anonymous"></script>
		<script src="../js/web-base-d79e9b7e602fb32df34e.js" crossorigin="anonymous"></script>
		<script src="../js/web-422095a7b90654d2281c.js" crossorigin="anonymous"></script>

		<script src="../js/entry-77fd4357a6f725f0d870.js"" crossorigin="anonymous"></script>
		<script>
			(function() {
				var bp = document.createElement('script');
				var curProtocol = window.location.protocol.split(':')[0];
				if (curProtocol === 'https') {
					bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
				} else {
					bp.src = 'http://push.zhanzhang.baidu.com/push.js';
				}
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(bp, s);
			})();
		</script>

		<!---->
		<a id="ext_btt" href="#"><img src="chrome-extension://alpoeaffjpfnidlkiidponkainlnfhnl/images/icon.png"></a>
	</body>

</html>