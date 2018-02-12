<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no">

		<!-- Start of Baidu Transcode -->
		<meta http-equiv="Cache-Control" content="no-siteapp">
		<meta http-equiv="Cache-Control" content="no-transform">
		<meta name="applicable-device" content="pc,mobile">
		<meta name="MobileOptimized" content="width">
		<meta name="HandheldFriendly" content="true">
		<meta name="mobile-agent" content="format=html5;url=http://localhost/">
		<!-- End of Baidu Transcode -->

		<meta name="description" content="简书是一个优质的创作社区，在这里，你可以任性地创作，一篇短文、一张照片、一首诗、一幅画……我们相信，每个人都是生活中的艺术家，有着无穷的创造力。">
		<meta name="keywords" content="简书,简书官网,图文编辑软件,简书下载,图文创作,创作软件,原创社区,小说,散文,写作,阅读">

		<meta name="360-site-verification" content="604a14b53c6b871206001285921e81d8">
		<meta property="wb:webmaster" content="294ec9de89e7fadb">
		<meta property="qc:admins" content="104102651453316562112116375">
		<meta property="qc:admins" content="11635613706305617">
		<meta property="qc:admins" content="1163561616621163056375">
		<meta name="google-site-verification" content="cV4-qkUJZR6gmFeajx_UyPe47GW9vY6cnCrYtCHYNh4">
		<meta name="google-site-verification" content="HF7lfF8YEGs1qtCE-kPml8Z469e2RHhGajy6JPVy5XI">
		<meta http-equiv="mobile-agent" content="format=html5; url=http://localhost/">

		<!-- Apple -->
		<meta name="apple-mobile-web-app-title" content="简书">

		<title>简书 - 创作你的创作</title>

		<meta name="csrf-param" content="authenticity_token">
		<meta name="csrf-token" content="A2JadXBiNt1KyiYibJTVhHIRFo6hYAU9VRArRD63zTUgH5zK91QWg7tl1n2LIp2asXgH3O21O0+nOklulLS7AQ==">

		<link rel="stylesheet" media="all" href="../css/web-bd0e74f69439789d683b.css">
		<link rel="stylesheet"  media="all" href="../css/entry-ba1cb344060057304085.css" />

		<link href="//cdn2.jianshu.io/assets/favicons/favicon-e743bfb1821442341c3ab15bdbe804f7ad97676bd07a770ccc9483473aa76f06.ico" rel="shortcut icon" type="image/x-icon">
		<link rel="apple-touch-icon-precomposed" href="//cdn2.jianshu.io/assets/apple-touch-icons/57-a6f1f1ee62ace44f6dc2f6a08575abd3c3b163288881c78dd8d75247682a4b27.png" sizes="57x57">
		<link rel="apple-touch-icon-precomposed" href="//cdn2.jianshu.io/assets/apple-touch-icons/72-fb9834bcfce738fd7b9c5e31363e79443e09a81a8e931170b58bc815387c1562.png" sizes="72x72">
		<link rel="apple-touch-icon-precomposed" href="//cdn2.jianshu.io/assets/apple-touch-icons/76-49d88e539ff2489475d603994988d871219141ecaa0b1a7a9a1914f4fe3182d6.png" sizes="76x76">
		<link rel="apple-touch-icon-precomposed" href="//cdn2.jianshu.io/assets/apple-touch-icons/114-24252fe693524ed3a9d0905e49bff3cbd0228f25a320aa09053c2ebb4955de97.png" sizes="114x114">
		<link rel="apple-touch-icon-precomposed" href="//cdn2.jianshu.io/assets/apple-touch-icons/120-1bb7371f5e87f93ce780a5f1a05ff1b176828ee0d1d130e768575918a2e05834.png" sizes="120x120">
		<link rel="apple-touch-icon-precomposed" href="//cdn2.jianshu.io/assets/apple-touch-icons/152-bf209460fc1c17bfd3e2b84c8e758bc11ca3e570fd411c3bbd84149b97453b99.png" sizes="152x152">

		<!-- Start of 访问统计 -->
		
		<script src="https://zz.bdstatic.com/linksubmit/push.js""></script>
		<script src="../js/hm.js"></script>
		<script>
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "//hm.baidu.com/hm.js?0c0e9d9b1e7d617b3e6842e85b9fb068";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
		</script>

		<!-- End of 访问统计 -->
		<style type="text/css">
			@charset "UTF-8";
			/*
 * 变量
*/
			
			.user-follow-button-recommend {
				float: right;
				margin-top: 5px;
				padding: 0;
				background-color: transparent !important;
				border-width: 0 !important;
			}
			
			.user-follow-button-recommend i,
			.user-follow-button-recommend span {
				font-size: 12px !important;
			}
			
			.user-follow-button-recommend span {
				margin-left: 0 !important;
			}
			
			.user-follow-button-recommend.normal i,
			.user-follow-button-recommend.normal span {
				color: #42C02E !important;
			}
			
			.user-follow-button-recommend.toggle i,
			.user-follow-button-recommend.toggle span {
				color: #969696 !important;
			}
		</style>
	</head>

	<body lang="zh-CN" class="reader-black-font">
		<!-- 全局顶部导航栏 -->
		<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
			<div class="width-limit">
				<!-- 左上方 Logo -->
				<a class="logo" href="/"><img src="//cdn2.jianshu.io/assets/web/nav-logo-4c7bbafe27adc892f3046e6978459bac.png" alt="Nav logo"></a>

				<!-- 右上角 -->
				<!-- 未登录显示登录/注册/写文章 -->
				<a class="btn write-btn" target="_blank" href="/writer#/">
					<i class="iconfont ic-write"></i>写文章
				</a>
				<a class="btn sign-up" href="/sign_up">注册</a>
				<a class="btn log-in" href="/sign_in">登录</a>

				<!-- 如果用户登录，显示下拉菜单 -->

				<div class="style-mode">
					<a class="style-mode-btn"><i class="iconfont ic-navigation-mode"></i></a>
					<div class="popover-modal" style="left: 0px; display: none;">
						<div class="meta"><i class="iconfont ic-navigation-night"></i><span>夜间模式</span></div>
						<div class="switch day-night-group">
							<a class="switch-btn">开</a>
							<a class="switch-btn active">关</a>
						</div>
						<hr>
						
						<div class="switch font-family-group">
							<a class="switch-btn font-song">宋体</a>
							<a class="switch-btn font-hei active">黑体</a>
						</div>
						<div class="switch">
							<a class="switch-btn active">简</a>
							<a class="switch-btn">繁</a>
						</div>
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
							<li class="tab active">
								<a href="/">
									<span class="menu-text">首页</span><i class="iconfont ic-navigation-discover menu-icon"></i>
								</a>
							</li>
							<li class="tab ">
								<a id="web-nav-app-download-btn" class="app-download-btn" href="/apps?utm_medium=desktop&amp;utm_source=navbar-apps"><span class="menu-text">下载App</span><i class="iconfont ic-navigation-download menu-icon"></i></a>
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

		<div class="container index">
			<div class="row">
				<div class="col-xs-16 main">
					<!-- Banner -->
					<div id="indexCarousel" class="carousel slide">
						<div class="carousel-inner">
							<div class="item active">
								<div class="banner" data-banner-name="简书会员">
									<a target="_blank" href="https://www.jianshu.com/club?utm_medium=index-banner&amp;utm_source=desktop"><img src="//upload.jianshu.io/admin_banners/web_images/4158/37789f77043e154c7cc58c07546b95e5dd040fa8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"></a>
								</div>
							</div>
						</div>
					</div>

					<div class="recommend-collection">
						<a class="collection" target="_blank" href="/c/yD9GAd?utm_medium=index-collections&amp;utm_source=desktop">
							<img src="//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
							<div class="name">读书</div>
						</a>
						<a class="collection" target="_blank" href="/c/fcd7a62be697?utm_medium=index-collections&amp;utm_source=desktop">
							<img src="//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
							<div class="name">故事</div>
						</a>
						<a class="collection" target="_blank" href="/c/5AUzod?utm_medium=index-collections&amp;utm_source=desktop">
							<img src="//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
							<div class="name">旅行·在路上</div>
						</a>
						<a class="collection" target="_blank" href="/c/20f7f4031550?utm_medium=index-collections&amp;utm_source=desktop">
							<img src="//upload.jianshu.io/collections/images/261938/man-hands-reading-boy-large.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
							<div class="name">社会热点</div>
						</a>
						<a class="collection" target="_blank" href="/c/e7d2d4045b36?utm_medium=index-collections&amp;utm_source=desktop">
							<img src="//upload.jianshu.io/collections/images/75/22.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
							<div class="name">历史</div>
						</a>
						<a class="collection" target="_blank" href="/c/7b2be866f564?utm_medium=index-collections&amp;utm_source=desktop">
							<img src="//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
							<div class="name">摄影</div>
						</a>
						<a class="collection" target="_blank" href="/c/1hjajt?utm_medium=index-collections&amp;utm_source=desktop">
							<img src="//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
							<div class="name">简书电影</div>
						</a>
						<a class="more-hot-collection" target="_blank" href="/recommendations/collections?utm_medium=index-collections&amp;utm_source=desktop">
							更多热门专题 <i class="iconfont ic-link"></i>
						</a>
					</div>
					<div class="split-line"></div>
					<div id="list-container">
						<!-- 文章列表模块 -->
						<ul class="note-list" infinite-scroll-url="/">

							<li id="note-23903712" data-note-id="23903712" class="have-img">
								<a class="wrap-img" href="/p/0507781bd684" target="_blank">
									<img class="  img-blur-done" src="//upload-images.jianshu.io/upload_images/9308342-62d800ccbbb65e47.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/7b834ba8c35a">
											<img src="//upload.jianshu.io/users/upload_avatars/9308342/a340eb05-b912-470b-8516-e1b611aa75b9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/7b834ba8c35a">一只西城</a>
											<a target="_blank" href="http://www.jianshu.com/p/d1d89ed69098">
												<img width="30" height="30" class="badge-icon" data-toggle="tooltip" title="" src="//upload.jianshu.io/user_badge/94d76265-aab1-4559-8d12-1da9f6be21ce" alt="94d76265 aab1 4559 8d12 1da9f6be21ce" data-original-title="简书观察优秀作者">
											</a> <span class="time" data-shared-at="2018-02-12T08:27:14+08:00">3小时前</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/0507781bd684">浅层次阅读，正在毁掉会思考的你</a>
									<p class="abstract">
										01 目前网络上受欢迎的文章多数是鸡汤故事文，真正有深度的文字很少。这与大量“作家”涌进写作圈有关，也离不开读者的“支持”。 近年来，大家都想做“斜杠青年”，想拓宽自己人生的...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/yD9GAd">读书</a>
										<a target="_blank" href="/p/0507781bd684">
											<i class="iconfont ic-list-read"></i> 4140
										</a>
										<a target="_blank" href="/p/0507781bd684#comments">
											<i class="iconfont ic-list-comments"></i> 297
										</a> <span><i class="iconfont ic-list-like"></i> 309</span>
										<span><i class="iconfont ic-list-money"></i> 2</span>
									</div>
								</div>
							</li>

							<li id="note-23898438" data-note-id="23898438" class="have-img">
								<a class="wrap-img" href="/p/ba3e791abbcf" target="_blank">
									<img class="  img-blur-done" src="//upload-images.jianshu.io/upload_images/9265940-cb1341d68ad90ca3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/e30bf6f80676">
											<img src="//upload.jianshu.io/users/upload_avatars/9265940/6cf771e3-afad-41eb-8e7c-89ad0c259e26.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/e30bf6f80676">简麟媛</a>
											<span class="time" data-shared-at="2018-02-11T22:19:41+08:00">昨天 22:19</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/ba3e791abbcf">回家过年倒计时……</a>
									<p class="abstract">
										本来，我没那么心急回家的，款没收到，账没结清，应该很淡定很淡定地，等待再等待。往年二十八九、甚至年三十才到家也是有的。 可是，老妈打电话催了，妹妹打电话问了，儿子已从成都到重...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/e13b31f2bfdf">乡愁</a>
										<a target="_blank" href="/p/ba3e791abbcf">
											<i class="iconfont ic-list-read"></i> 837
										</a>
										<a target="_blank" href="/p/ba3e791abbcf#comments">
											<i class="iconfont ic-list-comments"></i> 53
										</a> <span><i class="iconfont ic-list-like"></i> 85</span>
										<span><i class="iconfont ic-list-money"></i> 1</span>
									</div>
								</div>
							</li>

							<li id="note-23880000" data-note-id="23880000" class="have-img">
								<a class="wrap-img" href="/p/534512b2c8b9" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/10088519-da41c53e621a965f.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/10088519-da41c53e621a965f.JPG?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/fc8e74e1b53e">
											<img src="//upload.jianshu.io/users/upload_avatars/10088519/5fa6d5d2-35ed-4a50-a4d6-15720e08dc0e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/fc8e74e1b53e">老虎的甫</a>
											<span class="time" data-shared-at="2018-02-11T13:18:59+08:00">昨天 13:18</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/534512b2c8b9">鄂南著名村级市——堰市</a>
									<p class="abstract">
										赵本山有一句口头禅：去一趟大城市铁岭！在他早年流窜乡间演二人转的那些年月，铁岭就是他心中的圣城。 我小时候也有一个向往的城市，那就是堰市。我在这里上学，在这里玩耍，在这里看戏...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/RfYyQj">散文随笔</a>
										<a target="_blank" href="/p/534512b2c8b9">
											<i class="iconfont ic-list-read"></i> 1890
										</a>
										<a target="_blank" href="/p/534512b2c8b9#comments">
											<i class="iconfont ic-list-comments"></i> 6
										</a> <span><i class="iconfont ic-list-like"></i> 11</span>
										<span><i class="iconfont ic-list-money"></i> 18</span>
									</div>
								</div>
							</li>

							<li id="note-23853261" data-note-id="23853261" class="have-img">
								<a class="wrap-img" href="/p/e9886b936c9f" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/3847228-7e854be268d02d40.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/3847228-7e854be268d02d40.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/2eb0d251f1e5">
											<img src="//upload.jianshu.io/users/upload_avatars/3847228/b655fc21-1c4a-4a44-8423-57f71a60cb39.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/2eb0d251f1e5">斌之志</a>
											<span class="time" data-shared-at="2018-02-10T19:05:38+08:00">前天 19:05</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/e9886b936c9f">七古.七首诗词連登首页之感悟</a>
									<p class="abstract">
										（感触赋） 文／菊 【原创】 丁酉岁尽览群芳， 纳词静诗眠墨光； 瑾檀佳纱女才俊， 珠布罗张众魁强。 词林诗海精华赋， 春华秋实益得彰； 温故知新识广愽， 盛世同歌再续章。 ...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/f50a66731a6d">人间烟雨</a>
										<a target="_blank" href="/p/e9886b936c9f">
											<i class="iconfont ic-list-read"></i> 87
										</a>
										<a target="_blank" href="/p/e9886b936c9f#comments">
											<i class="iconfont ic-list-comments"></i> 12
										</a> <span><i class="iconfont ic-list-like"></i> 26</span>
									</div>
								</div>
							</li>

							<li id="note-23909825" data-note-id="23909825" class="have-img">
								<a class="wrap-img" href="/p/154e2f74e774" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/5894132-1a9504a1c047034f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/5894132-1a9504a1c047034f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/8b0e08790d6d">
											<img src="//upload.jianshu.io/users/upload_avatars/5894132/aa669a6b-b5c7-4f0f-95d0-6fd9435850df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/8b0e08790d6d">青色百合99</a>
											<a target="_blank" href="http://www.jianshu.com/p/d1d89ed69098">
												<img width="30" height="30" class="badge-icon" data-toggle="tooltip" title="" src="//upload.jianshu.io/user_badge/7d53be0d-1506-471a-ac9e-8a36b5a894c0" alt="7d53be0d 1506 471a ac9e 8a36b5a894c0" data-original-title="简书连载小说优秀作者">
											</a> <span class="time" data-shared-at="2018-02-12T10:35:04+08:00">1小时前</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/154e2f74e774">[古耽]男儿到死心如铁（62）</a>
									<p class="abstract">
										目录|第六十一章 趋虎吞狼 第六十二章 雁宿雄关 塞外的春天总是特别短，宛如一现的昙花。 枝头的新芽刚染绿了斑驳的老城墙，转眼就烈日当头，直接跳进了夏天。 狄声小院外的篱笆墙...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/xYuZYD">连载小说</a>
										<a target="_blank" href="/p/154e2f74e774">
											<i class="iconfont ic-list-read"></i> 41
										</a>
										<a target="_blank" href="/p/154e2f74e774#comments">
											<i class="iconfont ic-list-comments"></i> 10
										</a> <span><i class="iconfont ic-list-like"></i> 15</span>
									</div>
								</div>
							</li>

							<li id="note-23908622" data-note-id="23908622" class="have-img">
								<a class="wrap-img" href="/p/91f11fb4735c" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/6766793-882065979924022b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/6766793-882065979924022b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/3c1c79ba19f3">
											<img src="//upload.jianshu.io/users/upload_avatars/6766793/27aca693-9774-409b-a067-ee9f26b207cb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/3c1c79ba19f3">我是晓敏</a>
											<a target="_blank" href="http://www.jianshu.com/p/9539105676ce">
												<img width="30" height="30" class="badge-icon" data-toggle="tooltip" title="" src="//cdn2.jianshu.io/assets/badges/verified_account-6ea2051ef5e5f656a6a05abf073c6ab2cfe00258052f160aa2f2b86ff0a216c3.png" alt="Verified account" data-original-title="简书伯乐">
											</a> <span class="time" data-shared-at="2018-02-12T09:17:35+08:00">2小时前</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/91f11fb4735c">把人得罪光之后，日子好过多了</a>
									<p class="abstract">
										主人公：远房表妹事 件：蜕变之后是温暖的自由 01 我和老公在川西某山区工作过一段时间，同去的还有他的三个同学以及家属。因为那里生活条件很差，我们都把孩子留给父母。 下班后...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/fcd7a62be697">故事</a>
										<a target="_blank" href="/p/91f11fb4735c">
											<i class="iconfont ic-list-read"></i> 582
										</a>
										<a target="_blank" href="/p/91f11fb4735c#comments">
											<i class="iconfont ic-list-comments"></i> 36
										</a> <span><i class="iconfont ic-list-like"></i> 41</span>
									</div>
								</div>
							</li>

							<li id="note-23637569" data-note-id="23637569" class="">
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/370b36bd34b3">
											<img src="//upload.jianshu.io/users/upload_avatars/7922535/11ff2e34-9e20-46db-b85e-d689b4c1c0d1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/370b36bd34b3">不俗小七</a>
											<a target="_blank" href="https://www.jianshu.com/club?default=niandu">
												<img width="30" height="30" class="badge-icon" data-toggle="tooltip" title="" src="//upload.jianshu.io/user_badge/22d8d123-271c-4d80-9c59-6990844a9e37" alt="22d8d123 271c 4d80 9c59 6990844a9e37" data-original-title="简书会员">
											</a> <span class="time" data-shared-at="2018-02-06T20:50:50+08:00">02.06 20:50</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/e28993bf395c">[短篇] 《星空穿越者》</a>
									<p class="abstract">
										1. 2050年，国际空间站。 “张海，有些情况你来看一下。”正在执行任务的成天军说。 “怎么了？”张海放下手中的文件问。 “咱们的船舱脱离了空间站。...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/dqfRwQ">短篇小说</a>
										<a target="_blank" href="/p/e28993bf395c">
											<i class="iconfont ic-list-read"></i> 522
										</a>
										<a target="_blank" href="/p/e28993bf395c#comments">
											<i class="iconfont ic-list-comments"></i> 69
										</a> <span><i class="iconfont ic-list-like"></i> 80</span>
										<span><i class="iconfont ic-list-money"></i> 2</span>
									</div>
								</div>
							</li>

							<li id="note-23815040" data-note-id="23815040" class="">
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/f70db2d1a1f4">
											<img src="//upload.jianshu.io/users/upload_avatars/4155179/d68e4975c4cf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/f70db2d1a1f4">静铃音</a>
											<a target="_blank" href="http://www.jianshu.com/p/9539105676ce">
												<img width="30" height="30" class="badge-icon" data-toggle="tooltip" title="" src="//cdn2.jianshu.io/assets/badges/verified_account-6ea2051ef5e5f656a6a05abf073c6ab2cfe00258052f160aa2f2b86ff0a216c3.png" alt="Verified account" data-original-title="简书伯乐">
											</a> <span class="time" data-shared-at="2018-02-12T09:48:31+08:00">2小时前</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/bfd089af0215">真像</a>
									<p class="abstract">
										我喜欢你就如我喜欢一个恰当的距离轻云浅雾里隔着一层纱帐遥望不太远的远方 别告诉我圆月、蓝月、血月的形成原因理揭去了相的神秘浪漫是否会被混为自欺我宁可相信嫦娥飞升的神话不是吗那...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/29f6fd8fce5d">简云间</a>
										<a target="_blank" href="/p/bfd089af0215">
											<i class="iconfont ic-list-read"></i> 128
										</a>
										<a target="_blank" href="/p/bfd089af0215#comments">
											<i class="iconfont ic-list-comments"></i> 26
										</a> <span><i class="iconfont ic-list-like"></i> 34</span>
									</div>
								</div>
							</li>

							<li id="note-23844280" data-note-id="23844280" class="have-img">
								<a class="wrap-img" href="/p/0f81502c21a4" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/9577587-0071593fe4223e85.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/9577587-0071593fe4223e85.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/d97fb1f4ca29">
											<img src="//upload.jianshu.io/users/upload_avatars/9577587/ae7e77d6-ea4e-40f7-8285-29888375e6f2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/d97fb1f4ca29">焱玖</a>
											<span class="time" data-shared-at="2018-02-12T09:16:51+08:00">3小时前</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/0f81502c21a4">诡说</a>
									<p class="abstract">
										星星没有了尾巴 思念长出了枝桠 落叶都回不了家 人们都变成娃娃 石头开出海棠花 雾也长出牙齿啊 远方在梦里变哑 他一直在笑哈哈
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/c49f14a01a84">简诗集</a>
										<a target="_blank" href="/p/0f81502c21a4">
											<i class="iconfont ic-list-read"></i> 140
										</a>
										<a target="_blank" href="/p/0f81502c21a4#comments">
											<i class="iconfont ic-list-comments"></i> 16
										</a> <span><i class="iconfont ic-list-like"></i> 52</span>
									</div>
								</div>
							</li>

							<li id="note-23564716" data-note-id="23564716" class="have-img">
								<a class="wrap-img" href="/p/97695b2f451e" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/10145471-b8ac2e984b30c27a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/10145471-b8ac2e984b30c27a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/946d39eb19ba">
											<img src="//upload.jianshu.io/users/upload_avatars/10145471/cd0fdde6-ab34-4447-b624-104a11469fbc.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/946d39eb19ba">金麟圣兽</a>
											<span class="time" data-shared-at="2018-02-06T19:29:44+08:00">02.06 19:29</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/97695b2f451e">【武侠】新七种武器系列《离愁》（3）</a>
									<p class="abstract">
										|目录| 孙大老爷的名号固然响亮，但有人表示不屑。 北城的金刚认为，一个还不太老的人是绝对不应该把自己称为大老爷的，那样就真的喊老了，再说一点也不低调，所以他让所有人都喊他为...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/xYuZYD">连载小说</a>
										<a target="_blank" href="/p/97695b2f451e">
											<i class="iconfont ic-list-read"></i> 275
										</a>
										<a target="_blank" href="/p/97695b2f451e#comments">
											<i class="iconfont ic-list-comments"></i> 3
										</a> <span><i class="iconfont ic-list-like"></i> 34</span>
									</div>
								</div>
							</li>

							<li id="note-23901850" data-note-id="23901850" class="have-img">
								<a class="wrap-img" href="/p/bb75e5ad4428" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/10569203-87af81c80ad15962.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/10569203-87af81c80ad15962.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/c0e42eac8782">
											<img src="//upload.jianshu.io/users/upload_avatars/10569203/c9983075-a24d-4469-85b4-e6b6f022ad5f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/c0e42eac8782">左灯右右右行</a>
											<span class="time" data-shared-at="2018-02-12T06:26:12+08:00">5小时前</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/bb75e5ad4428">【直播】我在精神病院抗抑郁（最新更新）</a>
									<p class="abstract">
										【说在前面】： ❤️请大家夸夸我，这张照片我P了好久的呢❤️ ❤️希望早日恢复当时的健康活力❤️ ❤️如果可以再上一次首页！不恢复也没！关！系！❤️ 【吐槽】 我一定要好好和...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/8fQvXW">心理</a>
										<a target="_blank" href="/p/bb75e5ad4428">
											<i class="iconfont ic-list-read"></i> 121
										</a>
										<a target="_blank" href="/p/bb75e5ad4428#comments">
											<i class="iconfont ic-list-comments"></i> 13
										</a> <span><i class="iconfont ic-list-like"></i> 18</span>
										<span><i class="iconfont ic-list-money"></i> 2</span>
									</div>
								</div>
							</li>

							<li id="note-23641556" data-note-id="23641556" class="have-img">
								<a class="wrap-img" href="/p/1b69a26fa5db" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/2909883-320a4e824933b377.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/2909883-320a4e824933b377.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/d0b7980a1494">
											<img src="//upload.jianshu.io/users/upload_avatars/2909883/d6ad2847-36bb-4112-a517-602753bf2b11.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/d0b7980a1494">兰旭</a>
											<span class="time" data-shared-at="2018-02-05T15:29:15+08:00">02.05 15:29</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/1b69a26fa5db">欠钱的人，又跑了</a>
									<p class="abstract">
										快过年了，讨了两年的三万块钱债，一毛钱都没看见，庞林恨不得活剥了孙轩。 两年前，孙轩办退休，因为养老保险和医疗保险，还有三万块钱未交，社保局不给他办理。情急之下，他找到好朋友...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/2f0905cd646b">心情随笔</a>
										<a target="_blank" href="/p/1b69a26fa5db">
											<i class="iconfont ic-list-read"></i> 1901
										</a>
										<a target="_blank" href="/p/1b69a26fa5db#comments">
											<i class="iconfont ic-list-comments"></i> 210
										</a> <span><i class="iconfont ic-list-like"></i> 234</span>
									</div>
								</div>
							</li>

							<li id="note-23666826" data-note-id="23666826" class="have-img">
								<a class="wrap-img" href="/p/d54f2535dd3b" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/5622904-2a4e413c71e735e1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/5622904-2a4e413c71e735e1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/596ab2098bdb">
											<img src="//upload.jianshu.io/users/upload_avatars/5622904/819c0c96-7e2c-401f-8f07-6217412d7cee.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/596ab2098bdb">彩缤</a>
											<span class="time" data-shared-at="2018-02-06T12:30:42+08:00">02.06 12:30</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/d54f2535dd3b">妹妹，今夜你来到了我梦里</a>
									<p class="abstract">
										2018年2月6 号 星期二 多云 亲爱的妹妹，你有半年没有来到大姐的梦里了。可是今夜，我却在梦中哭醒。因为，你来我的梦中和我相见了： 夏日的阳光火辣辣的。知了不知疲倦...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/71a87e510a58">我们爱写日记</a>
										<a target="_blank" href="/p/d54f2535dd3b">
											<i class="iconfont ic-list-read"></i> 1517
										</a>
										<a target="_blank" href="/p/d54f2535dd3b#comments">
											<i class="iconfont ic-list-comments"></i> 246
										</a> <span><i class="iconfont ic-list-like"></i> 187</span>
									</div>
								</div>
							</li>

							<li id="note-23585793" data-note-id="23585793" class="have-img">
								<a class="wrap-img" href="/p/af0b4b1ca041" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/4307751-6e14eabb18366bfb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/4307751-6e14eabb18366bfb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/2a4c358b7790">
											<img src="//upload.jianshu.io/users/upload_avatars/4307751/37954550329e?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/2a4c358b7790">惊鸿2017</a>
											<span class="time" data-shared-at="2018-02-05T12:49:11+08:00">02.05 12:49</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/af0b4b1ca041">今年过年要抓赌！</a>
									<p class="abstract">
										过年是中国人最惬意的时候，亲人相聚，朋友小酌。然后，三人斗地主，四人打麻将。国粹的魅力，将隐藏在国人骨子里的赌性激发的淋漓尽致。 小赌怡情，不知道是不是圣人的论断。赌博终究是...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/52a1c2e9c1f5">简宝贝</a>
										<a target="_blank" href="/p/af0b4b1ca041">
											<i class="iconfont ic-list-read"></i> 912
										</a>
										<a target="_blank" href="/p/af0b4b1ca041#comments">
											<i class="iconfont ic-list-comments"></i> 32
										</a> <span><i class="iconfont ic-list-like"></i> 55</span>
									</div>
								</div>
							</li>

							<li id="note-23910817" data-note-id="23910817" class="">
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/152e97ef51d9">
											<img src="//upload.jianshu.io/users/upload_avatars/6283965/7dff35f2-a45c-485e-8495-d6977f137bda?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/152e97ef51d9">唐朝李白</a>
											<a target="_blank" href="http://www.jianshu.com/p/d1d89ed69098">
												<img width="30" height="30" class="badge-icon" data-toggle="tooltip" title="" src="//upload.jianshu.io/user_badge/7d53be0d-1506-471a-ac9e-8a36b5a894c0" alt="7d53be0d 1506 471a ac9e 8a36b5a894c0" data-original-title="简书连载小说优秀作者">
											</a> <span class="time" data-shared-at="2018-02-12T10:25:52+08:00">1小时前</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/348e444ce04c">唐朝李白更文请假条</a>
									<p class="abstract">
										自始，最长时日未更文！请稍安勿躁！李白未弃坑，在这新春之际，特此告假！望各位允准！ 因三十年未出辽宁省，初来深圳，见外面精彩风景，早已疯掉！每日吃喝玩乐，上青天揽明月，斗酒诗...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/e7d2d4045b36">历史</a>
										<a target="_blank" href="/p/348e444ce04c">
											<i class="iconfont ic-list-read"></i> 99
										</a>
										<a target="_blank" href="/p/348e444ce04c#comments">
											<i class="iconfont ic-list-comments"></i> 11
										</a> <span><i class="iconfont ic-list-like"></i> 13</span>
									</div>
								</div>
							</li>

							<li id="note-23668871" data-note-id="23668871" class="">
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/26756e90794c">
											<img src="//upload.jianshu.io/users/upload_avatars/9250174/2df85e96-cef0-4c9e-a3de-2f673247be31?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/26756e90794c">拂柳低吟</a>
											<span class="time" data-shared-at="2018-02-06T07:39:23+08:00">02.06 07:39</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/b184dd94e271">没人陪你一辈子，只能一阵子</a>
									<p class="abstract">
										今晚，有点小兴奋。一篇文章《野菜，一段不了情》，在《简书》里首页投稿失败，居然被一位作家朋友喜欢上了，推荐刊登在《同步悦读》微刊。当晚发布朋友圈不到两小时，点击人...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/f5449fca0ab1">散文随笔专题投稿</a>
										<a target="_blank" href="/p/b184dd94e271">
											<i class="iconfont ic-list-read"></i> 1052
										</a>
										<a target="_blank" href="/p/b184dd94e271#comments">
											<i class="iconfont ic-list-comments"></i> 56
										</a> <span><i class="iconfont ic-list-like"></i> 59</span>
									</div>
								</div>
							</li>

							<li id="note-23675368" data-note-id="23675368" class="have-img">
								<a class="wrap-img" href="/p/bfd00936b39f" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/9998609-ba9f7dfa41feb56e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/9998609-ba9f7dfa41feb56e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/aa18a21bd9ef">
											<img src="//upload.jianshu.io/users/upload_avatars/9998609/ff8c5e66-4748-41b7-b202-63a21f95bf68.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/aa18a21bd9ef">白马路人</a>
											<span class="time" data-shared-at="2018-02-06T11:15:37+08:00">02.06 11:15</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/bfd00936b39f">【青春】少年如雪 （5）</a>
									<p class="abstract">
										第五章 一个梦 鲲鹏中学的校历与别处有所不同。这里每月为一周，每周为四个星期，所以一般意义上的星期日，在鲲鹏中学即星期七，而鲲鹏中学的星期日，却是四个星期才出现一次。星期日，...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/xYuZYD">连载小说</a>
										<a target="_blank" href="/p/bfd00936b39f">
											<i class="iconfont ic-list-read"></i> 465
										</a>
										<a target="_blank" href="/p/bfd00936b39f#comments">
											<i class="iconfont ic-list-comments"></i> 17
										</a> <span><i class="iconfont ic-list-like"></i> 87</span>
									</div>
								</div>
							</li>

							<li id="note-23660379" data-note-id="23660379" class="have-img">
								<a class="wrap-img" href="/p/1c5afe686d75" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/788498-752c547daade5343.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/788498-752c547daade5343.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/6f6f18ef43e5">
											<img src="//upload.jianshu.io/users/upload_avatars/788498/5722dfa82a7b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/6f6f18ef43e5">斜杠Allen</a>
											<span class="time" data-shared-at="2018-02-05T22:43:49+08:00">02.05 22:43</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/1c5afe686d75">Android组件化框架设计与实践</a>
									<p class="abstract">
										在目前移动互联网时代，每个 APP 就是流量入口，与过去 PC Web 浏览器时代不同的是，APP 的体验与迭代速度影响着用户的粘性，这同时也对从事移动开发人员提出更高要求，...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/5139d555c94d">Android开发经验谈</a>
										<a target="_blank" href="/p/1c5afe686d75">
											<i class="iconfont ic-list-read"></i> 545
										</a>
										<a target="_blank" href="/p/1c5afe686d75#comments">
											<i class="iconfont ic-list-comments"></i> 0
										</a> <span><i class="iconfont ic-list-like"></i> 34</span>
									</div>
								</div>
							</li>

							<li id="note-23845930" data-note-id="23845930" class="have-img">
								<a class="wrap-img" href="/p/e8c83a6c6a58" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/8778234-23bad7666c0d215c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/8778234-23bad7666c0d215c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/7f7a600b9bcc">
											<img src="//upload.jianshu.io/users/upload_avatars/8778234/22bba996-fc83-4c07-84a4-ca135a0a182b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/7f7a600b9bcc">风雪之人</a>
											<span class="time" data-shared-at="2018-02-12T06:58:24+08:00">5小时前</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/e8c83a6c6a58">老公来做罗宋汤</a>
									<p class="abstract">
										文/风雪之人 《写给女儿的食记》 前几天，老公在飞机上看杂志的时候，被上面的罗宋汤的做法给吸引住了，回家就同我念叨，准备给我们娘仨儿露一手。 这可是绝对新鲜的大事，结婚十年多...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/f6b4ca4bb891">生活家</a>
										<a target="_blank" href="/p/e8c83a6c6a58">
											<i class="iconfont ic-list-read"></i> 1183
										</a>
										<a target="_blank" href="/p/e8c83a6c6a58#comments">
											<i class="iconfont ic-list-comments"></i> 181
										</a> <span><i class="iconfont ic-list-like"></i> 124</span>
										<span><i class="iconfont ic-list-money"></i> 1</span>
									</div>
								</div>
							</li>

							<li id="note-23743629" data-note-id="23743629" class="have-img">
								<a class="wrap-img" href="/p/eaa1e953f8e1" target="_blank">
									<img data-echo="//upload-images.jianshu.io/upload_images/7600041-7f1a7fd5e8aa0f19.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" class="img-blur" src="//upload-images.jianshu.io/upload_images/7600041-7f1a7fd5e8aa0f19.png?imageMogr2/auto-orient/strip|imageView2/1/w/150/h/120" alt="120">
								</a>
								<div class="content">
									<div class="author">
										<a class="avatar" target="_blank" href="/u/1d988488a59e">
											<img src="//upload.jianshu.io/users/upload_avatars/7600041/d5acaa09-7a78-4694-b86c-728ce7fdfbb6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
										</a>
										<div class="info">
											<a class="nickname" target="_blank" href="/u/1d988488a59e">深海梦影</a>
											<span class="time" data-shared-at="2018-02-12T08:43:16+08:00">3小时前</span>
										</div>
									</div>
									<a class="title" target="_blank" href="/p/eaa1e953f8e1">闺女，妈这辈子对不起你</a>
									<p class="abstract">
										2018年2月12日 星期一 晴有风 文|深海梦影 -1- 冬夜，街角。 秀兰瘫坐着，头发堆在脑后，乱作一团，干如枯草。双眼凹陷，目光呆滞，无神。 身上的白衫已变成青灰色，有...
									</p>
									<div class="meta">

										<a class="collection-tag" target="_blank" href="/c/dqfRwQ">短篇小说</a>
										<a target="_blank" href="/p/eaa1e953f8e1">
											<i class="iconfont ic-list-read"></i> 366
										</a>
										<a target="_blank" href="/p/eaa1e953f8e1#comments">
											<i class="iconfont ic-list-comments"></i> 42
										</a> <span><i class="iconfont ic-list-like"></i> 37</span>
									</div>
								</div>
							</li>

						</ul>
						<!-- 文章列表模块 -->
					</div>
				</div>
				<div class="col-xs-7 col-xs-offset-1 aside">
					<div class="board">
						<a target="_blank" href="/recommendations/notes?category_id=56&amp;utm_medium=index-banner-s&amp;utm_source=desktop">
							<img src="//cdn2.jianshu.io/assets/web/banner-s-1-b8ff9ec59f72ea88ecc8c42956f41f78.png" alt="Banner s 1">
						</a>
						<a target="_blank" href="/trending/weekly?utm_medium=index-banner-s&amp;utm_source=desktop"><img src="//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png" alt="Banner s 3"></a>
						<a target="_blank" href="/trending/monthly?utm_medium=index-banner-s&amp;utm_source=desktop"><img src="//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png" alt="Banner s 4"></a>
						<a utm_medium="index-banner-s" target="_blank" href="/publications"><img src="//cdn2.jianshu.io/assets/web/banner-s-5-291e00e9156f30791fe24e3de9c39171.png" alt="Banner s 5"></a>
						<a target="_blank" href="/c/e048f1a72e3d?utm_medium=index-banner-s&amp;utm_source=desktop"><img src="//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s 6"></a>
					</div>

					<!-- 首页右侧 App 下载提示 -->
					<a id="index-aside-download-qrbox" class="col-xs-8 download" data-toggle="popover" data-placement="top" data-html="true" data-trigger="hover" data-content="<img src=&quot;//cdn2.jianshu.io/assets/web/download-index-side-qrcode-0a0cf38b7413c60bb8d2627fd9eebd00.png&quot; alt=&quot;Download index side qrcode&quot; />" href="/apps?utm_medium=desktop&amp;utm_source=index-aside-click" data-original-title="" title="">
						<img class="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-0a0cf38b7413c60bb8d2627fd9eebd00.png" alt="Download index side qrcode">
						<div class="info">
							<div class="title">下载简书手机App<i class="iconfont ic-link"></i></div>
							<div class="description">随时随地发现和创作内容</div>
						</div>
					</a>
					<!-- 推荐作者 -->
					<div class="recommended-authors">
						<div class="title"><span>推荐作者</span>
							<a class="page-change"><i class="iconfont ic-search-change" style="transform: rotate(0deg);"></i> 换一批
							</a>
						</div>
						<ul class="list">
							<li>
								<a href="/u/e0ef486d9b90?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/9153226/374267c9-3a5b-4c18-aac4-16ade85284a1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
								<a class="follow" state="0"><i class="iconfont ic-follow"></i>关注
								</a>
								<a href="/u/e0ef486d9b90?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="name">
									寻麦
								</a>
								<p>
									写了94.2k字 · 1k喜欢
								</p>
							</li>
							<li>
								<a href="/u/78f970537a5e?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
								<a class="follow" state="0"><i class="iconfont ic-follow"></i>关注
								</a>
								<a href="/u/78f970537a5e?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="name">
									名贵的考拉熊
								</a>
								<p>
									写了165.6k字 · 12.4k喜欢
								</p>
							</li>
							<li>
								<a href="/u/55b597320c4e?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/1835526/6ac158c7-6af2-415a-886e-2868dd256783.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
								<a class="follow" state="0"><i class="iconfont ic-follow"></i>关注
								</a>
								<a href="/u/55b597320c4e?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="name">
									简书出版
								</a>
								<p>
									写了315.2k字 · 24k喜欢
								</p>
							</li>
							<li>
								<a href="/u/c5580cc1c3f4?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
								<a class="follow" state="0"><i class="iconfont ic-follow"></i>关注
								</a>
								<a href="/u/c5580cc1c3f4?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="name">
									简书大学堂
								</a>
								<p>
									写了94.6k字 · 8k喜欢
								</p>
							</li>
							<li>
								<a href="/u/74307f7c1d61?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/2149802/12963fbfaebc.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"></a>
								<a class="follow" state="0"><i class="iconfont ic-follow"></i>关注
								</a>
								<a href="/u/74307f7c1d61?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="name">
									雪花如糖
								</a>
								<p>
									写了229.5k字 · 6.2k喜欢
								</p>
							</li>
						</ul>
						<a href="/recommendations/users?utm_source=desktop&amp;utm_medium=index-users" target="_blank" class="find-more">
							查看全部<i class="iconfont ic-link"></i></a>
					</div>
				</div>
			</div>
		</div>
		<div class="side-tool">
			<ul>
				<li data-placement="left" data-toggle="tooltip" data-container="body" data-original-title="回到顶部" style="display: none;">
					<a class="function-button"><i class="iconfont ic-backtop"></i></a>
				</li>
				<!---->
				<!---->
				<!---->
				<!---->
			</ul>
		</div>
		<footer class="container">
			<div class="row">
				<div class="col-xs-17 main">

					<a target="_blank" href="http://www.jianshu.com/c/jppzD2">关于简书</a><em> · </em>
					<a target="_blank" href="http://www.jianshu.com/contact">联系我们</a><em> · </em>
					<a target="_blank" href="http://www.jianshu.com/c/bfeec2e13990">加入我们</a><em> · </em>
					<a target="_blank" href="http://www.jianshu.com/p/fc1c113e5b6b">简书出版</a><em> · </em>
					<a target="_blank" href="http://www.jianshu.com/press">品牌与徽标</a><em> · </em>
					<a target="_blank" href="http://www.jianshu.com/faqs">帮助中心</a><em> · </em>
					<a target="_blank" href="http://www.jianshu.com/p/cabc8fa39830">合作伙伴</a>
					<div class="icp">
						©2012-2018 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
						<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">
							<img src="//cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png" alt="Smrz">
						</a>
						<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">沪公网安备31010402002252号 / </a>
						<a target="_blank" href="http://www.shjbzx.cn/">
							<img src="//cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png" alt="Wxb">
						</a> 举报电话：021-34770013 /
						<a target="_blank" href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020171107081457000002158769-SAIC_SHOW_310000-20171115131223587837&amp;signData=MEQCIADWZ5aTcBeER5SOVp0ly+ElvKnwtjczum6Gi6wZ7/wWAiB9MAPM22hp947ZaBobux5PDkd0lfqoCOkVV7zjCYME6g==">
							<img src="//cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png" alt="Zggsrz">
						</a>
					</div>
				</div>
			</div>
		</footer>

		<script type="application/json" data-name="page-data">
			{
				"user_signed_in": false,
				"locale": "zh-CN",
				"os": "other",
				"read_mode": "day",
				"read_font": "font2"
			}
		</script>

		<script src="../js/babel-polyfill-2bec152a537b07763933.js" crossorigin="anonymous"></script>
		<script src="../js/web-base-ed770420ca0c5f76c537.js" crossorigin="anonymous"></script>
		<script src="../js/web-856c8f1fd655561c9616.js" crossorigin="anonymous"></script>
		<script src="../js/entry-bfaaf9eafdddc46e794e.js" crossorigin="anonymous"></script>
		<script>
			(function() {
				var bp = document.createElement('script');
				var curProtocol = window.location.protocol.split(':')[0];
				if(curProtocol === 'https') {
					bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
				} else {
					bp.src = 'http://push.zhanzhang.baidu.com/push.js';
				}
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(bp, s);
			})();
		</script>

	</body>

</html>