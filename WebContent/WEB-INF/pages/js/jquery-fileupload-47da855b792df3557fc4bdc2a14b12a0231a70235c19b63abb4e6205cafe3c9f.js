!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t=0,n=Array.prototype.slice;e.cleanData=function(t){return function(n){var i,r,o;for(o=0;null!=(r=n[o]);o++)try{i=e._data(r,"events"),i&&i.remove&&e(r).triggerHandler("remove")}catch(s){}t(n)}}(e.cleanData),e.widget=function(t,n,i){var r,o,s,a,l={},c=t.split(".")[0];return t=t.split(".")[1],r=c+"-"+t,i||(i=n,n=e.Widget),e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)},e[c]=e[c]||{},o=e[c][t],s=e[c][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new s(e,t)},e.extend(s,o,{version:i.version,_proto:e.extend({},i),_childConstructors:[]}),a=new n,a.options=e.widget.extend({},a.options),e.each(i,function(t,i){return e.isFunction(i)?void(l[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},r=function(e){return n.prototype[t].apply(this,e)};return function(){var t,n=this._super,o=this._superApply;return this._super=e,this._superApply=r,t=i.apply(this,arguments),this._super=n,this._superApply=o,t}}()):void(l[t]=i)}),s.prototype=e.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||t:t},l,{constructor:s,namespace:c,widgetName:t,widgetFullName:r}),o?(e.each(o._childConstructors,function(t,n){var i=n.prototype;e.widget(i.namespace+"."+i.widgetName,s,n._proto)}),delete o._childConstructors):n._childConstructors.push(s),e.widget.bridge(t,s),s},e.widget.extend=function(t){for(var i,r,o=n.call(arguments,1),s=0,a=o.length;a>s;s++)for(i in o[s])r=o[s][i],o[s].hasOwnProperty(i)&&void 0!==r&&(t[i]=e.isPlainObject(r)?e.isPlainObject(t[i])?e.widget.extend({},t[i],r):e.widget.extend({},r):r);return t},e.widget.bridge=function(t,i){var r=i.prototype.widgetFullName||t;e.fn[t]=function(o){var s="string"==typeof o,a=n.call(arguments,1),l=this;return s?this.each(function(){var n,i=e.data(this,r);return"instance"===o?(l=i,!1):i?e.isFunction(i[o])&&"_"!==o.charAt(0)?(n=i[o].apply(i,a),n!==i&&void 0!==n?(l=n&&n.jquery?l.pushStack(n.get()):n,!1):void 0):e.error("no such method '"+o+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+o+"'")}):(a.length&&(o=e.widget.extend.apply(null,[o].concat(a))),this.each(function(){var t=e.data(this,r);t?(t.option(o||{}),t._init&&t._init()):e.data(this,r,new i(o,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(n,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),n),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,n){var i,r,o,s=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(s={},i=t.split("."),t=i.shift(),i.length){for(r=s[t]=e.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)r[i[o]]=r[i[o]]||{},r=r[i[o]];if(t=i.pop(),1===arguments.length)return void 0===r[t]?null:r[t];r[t]=n}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=n}return this._setOptions(s),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,n,i){var r,o=this;"boolean"!=typeof t&&(i=n,n=t,t=!1),i?(n=r=e(n),this.bindings=this.bindings.add(n)):(i=n,n=this.element,r=this.widget()),e.each(i,function(i,s){function a(){return t||o.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof s?o[s]:s).apply(o,arguments):void 0}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=i.match(/^([\w:-]*)\s*(.*)$/),c=l[1]+o.eventNamespace,u=l[2];u?r.delegate(u,c,a):n.bind(c,a)})},_off:function(t,n){n=(n||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(n).undelegate(n),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function n(){return("string"==typeof e?i[e]:e).apply(i,arguments)}var i=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,i){var r,o,s=this.options[t];if(i=i||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],o=n.originalEvent)for(r in o)r in n||(n[r]=o[r]);return this.element.trigger(n,i),!(e.isFunction(s)&&s.apply(this.element[0],[n].concat(i))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(i,r,o){"string"==typeof r&&(r={effect:r});var s,a=r?r===!0||"number"==typeof r?n:r.effect||n:t;r=r||{},"number"==typeof r&&(r={duration:r}),s=!e.isEmptyObject(r),r.complete=o,r.delay&&i.delay(r.delay),s&&e.effects&&e.effects.effect[a]?i[t](r):a!==t&&i[a]?i[a](r.duration,r.easing,o):i.queue(function(n){e(this)[t](),o&&o.call(i[0]),n()})}});e.widget}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery)}(function(e){"use strict";var t=0;e.ajaxTransport("iframe",function(n){if(n.async){var i,r,o,s=n.initialIframeSrc||"javascript:false;";return{send:function(a,l){i=e('<form style="display:none;"></form>'),i.attr("accept-charset",n.formAcceptCharset),o=/\?/.test(n.url)?"&":"?","DELETE"===n.type?(n.url=n.url+o+"_method=DELETE",n.type="POST"):"PUT"===n.type?(n.url=n.url+o+"_method=PUT",n.type="POST"):"PATCH"===n.type&&(n.url=n.url+o+"_method=PATCH",n.type="POST"),t+=1,r=e('<iframe src="'+s+'" name="iframe-transport-'+t+'"></iframe>').bind("load",function(){var t,o=e.isArray(n.paramName)?n.paramName:[n.paramName];r.unbind("load").bind("load",function(){var t;try{if(t=r.contents(),!t.length||!t[0].firstChild)throw new Error}catch(n){t=void 0}l(200,"success",{iframe:t}),e('<iframe src="'+s+'"></iframe>').appendTo(i),window.setTimeout(function(){i.remove()},0)}),i.prop("target",r.prop("name")).prop("action",n.url).prop("method",n.type),n.formData&&e.each(n.formData,function(t,n){e('<input type="hidden"/>').prop("name",n.name).val(n.value).appendTo(i)}),n.fileInput&&n.fileInput.length&&"POST"===n.type&&(t=n.fileInput.clone(),n.fileInput.after(function(e){return t[e]}),n.paramName&&n.fileInput.each(function(t){e(this).prop("name",o[t]||n.paramName)}),i.append(n.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data"),n.fileInput.removeAttr("form")),i.submit(),t&&t.length&&n.fileInput.each(function(n,i){var r=e(t[n]);e(i).prop("name",r.prop("name")).attr("form",r.attr("form")),r.replaceWith(i)})}),i.append(r).appendTo(document.body)},abort:function(){r&&r.unbind("load").prop("src",s),i&&i.remove()}}}}),e.ajaxSetup({converters:{"iframe text":function(t){return t&&e(t[0].body).text()},"iframe json":function(t){return t&&e.parseJSON(e(t[0].body).text())},"iframe html":function(t){return t&&e(t[0].body).html()},"iframe xml":function(t){var n=t&&t[0];return n&&e.isXMLDoc(n)?n:e.parseXML(n.XMLDocument&&n.XMLDocument.xml||e(n.body).html())},"iframe script":function(t){return t&&e.globalEval(e(t[0].body).text())}}})}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","jquery-ui/widget"],e):"object"==typeof exports?e(require("jquery"),require("./vendor/jquery.ui.widget")):e(window.jQuery)}(function(e){"use strict";function t(t){var n="dragover"===t;return function(i){i.dataTransfer=i.originalEvent&&i.originalEvent.dataTransfer;var r=i.dataTransfer;r&&-1!==e.inArray("Files",r.types)&&this._trigger(t,e.Event(t,{delegatedEvent:i}))!==!1&&(i.preventDefault(),n&&(r.dropEffect="copy"))}}e.support.fileInput=!(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent)||e('<input type="file">').prop("disabled")),e.support.xhrFileUpload=!(!window.ProgressEvent||!window.FileReader),e.support.xhrFormDataFileUpload=!!window.FormData,e.support.blobSlice=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice),e.widget("blueimp.fileupload",{options:{dropZone:e(document),pasteZone:void 0,fileInput:void 0,replaceFileInput:!0,paramName:void 0,singleFileUploads:!0,limitMultiFileUploads:void 0,limitMultiFileUploadSize:void 0,limitMultiFileUploadSizeOverhead:512,sequentialUploads:!1,limitConcurrentUploads:void 0,forceIframeTransport:!1,redirect:void 0,redirectParamName:void 0,postMessage:void 0,multipart:!0,maxChunkSize:void 0,uploadedBytes:void 0,recalculateProgress:!0,progressInterval:100,bitrateInterval:500,autoUpload:!0,messages:{uploadedBytes:"Uploaded bytes exceed file size"},i18n:function(t,n){return t=this.messages[t]||t.toString(),n&&e.each(n,function(e,n){t=t.replace("{"+e+"}",n)}),t},formData:function(e){return e.serializeArray()},add:function(t,n){return t.isDefaultPrevented()?!1:void((n.autoUpload||n.autoUpload!==!1&&e(this).fileupload("option","autoUpload"))&&n.process().done(function(){n.submit()}))},processData:!1,contentType:!1,cache:!1,timeout:0},_specialOptions:["fileInput","dropZone","pasteZone","multipart","forceIframeTransport"],_blobSlice:e.support.blobSlice&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},_BitrateTimer:function(){this.timestamp=Date.now?Date.now():(new Date).getTime(),this.loaded=0,this.bitrate=0,this.getBitrate=function(e,t,n){var i=e-this.timestamp;return(!this.bitrate||!n||i>n)&&(this.bitrate=(t-this.loaded)*(1e3/i)*8,this.loaded=t,this.timestamp=e),this.bitrate}},_isXHRUpload:function(t){return!t.forceIframeTransport&&(!t.multipart&&e.support.xhrFileUpload||e.support.xhrFormDataFileUpload)},_getFormData:function(t){var n;return"function"===e.type(t.formData)?t.formData(t.form):e.isArray(t.formData)?t.formData:"object"===e.type(t.formData)?(n=[],e.each(t.formData,function(e,t){n.push({name:e,value:t})}),n):[]},_getTotal:function(t){var n=0;return e.each(t,function(e,t){n+=t.size||1}),n},_initProgressObject:function(t){var n={loaded:0,total:0,bitrate:0};t._progress?e.extend(t._progress,n):t._progress=n},_initResponseObject:function(e){var t;if(e._response)for(t in e._response)e._response.hasOwnProperty(t)&&delete e._response[t];else e._response={}},_onProgress:function(t,n){if(t.lengthComputable){var i,r=Date.now?Date.now():(new Date).getTime();if(n._time&&n.progressInterval&&r-n._time<n.progressInterval&&t.loaded!==t.total)return;n._time=r,i=Math.floor(t.loaded/t.total*(n.chunkSize||n._progress.total))+(n.uploadedBytes||0),this._progress.loaded+=i-n._progress.loaded,this._progress.bitrate=this._bitrateTimer.getBitrate(r,this._progress.loaded,n.bitrateInterval),n._progress.loaded=n.loaded=i,n._progress.bitrate=n.bitrate=n._bitrateTimer.getBitrate(r,i,n.bitrateInterval),this._trigger("progress",e.Event("progress",{delegatedEvent:t}),n),this._trigger("progressall",e.Event("progressall",{delegatedEvent:t}),this._progress)}},_initProgressListener:function(t){var n=this,i=t.xhr?t.xhr():e.ajaxSettings.xhr();i.upload&&(e(i.upload).bind("progress",function(e){var i=e.originalEvent;e.lengthComputable=i.lengthComputable,e.loaded=i.loaded,e.total=i.total,n._onProgress(e,t)}),t.xhr=function(){return i})},_isInstanceOf:function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},_initXHRData:function(t){var n,i=this,r=t.files[0],o=t.multipart||!e.support.xhrFileUpload,s="array"===e.type(t.paramName)?t.paramName[0]:t.paramName;t.headers=e.extend({},t.headers),t.contentRange&&(t.headers["Content-Range"]=t.contentRange),o&&!t.blob&&this._isInstanceOf("File",r)||(t.headers["Content-Disposition"]='attachment; filename="'+encodeURI(r.name)+'"'),o?e.support.xhrFormDataFileUpload&&(t.postMessage?(n=this._getFormData(t),t.blob?n.push({name:s,value:t.blob}):e.each(t.files,function(i,r){n.push({name:"array"===e.type(t.paramName)&&t.paramName[i]||s,value:r})})):(i._isInstanceOf("FormData",t.formData)?n=t.formData:(n=new FormData,e.each(this._getFormData(t),function(e,t){n.append(t.name,t.value)})),t.blob?n.append(s,t.blob,r.name):e.each(t.files,function(r,o){(i._isInstanceOf("File",o)||i._isInstanceOf("Blob",o))&&n.append("array"===e.type(t.paramName)&&t.paramName[r]||s,o,o.uploadName||o.name)})),t.data=n):(t.contentType=r.type||"application/octet-stream",t.data=t.blob||r),t.blob=null},_initIframeSettings:function(t){var n=e("<a></a>").prop("href",t.url).prop("host");t.dataType="iframe "+(t.dataType||""),t.formData=this._getFormData(t),t.redirect&&n&&n!==location.host&&t.formData.push({name:t.redirectParamName||"redirect",value:t.redirect})},_initDataSettings:function(e){this._isXHRUpload(e)?(this._chunkedUpload(e,!0)||(e.data||this._initXHRData(e),this._initProgressListener(e)),e.postMessage&&(e.dataType="postmessage "+(e.dataType||""))):this._initIframeSettings(e)},_getParamName:function(t){var n=e(t.fileInput),i=t.paramName;return i?e.isArray(i)||(i=[i]):(i=[],n.each(function(){for(var t=e(this),n=t.prop("name")||"files[]",r=(t.prop("files")||[1]).length;r;)i.push(n),r-=1}),i.length||(i=[n.prop("name")||"files[]"])),i},_initFormSettings:function(t){t.form&&t.form.length||(t.form=e(t.fileInput.prop("form")),t.form.length||(t.form=e(this.options.fileInput.prop("form")))),t.paramName=this._getParamName(t),t.url||(t.url=t.form.prop("action")||location.href),t.type=(t.type||"string"===e.type(t.form.prop("method"))&&t.form.prop("method")||"").toUpperCase(),"POST"!==t.type&&"PUT"!==t.type&&"PATCH"!==t.type&&(t.type="POST"),t.formAcceptCharset||(t.formAcceptCharset=t.form.attr("accept-charset"))},_getAJAXSettings:function(t){var n=e.extend({},this.options,t);return this._initFormSettings(n),this._initDataSettings(n),n},_getDeferredState:function(e){return e.state?e.state():e.isResolved()?"resolved":e.isRejected()?"rejected":"pending"},_enhancePromise:function(e){return e.success=e.done,e.error=e.fail,e.complete=e.always,e},_getXHRPromise:function(t,n,i){var r=e.Deferred(),o=r.promise();return n=n||this.options.context||o,t===!0?r.resolveWith(n,i):t===!1&&r.rejectWith(n,i),o.abort=r.promise,this._enhancePromise(o)},_addConvenienceMethods:function(t,n){var i=this,r=function(t){return e.Deferred().resolveWith(i,t).promise()};n.process=function(t,o){return(t||o)&&(n._processQueue=this._processQueue=(this._processQueue||r([this])).then(function(){return n.errorThrown?e.Deferred().rejectWith(i,[n]).promise():r(arguments)}).then(t,o)),this._processQueue||r([this])},n.submit=function(){return"pending"!==this.state()&&(n.jqXHR=this.jqXHR=i._trigger("submit",e.Event("submit",{delegatedEvent:t}),this)!==!1&&i._onSend(t,this)),this.jqXHR||i._getXHRPromise()},n.abort=function(){return this.jqXHR?this.jqXHR.abort():(this.errorThrown="abort",i._trigger("fail",null,this),i._getXHRPromise(!1))},n.state=function(){return this.jqXHR?i._getDeferredState(this.jqXHR):this._processQueue?i._getDeferredState(this._processQueue):void 0},n.processing=function(){return!this.jqXHR&&this._processQueue&&"pending"===i._getDeferredState(this._processQueue)},n.progress=function(){return this._progress},n.response=function(){return this._response}},_getUploadedBytes:function(e){var t=e.getResponseHeader("Range"),n=t&&t.split("-"),i=n&&n.length>1&&parseInt(n[1],10);return i&&i+1},_chunkedUpload:function(t,n){t.uploadedBytes=t.uploadedBytes||0;var i,r,o=this,s=t.files[0],a=s.size,l=t.uploadedBytes,c=t.maxChunkSize||a,u=this._blobSlice,h=e.Deferred(),d=h.promise();return this._isXHRUpload(t)&&u&&(l||a>c)&&!t.data?n?!0:l>=a?(s.error=t.i18n("uploadedBytes"),this._getXHRPromise(!1,t.context,[null,"error",s.error])):(r=function(){var n=e.extend({},t),d=n._progress.loaded;n.blob=u.call(s,l,l+c,s.type),n.chunkSize=n.blob.size,n.contentRange="bytes "+l+"-"+(l+n.chunkSize-1)+"/"+a,o._initXHRData(n),o._initProgressListener(n),i=(o._trigger("chunksend",null,n)!==!1&&e.ajax(n)||o._getXHRPromise(!1,n.context)).done(function(i,s,c){l=o._getUploadedBytes(c)||l+n.chunkSize,d+n.chunkSize-n._progress.loaded&&o._onProgress(e.Event("progress",{lengthComputable:!0,loaded:l-n.uploadedBytes,total:l-n.uploadedBytes}),n),t.uploadedBytes=n.uploadedBytes=l,n.result=i,n.textStatus=s,n.jqXHR=c,o._trigger("chunkdone",null,n),o._trigger("chunkalways",null,n),a>l?r():h.resolveWith(n.context,[i,s,c])}).fail(function(e,t,i){n.jqXHR=e,n.textStatus=t,n.errorThrown=i,o._trigger("chunkfail",null,n),o._trigger("chunkalways",null,n),h.rejectWith(n.context,[e,t,i])})},this._enhancePromise(d),d.abort=function(){return i.abort()},r(),d):!1},_beforeSend:function(e,t){0===this._active&&(this._trigger("start"),this._bitrateTimer=new this._BitrateTimer,this._progress.loaded=this._progress.total=0,this._progress.bitrate=0),this._initResponseObject(t),this._initProgressObject(t),t._progress.loaded=t.loaded=t.uploadedBytes||0,t._progress.total=t.total=this._getTotal(t.files)||1,t._progress.bitrate=t.bitrate=0,this._active+=1,this._progress.loaded+=t.loaded,this._progress.total+=t.total},_onDone:function(t,n,i,r){var o=r._progress.total,s=r._response;r._progress.loaded<o&&this._onProgress(e.Event("progress",{lengthComputable:!0,loaded:o,total:o}),r),s.result=r.result=t,s.textStatus=r.textStatus=n,s.jqXHR=r.jqXHR=i,this._trigger("done",null,r)},_onFail:function(e,t,n,i){var r=i._response;i.recalculateProgress&&(this._progress.loaded-=i._progress.loaded,this._progress.total-=i._progress.total),r.jqXHR=i.jqXHR=e,r.textStatus=i.textStatus=t,r.errorThrown=i.errorThrown=n,this._trigger("fail",null,i)},_onAlways:function(e,t,n,i){this._trigger("always",null,i)},_onSend:function(t,n){n.submit||this._addConvenienceMethods(t,n);var i,r,o,s,a=this,l=a._getAJAXSettings(n),c=function(){return a._sending+=1,l._bitrateTimer=new a._BitrateTimer,i=i||((r||a._trigger("send",e.Event("send",{delegatedEvent:t}),l)===!1)&&a._getXHRPromise(!1,l.context,r)||a._chunkedUpload(l)||e.ajax(l)).done(function(e,t,n){a._onDone(e,t,n,l)}).fail(function(e,t,n){a._onFail(e,t,n,l)}).always(function(e,t,n){if(a._onAlways(e,t,n,l),a._sending-=1,a._active-=1,l.limitConcurrentUploads&&l.limitConcurrentUploads>a._sending)for(var i=a._slots.shift();i;){if("pending"===a._getDeferredState(i)){i.resolve();break}i=a._slots.shift()}0===a._active&&a._trigger("stop")})};return this._beforeSend(t,l),this.options.sequentialUploads||this.options.limitConcurrentUploads&&this.options.limitConcurrentUploads<=this._sending?(this.options.limitConcurrentUploads>1?(o=e.Deferred(),this._slots.push(o),s=o.then(c)):(this._sequence=this._sequence.then(c,c),s=this._sequence),s.abort=function(){return r=[void 0,"abort","abort"],i?i.abort():(o&&o.rejectWith(l.context,r),c())},this._enhancePromise(s)):c()},_onAdd:function(t,n){var i,r,o,s,a=this,l=!0,c=e.extend({},this.options,n),u=n.files,h=u.length,d=c.limitMultiFileUploads,p=c.limitMultiFileUploadSize,f=c.limitMultiFileUploadSizeOverhead,m=0,g=this._getParamName(c),v=0;if(!h)return!1;if(p&&void 0===u[0].size&&(p=void 0),(c.singleFileUploads||d||p)&&this._isXHRUpload(c))if(c.singleFileUploads||p||!d)if(!c.singleFileUploads&&p)for(o=[],i=[],s=0;h>s;s+=1)m+=u[s].size+f,(s+1===h||m+u[s+1].size+f>p||d&&s+1-v>=d)&&(o.push(u.slice(v,s+1)),r=g.slice(v,s+1),r.length||(r=g),i.push(r),v=s+1,m=0);else i=g;else for(o=[],i=[],s=0;h>s;s+=d)o.push(u.slice(s,s+d)),r=g.slice(s,s+d),r.length||(r=g),i.push(r);else o=[u],i=[g];return n.originalFiles=u,e.each(o||u,function(r,s){var c=e.extend({},n);return c.files=o?s:[s],c.paramName=i[r],a._initResponseObject(c),a._initProgressObject(c),a._addConvenienceMethods(t,c),l=a._trigger("add",e.Event("add",{delegatedEvent:t}),c)}),l},_replaceFileInput:function(t){var n=t.fileInput,i=n.clone(!0),r=n.is(document.activeElement);t.fileInputClone=i,e("<form></form>").append(i)[0].reset(),n.after(i).detach(),r&&i.focus(),e.cleanData(n.unbind("remove")),this.options.fileInput=this.options.fileInput.map(function(e,t){return t===n[0]?i[0]:t}),n[0]===this.element[0]&&(this.element=i)},_handleFileTreeEntry:function(t,n){var i,r=this,o=e.Deferred(),s=[],a=function(e){e&&!e.entry&&(e.entry=t),o.resolve([e])},l=function(e){r._handleFileTreeEntries(e,n+t.name+"/").done(function(e){o.resolve(e)}).fail(a)},c=function(){i.readEntries(function(e){e.length?(s=s.concat(e),c()):l(s)},a)};return n=n||"",t.isFile?t._file?(t._file.relativePath=n,o.resolve(t._file)):t.file(function(e){e.relativePath=n,o.resolve(e)},a):t.isDirectory?(i=t.createReader(),c()):o.resolve([]),o.promise()},_handleFileTreeEntries:function(t,n){var i=this;return e.when.apply(e,e.map(t,function(e){return i._handleFileTreeEntry(e,n)})).then(function(){return Array.prototype.concat.apply([],arguments)})},_getDroppedFiles:function(t){t=t||{};var n=t.items;return n&&n.length&&(n[0].webkitGetAsEntry||n[0].getAsEntry)?this._handleFileTreeEntries(e.map(n,function(e){var t;return e.webkitGetAsEntry?(t=e.webkitGetAsEntry(),t&&(t._file=e.getAsFile()),t):e.getAsEntry()})):e.Deferred().resolve(e.makeArray(t.files)).promise()},_getSingleFileInputFiles:function(t){t=e(t);var n,i,r=t.prop("webkitEntries")||t.prop("entries");if(r&&r.length)return this._handleFileTreeEntries(r);if(n=e.makeArray(t.prop("files")),n.length)void 0===n[0].name&&n[0].fileName&&e.each(n,function(e,t){t.name=t.fileName,t.size=t.fileSize});else{if(i=t.prop("value"),!i)return e.Deferred().resolve([]).promise();n=[{name:i.replace(/^.*\\/,"")}]}return e.Deferred().resolve(n).promise()},_getFileInputFiles:function(t){return t instanceof e&&1!==t.length?e.when.apply(e,e.map(t,this._getSingleFileInputFiles)).then(function(){return Array.prototype.concat.apply([],arguments)}):this._getSingleFileInputFiles(t)},_onChange:function(t){var n=this,i={fileInput:e(t.target),form:e(t.target.form)};this._getFileInputFiles(i.fileInput).always(function(r){i.files=r,n.options.replaceFileInput&&n._replaceFileInput(i),n._trigger("change",e.Event("change",{delegatedEvent:t}),i)!==!1&&n._onAdd(t,i)})},_onPaste:function(t){var n=t.originalEvent&&t.originalEvent.clipboardData&&t.originalEvent.clipboardData.items,i={files:[]};n&&n.length&&(e.each(n,function(e,t){var n=t.getAsFile&&t.getAsFile();n&&i.files.push(n)}),this._trigger("paste",e.Event("paste",{delegatedEvent:t}),i)!==!1&&this._onAdd(t,i))},_onDrop:function(t){t.dataTransfer=t.originalEvent&&t.originalEvent.dataTransfer;var n=this,i=t.dataTransfer,r={};i&&i.files&&i.files.length&&(t.preventDefault(),this._getDroppedFiles(i).always(function(i){r.files=i,n._trigger("drop",e.Event("drop",{delegatedEvent:t}),r)!==!1&&n._onAdd(t,r)}))},_onDragOver:t("dragover"),_onDragEnter:t("dragenter"),_onDragLeave:t("dragleave"),_initEventHandlers:function(){this._isXHRUpload(this.options)&&(this._on(this.options.dropZone,{dragover:this._onDragOver,drop:this._onDrop,dragenter:this._onDragEnter,dragleave:this._onDragLeave}),this._on(this.options.pasteZone,{paste:this._onPaste})),e.support.fileInput&&this._on(this.options.fileInput,{change:this._onChange})},_destroyEventHandlers:function(){this._off(this.options.dropZone,"dragenter dragleave dragover drop"),this._off(this.options.pasteZone,"paste"),this._off(this.options.fileInput,"change")},_destroy:function(){this._destroyEventHandlers()},_setOption:function(t,n){var i=-1!==e.inArray(t,this._specialOptions);i&&this._destroyEventHandlers(),this._super(t,n),i&&(this._initSpecialOptions(),this._initEventHandlers())},_initSpecialOptions:function(){var t=this.options;void 0===t.fileInput?t.fileInput=this.element.is('input[type="file"]')?this.element:this.element.find('input[type="file"]'):t.fileInput instanceof e||(t.fileInput=e(t.fileInput)),t.dropZone instanceof e||(t.dropZone=e(t.dropZone)),t.pasteZone instanceof e||(t.pasteZone=e(t.pasteZone))},_getRegExp:function(e){var t=e.split("/"),n=t.pop();return t.shift(),new RegExp(t.join("/"),n)},_isRegExpOption:function(t,n){return"url"!==t&&"string"===e.type(n)&&/^\/.*\/[igm]{0,3}$/.test(n)},_initDataAttributes:function(){var t=this,n=this.options,i=this.element.data();e.each(this.element[0].attributes,function(e,r){var o,s=r.name.toLowerCase();/^data-/.test(s)&&(s=s.slice(5).replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()}),o=i[s],t._isRegExpOption(s,o)&&(o=t._getRegExp(o)),n[s]=o)})},_create:function(){this._initDataAttributes(),this._initSpecialOptions(),this._slots=[],this._sequence=this._getXHRPromise(!0),this._sending=this._active=0,this._initProgressObject(this),this._initEventHandlers()},active:function(){return this._active},progress:function(){return this._progress},add:function(t){var n=this;t&&!this.options.disabled&&(t.fileInput&&!t.files?this._getFileInputFiles(t.fileInput).always(function(e){t.files=e,n._onAdd(null,t)}):(t.files=e.makeArray(t.files),this._onAdd(null,t)))},send:function(t){if(t&&!this.options.disabled){if(t.fileInput&&!t.files){var n,i,r=this,o=e.Deferred(),s=o.promise();return s.abort=function(){return i=!0,n?n.abort():(o.reject(null,"abort","abort"),s)},this._getFileInputFiles(t.fileInput).always(function(e){if(!i){if(!e.length)return void o.reject();t.files=e,n=r._onSend(null,t),n.then(function(e,t,n){o.resolve(e,t,n)},function(e,t,n){o.reject(e,t,n)})}}),this._enhancePromise(s)}if(t.files=e.makeArray(t.files),t.files.length)return this._onSend(null,t)}return this._getXHRPromise(!1,t&&t.context)}})});