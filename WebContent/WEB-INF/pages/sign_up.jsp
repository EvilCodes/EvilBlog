<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0,user-scalable=no">

<!-- Start of Baidu Transcode -->
<meta http-equiv="Cache-Control" content="no-siteapp" />
<meta http-equiv="Cache-Control" content="no-transform" />
<meta name="applicable-device" content="pc,mobile">
<meta name="MobileOptimized" content="width" />
<meta name="HandheldFriendly" content="true" />
<meta name="mobile-agent"
	content="format=html5;url=http://www.jianshu.com/sign_up">
<!-- End of Baidu Transcode -->

<meta name="description" content="加入简书，开启你的创作之路，来这里接收世界的赞赏。">

<meta name="360-site-verification"
	content="604a14b53c6b871206001285921e81d8" />
<meta property="wb:webmaster" content="294ec9de89e7fadb" />
<meta property="qc:admins" content="104102651453316562112116375" />
<meta property="qc:admins" content="11635613706305617" />
<meta property="qc:admins" content="1163561616621163056375" />
<meta name="google-site-verification"
	content="cV4-qkUJZR6gmFeajx_UyPe47GW9vY6cnCrYtCHYNh4" />
<meta name="google-site-verification"
	content="HF7lfF8YEGs1qtCE-kPml8Z469e2RHhGajy6JPVy5XI" />
<meta http-equiv="mobile-agent"
	content="format=html5; url=http://www.jianshu.com/sign_up">

<!-- Apple -->
<meta name="apple-mobile-web-app-title" content="简书">

<title>注册 - 简书</title>

<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token"
	content="Pl5qcopxRpiWc4XGX2W5azMoGvrZoCzeYfxlDZgsYNKW4vPaWWjemN6BCDF3Tzdl7zLDztPW9H8Z6Wb4ur/PcA==" />

<link rel="stylesheet" media="all"
	href="../css/web-217d166d73e7682f5e81.css" />

<link rel="stylesheet" media="all"
	href="../css/entry-27463f2882f8ebd9e811.css" />

<link
	href="//cdn2.jianshu.io/assets/favicons/favicon-03411b154a430b85d807b4366489c21122fb983a38f3d7ca926f882e6367b13e.ico"
	rel="icon">
<link rel="apple-touch-icon-precomposed"
	href="//cdn2.jianshu.io/assets/apple-touch-icons/57-a6f1f1ee62ace44f6dc2f6a08575abd3c3b163288881c78dd8d75247682a4b27.png"
	sizes="57x57" />
<link rel="apple-touch-icon-precomposed"
	href="//cdn2.jianshu.io/assets/apple-touch-icons/72-fb9834bcfce738fd7b9c5e31363e79443e09a81a8e931170b58bc815387c1562.png"
	sizes="72x72" />
<link rel="apple-touch-icon-precomposed"
	href="//cdn2.jianshu.io/assets/apple-touch-icons/76-49d88e539ff2489475d603994988d871219141ecaa0b1a7a9a1914f4fe3182d6.png"
	sizes="76x76" />
<link rel="apple-touch-icon-precomposed"
	href="//cdn2.jianshu.io/assets/apple-touch-icons/114-24252fe693524ed3a9d0905e49bff3cbd0228f25a320aa09053c2ebb4955de97.png"
	sizes="114x114" />
<link rel="apple-touch-icon-precomposed"
	href="//cdn2.jianshu.io/assets/apple-touch-icons/120-1bb7371f5e87f93ce780a5f1a05ff1b176828ee0d1d130e768575918a2e05834.png"
	sizes="120x120" />
<link rel="apple-touch-icon-precomposed"
	href="//cdn2.jianshu.io/assets/apple-touch-icons/152-bf209460fc1c17bfd3e2b84c8e758bc11ca3e570fd411c3bbd84149b97453b99.png"
	sizes="152x152" />

<!-- Start of 访问统计 -->
<script type="text/javascript" src="../js/gt.js"></script>
<script type="text/javascript" src="../js/jquery.min.js"></script>
<script>
	(function(i, s, o, g, r, a, m) {
		i['GoogleAnalyticsObject'] = r;
		i[r] = i[r] || function() {
			(i[r].q = i[r].q || []).push(arguments)
		}, i[r].l = 1 * new Date();
		a = s.createElement(o), m = s.getElementsByTagName(o)[0];
		a.async = 1;
		a.src = g;
		m.parentNode.insertBefore(a, m)
	})(window, document, 'script',
			'https://www.google-analytics.com/analytics.js', 'ga');

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


<script>
var handler = function (captchaObj) {
    captchaObj.onReady(function () {
        $("#wait").hide();
    }).onSuccess(function () {
        var result = captchaObj.getValidate();
        if (!result) {
            return alert('请完成验证');
        }
        $.ajax({
            url: '../gt/validate-click',
            type: 'POST',
            dataType: 'json',
            data: {
                recognizenum: $('#user_mobile_number').val(),
                geetest_challenge: result.geetest_challenge,
                geetest_validate: result.geetest_validate,
                geetest_seccode: result.geetest_seccode
            },
            success: function (data) {
                if (data.resultCode === 808) {
                    setTimeout(function () {
                        alert('号码格式不对请重新输入');
                    }, 1500);
                } else if (data.resultCode === 809) {
                    setTimeout(function () {
                        alert('该号码已经注册请直接登录');
                        captchaObj.reset();
                    }, 1500);
                }
            }
        });
    });
    //弹出geetest验证框的相应事件
    $('#msg_btn').click(function () {
        captchaObj.verify();
    })
    // 更多前端接口说明请参见：http://docs.geetest.com/install/client/web-front/
};

$.ajax({
    url: "../gt/register-click?t=" + (new Date()).getTime(), // 加随机数防止缓存
    type: "get",
    dataType: "json",
    success: function (data) {

        // 调用 initGeetest 进行初始化
        // 参数1：配置参数
        // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口
        console.log("進入方法");
        initGeetest({
            // 以下 4 个配置参数为必须，不能缺少
            gt: data.gt,
            challenge: data.challenge,
            offline: !data.success, // 表示用户后台检测极验服务器是否宕机
            new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
            timeout: '5000',
            product: "bind", // 产品形式，包括：float，popup
            width: "300px"
            // 更多前端配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
        }, handler);
    }
});
</script>


<!-- End of 访问统计 -->
</head>

<body class="no-padding reader-black-font" lang="zh-CN">





	<div class="sign">
		<div class="logo">
			<a href="/"><img src="../img/logo.png" alt="Logo" /></a>
		</div>
		<div class="main">

			<h4 class="title">
				<div class="normal-title">
					<a class="" href="sign_in">登录</a> <b>·</b> <a id="js-sign-up-btn"
						class="active" href="sign_up">注册</a>
				</div>
			</h4>
			<div class="js-sign-up-container">
				<form class="new_user" id="new_user" action="./register.do"
					accept-charset="UTF-8" method="post">
					<input name="utf8" type="hidden" value="&#x2713;" /><input
						type="hidden" name="authenticity_token"
						value="lAKXAT5Dk4FCz+eEfOPg3bNOqstDE8+4B3ladQTbEs48vg6p7VoLgQo9anNUyW7Tb1Rz/0llFxl/bFmAJki9bA==" />
					<div class="input-prepend restyle">
						<input placeholder="你的昵称" type="text" value=""
							name="nickname" id="user_nickname" /> <i
							class="iconfont ic-user"></i>
					</div>
					<div class="input-prepend restyle no-radius js-normal">
						<input type="hidden" value="CN"
							name="user[mobile_number_country_code]"
							id="user_mobile_number_country_code" /> <input placeholder="手机号"
							type="tel" name="phonenum" id="user_mobile_number" />
						<i class="iconfont ic-phonenumber"></i>
					</div>
					<input type="hidden" name="oversea" id="oversea" value="false" />
					<input type="hidden" name="force_user_nonexist"
						id="force_user_nonexist" value="true" />
					<div
						class="input-prepend restyle no-radius security-up-code js-security-number ">
						<input type="text" name="sms_code" id="sms_code"
							placeholder="手机验证码" /> <i class="iconfont ic-verify"></i>

						</script>
						<!-- <a tabindex="-1" class="btn-up-resend js-send-code-button disable" href="">发送验证码</a> -->
						<a class="btn-up-resend " id="msg_btn">发送验证码</a>
						<div class="js-geetest-captcha"></div>
					</div>
					<input type="hidden" name="security_number" id="security_number" />
					<div class="input-prepend">
						<input placeholder="设置密码" type="password" name="pwd"
							id="user_password" /> <i class="iconfont ic-password"></i>
					</div>
					<input type="submit" name="commit" value="注册"
						class="sign-up-button" data-disable-with="注册" />
					<p class="sign-up-msg">
						点击 “注册” 即表示您同意并愿意遵守简书<br> <a target="_blank"
							href="http://www.jianshu.com/p/c44d171298ce">用户协议</a> 和 <a
							target="_blank" href="http://www.jianshu.com/p/2ov8x3">隐私政策</a> 。
					</p>
				</form>
				<!-- 更多注册方式 -->
				<div class="more-sign">
					<h6>社交帐号直接注册</h6>
					<ul>
						<li><a class="weibo" target="_blank" href="/users/auth/weibo"><i
								class="iconfont ic-weibo"></i></a></li>
						<li><a class="weixin" target="_blank"
							href="/users/auth/wechat"><i class="iconfont ic-wechat"></i></a>
						</li>
						<li><a class="qq" target="_blank"
							href="/users/auth/qq_connect"><i
								class="iconfont ic-qq_connect"></i></a></li>
					</ul>

				</div>
			</div>

		</div>
	</div>

	<!-- Javascripts
  ================================================== -->
	<!-- Placed at the end of the document so the pages load faster -->
	<script type="application/json" data-name="page-data">
			{
				"user_signed_in": false,
				"locale": "zh-CN",
				"os": "windows",
				"read_mode": "day",
				"read_font": "font2"
			}
		</script>

	<script src="../js/web-base-154e1141eb6cf42dfc9f.js"
		crossorigin="anonymous"></script>
	<script src="../js/web-46216b5f6f8c10b2bb3b.js"></script>
	<script src="../js/entry-32c68755c11ed0e7f8b6.js"
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

</body>

</html>