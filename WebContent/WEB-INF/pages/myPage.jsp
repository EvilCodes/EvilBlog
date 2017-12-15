<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

	<head>
		<meta charset="UTF-8">
		<title></title>
		
		<link rel="stylesheet" media="all" href="css/web-34001e4e53a4d3713bbe.css">
		
		<link rel="stylesheet" media="all" href="css/entry-4022a9cdb8df13d630ea.css">
		<script src="js/hm.js"></script>
		<script src="js/push.js"></script>
		<script async="" src="js/analytics.js"></script>
		<script type="text/javascript" defer="" async="" src="js/uaest.js"></script>
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

		<style>
			@font-face {
				font-family: uc-nexus-iconfont;
				src: url(chrome-extension://pogijhnlcfmcppgimcaccdkmbedjkmhi/res/font_9qmmi8b8jsxxbt9.woff) format('woff'), url(chrome-extension://pogijhnlcfmcppgimcaccdkmbedjkmhi/res/font_9qmmi8b8jsxxbt9.ttf) format('truetype')
			}
		</style>
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
							<li class="">
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

		<div class="container person">
			<div class="row">
				<div class="col-xs-16 main">
					<div class="main-top">
						<a class="avatar" href="/u/38d1d73cc871">
							<img src="//upload.jianshu.io/users/upload_avatars/2800016/0e8475d0-227d-4a7f-97e5-c828816f55da.png?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="240">
						</a>

						<div class="title">
							<a class="name" href="/u/38d1d73cc871">Vampire丶黑狐</a>
							<i class="iconfont ic-man"></i>
						</div>
						<div class="info">
							<ul>
								<li>
									<div class="meta-block">
										<a href="/users/38d1d73cc871/following">
											<p>17</p>
											关注 <i class="iconfont ic-arrow"></i>
										</a>
									</div>
								</li>
								<li>
									<div class="meta-block">
										<a href="/users/38d1d73cc871/followers">
											<p>1</p>
											粉丝 <i class="iconfont ic-arrow"></i>
										</a>
									</div>
								</li>
								<li>
									<div class="meta-block">
										<a href="/u/38d1d73cc871">
											<p>2</p>
											文章 <i class="iconfont ic-arrow"></i>
										</a>
									</div>
								</li>
								<li>
									<div class="meta-block">
										<p>1165</p>
										<div>字数</div>
									</div>
								</li>
								<li>
									<div class="meta-block">
										<p>1</p>
										<div>收获喜欢</div>
									</div>
								</li>
							</ul>
						</div>
					</div>

					<ul class="trigger-menu" data-pjax-container="#list-container">
						<li class="active"><a href="/u/38d1d73cc871?order_by=shared_at"><i class="iconfont ic-articles"></i> 文章</a></li>
						<li class=""><a href="/users/38d1d73cc871/timeline"><i class="iconfont ic-feed"></i> 动态</a></li>
						<li class=""><a href="/u/38d1d73cc871?order_by=commented_at"><i class="iconfont ic-latestcomments"></i> 最新评论</a></li>
						<li class=""><a href="/u/38d1d73cc871?order_by=top"><i class="iconfont ic-hot"></i> 热门</a></li>
					</ul>

					<div id="list-container">
						<!-- 文章列表模块 -->
						<ul class="note-list" infinite-scroll-url="/u/38d1d73cc871?order_by=shared_at">

							<li id="note-12457845" data-note-id="12457845" class="">
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/38d1d73cc871">
											<img src="//upload.jianshu.io/users/upload_avatars/2800016/0e8475d0-227d-4a7f-97e5-c828816f55da.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/38d1d73cc871">Vampire丶黑狐</a>
											<span class="time" data-shared-at="2017-05-16T08:18:11+08:00">05.16 08:18</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/33c2badd9fd3">放纵，无知的表现</a>
									<p class="abstract">
										生命很短暂，上天给予每个人机会，但关键看的还是自己能否把握住。有的人会说我很累我需要发泄一下自己的情绪，也有的人说不放松下自己我会疯掉的。这里我想谈谈我对放纵两个字的认识放纵...
									</p>
									<div class="meta">
										<a target="_blank" href="/p/33c2badd9fd3">
											<i class="iconfont ic-list-read"></i> 1
										</a>
										<a target="_blank" href="/p/33c2badd9fd3#comments">
											<i class="iconfont ic-list-comments"></i> 0
										</a> <span><i class="iconfont ic-list-like"></i> 0</span>
									</div>
								</div>
							</li>

							<li id="note-11158668" data-note-id="11158668" class="have-img">
								<a class="wrap-img" href="/p/7ee71834fb97" target="_blank">
									<img class="img-blur-done" src="//upload-images.jianshu.io/upload_images/2800016-64379addcb3ab1f6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/38d1d73cc871">
											<img src="//upload.jianshu.io/users/upload_avatars/2800016/0e8475d0-227d-4a7f-97e5-c828816f55da.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/38d1d73cc871">Vampire丶黑狐</a>
											<span class="time" data-shared-at="2017-04-10T06:40:29+08:00">04.10 06:40</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/7ee71834fb97">成与败得与失</a>
									<p class="abstract">
										人这一生成与败得与失全部都在于自己，一个人真正最大的敌人就是自己，自己的心态自己的习惯，而一个人最不应该害怕的还是自己，因为心态与所谓的恐惧才是真正的纸老虎，是一戳即穿的伪命...
									</p>
									<div class="meta">
										<a target="_blank" href="/p/7ee71834fb97">
											<i class="iconfont ic-list-read"></i> 7
										</a>
										<a target="_blank" href="/p/7ee71834fb97#comments">
											<i class="iconfont ic-list-comments"></i> 0
										</a> <span><i class="iconfont ic-list-like"></i> 1</span>
									</div>
								</div>
							</li>

						</ul>

					</div>
				</div>

				<div class="col-xs-7 col-xs-offset-1 aside">
					<div class="title">个人介绍</div>
					<a class="function-btn" data-action="start-edit-intro" href="javascript:void(0)"><i class="iconfont ic-edit-s"></i>编辑</a>
					<form class="profile-edit js-intro-form" data-type="json" id="edit_user_2800016" action="/users/38d1d73cc871" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="_method" value="patch">
						<textarea name="user[intro]" id="user_intro">一样的世界，不一样的演绎------这一次我要全力以赴！</textarea>
						<input type="submit" name="commit" value="保存" class="btn btn-hollow" data-action="save-edit-intro" data-disable-with="保存">
						<a data-action="cancel-edit-intro" href="javascript:void(null);">取消</a>
					</form>
					<div class="description">
						<div class="js-intro">一样的世界，不一样的演绎------这一次我要全力以赴！</div>
						<a class="social-icon-sprite social-icon-weibo" target="_blank" href="http://weibo.com/u/5965029218"></a>

					</div>
					<div id="user-publications">
						<!---->
					</div>
					<ul class="list user-dynamic">
						<li>
							<a href="/users/38d1d73cc871/subscriptions">
								<i class="iconfont ic-collection"></i> <span>我关注的专题/文集</span>
							</a>
						</li>
						<li>
							<a href="/users/38d1d73cc871/liked_notes">
								<i class="iconfont ic-like"></i> <span>我喜欢的文章</span>
							</a>
						</li>
					</ul>
					<!-- 专题和文集 -->
					<div>
						<div>
							<!---->
							<div class="title">我创建的专题</div>
							<div class="new-collection-block"><a href="/collections/new" class="new-collection-btn"><i class="iconfont ic-follow"></i><span>创建一个新专题</span></a></div>
						</div>
						<!---->
						<div>
							<div class="title">
								我的文集
							</div>
							<ul class="list">
								<li><a href="/nb/5789013" target="_blank"><i class="iconfont ic-search-notebook"></i></a> <a href="/nb/5789013" target="_blank" class="name">日记本</a></li>
								<li>
									<!---->
									<!---->
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div class="side-tool">
			<ul>
				<li data-placement="left" data-toggle="tooltip" data-container="body" data-original-title="回到顶部" style="display: none;"><a class="function-button"><i class="iconfont ic-backtop"></i></a></li>
				<!---->
				<!---->
				<!---->
				<!---->
			</ul>
		</div>

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
				"user": {
					"slug": "38d1d73cc871",
					"gender": 1
				},
				"has_collections": false
			}
		</script>

		<script src="//cdn2.jianshu.io/assets/babel-polyfill-e27dec85eeb94683dfc7.js" crossorigin="anonymous"></script>
		<script src="//cdn2.jianshu.io/assets/web-base-4ed4f922087f35afce0d.js" crossorigin="anonymous"></script>
		<script src="//cdn2.jianshu.io/assets/web-e4526c5005c3f248fe3a.js" crossorigin="anonymous"></script>

		<script src="//cdn2.jianshu.io/assets/web/pages/users/show/entry-8b407974edc172eaf86c.js" crossorigin="anonymous"></script>
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
		<!---->
		<!---->
		<a id="ext_btt" href="#"><img src="chrome-extension://alpoeaffjpfnidlkiidponkainlnfhnl/images/icon.png"></a>
	</body>

</html>