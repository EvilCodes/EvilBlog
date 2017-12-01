<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body lang="zh-CN" class="reader-black-font"
	style="overflow-y: scroll; background-color: rgb(204, 232, 207);">
	<!-- 全局顶部导航栏 -->
	<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	<div class="width-limit">
		<!-- 左上方 Logo -->
		<a class="logo" href="/"><img
			src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"
			alt="Logo"></a>

		<!-- 右上角 -->
		<!-- 登录显示写文章 -->
		<a class="btn write-btn" target="_blank" href="/writer#/"> <i
			class="iconfont ic-write"></i>写文章
		</a>
		<!-- 如果用户登录，显示下拉菜单 -->
		<div class="user">
			<div data-hover="dropdown">
				<a class="avatar" href="/u/38d1d73cc871"><img
					src="//upload.jianshu.io/users/upload_avatars/2800016/0e8475d0-227d-4a7f-97e5-c828816f55da.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120"
					alt="120"></a>
			</div>
			<ul class="dropdown-menu">
				<li><a href="/u/38d1d73cc871"> <i
						class="iconfont ic-navigation-profile"></i><span>我的主页</span>
				</a></li>
				<li>
					<!-- TODO bookmarks_path --> <a href="/bookmarks"> <i
						class="iconfont ic-navigation-mark"></i><span>收藏的文章</span>
				</a>
				</li>
				<li><a href="/users/38d1d73cc871/liked_notes"> <i
						class="iconfont ic-navigation-like"></i><span>喜欢的文章</span>
				</a></li>
				<li><a href="/wallet"> <i
						class="iconfont ic-navigation-wallet"></i><span>我的钱包</span>
				</a></li>
				<li><a href="/settings"> <i
						class="iconfont ic-navigation-settings"></i><span>设置</span>
				</a></li>
				<li><a href="/faqs"> <i
						class="iconfont ic-navigation-feedback"></i><span>帮助与反馈</span>
				</a></li>
				<li><a rel="nofollow" data-method="delete" href="/sign_out">
						<i class="iconfont ic-navigation-signout"></i><span>退出</span>
				</a></li>
			</ul>
		</div>

		<div class="style-mode">
			<a class="style-mode-btn"><i class="iconfont ic-navigation-mode"></i></a>
			<div class="popover-modal" style="left: 0px; display: none;">
				<div class="meta">
					<i class="iconfont ic-navigation-night"></i><span>夜间模式</span>
				</div>
				<div class="switch day-night-group">
					<a class="switch-btn">开</a> <a class="switch-btn active">关</a>
				</div>
				<hr>
				<div class="switch font-family-group">
					<a class="switch-btn font-song">宋体</a> <a
						class="switch-btn font-hei active">黑体</a>
				</div>
				<div class="switch">
					<a class="switch-btn active">简</a> <a class="switch-btn">繁</a>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed"
					data-toggle="collapse" data-target="#menu" aria-expanded="false">
					<span class="icon-bar"></span> <span class="icon-bar"></span> <span
						class="icon-bar"></span>
				</button>
			</div>
			<div class="collapse navbar-collapse" id="menu">
				<ul class="nav navbar-nav">
					<li class="tab "><a href="/"> <span class="menu-text">发现</span><i
							class="iconfont ic-navigation-discover menu-icon"></i>
					</a></li>
					<li class="tab "><a href="/subscriptions"> <span
							class="menu-text">关注</span><i
							class="iconfont ic-navigation-follow menu-icon"></i>
					</a></li>
					<li class="tab notification"><a data-hover="dropdown"
						href="/notifications" class="notification-btn"><span
							class="menu-text">消息</span> <i
							class="iconfont ic-navigation-notification menu-icon"></i> <!---->
							<!----></a>
						<ul class="dropdown-menu">
							<li><a href="/notifications#/comments"><i
									class="iconfont ic-comments"></i> <span>评论</span> <!----></a></li>
							<li><a href="/notifications#/chats"><i
									class="iconfont ic-chats"></i> <span>简信</span> <!----></a></li>
							<li><a href="/notifications#/requests"><i
									class="iconfont ic-requests"></i> <span>投稿请求</span> <!----></a></li>
							<li><a href="/notifications#/likes"><i
									class="iconfont ic-likes"></i> <span>喜欢和赞</span> <!----></a></li>
							<li><a href="/notifications#/follows"><i
									class="iconfont ic-follows"></i> <span>关注</span> <!----></a></li>
							<li><a href="/notifications#/money"><i
									class="iconfont ic-money"></i> <span>赞赏</span> <!----></a></li>
							<li><a href="/notifications#/others"><i
									class="iconfont ic-others"></i> <span>其他消息</span> <!----></a></li>
						</ul></li>
					<li class="search">
						<form target="_blank" action="/search" accept-charset="UTF-8"
							method="get">
							<input name="utf8" type="hidden" value="✓"> <input
								type="text" name="q" id="q" value="" autocomplete="off"
								placeholder="搜索" class="search-input"> <a
								class="search-btn" href="javascript:void(null)"><i
								class="iconfont ic-search"></i></a>
						</form>
					</li>
				</ul>
			</div>
		</div>
	</div>
	</nav>



	<div class="container setting">
		<div class="row">
			<div class="aside">
				<ul>
					<li class="router-link-exact-active active"><a
						href="/settings/basic"><div class="setting-icon">
								<i class="iconfont ic-settings-basic"></i>
							</div> <span>基础设置</span> <!----></a></li>
					<li class=""><a href="/settings/profile">
							<div class="setting-icon">
								<i class="iconfont ic-settings-profile"></i>
							</div> <span>个人资料</span> <!---->
					</a></li>
					<li class=""><a href="/settings/weibo-auth"><div
								class="setting-icon">
								<i class="iconfont ic-settings-verify"></i>
							</div> <span>微博认证</span> <!----></a></li>
					<li class=""><a href="/settings/blacklist"><div
								class="setting-icon">
								<i class="iconfont ic-settings-block"></i>
							</div> <span>黑名单</span> <!----></a></li>
					<li class=""><a href="/settings/reward-setting"><div
								class="setting-icon">
								<i class="iconfont ic-settings-money"></i>
							</div> <span>赞赏设置</span> <!----></a></li>
					<li class=""><a href="/settings/misc"><div
								class="setting-icon">
								<i class="iconfont ic-settings-account"></i>
							</div> <span>帐号管理</span> <!----></a></li>
				</ul>
			</div>
			<div class="col-xs-16 col-xs-offset-8 main">
				<table>
					<thead>
						<tr>
							<th class="setting-head responsive-head"></th>
							<th></th>
						</tr>
					</thead>
					<tbody class="base">
						<tr>
							<td class="top-line"><div class="avatar">
									<img
										src="//upload.jianshu.io/users/upload_avatars/2800016/0e8475d0-227d-4a7f-97e5-c828816f55da.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300">
								</div></td>
							<td class="top-line"><a class="btn btn-hollow"><input
									unselectable="on" type="file" class="hide"> 更改头像 </a></td>
						</tr>
						<tr>
							<td class="setting-title">昵称</td>
							<td><input type="text" placeholder="请输入昵称"></td>
						</tr>
						<tr>
							<td class="setting-title">电子邮件</td>
							<td class="setted"><div>hu******ao@126.com</div> <i
								class="iconfont ic-collections-followed"></i> <span>已验证</span> <a
								class="cancel-bind">解除绑定</a></td>
						</tr>
						<tr>
							<td class="setting-title">手机</td>
							<td class="setted"><div>170****3090</div> <i
								class="iconfont ic-collections-followed"></i> <span>已验证</span> <a
								class="cancel-bind">解除绑定</a></td>
						</tr>
						<tr>
							<td class="setting-title setting-editor">常用编辑器</td>
							<td><div class="col-xs-8">
									<input type="radio" value="plain"> <span>富文本</span>
								</div>
								<div class="col-xs-16">
									<input type="radio" value="markdown"> <span>Markdown
										<a href="/p/q81RER" target="_blank" class="help"><i
											class="iconfont ic-navigation-help"></i></a>
									</span>
								</div>
								<p>切换后对新建文章生效</p></td>
						</tr>
						<tr>
							<td class="setting-title setting-verticle">语言设置</td>
							<td><div class="col-xs-8">
									<input type="radio" value="zh-CN"> <span>中文简体</span>
								</div>
								<div class="col-xs-16">
									<input type="radio" value="zh-TW"> <span>中文繁体</span>
								</div></td>
						</tr>
						<tr>
							<td class="setting-title setting-verticle">接收谁的简信</td>
							<td><div class="col-xs-8">
									<input type="radio" value="true"> <span
										class="responsive-span">所有人</span>
								</div>
								<div class="col-xs-16">
									<input type="radio" value="false"> <span
										class="responsive-span">我关注的人、我发过简信的人</span>
								</div></td>
						</tr>
						<tr>
							<td class="setting-title setting-verticle">提醒邮件通知</td>
							<td><div class="col-xs-8">
									<input type="radio" value="instantly"> <span
										class="responsive-span">所有动态</span>
								</div>
								<div class="col-xs-11">
									<input type="radio" value="later"> <span
										class="responsive-span">每天未读汇总</span>
								</div>
								<div class="col-xs-5">
									<input type="radio" value="none"> <span
										class="responsive-span">不接收</span>
								</div></td>
						</tr>
					</tbody>
				</table>
				<input type="submit" class="btn btn-success setting-save" value="保存">
				<!---->
				<!---->
			</div>
		</div>
	</div>

	<script type="application/json" data-name="page-data">{"user_signed_in":true,"locale":"zh-CN","os":"windows","read_mode":"day","read_font":"font2","current_user":{"id":2800016,"nickname":"Vampire丶黑狐","slug":"38d1d73cc871","avatar":"http://upload.jianshu.io/users/upload_avatars/2800016/0e8475d0-227d-4a7f-97e5-c828816f55da.png","unread_counts":{"chats":0,"total":0}}}</script>

	<script
		src="//cdn2.jianshu.io/assets/babel-polyfill-676833c6a4d68573b4c3.js"
		crossorigin="anonymous"></script>
	<script src="//cdn2.jianshu.io/assets/web-base-154e1141eb6cf42dfc9f.js"
		crossorigin="anonymous"></script>
	<script src="//cdn2.jianshu.io/assets/web-46216b5f6f8c10b2bb3b.js"
		crossorigin="anonymous"></script>
	<script
		src="//cdn2.jianshu.io/assets/jquery-fileupload-47da855b792df3557fc4bdc2a14b12a0231a70235c19b63abb4e6205cafe3c9f.js"
		crossorigin="anonymous"></script>

	<script
		src="//cdn2.jianshu.io/assets/web/pages/settings/index/entry-df7bbdc54f38eae49006.js"
		crossorigin="anonymous"></script>
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
	<a id="ext_btt" href="#"><img
		src="chrome-extension://alpoeaffjpfnidlkiidponkainlnfhnl/images/icon.png"></a>
</body>
</html>