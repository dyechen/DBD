var filterFloat=function(a){return/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(a)?Number(a):NaN};$.fn.raty.defaults.path="/img";$.fn.raty.defaults.half=!0;$.fn.raty.defaults.score=function(){return $(this).attr("data-score")};
$(function(){$(".collapser").click(hideToggler);$(".mailme").each(function(){txt=$(this).html().replace(/ at /,"@").replace(/ dot /g,".");$(this).replaceWith('<a href="mailto:'+txt+'">'+txt+"</a>")});/*$.cookieBar({message:"We use cookies to track usage.",policyButton:!1,declineButton:!1,fixed:!0,forceShow:!1,append:!0});*/var a=new ZeroClipboard(document.getElementById("copyreddit"));a.on("copy",function(b){var a=copyReddit(0);b.clipboardData.setData("text/plain",a)});a=new ZeroClipboard(document.getElementById("copyfbreddit"));
a.on("copy",function(b){var a=copyReddit(1);b.clipboardData.setData("text/plain",a)});a=new ZeroClipboard(document.getElementById("copybb"));a.on("copy",function(b){var a=copyBbcode(0);b.clipboardData.setData("text/plain",a)});a=new ZeroClipboard(document.getElementById("copyfbbb"));a.on("copy",function(b){var a=copyBbcode(1);b.clipboardData.setData("text/plain",a)});a=new ZeroClipboard(document.getElementById("copyhtml"));a.on("copy",function(b){var a=copyHtml(0);b.clipboardData.setData("text/html",
a)});a=new ZeroClipboard(document.getElementById("copyfbhtml"));a.on("copy",function(a){var c=copyHtml(1);a.clipboardData.setData("text/html",c)});a=new ZeroClipboard(document.getElementById("copyhtmltext"));a.on("copy",function(a){var c=copyHtml(0);a.clipboardData.setData("text/plain",c)});a=new ZeroClipboard(document.getElementById("copyfbhtmltext"));a.on("copy",function(a){var c=copyHtml(1);a.clipboardData.setData("text/plain",c)});a=new ZeroClipboard(document.getElementById("copysimple"));a.on("copy",
function(a){var c=copySimple(0);a.clipboardData.setData("text/plain",c)});a=new ZeroClipboard(document.getElementById("copyfbsimple"));a.on("copy",function(a){var c=copySimple(1);a.clipboardData.setData("text/plain",c)});$(".misbut").click(function(){$(".prmis").css("background-color","#FFD3D3")});if("undefined"===typeof fuckAdBlock)adBlockDetected();else fuckAdBlock.onDetected(adBlockDetected)});function adBlockDetected(){$("#fabanner").show()}var hh=0,tiop=!1;
$(function(){"undefined"!=typeof usedrops&&usedrops?($(".rgrams").hide(),$(".rdrops").show(),$(".drprml").show()):($(".rgrams").show(),$(".rdrops").hide(),$(".drprml").hide());$("#title").focus();$("#fladd,.ftext").autocomplete({source:"/flavors/ajax",change:function(){ga("send","event","Flavors","ChangeFlavor",$(this).val())},select:function(a,b){$("#"+a.target.id).val(b.item.name);chName(a.target.id.substr(2));$("input:radio[name=fpvo"+a.target.id.substr(2)+"]").filter("[value="+b.item.pg_vg_other+
"]").prop("checked",!0);$("#fw"+a.target.id.substr(2)).val(b.item.weight_per_ml);$("#f"+a.target.id.substr(2)).focus();return!1}});0<$(".ftext,#fladd").length&&$(".ftext,#fladd").each(function(){$(this).data("ui-autocomplete")._renderItem=function(a,b){append=""!=b.make?" - "+b.make:"";append+=' <abbr class="reccount" title="# recipes">('+b.no_recipes+")</abbr>";return $("<li>").append("<a>"+b.display_name+" "+append+"</a>").appendTo(a)}});$("textarea").autogrow();$(".ric").each(function(){$(this).click(function(){var a=
$(this).data("rid"),b="";$.ajax({url:"/recipe/getFlavors/",type:"post",dataType:"json",data:{id:a},success:function(c){var d='<table class="table table-condensed table-striped">';for(n in c)d+="<tr><td>"+c[n].name+'</td><td class="tdper">'+c[n].perc+"%</td></tr>";b=d+"</table><script>ga('send', 'pageview', '"+a+"');\x3c/script>";$("#ri"+a).tooltip({items:"#ri"+a,position:{of:"#rp"+a,my:"left+8 top",at:"right center"},content:b});$("#ri"+a).tooltip("open");tiop=!0}})});$(this).mouseleave(function(){if(tiop){var a=
"#ri"+$(this).data("rid");$(a).tooltip("close");tiop=!1}})})});
function addFlavor(){nflav++;cla=1==nflav%2?" highlight":"";$("#flavors").append('<div id="inputFlavor'+nflav+'"><div class="control-group"><div class="input-append"><input class="ftext" type="text" name="ft'+nflav+'" id="ft'+nflav+'" value="" placeholder="'+flavtxt+" "+nflav+'" onfocus="selName('+nflav+')" onkeyup="chName('+nflav+')" onblur="chName('+nflav+')" onMouseOver="this.title=\'香精名称\'"><div class="controls"><input class="rinp" type="text" id="f'+nflav+'" name="f'+nflav+'" onkeyup="calcRec()" onMouseOver="this.title=\'香精占比\'"><div class="add-on">%</div></div></div></div><div class="pgvgo"><label class="smlab"><input type="radio" name="fpvo'+nflav+
'" checked="checked" value="0" onclick="calcRec()">PG</label><label class="smlab"><input type="radio" name="fpvo'+nflav+'" value="1" onclick="calcRec()">VG</label><label class="smlab"><input type="radio" name="fpvo'+nflav+'" value="2" onclick="calcRec()">'+otherlab+'</label><input type="hidden" name="fw'+nflav+'" id="fw'+nflav+'" value=""></div><br></div>');$("#recflavor").append('<div id="showFlavor'+nflav+'"><div class="recline'+cla+'"><div class="rlab" id="rfl'+nflav+'">'+flavtxt+" "+nflav+'</div><div class="runit" id="flu'+nflav+
'"></div>'+(usedrops?"":'<div class="rgrams" id="flg'+nflav+'" style="display: none;"></div>')+(usedrops?"":'<div class="rdrops" id="fld'+nflav+'"></div>')+'<div class="rpercent" id="flp'+nflav+'"></div><br></div></div>');$("#ft"+nflav).autocomplete({source:"/flavors/ajax",change:function(){ga("send","event","Flavors","AddFlavor",$(this).val())},select:function(a,b){$("#"+a.target.id).val(b.item.name);chName(a.target.id.substr(2));$("input:radio[name=fpvo"+a.target.id.substr(2)+"]").filter("[value="+b.item.pg_vg_other+"]").prop("checked",
!0);$("#fw"+a.target.id.substr(2)).val(b.item.weight_per_ml);$("#f"+a.target.id.substr(2)).focus();return!1}}).focus().data("ui-autocomplete")._renderItem=function(a,b){append=""!=b.make?" - "+b.make:"";append+=' <abbr class="reccount" title="# recipes">('+b.no_recipes+")</abbr>";return $("<li>").append("<a"+(1==b.in_stash?' class="instash"':"")+">"+b.display_name+" "+append+"</a>").appendTo(a)};addFlavorCSS()}
function shErr(a){$("#errmsg").html(a);$("#err").height($(window).height()).width($(window).width()).show()}function noErr(){$("#err").hide()}
function calcRec(a){var b=0<$("#maxvg:checked").length;b?($("#pglab").hide(),$(".vglab").hide()):($("#pglab").show(),$(".vglab").show());neg=0;tml=$("#res").val();tstr=$("#tstre").val();str=$("#nstr").val();str=0<str?str:1;$("#rnstr").html(str+" mg");wv=$("#wvpga").val();var c=0;0==wv?$("#rwvpga").hide():$("#rwvpga").show();"undefined"!=typeof a&&("pgg"==a?$("#vgg").val(100-$("#pgg").val()):"vgg"==a?$("#pgg").val(100-$("#vgg").val()):"nivg"==a?$("#nipg").val(100-$("#nivg").val()):"nipg"==a&&$("#nivg").val(100-
$("#nipg").val()));pg=$("#pgg").val();vg=$("#vgg").val();b&&(pg=100,vg=0);npg=$("#nipg").val();nvg=$("#nivg").val();dpml=$("#xdpml").val();tg=tp=td=tm=resml=0;nicml=Math.round(tstr/str*tml*100)/100;nicdrops=Math.ceil(nicml*dpml);nicgrams=Math.round(100*(npg/100*nicml*1.036+nvg/100*nicml*1.261))/100;nicper=Math.round(nicml/tml*1E4)/100;$("#rnicml").html(nicml);$("#rnicdr").html(nicdrops);$("#rnicg").html(nicgrams);$("#rnicper").html(nicper);resml+=nicml;tm+=nicml;td+=nicdrops;tp+=nicper;tg+=nicgrams;
c+=pr.nic*nicml;wvml=Math.round(wv/100*tml*100)/100;wvdrops=Math.ceil(wvml*dpml);wvgrams=Math.round(93.8*wvml)/100;wvper=Math.round(wvml/tml*1E4)/100;$("#rwvpgaml").html(wvml);$("#rwvpgadr").html(wvdrops);$("#rwvpgag").html(wvgrams);$("#rwvpgaper").html(wvper);resml+=wvml;tm+=wvml;td+=wvdrops;tp+=wvper;tg+=wvgrams;c+=pr.wvpga*wvml;fltot=foml=fvgml=fpgml=0;a=!1;for(i=1;i<=nflav;i++)if(fl=$("#f"+i).val(),!isNaN(fl)){flml=Math.round(fl/100*tml*1E3)/1E3;fltot+=flml;fldr=Math.ceil(flml*dpml);flper=Math.round(flml/
tml*1E4)/100;flml=Math.round(100*flml)/100;$("#flu"+i).html(flml);$("#fld"+i).html(fldr);$("#flp"+i).html(flper);resml+=flml;tm+=flml;td+=fldr;tp+=flper;rbv=$("input[name='fpvo"+i+"']:checked").val();var d=$("#fw"+i).val();0==rbv?(fpgml+=flml,fgadj=0!=d?d:1):1==rbv?(fvgml+=flml,fgadj=0!=d?d:1.16):(foml+=flml,fgadj=0!=d?d:.98);flg=Math.round(flml*fgadj*100)/100;tg+=flg;$("#flg"+i).html(flg);c+=0<$("#fw"+i).data("prml")?$("#fw"+i).data("prml")*flml:0;if(!$("#fw"+i).data("prml")||0<$("#fw"+i).data("prml")&&
0==$("#fw"+i).data("prml")*flml)a=!0}restml=tml-resml;xpgml=Math.round(100*(pg/100*(tml-wvml-foml)-npg/100*nicml-fpgml))/100;c+=pr.pg*xpgml;xpgdrop=Math.ceil(xpgml*dpml);xpggrams=Math.ceil(1.036*xpgml*100)/100;xpgper=Math.round(xpgml/tml*1E4)/100;0>xpgml&&(neg=1);0==xpgml?(xpgper=xpgdrop=0,$("#rpgd").hide()):$("#rpgd").show();xvgml=Math.round(100*(vg/100*(tml-wvml-foml)-nvg/100*nicml-fvgml))/100;c+=pr.vg*xvgml;xvgdrop=Math.ceil(xvgml*dpml);xvggrams=Math.ceil(126.1*xvgml)/100;xvgper=Math.round(xvgml/
tml*1E4)/100;b&&(c-=pr.pg*xpgml,c+=pr.vg*xpgml,xvgml=Math.round(100*(xpgml+xvgml))/100,xvgdrop=Math.ceil(xvgml*dpml),xvggrams=Math.ceil(126.1*xvgml)/100,xvgper=Math.round(xvgml/tml*1E3)/10,xpgper=xpggrams=xpgdrop=xpgml=0,$("#rpgd").hide());0>xvgml&&(neg=1);0==xvgml?(xvgper=xpvdrop=0,$("#rvgd").hide()):$("#rvgd").show();tm+=xpgml+xvgml;td+=xpgdrop+xvgdrop;tp+=xpgper+xvgper;tg+=xpggrams+xvggrams;$("#rpgml").html(xpgml);$("#rpgdr").html(xpgdrop);$("#rpgg").html(xpggrams);$("#rpgper").html(xpgper);$("#rvgml").html(xvgml);
$("#rvgg").html(xvggrams);$("#rvgdr").html(xvgdrop);$("#rvgper").html(xvgper);$("#rtu").html(Math.round(100*tm)/100);$("#rtg").html(Math.round(100*tg)/100);$("#rtd").html(td);$("#fstr").html(Math.round(nicml/tm*str*10)/10);tvg=nvg/100*nicml+fvgml+xvgml;tpg=npg/100*nicml+fpgml+xpgml;vgr=Math.round(100*tvg/(tvg+tpg));pgr=Math.round(100*tpg/(tvg+tpg));$("#pvr").html(pgr+"/"+vgr);$("#rtp").html(Math.round(tp));theprice=c.toFixed(2);$("#pri").html(theprice);a?$("#warnpri").show():$("#warnpri").hide();
"0.00"==theprice&&$("shpri").hide();var e=1;$(".recline:visible").each(function(){e++;0==e%2?$(this).addClass("highlight"):$(this).removeClass("highlight")});1==neg?($("#ermsg").html(neg_val_error).show("fast"),$("#savebtn").attr("disabled","disabled")):($("#ermsg").hide("fast"),$("#savebtn").removeAttr("disabled"));100==npg?$("#nirat").html(npg+"% PG"):100==nvg?$("#nirat").html(nvg+"% VG"):$("#nirat").html(npg+"/"+nvg+" PG/VG");$("#flml").html(Math.round(100*fltot)/100+" ml");$("#flper").html(Math.round(1E4*
fltot/tml)/100+"%");$("#dpml").html(dpml);$("#bn").width(Math.round(nicper)+"%");$("#bp").width(Math.round(xpgper)+"%");$("#bv").width(Math.round(xvgper)+"%");$("#bf").width(100-(Math.round(nicper)+Math.round(xpgper)+Math.round(xvgper))+"%");b=parseFloat($("#rnicml").html());c=parseFloat($("#rnicdr").html());a=parseFloat($("#rnicg").html());d=parseFloat($("#rnicper").html());0<$("#rpgml:visible").length&&(b+=parseFloat($("#rpgml").html()),c+=parseFloat($("#rpgdr").html()),a+=parseFloat($("#rpgg").html()),
d+=parseFloat($("#rpgper").html()));0<$("#rvgml:visible").length&&(b+=parseFloat($("#rvgml").html()),c+=parseFloat($("#rvgdr").html()),a+=parseFloat($("#rvgg").html()),d+=parseFloat($("#rvgper").html()));0<$("#rvwpgaml:visible").length&&(b+=parseFloat($("#rvwpgaml").html()),c+=parseFloat($("#rvwpgadr").html()),a+=parseFloat($("#rvwpgag").html()),d+=parseFloat($("#rvwpgaper").html()));$("#totbaseml").html(Math.round(100*b)/100);$("#totbasedr").html(Math.round(100*c)/100);$("#totbaseg").html(Math.round(100*
a)/100);$("#totbaseper").html(Math.round(100*d)/100)}function chName(a){$("#rfl"+a).html($("#ft"+a).val())}function doNotes(){$("#rnotes").html($("#notes").val().replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,"$1<br>$2"))}function rName(){$("#rname").html($("#title").val())}function selName(a){$("#ft"+a).val()==flavtxt+" "+a&&$("#ft"+a).select()}
function chkFrm(){if(loggedin)return $("#title").val()==recnamedef||""==$.trim($("#title").val())?(alert(change_def_name),!1):!0;alert(not_logged_in_msg);return!1}
(function(a){a.fn.autogrow=function(b){this.filter("textarea").each(function(){var b=a(this),d=b.height();b.css("lineHeight");var e=a("<div></div>").css({position:"absolute",top:-1E4,left:-1E4,width:a(this).width()-parseInt(b.css("paddingLeft"))-parseInt(b.css("paddingRight"))-3,fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily"),lineHeight:b.css("lineHeight"),resize:"none"}).appendTo(document.body),b=function(){var b=this.value.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&/g,"&amp;").replace(/\n$/,
"<br/>&nbsp;").replace(/\n/g,"<br/>").replace(/ {2,}/g,function(a){for(var b=0,c="";b<a.length-1;b++)c+="&nbsp;";return c+" "});e.html(b);a(this).css("height",Math.max(e.height()+20,d))};a(this).change(b).keyup(b).keydown(b);b.apply(this)});return this}})(jQuery);function doFav(a){$.post("/favorite",{makefav:a},function(a){$("#favicon").attr("src","/img/heart"+a+".png");ga("send","event","Favorite","AddFavorite",$("#title").val());$("#favmenutext").text(1==a?favmenulinkrem:favmenulinkadd)})}
function chkCmt(){(ok=0<$("#cmt").val().length)||alert(no_comment_msg);ga("send","event","Comment","Recipe",$("#title").val());return ok}function doEdit(a){$("#acttext").html(edit_text);ga("send","event","Recipe","Edit",$("#title").val());$("#orgid").val(a);$("#frmrec").show("fast");$("#baseon").hide();$("#title").focus()}
function showRecEdit(){$("#actbut").hide();$(".drprml").show();$("#details").css('display','none');$("#acttext").html(adapt_text);$("#orgid").val("");$("#ispriv").prop("checked",!0);$("#frmrec").show("fast");$("#baseon").hide();$("#title").focus();$("#byuser").html(by_you);$("#grav").attr("src","http://www.gravatar.com/avatar/"+mygrav+"?d=http%3A%2F%2Fe-liquid-recipes.com%2Fimg%2Favatar_40.png&s=40");$("#res").val(mdef.res);$("#tstre").val(mdef.tstre);$("#wvpga").val(mdef.wvpga);$("#pgg").val(mdef.pgg);$("#vgg").val(mdef.vgg);$("#nstr").val(mdef.nstr);$("#nipg").val(mdef.nipg);
$("#nivg").val(mdef.nivg);$("#xdpml").val(mdef.xdpml);calcRec();ga("send","event","Recipe","Adapt",$("#title").val())}
function copyReddit(a){if(a=a?1==a:!1)var b="**["+$("#rname").text()+" (base)]("+window.location.href+")**\r\n\r\n",b=b+"Ingredient|ml|g|%\r\n:---|---:|---:|---:\r\n";else b="**["+$("#rname").text()+"]("+window.location.href+")**\r\n\r\n",b+="Ingredient|%\r\n:---|---:\r\n";for(i=1;i<=nflav;i++)fl=filterFloat($("#flp"+i).text()),isNaN(fl)||(b=a?b+($("#rfl"+i).text().trim()+"|"+$("#flu"+i).text()+"|"+$("#flg"+i).text()+"|"+$("#flp"+i).text()+"\r\n"):b+($("#rfl"+i).text().trim()+"|"+$("#flp"+i).text()+
"\r\n"));a?(b+="\r\nTotal base: "+$("#res").val()+" ml  \r\n",b+="To be mixed at: "+$("#tperc").text()+"%  \r\n",b+="This is enough for "+$("#tmix").text()+" ml of finished liquid.  \r\n"):b+="\r\nFlavor total: "+$("#flper").text()+"\r\n\r\n";return b+="Remember to rate it at [e-liquid-recipes.com!]("+window.location.href+")\r\n\r\n"}
function copyBbcode(a){if(a=a?1==a:!1)var b='[SIZE=3][url="'+window.location.href+'"]'+$("#rname").text()+" (base)[/URL][/SIZE]\r\n\r\n",b=b+"[TABLE][TR][TH]Ingredient[/TH][TH]ml[/TH][TH]g[/TH][TH]%[/TH][/TR]\r\n";else b='[SIZE=3][url="'+$("#short").val()+'"]'+$("#rname").text()+"[/URL][/SIZE]\r\n\r\n",b+="[TABLE][TR][TH]Ingredient[/TH][TH]%[/TH][/TR]\r\n";for(i=1;i<=nflav;i++)fl=filterFloat($("#flp"+i).text()),isNaN(fl)||(b=a?b+("[TR][TD]"+$("#rfl"+i).text().trim()+"[/TD][TD]"+$("#flu"+i).text()+
"[/TD][TD]"+$("#flg"+i).text()+"[/TD][TD]"+$("#flp"+i).text()+"[/TD][/TR]\r\n"):b+("[TR][TD]"+$("#rfl"+i).text().trim()+"[/TD][TD]"+$("#flp"+i).text()+"[/TD][/TR]\r\n"));a?(b=b+"[/TABLE]\r\n\r\n"+("Total base: "+$("#res").val()+" ml\r\n"),b+="To be mixed at: "+$("#tperc").text()+"%\r\n",b+="This is enough for "+$("#tmix").text()+" ml of finished liquid.\r\n",b+='Remember to rate it at [URL="'+window.location.href+'"]e-liquid-recipes.com![/URL]\r\n\r\n'):(b+="[/TABLE]\r\n\r\nFlavor total: "+$("#flper").text()+
"\r\n\r\n",b+='Remember to rate it at [URL="'+$("#short").val()+'"]e-liquid-recipes.com![/URL]\r\n\r\n');return b}
function copyHtml(a){var b=(a=a?1==a:!1)?'<h2><a href="'+window.location.href+'">'+$("#rname").text()+" (base)</a></h2>\r\n":'<h2><a href="'+$("#short").val()+'">'+$("#rname").text()+"</a></h2>\r\n",b=a?b+"<table><tr><th>Ingredient</th><th>ml</th><th>g</th><th>%</th></tr>\r\n":b+"<table><tr><th>Ingredient</th><th>%</th></tr>\r\n";for(i=1;i<=nflav;i++)fl=filterFloat($("#flp"+i).text()),isNaN(fl)||(b=a?b+("<tr><td>"+$("#rfl"+i).text().trim()+"</td><td>"+$("#flu"+i).text()+"</td><td>"+$("#flg"+i).text()+
"</td><td>"+$("#flp"+i).text()+"</td></tr>\r\n"):b+("<tr><td>"+$("#rfl"+i).text().trim()+"</td><td>"+$("#flp"+i).text()+"</td></tr>\r\n"));a?(b=b+"</table><br>"+("Total base: "+$("#res").val()+" ml<br>"),b+="To be mixed at: "+$("#tperc").text()+"%<br>",b+="This is enough for "+$("#tmix").text()+" ml of finished liquid.<br>",b+='Remember to rate it at <a href="'+window.location.href+'">e-liquid-recipes.com!</a>\r\n\r\n'):(b+="</table><br>Flavor total: "+$("#flper").text()+"<br><br>",b+='Remember to rate it at <a href="'+
$("#short").val()+'">e-liquid-recipes.com!</a>\r\n\r\n');return b}
function copySimple(a){var b=(a=a?1==a:!1)?$("#rname").text()+" (base): "+window.location.href+"\r\n\r\n":$("#rname").text()+": "+window.location.href+"\r\n\r\n";for(i=1;i<=nflav;i++)fl=filterFloat($("#flp"+i).text()),isNaN(fl)||(b+=" "+$("#flp"+i).text()+"% "+$("#rfl"+i).text()+"   \r\n");a?(b+="\r\n\r\nTotal base: "+$("#res").val()+" ml\r\n",b+="To be mixed at: "+$("#tperc").text()+"%\r\n",b+="Remember to rate it at: "+window.location.href+"\r\n\r\n"):(b+="\r\nFlavor total: "+$("#flper").text()+
"\r\n",b+="Remember to rate it at: "+$("#short").val()+"\r\n\r\n");return b}
function calcBase(a){var b=0,c=$("#res").val(),d,e,g,h=0,k=0,l=0;for(i=1;i<=nflav;i++)f=parseFloat($("#flu"+i).data("perc")),isNaN(f)||(b+=f);if(!0!==a){if($("#finper").val()<b){$("#tfper").html(b);$("#fal").show();return}if($("#finper").val()==b)$("#recpg").hide();else{var f=Math.round(100*($("#finper").val()-b))/100,b=$("#finper").val();d=Math.round(f/b*c*100)/100;e=Math.round(100*d)/100;g=filterFloat($("#flwper").val());$("#flupg").text(e);$("#flgpg").text(Math.round(e*g*100)/100);$("#flppg").text(Math.round(d/
c*1E4)/100);0==nflav%2&&$("#recpg").addClass("highlight");$("#recpg").show()}}$("#fal").hide();for(i=1;i<=nflav;i++)f=parseFloat($("#flu"+i).data("perc")),isNaN(f)||(d=Math.round(f/b*c*100)/100,e=Math.round(100*d)/100,g=filterFloat($("#flw"+i).val()),isNaN(g)&&(g=1,"1"==$("#dt"+i).text()?g=1.16:"2"==$("#dt"+i).text()&&(g=.98)),$("#flu"+i).text(e),$("#flg"+i).text(Math.round(e*g*100)/100),$("#flp"+i).text(Math.round(d/c*1E4)/100),h+=f/b*c,k+=f/b*c*g,l+=f/b*c/c);$("#tperc").text(Math.round(100*b)/100);
$("#tmix").text(Math.round(c/b*100));$("#totml").text(Math.round(100*h)/100);$("#totg").text(Math.round(100*k)/100);$("#totp").text(Math.round(1E4*l)/100);!0===a&&$("#finper").val(Math.round(100*b)/100)}function saveFlavorBaseDef(a){parseInt(a)&&$.post(window.location.href,{ml:a})}function handleMaxVG(){calcRec()}
function hideToggler(){var a=$(this);$(this).nextAll().each(function(){var b=$(this);if(!$(this).hasClass("collapsible")){if(!$(this).children().first().hasClass("collapsible"))return!1;b=$(this).children().first()}b.slideToggle("fast",function(){a.children("i[class*=chevron]").remove();a.append(' <i class="icon icon-chevron-'+($(this).is(":visible")?"down":"right")+'"></i>')})})};
/*
@Author
@Duan By 2016.08.10
*/
function saveBtn(){saveCache();$("#frmrec").css("display","none");$("#insclick").css("display","none");$("#details").css("display","block");$("#actbut").show();$(".rgrams").hide();$(".rdrops").show();scroll(0,0)};
function deductFlavor(){
  if(nflav==3)return;
  $("#inputFlavor"+nflav).remove();
  $("#showFlavor"+nflav).remove();
  calcRec();
  nflav--;

}

 function saveCache(){
 	mdef.res = $("#res").val();
 	mdef.tstre = $("#tstre").val();
 	mdef.wvpga = $("#wvpga").val();
 	mdef.pgg = $("#pgg").val();
 	mdef.vgg = $("#vgg").val();
 	mdef.maxvg = $("#maxvg").val();
 	mdef.nstr = $("#nstr").val();
 	mdef.nipg = $("#nipg").val();
 	mdef.nivg = $("#nivg").val();
 	mdef.xdpml = $("#xdpml").val();
 }

 function addFlavorCSS(){
   if (/(Android|webOS|iPhone|iPod|BlackBerry)/i.test(navigator.userAgent)) {
   }else{
       $("input[class*='ftext ui-autocomplete-input']").css("width","210px");
       $("div[class*='recline']").css("width","450px");
   }
}
