<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<html style="" class=" js flexbox flexboxlegacy canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths">

	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<meta name="description" content="最好的写作和阅读平台">
		<meta name="google-site-verification" content="HF7lfF8YEGs1qtCE-kPml8Z469e2RHhGajy6JPVy5XI">
		<meta property="wb:webmaster" content="294ec9de89e7fadb">
		<meta property="qc:admins" content="104102651453316562112116375">
		<meta property="qc:admins" content="11635613706305617">
		<meta http-equiv="mobile-agent" content="format=html5; url=http://www.jianshu.com/writer">

		<title>写文章 - 简书</title>
		<meta name="csrf-param" content="authenticity_token">
		<meta name="csrf-token" content="f2dRO+dmrgoARthQdc4O8O8zSy8/VLNb0ywRd5cN0QRykKzNXX7otxps4b62/wBNBI/9y9U6oE3y+cKqv2DR8Q==">
		<!--[if lte IE 8]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
		<link rel="stylesheet" media="all" href="css/base-93775aafb70d63b34b9288e349280ff6c5a20ddc8116ee86acad61b355671d9b.css">
		<link rel="stylesheet" media="all" href="css/writer-a7180b7bd6e447de10dc3ca7695a875c1ae61d28e6f4115444966b0b4dbd136d.css">
		<link rel="stylesheet" media="all" href="css/base-read-mode-41a590ef17260069e8061430a5ca47f5d2db1d1341cfb50a2fb4d87715f10154.css">
		<script type="text/javascript" defer="" async="" src="js/uaest.js"></script>
		<script src="js/push.js"></script>
		<script src="js/hm.js"></script>
		<script async="" src="js/analytics.js"></script>
		<script src="js/modernizr-94b704f0d3e168197e76d8a6338b96afff42f73cd8102f390041a338dbb3b524.js"></script>
		<!-- Le HTML5 shim, for IE6-8 support of HTML elements -->
		<!--[if IE 8]><link rel="stylesheet" media="all" href="//cdn2.jianshu.io/assets/scaffolding/for_ie-406331578823ae7444ca4a9b8673cad0ee7f3e44624f82ccc4114d61029a643f.css" /><![endif]-->
		<!--[if lt IE 9]><link rel="stylesheet" media="all" href="//cdn2.jianshu.io/assets/scaffolding/for_ie-406331578823ae7444ca4a9b8673cad0ee7f3e44624f82ccc4114d61029a643f.css" /><![endif]-->
		<link href="//cdn2.jianshu.io/assets/favicons/favicon-03411b154a430b85d807b4366489c21122fb983a38f3d7ca926f882e6367b13e.ico" rel="icon">
		<link rel="apple-touch-icon-precomposed" href="//cdn2.jianshu.io/icon114.png">
		<meta id="current_user_slug" value="38d1d73cc871">

		<!-- Start of 访问统计 -->
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

		<!-- End of 访问统计 -->
		<style type="text/css">
			.dante-editor-container {
				position: relative;
				box-sizing: border-box;
			}
			/*
.dragging-over{
  border: red 2px dashed;
}
*/
			/*
* 在有子元素的元素dragenter，会存在多次触发的情况
* 但这不是最好的解决方案
* https://stackoverflow.com/questions/10867506/dragleave-of-parent-element-fires-when-dragging-over-children-elements
*/
			
			.dragging-over * {
				pointer-events: none;
			}
			
			.dante-editor {
				overflow-y: auto;
				overflow-x: hidden;
				margin: 0;
				outline: 0;
				padding: 40px 40px 0px;
				font-family: -apple-system, "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
				color: rgb(47, 47, 47);
				font-size: 16px;
				font-weight: normal;
				line-height: 1.7;
			}
			
			.dante-editor h1,
			.dante-editor h2,
			.dante-editor h3,
			.dante-editor h4,
			.dante-editor h5,
			.dante-editor h6 {
				line-height: 1.7;
				text-rendering: optimizeLegibility;
				margin: 0px 0px 15px;
			}
			
			.dante-editor a {
				color: #3194d0;
				text-decoration: none;
			}
			
			.dante-editor hr {
				margin: 0 -10px 20px;
				border-top: 1px solid #d9d9d9;
			}
			
			.dante-editor p {
				padding: 0;
				margin: 0 0 25px 0;
				text-align: left;
				font-size: 16px;
				font-weight: normal;
				line-height: 1.7;
			}
			
			.dante-editor>blockquote p:last-child {
				margin-bottom: 0;
			}
			
			.dante-editor>blockquote {
				padding: 20px;
				margin: 0 0 25px 0;
				background-color: whitesmoke;
				border-left: 6px solid #b4b4b4;
				word-break: break-word;
				font-size: 16px;
				font-weight: normal;
				line-height: 30px;
			}
			
			.dante-editor .image-package {
				text-align: center;
				position: relative;
				margin: 0 -40px 20px;
			}
			
			.dante-editor .image-package img {
				max-width: 100%;
			}
			
			.dante-editor .image-package .image-caption {
				min-width: 20%;
				max-width: 80%;
				min-height: 22px;
				display: inline-block;
				padding: 10px;
				margin: 0 auto;
				border: 0;
				outline: 0;
				border-bottom: 1px solid #d9d9d9;
				font-size: 13px;
				color: #999999;
				line-height: 1.7;
				text-align: center;
			}
			/*img loding style begin*/
			
			.img-uploading-status img {
				display: none;
			}
			
			.img-uploading-status .image-caption {
				display: none !important;
			}
			
			.image-package .image-upload-status-panel {
				display: none;
				width: 420px;
				padding: 5px 16px 5px 5px;
				margin: 0 auto;
				border: 1px solid #d9d9d9;
				overflow: hidden;
				font-size: 14px;
			}
			
			.image-package .image-upload-status-panel .preview {
				display: block;
				float: left;
				width: 90px;
				height: 90px;
				margin-right: 20px;
				background: #eee;
			}
			
			.image-package .image-upload-status-panel .status-bar {
				display: block;
				float: right;
				width: 305px;
			}
			
			.image-package .image-upload-status-panel .status-bar .uploading-icon {
				height: 3px;
				width: 305px;
				min-height: 3px;
				display: block;
				margin: 25px 0 20px 0;
				background: url('data:image/gif;base64,R0lGODlhMgEDAMQfACV79DaH+avH8bDK9rDJ7ajI8qvI7q3K8a/M92Oc7ih776/K9KrL9KbH8KbK8jV/7i9+7xhw8bjT+ICw8pLF+sHW9a3H8ajH8azJ8LPL9q3L9rPL7zB/8SV89zSH/f///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2QTdFQzI3OUUyMUQxMUU2OEVGMUVFRTY0NzY1NUJEMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2QTdFQzI3QUUyMUQxMUU2OEVGMUVFRTY0NzY1NUJEMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZBN0VDMjc3RTIxRDExRTY4RUYxRUVFNjQ3NjU1QkQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZBN0VDMjc4RTIxRDExRTY4RUYxRUVFNjQ3NjU1QkQzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQMAHwAsAAAAADIBAwAABZ6gJYyjZZ5oqq5s676wKlx0bZOzre987//AoNBXKBYaSKSxmGwsj8nLszmNLptOY66Gu+G2l6+XZKDhGoMBYo3IuN3puDwjr9vv+Lx+j6dr/oCBgoOEhYaHiImKi4FsCIKOj4CRkI6NlpdrlZGcnZ6fnH+OBQSlpqeoqaqrrK2ur7AYsrO0tba3uLm6u7y9vr/AwcAHwsIHxBilBwsNIQAh+QQFAwAfACwGAAAABQACAAAFBqAgikhZhgAh+QQFAwAfACwAAAAAAwADAAAFB+AkfeIgbiEAIfkEBQMAHwAsAAAAACsBAwAABUFg1wHAGCUZYXxs676tIM9wbd94ru987//AoHBILLIEgWTAE4CgNoQgYoowWq/YrHbL7e4gjzD48fSaz+i0ep0OAQAh+QQFAwAfACwEAAAAngADAAAFOuD3AV1pmlEiCWzrinAsz3Rt33iu77ztCiKPcEgETCoLjXLJZPae0Kh0+uR8INhslqNIVKjgsHgMDgEAIfkEBQMAHwAsBAAAAB8AAwAABSbg93ViaXZoqnbRU2xm4Jn059147nXBl5WLR80EKRqPEI7iIYCVQgAh+QQFAwAfACwEAAAAKAADAAAFJGAHAF1pnmiqolGQEYEnz3Rt33eXZBnHQcCgcEgsDjmKwGYTAgAh+QQFAwAfACwBAAAAOQADAAAFJ2DXASQgnmiqrmx7RolkBV5t33iu77zeJZUMZEgsGo/IpBLJgVUIIQAh+QQFAwAfACwGAAAA1QADAAAFR2D3jWRpnmiqjl3rvrDSVKsp3HWukze+/8Bg8EK8CC7CZM3DbDqfj9lit6hqlNisdqtDeLlcjnhMJneitOBhdWivwfC4nBQCACH5BAUDAB8ALAkAAABSAAMAAAUv4CeOZGmeaKqWXeu+sNJIRV2seK6rXu//wMdMQ/xwdiLOEcksKZ/QKAcglByumBAAIfkEBQMAHwAsUwAAABMAAwAABRVgJ45kCUBN5q1s63pBI3F0bd/AI4cAIfkEBQMAHwAsBgAAANMAAwAABUIgIIpfaZ7nCKBs675wLH9dbd949BDa7P/AoPAkKA5NgaNy2fI4n1BoJ7FBMK/YLAoShHC14BlnTC6bAY9qeM2GhQAAIfkEBQMAHwAsHQAAAO0AAwAABUYg8I1kaZ5oqq5sa3ZwLM9RUl2Xq++8m/e+j2Ao+AGPyKTS5Gk6n9DOpLKsWq9YFmfLyXqV3LCYW6N+z6iD+oD+rNXH9yEEACH5BAUDAB8ALBwAAADSAAMAAAU+4CeOZGmeaKqubJt2cCzL0dNkbq7v/Hp5vaBwuPMYj0hkJ1CQEJ/QqHRKVXGu2CwWAngYNtUnZozpHc5nVQgAIfkEBQMAHwAsAAAAAMkAAwAABUXgVgTR13Vfqq5sqwKwK890bd94Pp987wMKiuRy0RlbGUQAdWw6n9AozkOtWq+PhkSqy2wcAQB3TC6bU5y0es0GZLdnWggAIfkEBQMAHwAsAAAAAPIAAwAABW+gJYpEEURfqq5sC6hvK69AXc94ru9877edoHA4jDwMiF+uwWwof4LVYDrIZBCJzvMT2LYC4K53TC7vPOi0Ot0JGCTmz+JAX8RnmoV+Qej3NxQnYxCEEHeHiIk7HIyNjo4ARxl3IxZbGJiYOQycDCEAIfkEBQMAHwAsBAAAACsBAwAABXXgJ1gkKU0R8K1s67bdK890bd94ru955/9AYCQhMTQaNGTrwry4mpfCssmrWq+rwSDD5Z442LAnTC6bq560er3uJCqbwyI3n2m157zeRSBsNn4VEwo7HIZge4mKiziHjo+GQxUfJDQWNAeZBy+anZqMOJ5WnSEAIfkEBQMAHwAsBwAAAN0AAwAABXDgJ35WaUpJ9AEsML6iC8803N51/rZ67//AoHDUKRqPxsjjcxg1ntCodAp9Za6ZQQYlCwRenqF4TC6bz0GPes1edwKHzGtBr9vveDqB8CFs/oAoKjkQhRBoiImKi2Qcjo+QjwAPBhs1GJgYM5maIxghACH5BAUDAB8ALAcAAAAoAQMAAAVQ4CeOpGUaaDVFZOu+cCzPdG3feK67Xe//PsDjg9gZj8hb5pNpbg4blSJJrVqvWJ1ny+12Hw1JdjzemDeu81naIbvf8HiLQ6/b6wqwWM6vmUMAIfkEBQMAHwAsFAAAAB0BAwAABXCgJY5jRn2foqBs674sAAMybKP1l9987//AoFDYKRqPxsjDgBg6f4Vo9PnKWK9XyYkTCFC/4LB4TA56zuj0uRM4SDRlqmZ+cGZQzddmz9emxhCBgoJUg3GHiIkfHIyNjo0ADwQbHxiKTpZCmR8HdQchACH5BAUDAB8ALB0AAAAQAQMAAAVyoCWOljRFgKIq3we8LtzOdG3feK7vfO//wGCwQywai5GEBHMp0JyzglRaE1ittKtAaDNYM+BwpjJhBc47j5rLbrvf8DhPTa/XO0qEvqbpaxA9C3I4GhuGhxsmETocjRyDkJGSk3GOlpccSRIHnHCcnZIhACH5BAUDAB8ALCQAAADvAAMAAAVjoCUKRWFIU/StwOq+cCzPdG3feK7vfL93wKAwqKBIZqWkclnIOBHQDAriq1qv2Kx2W/N4v+DvoyE5uDTotHqt3rg3BDdK4YLY73eufs/v+z8cgYKDgQoPRisHZi4YGDCNji8hACH5BAUDAB8ALCcAAADiAAMAAAVT4CeMgmWe0qR8bOu+sAsAcc3Odq7vfO//wKCvQywaiZFE5TNoNjPQqITy4Aiv2Kx2y+36POCwGAyYVA6fDWvDbm+mH4XVS6/b73gfZ8/v85MVGCEAIfkEBQMAHwAsJwAAAAgBAwAABWGgJYpfaY6o4CSR6b4uUAIyDNNzbe8f7fM+HG9ILBqPyKTy1Wk6n81IQnJYwjCYjFYL23oHjInCSi6bz+i0muxpu9/tzhSxHm7u+PuqhYT4IX1/dYOEhYZEHImKi4kKU2shACH5BAUDAB8ALDkAAADyAAMAAAVaoCWOYzVFQKqmX+u+sNvFdN12OG7vfO//wKBw+MsZj5HAxmITZJ5QqGlGrFqv2Kx2i/V4v2BvJyHJ1BCLz2bNXpsAkLg8zg1C6vi8ft+CPB4QHIKDghFkBDshACH5BAUDAB8ALEIAAADrAAMAAAVSoCWOY5VEX/oBLKCmLfvOdA23dq7vfO//wKBQ2Ckaj8VIovLJOJ/PyqQzrFqv2Kx2y/V4v2BvZznYmM9nKSoFabtf7jZ3Tq/b75w8x6bv+5VMIQAh+QQFAwAfACxLAAAA5wADAAAFQqAljqNEddGnrmzrvnAsz3Rt33iu73vn/75IZkgkViifDm/JbDqf0OjSQ61SO5usVnvkKF4BjnRMLpvPOY56rY6EAAAh+QQFAwAfACxUAAAAeQADAAAFNaAljuRGddGnrmzrAm4sz3Rt3yug71nv/xLHp4MrGo/I5CrADHw20Ki04ggoOEoVZJvteoshACH5BAUDAB8ALAEAAACJAAMAAAU+4Cd+1mieaKqubOu+VizPVtY8EaDv/Pt1QGBmOPQZj8ikishkShiBjrK1qVan2Kz2Y+12JZiHAkIumyGvcwgAIfkEBQMAHwAsAQAAABEBAwAABVegIIpfaZ5oqq5s66Ij+bZWbdvCdWXXE5mAoHBILAZnyKRyyWy+hM6odIaoIqafjHa7HVQlmkAHSy6bz1iCmoBuu1mbuHwelxweChNkz+ej+oAQb4OEZiEAIfkEBQMAHwAsAgAAAJIAAwAABTZgIX5kaZ5oqq5s676wac10bVuZEETw4MfAoJCFGL4yyKRymZEgEhyjdEqtDjfYrHb7UERbjxAAIfkEBQMAHwAsAQAAABIBAwAABUvgJ36FMJ5oqq5s66pFXLx03Vp4ru/VFNnAD2BIDBqPyBZgBBiMnMmoVKWZWjPYrHbbe1hXgXDgSy6bz+i0ccNuu9s9hXpOT0LukBAAIfkEBQMAHwAskQAAACQAAwAABSOgJY5kaUlJBKxf675vJs90nVUJEOxw3waboHBI3OAivmQrBAAh+QQFAwAfACw2AAAAfwADAAAFO6AgCl9pnmiqrukosrBLwjRs3XieC0UhJRGEsEYsooRDo2nAZCqVmah0ShVWJoqndsvt1jbgsHgMvipCACH5BAUDAB8ALDUAAACUAAMAAAU3oPCNZGmeaKqOxeq+cAxbdG3fuDQpcu+Pg+DgRyzGMsikcrmsTB4fj3FKrVpXm6x2y9U6FZBPCAAh+QQFAwAfACwAAAAAJgEDAAAFY6ACKZP0nWiqrmzrpkVcvHRNy/Yqz3nv/yqLcEgsDjOCAADIbOYAUGgg8ChlnNgUArXNAgeIcPcnHnvPvox6zW6vJYgEB00HTqcfyKNqqvv/gB8Eg4GFKBuIiYqLiw8KhpAsIQAh+QQFAwAfACwAAAAAIgEDAAAFdSCkfEppnmh6Bs72vXAszy/zCnSuC3zv/z2dcEgsGo9Io6DAbDqfTckkkqxWO6+AdsvtermPhM0KGxw0GrIMwW673261fE6fIz7wvLsyGdX/Hx4PLw+FhoeIiQ8chQl3cwcHBICURy6VmJQbm5ydnpt8fplqIQAh+QQFAwAfACwZAAAACQEDAAAFdOAnKmRpnmgZBdTxWWIsz3Rc3Hiu63Xv/8CgcEgsGnWOpHKprEwiH4BRBKhar1hRYMvter9dTsAhGWSmMgR6zW67326EfE6vz50dOPAhevj/gIGCfwoPAxt6aAcLLmsLj4mRkmwblZaXmJZOUGsQnp+goB8hACH5BAUDAB8ALDQAAADcAAMAAAVboAKMZGmepEJJgvC9cCzPr0vfeK7vfO//wJ1jSCwahxrDIxL4eJ6eAHRKrT5Wg6B2y+16v16EeEwuiyWEQOfBgXDa77h8Llc8GhKwfs/v+2cbgYKDhIESGw8AIQAh+QQFAwAfACw1AAAA6wADAAAFZ6Aiil9pnugJrGzrvmuUSMJnpXiu73zvm4Jg8LcrEI9IlGPJbDodgsqkFKgGkh+PdsvterWciSSTwZrP54F6gG67dYi4fE5HZCqUzmO/T3L+gIGCg396YhtviYqLjIyIG5CRkpN4CiEAIfkEBQMAHwAsYwAAAM4AAwAABVngB4xkaZ5AFDTb9xVwLM9ubd94ru987//AoBA3KxYRhkfk42k6n9Coh5PQSFyIrHbLHXq/4LB4/EEcuOithBD4cN7wuHz+ViQyLbJ+z+/3N4CBgoMbaw8AIQAh+QQFAwAfACx6AAAAuAADAAAFQyAgjmRpAtFUfWzrvnD8CjQt33iu73zvy4UCreEpGo/IpKej+v0GUKhzSq1ae4gsosDper/gMAfQvJrP6LR6syFsGiEAIfkEBQMAHwAskAAAABcAAwAABRYgII5kWUaJ5K1s67rcJHF0bd829MghACH5BAUDAB8ALDoAAACBAAMAAAU04CeOZGmeaKqubOt+QCzP9BwlEvHufO//H49wSCwSObgMZLkEnphNpxTIqVqv2GvngfuEAAAh+QQFAwAfACwAAAAA+AADAAAFSeD0AV9pnmiqrmzrvnAsz3TNAniu73mUSIKgcEgc2lKUh+fIbDqf0KjNQ61arwEq4Ifoer9SVePDCZvP6LSZw267327FT93KhAAAIfkEBQMAHwAsAAAAABcBAwAABV+gII5kaZZVEn1s675wLM90bd94ru/8B/zAoPAXmUg+jqRyyXT0nqyBdLqoVqdS6wIrTQGg4LB4TC67POi0eo1+GDPmOGFOr9vv9tQqzu/7/zocgoOEhRwAbkdjG3wZIQAh+QQFAwAfACwZAAAA/gADAAAFY+AnjGRpnuiILVQQKV8sz3Rt33iu73zv/0AZYEgsGiOBz6FXCOIWUOhgOohKqVUr1prRBDpJp3hMLpvPH496zW6DPxI0kECv2+/4fH3TAsj/gIGCOhyFhoeIHABhORmOGXIbIQAh+QQFAwAfACw4AAAA3wADAAAFXaAgjmRpnmbBTEr7vXAsz3Rt33iu73z/AcCgcKiYSAQ+3GLAZC6ey+YA+pROoVLN6hEIJL/gsHi885jP6PTDmCHHCPC4fE6vzw8IyuPDcfv/gIEvHISFhodrEn8LIQAh+QQFAwAfACxaAAAAxAADAAAFYaBQjGNjNmSqrqkgTdGnKF9t33iu73zv/8BgEEAsGouRhAQj1GmeGoZ0Sq1ar6/OJxBoer/gsHjnKZvPZohSjCAc3m+MfE6v2+uEFwDCH/v/gIAcg4SFhAoJFT4ZNRuMOCEAIfkEBQMAHwAsegAAALIAAwAABVdgIY5kaZ7F4QSRonxwLM90bd94ru874P9AXyQhYdgaOSSMwWw6n9BoZtX5BHjYrHbLnXm+4PD3QezGDpi0es1uuzEbRgDwgZjv+DyPw+/7+QoJFTEbXSEAIfkEBQMAHwAsZQAAALwAAwAABWvgJ45kaZ5oWhZX415FLM/0vFFBpO587/9AEWBILAIiCYlIw9SUms5nU8qkVklQhnbL7Xq3EkegEyybz2aPes32QCaVz2E+L9Hro/vBTuf3SXcYgoOEhYaDGwgBAGiNjo8jHJKTlBwKCXEfIQAh+QQFAwAfACxqAAAAwgADAAAFdGAjfmQpjiV5pt91XuzZsHQq02uh6/K+n74NpRNRKGrIpHLJbCoB0GhUAZlICs6sFqnpdlleDdjLKJvD5rJXQiEFAtu4fE7z2O/3wINSOXwQdIFIB4SELIV+KYgHGI0Yi46NhWwfVBCCmJlIHJydnRB7FSUhACH5BAUDAB8ALFkAAADZAAMAAAVW4CeOZGmeaKqubOuSxdXMdG3PhxNEb+//J4BwKIwENgKgcslskjRQhnRKrTIQiETHyXV6vuBvJ7FZbDbdtLp7YBwW8Lh8ftgwAoq1vvXg+P9+AAkfBCEAIfkEBQMAHwAsxwAAAGsAAwAABT3gJ45kOTZoqq4CsVFPZM50bd/4B+xyTjLAoHC42GwcAY5vyWyKPJ5A57BYLq7YrHZxcFECCqfYqZxxzpEQACH5BAUDAB8ALOgAAAA+AAMAAAUpYCOOZHkJGdVFX+u+cCzPMGPfOK7tEhXQwKBwQSwajYdkL6AQOp+fRwgAIfkEBQMAHwAsAQAAACUBAwAABUzgJ45kaZ5oqq5s675wLM90/TZ4ruvFRnERmwnRIgptRlhShGgen9AoiiGNMa7YrGarYWgklE+nSi5DCQSzes2uLd7w+GFOBwcUUU4IACH5BAUDAB8ALAUBAAAQAAMAAAUYYCGKTdmMgpRESNtqsOYiVdIdeK7ndRQCACH5BAUDAB8ALBEBAAAOAAMAAAUXYFE0ZHOJBSYlEYJoMOy6a3fceE5UbAgAIfkEBQMAHwAsGwEAAA0AAwAABRZgcTVkU5wS9a1a2yJwRXHfYd+3rCghACH5BAUDAB8ALCQBAAALAAMAAAUWYFE0JLlR3YcgWqsxkvN1R20TVfMpIQAh+QQFAwAfACwGAAAALAEDAAAFOeAnjmRpnmiqrmzrvnAsz3Rt3/BV7MV1NYNgEEcsujQIo3LJbDplDCRiOi08r9isdsvtHr7fzeYSAgA7') center center no-repeat;
			}
			
			.image-package .image-upload-status-panel .status-bar .status-area .upload-error-msg {
				color: #ea6f5a;
			}
			
			.image-package .image-upload-status-panel .status-bar .status-area a {
				float: right;
				margin-left: 20px;
				cursor: pointer;
				color: #999999;
			}
			/*img loding style end*/
			
			.dante-editor .video-package {
				position: relative;
				margin: 0 auto 20px;
				text-align: center;
			}
			
			.dante-editor .video-package .video-description {
				display: inline-block;
				min-width: 20%;
				min-height: 22px;
				padding: 10px;
				margin: 0 auto;
				border-bottom: 1px solid #d9d9d9;
				font-size: 13px;
				color: #999999;
				line-height: 1.7;
			}
			/* new img loading style begin*/
			/*

.dante-editor .image-package .img-uploading-error-tip {
  display: none;
  position: absolute;
  color: #EA6F5A;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 16px;
  min-width: 160px;
}

.dante-editor .image-package .img-uploading-error-tip .btn-wrap {
  margin-top: 20px;
}

.dante-editor .image-package .img-uploading-error-tip .comfir-btn {
  margin-left: 20px;
}

.dante-editor .image-package .img-uploading-error-tip button {
  background: #fff;
  margin: 0;
  border: 0;
  cursor: pointer;
  color: #999999;
  border-radius: 2px;
  padding: 5px 10px;
  text-align: center;
}
.dante-editor .img-uploading-status img {
  opacity: 0.4;
}


.dante-editor .sk-circle {
  display: none;
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -20px;
  margin-top: -47px;
}

.dante-editor .sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.dante-editor .sk-circle .sk-child:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #EA6F5A;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}

.dante-editor .sk-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}

.dante-editor .sk-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}

.dante-editor .sk-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}

.dante-editor .sk-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}

.dante-editor .sk-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}

.dante-editor .sk-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.dante-editor .sk-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}

.dante-editor .sk-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}

.dante-editor .sk-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}

.dante-editor .sk-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}

.dante-editor .sk-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}

.dante-editor .sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.dante-editor .sk-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.dante-editor .sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.dante-editor .sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

.dante-editor .sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}

.dante-editor .sk-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}

.dante-editor .sk-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

.dante-editor .sk-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}

.dante-editor .sk-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}

.dante-editor .sk-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}

.dante-editor .sk-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
*/
			/* new img loading style end*/
		</style>
		<style>
			@font-face {
				font-family: uc-nexus-iconfont;
				src: url(chrome-extension://pogijhnlcfmcppgimcaccdkmbedjkmhi/res/font_9qmmi8b8jsxxbt9.woff) format('woff'), url(chrome-extension://pogijhnlcfmcppgimcaccdkmbedjkmhi/res/font_9qmmi8b8jsxxbt9.ttf) format('truetype')
			}
		</style>
	</head>

	<body class="input zh cn win reader-black-font" style="">
		<div class="shutdown"><i class="fa fa-times-circle-o"></i> 停机维护通知，网站将于凌晨0点至09停机维护</div>
		<div id="writer" class="container-fluid" data-writer-version="17">

			<div class="stack expansion">
				<div class="row-fluid normal-mode active">
					<div class="span2 aside" style="height: 794px;">
						<div class="home-wrap"> <a href="/" class="go-home"><i class="fa fa-home" aria-hidden="true"></i><span>回首页</span></a></div>
						<div class="new-notebook">
							<a href="javascript:void(0)" class="create-notebook win-text"> <i class="fa fa-plus"></i> 新建文集 <img src="//cdn2.jianshu.io/assets/loaders/tiny-5bd8bd9f662a10e0e91bd3edf33132b47d0f9cca77d1707f64495bfd16a44110.gif" class="hide loader-tiny create-notebook-loader"> </a>
							<div class="new-notebook-form hide">
								<form class="create-notebook-form"> <input placeholder="请输入文集名..." type="text" name="name" class="input-medium notebook-input"> <a href="javascript:void(0)" class="btn cancel" data-action="cancel-create-notebook"> 取消 </a><input class="btn btn-mainRed submit" name="commit" type="submit"
										value="提交" data-action="submit"> </form>
							</div>
						</div>
						<ul class="nav nav-list notebooks ui-sortable">
							<li class="one-notebook item active" data-model="notebook" data-cid="c-0"> <a href="javascript:void(0)" data-type="active" class="notebook-name"><span>日记本</span></a>
								<a href="javascript:void(0)" data-type="edit" class="edit-notebook dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-gear"></i> </a>
								<ul class="dropdown-menu arrow-top">
									<li>
										<a href="javascript:void(0)" data-action="rename-notebook" data-toggle="modal"> <i class="fa fa-pencil-square-o"></i> 修改文集名 </a>
									</li>
									<li class="divider"></li>
									<li>
										<a href="javascript:void(0)" data-action="delete-notebook"> <i class="fa fa-trash-o"></i> 删除文集 </a>
									</li>
								</ul>
							</li>
							<li class="one-notebook item" data-model="notebook" data-cid="c-1"> <a href="javascript:void(0)" data-type="active" class="notebook-name"><span>随笔</span></a>
								<a href="javascript:void(0)" data-type="edit" class="edit-notebook dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-gear"></i> </a>
								<ul class="dropdown-menu arrow-top">
									<li>
										<a href="javascript:void(0)" data-action="rename-notebook" data-toggle="modal"> <i class="fa fa-pencil-square-o"></i> 修改文集名 </a>
									</li>
									<li class="divider"></li>
									<li>
										<a href="javascript:void(0)" data-action="delete-notebook"> <i class="fa fa-trash-o"></i> 删除文集 </a>
									</li>
								</ul>
							</li>
							<li class="one-notebook item" data-model="notebook" data-cid="c-2"> <a href="javascript:void(0)" data-type="active" class="notebook-name"><span>干货集中营</span></a>
								<a href="javascript:void(0)" data-type="edit" class="edit-notebook dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-gear"></i> </a>
								<ul class="dropdown-menu arrow-top">
									<li>
										<a href="javascript:void(0)" data-action="rename-notebook" data-toggle="modal"> <i class="fa fa-pencil-square-o"></i> 修改文集名 </a>
									</li>
									<li class="divider"></li>
									<li>
										<a href="javascript:void(0)" data-action="delete-notebook"> <i class="fa fa-trash-o"></i> 删除文集 </a>
									</li>
								</ul>
							</li>
						</ul>
						<div class="commercial"> <a class="btn" href="javascript:void(null)" data-action="recycle-mode"><i class="fa fa-trash"></i><span>回收站</span></a></div>
					</div>
					<div class="span3 middle" style="height: 794px;">
						<div id="notes-list">
							<div id="new-note">
								<a href="javascript:void(0)" data-action="create-note" class="new-note-link"> <i class="icon fa fa-plus-circle"></i> <span class="win-text">新建文章 <img src="//cdn2.jianshu.io/assets/loaders/tiny-5bd8bd9f662a10e0e91bd3edf33132b47d0f9cca77d1707f64495bfd16a44110.gif" class="hide cnlt loader-tiny"></span> </a>
							</div>
							<ul class="nav nav-list notes ui-sortable">
								<li class="one-note" data-model="note" data-cid="c-1"> <i class="icon icon-note note-icon shared"></i>
									<p class="abbreviate">
										生命很短暂，上天给予每个人机会，但关键看的还是自己能否把握住。有的人会说我很累我需要发泄一下自己的情绪，也有的人说不放松</p>
									<p class="wordage win-text"></p> <a href="javascript:void(0)" data-type="edit" class="note-link title">放纵，无知的表现</a> <a href="javascript:void(0)" data-type="share" class="share-note dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gear"></i></a>
									<ul class="dropdown-menu arrow-top">
										<li><b><i class="fa fa-check"></i>已发布</b></li>
										<li class="dropdown-submenu pull-left"> <a tabindex="-1" href="#"><i class="fa fa-share"></i>分享到</a>
											<ul class="dropdown-menu share-to-social-network">
												<li>
													<a href="javascript:void(null)" data-action="share-to-weibo"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/weibo-47616ea980fdd807e273b671872f647effeb78eab9f66cbb9a30e370159ec84b.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='http://share.v.t.qq.com/index.php?c=share&amp;a=index&amp;url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F33c2badd9fd3%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dtweibo')+'&amp;title='+e('我写了新文章《放纵，无知的表现》 （ 分享自 @jianshuio ）'),x=function(){if(!window.open(r,'tweibo','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到腾讯微博"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/tweibo-c2910ba2e4b574954dad6dbb35db2cfbd8a01245b8e564c18212ee91554be036.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F33c2badd9fd3%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dqzone')+'&amp;title='+e('我写了新文章《放纵，无知的表现》 '),x=function(){if(!window.open(r,'qzone','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到QQ空间"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/qzone-d8edc02a9502449b5c40c494b1881f5e7073c9a5db0b56cb106a54975da528c1.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,s1=window.getSelection,s2=d.getSelection,s3=d.selection,s=s1?s1():s2?s2():s3?s3.createRange().text:'',r='http://www.douban.com/recommend/?url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F33c2badd9fd3%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Ddouban')+'&amp;title='+e('放纵，无知的表现')+'&amp;sel='+e(s)+'&amp;v=1',x=function(){if(!window.open(r,'douban','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r+'&amp;r=1'};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})()"
														title="分享到豆瓣"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/douban-b41c8ef981ef67e5105ce722dbac95ef7c4003d36485f793b7f72a219c41376c.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='https://twitter.com/share?url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F33c2badd9fd3%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dtwitter')+'&amp;text='+e('我写了新文章《放纵，无知的表现》 （ 分享自 @jianshucom ）')+'&amp;related='+e('jianshuio'),x=function(){if(!window.open(r,'twitter','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到Twitter"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/twitter-eab8d70e004d6da7a097596472a64f75e3eca3c3b12522f631e1a7765e0c9584.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='http://www.facebook.com/sharer.php?s=100&amp;p[url]='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F33c2badd9fd3%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dfacebook')+'&amp;p[title]='+e('放纵，无知的表现 - 简书社')+'&amp;p[summary]='+e('我写了新文章《放纵，无知的表现》 '),x=function(){if(!window.open(r,'facebook','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到Facebook"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/facebook-776afc9d4bd79e2c0ed5d7d253c51a61ee42a62fbbd4cdccbfafb4811d72760d.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='https://plus.google.com/share?url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F33c2badd9fd3%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dgoogle_plus'),x=function(){if(!window.open(r,'google_plus','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到Google+"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/google_plus-1eea6ab33ec870bc824df8fb4c993679ea65c5dfa61a28e6ae67b3c48fb8ceed.png"> </a>
												</li>
											</ul>
										</li>
										<li class="divider"></li>
										<li>
											<a href="javascript:void(0)" data-action="go-private"> <i class="fa fa-lock"></i> 设为私密 </a>
										</li>
										<li><a href="http://www.jianshu.com/p/33c2badd9fd3" target="_blank"><i class="fa fa-external-link"></i> 在新窗口打开</a></li>
										<li class="divider"></li>
										<li><a href="javascript:void(0)" data-action="open-move-note"><i class="fa fa-folder-open"></i> 移动文章</a></li>
										<li>
											<a href="javascript:void(0)" data-action="trigger-history-mode"> <i class="fa fa-clock-o"></i> 历史版本 </a>
										</li>
										<li class="divider"></li>
										<li>
											<a href="javascript:void(0)" data-action="delete-note"> <i class="fa fa-trash-o"></i> 删除文章 </a>
										</li>
									</ul>
									<!--a href='javascript:void(null)' class='delete-note'><i class="fa fa-trash-o"></i></a--></li>
								<li class="one-note" data-model="note" data-cid="c-0"> <i class="icon icon-note note-icon shared"></i>
									<p class="abbreviate">人这一生成与败得与失全部都在于自己，一个人真正最大的敌人就是自己，自己的心态自己的习惯，而一个人最不应该害怕的还是自己，因</p>
									<p class="wordage win-text"></p> <a href="javascript:void(0)" data-type="edit" class="note-link title">成与败得与失</a> <a href="javascript:void(0)" data-type="share" class="share-note dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gear"></i></a>
									<ul class="dropdown-menu arrow-top">
										<li><b><i class="fa fa-check"></i>已发布</b></li>
										<li class="dropdown-submenu pull-left"> <a tabindex="-1" href="#"><i class="fa fa-share"></i>分享到</a>
											<ul class="dropdown-menu share-to-social-network">
												<li>
													<a href="javascript:void(null)" data-action="share-to-weibo"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/weibo-47616ea980fdd807e273b671872f647effeb78eab9f66cbb9a30e370159ec84b.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='http://share.v.t.qq.com/index.php?c=share&amp;a=index&amp;url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F7ee71834fb97%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dtweibo')+'&amp;title='+e('我写了新文章《成与败得与失》 （ 分享自 @jianshuio ）'),x=function(){if(!window.open(r,'tweibo','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到腾讯微博"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/tweibo-c2910ba2e4b574954dad6dbb35db2cfbd8a01245b8e564c18212ee91554be036.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F7ee71834fb97%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dqzone')+'&amp;title='+e('我写了新文章《成与败得与失》 '),x=function(){if(!window.open(r,'qzone','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到QQ空间"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/qzone-d8edc02a9502449b5c40c494b1881f5e7073c9a5db0b56cb106a54975da528c1.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,s1=window.getSelection,s2=d.getSelection,s3=d.selection,s=s1?s1():s2?s2():s3?s3.createRange().text:'',r='http://www.douban.com/recommend/?url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F7ee71834fb97%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Ddouban')+'&amp;title='+e('成与败得与失')+'&amp;sel='+e(s)+'&amp;v=1',x=function(){if(!window.open(r,'douban','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r+'&amp;r=1'};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})()"
														title="分享到豆瓣"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/douban-b41c8ef981ef67e5105ce722dbac95ef7c4003d36485f793b7f72a219c41376c.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='https://twitter.com/share?url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F7ee71834fb97%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dtwitter')+'&amp;text='+e('我写了新文章《成与败得与失》 （ 分享自 @jianshucom ）')+'&amp;related='+e('jianshuio'),x=function(){if(!window.open(r,'twitter','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到Twitter"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/twitter-eab8d70e004d6da7a097596472a64f75e3eca3c3b12522f631e1a7765e0c9584.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='http://www.facebook.com/sharer.php?s=100&amp;p[url]='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F7ee71834fb97%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dfacebook')+'&amp;p[title]='+e('成与败得与失 - 简书社')+'&amp;p[summary]='+e('我写了新文章《成与败得与失》 '),x=function(){if(!window.open(r,'facebook','toolbar=0,resizable=1,scrollbars=yes,status=1,width=600,height=600'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到Facebook"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/facebook-776afc9d4bd79e2c0ed5d7d253c51a61ee42a62fbbd4cdccbfafb4811d72760d.png"> </a>
												</li>
												<li>
													<a href="javascript:void(function(){var d=document,e=encodeURIComponent,r='https://plus.google.com/share?url='+e('http%3A%2F%2Fwww.jianshu.com%2Fp%2F7ee71834fb97%3Futm_campaign%3Dmaleskine%26utm_content%3Dnote%26utm_medium%3Dwriter_share%26utm_source%3Dgoogle_plus'),x=function(){if(!window.open(r,'google_plus','toolbar=0,resizable=1,scrollbars=yes,status=1,width=450,height=330'))location.href=r};if(/Firefox/.test(navigator.userAgent)){setTimeout(x,0)}else{x()}})();"
														title="分享到Google+"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/google_plus-1eea6ab33ec870bc824df8fb4c993679ea65c5dfa61a28e6ae67b3c48fb8ceed.png"> </a>
												</li>
											</ul>
										</li>
										<li class="divider"></li>
										<li>
											<a href="javascript:void(0)" data-action="go-private"> <i class="fa fa-lock"></i> 设为私密 </a>
										</li>
										<li><a href="http://www.jianshu.com/p/7ee71834fb97" target="_blank"><i class="fa fa-external-link"></i> 在新窗口打开</a></li>
										<li class="divider"></li>
										<li><a href="javascript:void(0)" data-action="open-move-note"><i class="fa fa-folder-open"></i> 移动文章</a></li>
										<li>
											<a href="javascript:void(0)" data-action="trigger-history-mode"> <i class="fa fa-clock-o"></i> 历史版本 </a>
										</li>
										<li class="divider"></li>
										<li>
											<a href="javascript:void(0)" data-action="delete-note"> <i class="fa fa-trash-o"></i> 删除文章 </a>
										</li>
									</ul>
									<!--a href='javascript:void(null)' class='delete-note'><i class="fa fa-trash-o"></i></a--></li>
								<li class="one-note active" data-model="note" data-cid="c-2"> <i class="icon icon-note note-icon stop-share"></i>
									<p class="abbreviate"></p>
									<p class="wordage win-text">字数: 0</p> <a href="javascript:void(0)" data-type="edit" class="note-link title">无标题文章</a> <a href="javascript:void(0)" data-type="share" class="share-note dropdown-toggle" data-toggle="dropdown"><i class="fa fa-gear"></i></a>
									<ul class="dropdown-menu arrow-top">
										<li>
											<a href="javascript:void(0)" class="share-link" data-action="open-share-note"> <i class="fa fa-share"></i> 直接发布 </a>
										</li>
										<li class="divider"></li>
										<li>
											<a href="javascript:void(0)" data-action="open-move-note"> <i class="fa fa-folder-open"></i> 移动文章 </a>
										</li>
										<li>
											<a href="javascript:void(0)" data-action="trigger-history-mode"> <i class="fa fa-clock-o"></i> 历史版本 </a>
										</li>
										<li class="divider"></li>
										<li>
											<a href="javascript:void(0)" data-action="delete-note"> <i class="fa fa-trash-o"></i> 删除文章 </a>
										</li>
									</ul>
									<!--a href='javascript:void(null)' class='delete-note'><i class="fa fa-trash-o"></i></a--></li>
							</ul>
							<div class="one-note new-note-bottom"> <a href="javascript:void(0)" data-action="create-note"><i class="fa fa-plus"></i> 在下方新建文章 <img src="//cdn2.jianshu.io/assets/loaders/tiny-5bd8bd9f662a10e0e91bd3edf33132b47d0f9cca77d1707f64495bfd16a44110.gif" class="hide cnlb loader-tiny"></a> </div>
						</div>
						<div id="move-note-modal" tabindex="-1" aria-hidden="true" class="move-note-modal modal hide fade fullscreen">
							<div class="modal-header"> <b>移动文章到</b> </div>
							<div class="modal-body">
								<ul class="notebooks-select"> </ul>
							</div>
							<div class="modal-footer"> <button class="btn cancel-button">取消</button> <input data-action="submit-move-note" class="btn btn-info" name="commit" type="submit" value="提交"> </div>
						</div>
					</div>
					<div class="span7 main" style="height: 794px;">
						<form class="note-form markdown" data-note-id="20470130" onsubmit="return false;"> <input class="title mousetrap" name="note_name" type="text" id="note_title" value="无标题文章">
							<ul class="toolbar clearfix">
								<li><a href="javascript:void(null)" data-placement="right" data-toggle="tooltip" data-original-title="将图片拖到编辑区域即可上传，或直接粘贴剪贴板里的图片"><i class="fa fa-picture-o"></i></a></li>
								<li>
									<a href="javascript:void(null)" data-action="undo" data-toggle="tooltip" data-original-title="撤销"> <i class="fa fa-undo"></i> </a>
								</li>
								<li>
									<a href="javascript:void(null)" data-action="redo" data-toggle="tooltip" data-original-title="重做"> <i class="fa fa-repeat"></i> </a>
								</li>
								<!-- <li> <a href="javascript:void(null)" data-action="insert-video" data-placement="right" data-toggle="tooltip" data-original-title="视频"> <i class="fa fa-youtube-play"></i> </a> </li> -->
								<li class="pull-right publish-button-item">
									<a href="javascript:void(null)" data-action="publicize" id="publish-button"> <i class="fa fa-mail-forward"></i> 发布文章 </a>
								</li>
								<li class="pull-right">
									<a href="javascript:void(null)" data-action="trigger-writing-mode" data-toggle="tooltip" data-original-title="全屏"> <i class="fa fa-expand"></i> </a>
								</li>
								<li class="pull-right">
									<a href="javascript:void(null)" data-action="trigger-preview-mode" data-toggle="tooltip" data-original-title="切换到预览模式"> <i class="fa fa-columns"></i> </a>
								</li>
								<li class="pull-right">
									<a href="javascript:void(null)" data-action="trigger-save" data-toggle="tooltip" data-original-title="保存"> <i class="fa fa-floppy-o"></i> </a>
								</li>
								<li class="history-btn">
									<a href="javascript:void(null)" data-action="trigger-history-mode" data-toggle="tooltip" data-original-title="历史版本"> <i class="fa fa-clock-o"></i> </a>
								</li><span class="saving-notice"></span> </ul> <textarea class="text mousetrap" name="note_content" style="height: 694px;"></textarea>
							<div id="kalamu-image-modal" class="modal kalamu-image-modal hide fade" tabindex="-1" aria-hidden="true" data-keyboard="false">
								<div class="modal-header">
									<h3>插入图片</h3> </div>
								<div class="modal-body">
									<div class="tab-content">
										<div class="tab-pane clearfix active" id="image-upload">
											<a href="#" class="upload-picture"> <label for="kalamu-upload-image"><i class="fa picture-o"></i> 点击上传（可多张）</label> <input id="kalamu-upload-image" class="btn-upload-link" type="file" name="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" multiple="multiple">点击上传（可多张）
											</a> <a class="btn-link switch" href="#image-external" data-toggle="tab">或选择网络图片</a>
											<p><a href="http://www.jianshu.com/p/c903745c1322" target="_blank"><i class="fa fa-question-circle"></i> 图片私密性</a></p> <button class="btn-link" data-dismiss="modal" aria-hidden="true">取消</button> </div>
										<div class="tab-pane clearfix" id="image-external">
											<div class="input-prepend"> <span class="add-on"><i class="fa fa-link"></i></span> <input class="span2" id="email" name="email" placeholder="输入网络图片链接" type="text"> </div> <a class="btn-link switch" href="#image-upload" data-toggle="tab">或上传本地图片</a>
											<p><a href="http://www.jianshu.com/p/c903745c1322" target="_blank"><i class="fa fa-question-circle"></i> 图片私密性</a></p> <button class="btn-link" name="ok">确认</button> <button class="btn-link" data-dismiss="modal" aria-hidden="true">取消</button>											</div> <span class="message-text" style="display: none">上传中...</span> <img src="//cdn2.jianshu.io/assets/loaders/tiny-5bd8bd9f662a10e0e91bd3edf33132b47d0f9cca77d1707f64495bfd16a44110.gif" class="lodaer loader-tiny" style="display: none"> </div>
								</div>
							</div>
							<div id="kalamu-video-modal" class="modal kalamu-video-modal hide fade" tabindex="-1" aria-hidden="true" data-keyboard="false">
								<div class="modal-header">
									<h3>插入视频</h3>
									<!-- <span>目前只支持<a href="http://www.youku.com/" target="_blank">优酷</a>、<a href="http://www.tudou.com/" target="_blank">土豆</a>、<a href="http://v.qq.com/" target="_blank">腾讯视频</a>、<a href="http://www.acfun.tv/" target="_blank">A站视频</a>与<a href="http://vww.bilibili.com/" target="_blank">B站视频</a>。</span> --><span>目前只支持<a href="http://www.youku.com/" target="_blank">优酷</a>、<a href="http://v.qq.com/" target="_blank">腾讯视频</a>。</span> </div>
								<div class="modal-body">
									<div class="input-prepend"> <span class="add-on"><i class="fa fa-link"></i></span> <input class="span2" name="url-input" placeholder="请输入视频链接" type="text"> </div> <span class="message-text" style="display: none"></span> <button class="btn-link" name="ok">确认</button>
									<button class="btn-link" data-dismiss="modal" aria-hidden="true">取消</button>
								</div>
							</div>
							<div id="kalamu-link-modal" class="modal kalamu-link-modal hide fade" tabindex="-1" aria-hidden="true">
								<div class="modal-header">
									<h3>插入链接</h3> </div>
								<div class="modal-body">
									<div class="input-prepend"> <span class="add-on"><i class="fa fa-link"></i></span> <input class="span2" name="href-input" placeholder="链接地址" type="text"> </div>
									<div class="input-prepend"> <span class="add-on"><i class="fa fa-font"></i></span> <input class="span2" name="text-input" placeholder="链接文本" type="text"> </div> <span class="message-text" style="display: none"></span> <button class="btn-link" name="ok">确认</button>
									<button class="btn-link" data-dismiss="modal" aria-hidden="true">取消</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="row-fluid preview-mode">
					<div class="span6 main">
						<ul class="loading" style="height: 794px;">
							<li class="loading-a"></li>
							<li class="loading-b"></li>
							<li class="loading-c"></li>
						</ul>
					</div>
					<div class="span6 preview"></div>
				</div>
				<div class="writing-mode">
					<div class="main">
						<ul class="loading" style="height: 794px;">
							<li class="loading-a"></li>
							<li class="loading-b"></li>
							<li class="loading-c"></li>
						</ul>
					</div>
				</div>
				<div class="row-fluid history-mode">
					<div class="history-list"></div>
					<div class="history-view"></div>
				</div>
				<div class="row-fluid recycle-mode">
					<div class="recycle-note-list"></div>
					<div class="recycle-note-content span7"></div>
				</div>
			</div>
			<div id="share-weibo-modal" tabindex="-1" aria-hidden="true" class="share-longweibo modal hide fade fullscreen">
				<div class="modal-header"> <b>分享到微博</b> </div>
				<div class="modal-body">
					<div class="pic-processing"> <img src="//cdn2.jianshu.io/assets/loaders/tiny-5bd8bd9f662a10e0e91bd3edf33132b47d0f9cca77d1707f64495bfd16a44110.gif" class="loader-tiny"><br> 正在生成长微博图片 </div>
					<div class="pic-done" style="display:none"> <img class="imagebubble-image"> </div>
					<div class="use-image-wrapper" style="display:none"> <label><div class="icheckbox_minimal" style="position: relative;"><input class="use-image" type="checkbox" style="position: absolute; opacity: 0;"><ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins></div>带长微博图片分享</label>						</div>
					<p class="pic-Production">如果您不需要带长微博分享，可点击下面的分享按钮直接分享，无需等待。</p>
				</div>
				<div class="modal-footer"> <button class="btn btn-info"> <span>分 享</span> </button> <a href="javascript:void(0)" class="btn btn-link" data-action="close-weibo-share">关闭</a> </div>
			</div>
			<div id="share-modal" tabindex="-1" aria-hidden="true" class="modal hide fade share-directly-modal fullscreen"> <a href="javascript:void(null)" class="close" data-dismiss="modal"><i class="fa fa-times"></i></a>
				<div class="container">
					<div class="modal-header">
						<h3 class=""><i class="fa fa-check"></i> 已发布</h3> </div>
					<div class="modal-body">
						<div class="social-network">
							<h2 class="title" data-toggle="tooltip" data-title="点击标题可以查看已发布的文章" data-trigger="manual" data-placement="right" data-container=".share-directly-modal"> <a href="javascript:void(null)" class="text-info" target="_blank"> </a> </h2>
							<ul class="share unstyled">
								<p>分享到</p>
								<li class="weixin share-wechat">
									<a href="javascript:void(null)" class="dropdown-toggle" data-toggle="dropdown"> <i class="fa fa-weixin"></i> </a>
									<div class="arrow-top dropdown-menu"></div>
								</li>
								<li class="weibo">
									<a href="#share-weibo-modal" role="button" data-toggle="modal" data-action="share-to-weibo"> <i class="fa fa-weibo"></i> </a>
								</li>
								<li class="item-1 share-link">
									<a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(null)"> <i class="fa fa-link"></i> </a>
									<div class="arrow-top dropdown-menu permlink"> <input id="permlink-text" class="text-left" readonly=""> <a href="javascript:void(null)" class="btn btn-info btn-small copy-to-clipboard" data-clipboard-target="permlink-text">复制链接</a> </div>
								</li>
								<li class="ellipsis">
									<a class="dropdown-toggle" data-toggle="dropdown" href="javascript:void(null)"> <i class="fa fa-ellipsis-h"></i> </a>
									<ul class="dropdown-menu arrow-top more-sns">
										<li>
											<a href="javascript:void(null)" data-sns="qzone"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/qzone-d8edc02a9502449b5c40c494b1881f5e7073c9a5db0b56cb106a54975da528c1.png"> 分享到QQ空间 </a>
										</li>
										<li>
											<a href="javascript:void(null)" data-sns="douban"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/douban-b41c8ef981ef67e5105ce722dbac95ef7c4003d36485f793b7f72a219c41376c.png"> 分享到豆瓣 </a>
										</li>
										<li>
											<a href="javascript:void(null)" data-sns="twitter"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/twitter-eab8d70e004d6da7a097596472a64f75e3eca3c3b12522f631e1a7765e0c9584.png"> 分享到Twitter </a>
										</li>
										<li>
											<a href="javascript:void(null)" data-sns="facebook"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/facebook-776afc9d4bd79e2c0ed5d7d253c51a61ee42a62fbbd4cdccbfafb4811d72760d.png"> 分享到Facebook </a>
										</li>
										<li>
											<a href="javascript:void(null)" data-sns="google_plus"> <img src="//cdn2.jianshu.io/assets/social_icons/32x32/google_plus-1eea6ab33ec870bc824df8fb4c993679ea65c5dfa61a28e6ae67b3c48fb8ceed.png"> 分享到Google+ </a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="submission"> <span>向专题投稿，让文章被更多人发现：</span>
							<div class="search"> <input class="input-large search-query" placeholder="搜索专题" type="text"> </div>
							<div class="notice">每篇文章有总共有5次投稿机会</div>
							<div class="loader"> <img src="//cdn2.jianshu.io/assets/loaders/tiny-5bd8bd9f662a10e0e91bd3edf33132b47d0f9cca77d1707f64495bfd16a44110.gif" class="lodaer loader-tiny"> </div>
							<div class="no-search-result" style="display:none">
								<p> 没有找到相关专题， <a href="/collections/new" target="_blank" class="result-new-collection">去新建一个</a> </p>
							</div>
							<div class="contribute"> </div>
						</div>
					</div>
					<div class="modal-footer">
						<!-- <a href="javascript:void(null)" class="btn" data-action="close-share-note">关闭</a> <a href="javascript:void(null)" class="btn btn-info share-l" data-action="submit-share-note">发布</a> --></div>
				</div>
			</div>
			<div class="publish-loading writer-splash" style="display:none"> <img src="//cdn2.jianshu.io/assets/writer-loading-02cc868d9b7a96e563bbcc9e82047634b6149f90ba37cf0b134d29a00e321f72.gif"></div>
			<div tabindex="-1" aria-hidden="true" class="modal hide fade rename-notebook-modal fullscreen" id="rename-notebook-modal">
				<div class="modal-header"> <b>修改文集名</b> </div>
				<div class="modal-body">
					<form class="modal-form" onsubmit="return false"> <input placeholder="新文集名" name="name" type="text" class="input-large notebook-input" size="30"> </form>
				</div>
				<div class="modal-footer"> <a href="javascript:void(0)" class="btn cancel-button"> 取消 </a> <input class="rename-a-notebook btn btn-info" name="commit" type="submit" value="提交" data-action="submit-rename-notebook"> </div>
			</div>
			<div id="view-mode-modal" tabindex="-1" class="modal hide read-modal" aria-hidden="false">
				<div class="btn-group change-background" data-toggle="buttons-radio">
					<a class="btn btn-daytime active" href="javascript:void(null)" data-action="set-day" rel="nofollow"> <i class="fa fa-sun-o"></i> </a>
					<a class="btn btn-nighttime " href="javascript:void(null)" data-action="set-night" rel="nofollow"> <i class="fa fa-moon-o"></i> </a>
				</div>
				<div class="btn-group change-font" data-toggle="buttons-radio"> <a class="btn font " href="javascript:void(null)" data-action="set-font1" rel="nofollow">宋体</a> <a class="btn font hei active" href="javascript:void(null)" data-action="set-font2" rel="nofollow">黑体</a> </div>
			</div>
		</div>

		<script src="js/writing-4da29c17bd2d465b96cf951487dcc26f9f78293e107145a361f3ec3510ce861d.js"></script>

		<script id="init-script" type="text/javascript" charset="utf-8">
			I18n.defaultLocale = "zh-CN";
			I18n.locale = "zh-CN";

			//Setup Settings
			Maleskine.Settings["domain"] = "http://www.jianshu.com"

			// Checking IE8
			if (Maleskine.BrowserDetector.isIE8() || Maleskine.BrowserDetector.lessThanIE8()) {
				var browser_support = "<div class='browsertip' aria-hidden='true'> \
                                <b></b> \
                                <h3>别再拖延，是时候更新您的浏览器啦</h3> \
                                <p class='meta'>为了给您带来更优质的在线写作体验，简书建议您使用最新版本的 Chrome 浏览器或其他推荐浏览器进行写作。</p> \
                                <ul class='unstyled'> \
                                  <li> \
                                    <a href='http://windows.microsoft.com/zh-CN/internet-explorer/download-ie'> \
                                      <span class='item-1'></span> \
                                      <p>IE 11</p> \
                                      官方网站 \
                                    </a> \
                                  </li> \
                                  <li> \
                                    <a href='http://www.google.com/chrome/'> \
                                      <span class='item-2'></span> \
                                      <p>Chrome</p> \
                                      官方网站 \
                                    </a> \
                                  </li> \
                                  <li> \
                                    <a href='https://www.mozilla.org/firefox/'> \
                                      <span class='item-3'></span> \
                                      <p>Firefox</p> \
                                      官方网站 \
                                    </a> \
                                  </li> \
                                  <li> \
                                    <a href='http://www.apple.com/safari/'> \
                                      <span class='item-4'></span> \
                                      <p>Safari</p> \
                                      官方网站 \
                                    </a> \
                                  </li> \
                                </ul> \
                                <a class='linkColor' href='/'>回到首页</a> \
                              </div>";
				$('body').html(browser_support);
			}

			//  else {
			//   var fileref = document.createElement('script');
			//   fileref.setAttribute('type', 'text/javascript');
			//   fileref.setAttribute('src', '//cdn2.jianshu.io/assets/writing-4da29c17bd2d465b96cf951487dcc26f9f78293e107145a361f3ec3510ce861d.js');
			//   document.getElementsByTagName("head")[0].appendChild(fileref)
			// }
		</script>

		<div id="flash" class="hide"></div>
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