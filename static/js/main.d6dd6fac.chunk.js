(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={title:"Resume_title__XuweQ",line2:"Resume_line2__7Ttsb",sectionTitle:"Resume_sectionTitle__B8ZNm",sectionList:"Resume_sectionList__2o6To",sectionListItem:"Resume_sectionListItem__2Ij6F",itemTitle:"Resume_itemTitle__1o88W",itemTime:"Resume_itemTime__3HuL3",itemDesc:"Resume_itemDesc__YtzAn",skillsListItem:"Resume_skillsListItem__2ROta",skillsItemTitle:"Resume_skillsItemTitle__29Ukh",skillsItemNum:"Resume_skillsItemNum__2HpqC",skillsItemBg:"Resume_skillsItemBg__1vPuT",skillsItemBgSpan:"Resume_skillsItemBgSpan__Qow-Z"}},,,,,,,function(e,t,a){e.exports={title:"Profile_title__2xHaw",titleName:"Profile_titleName__3kVzb",line1:"Profile_line1__3-h3F",line2:"Profile_line2__3jsbR",desc:"Profile_desc__2bMhI",info:"Profile_info__1PSH1",infoTitle:"Profile_infoTitle__3_FJB",list:"Profile_list__3u8ot",listItem:"Profile_listItem__5q6gh",listItemEm:"Profile_listItemEm__2ekvK",listItemSpan:"Profile_listItemSpan__EU6en",listItemLink:"Profile_listItemLink__3cSsy"}},function(e,t,a){e.exports={container:"Nav_container__HnBZM",avatar:"Nav_avatar__3pO6f",avatarImg:"Nav_avatarImg__3V5lB",list:"Nav_list__1WrOJ",listItem:"Nav_listItem__2y2tF",listItemText:"Nav_listItemText__3vEHK",listItemIcon:"Nav_listItemIcon__1K5BS",activeItem:"Nav_activeItem__1UCZt"}},function(e,t,a){e.exports={title:"Work_title__2QlVW",navList:"Work_navList__3p9jb",navListItem:"Work_navListItem__1xjIf",activeItem:"Work_activeItem__1RdQR",list:"Work_list__2E-9V",listItem:"Work_listItem__u68w-",video:"Work_video__3wjn_",image:"Work_image__3SI9G"}},function(e,t,a){e.exports={title:"About_title__1SxXh",line2:"About_line2__393k8",sectionTitle:"About_sectionTitle__1zfYR",honorList:"About_honorList__23l3O",honorListItem:"About_honorListItem__a2_oX",listItemIcon:"About_listItemIcon__1yM-s"}},function(e,t,a){e.exports={title:"Contact_title__eBNRR",map:"Contact_map__35NCX",list:"Contact_list__1rqPl",listItem:"Contact_listItem__1SjMQ",listItemIcon:"Contact_listItemIcon__iwuho",listItemLink:"Contact_listItemLink__2TuOq"}},function(e,t,a){},,function(e,t,a){e.exports={container:"Home_container__3JIxn",nav:"Home_nav__xzk8X",content:"Home_content__37xru"}},,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(17),c=a.n(l),s=(a(24),a(3)),m=a(4),r=a(6),o=a(5),u=a(7),_=a(14),p=a(2),d=a.n(p),f=a(9),v=a.n(f),h={1:"\u81ea\u6211\u4ecb\u7ecd",2:"\u5de5\u4f5c\u77ac\u95f4",3:"\u5de5\u4f5c\u7ecf\u5386",4:"\u5173\u4e8e\u6211",5:"\u8054\u7cfb\u65b9\u5f0f"},I={1:"user",2:"briefcase",3:"file-text",4:"star",5:"envelope"},E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={index:1},a.handleChangeTab=function(e){return function(){var t=a.props.onChangeTab;a.setState({index:Number(e)}),t(Number(e))}},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.className,t=this.state.index,a=this.handleChangeTab,n=d()(v.a.container,e);return i.a.createElement("div",{className:n},i.a.createElement("div",{className:v.a.avatar},i.a.createElement("img",{className:v.a.avatarImg,src:"",alt:""})),i.a.createElement("ul",{className:v.a.list},Object.keys(h).map(function(e){return i.a.createElement("li",{className:d()(v.a.listItem,Object(_.a)({},v.a.activeItem,t===Number(e))),key:e,onClick:a(e)},i.a.createElement("span",{className:v.a.listItemText},h[e]),i.a.createElement("i",{className:d()("fa","fa-".concat(I[e]),v.a.listItemIcon)}))})))}}]),t}(n.Component);E.defaultProps={className:"",onChangeTab:function(){}};a(13);var N=a(8),y=a.n(N),k=[{key:"\u59d3\u540d",value:"Robb Armstrong"},{key:"\u6bd5\u4e1a",value:"2017.06"},{key:"\u751f\u65e5",value:"1995.07.06"},{key:"\u90ae\u7bb1",value:"fan_sqiao@163.com"},{key:"\u5730\u5740",value:"\u5317\u4eac\u5e02\u671d\u9633\u533a"},{key:"\u8054\u7cfb\u7535\u8bdd",value:"18600946777"}],b=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",{className:d()("animated fadeInDown",y.a.title)},"Hello, I am",i.a.createElement("span",{className:y.a.titleName}," Robb Armstrong"),i.a.createElement("br",null),"Designer and Front-end Developer"),i.a.createElement("div",{className:y.a.line1}),i.a.createElement("p",{className:d()("animated fadeInDown",y.a.desc)},"I have ten years experience as a web/interface designer. I have a love of clean, elegant styling, and I have lots of experience in the production of CSS and (X)HTML for modern websites. I have a reasonable grasp of using JavaScript frameworks, specifically jQuery."),i.a.createElement("div",{className:d()("animated flipInX",y.a.info)},i.a.createElement("h4",{className:y.a.infoTitle},"\u4e2a\u4eba\u4fe1\u606f"),i.a.createElement("div",{className:y.a.line2}),i.a.createElement("ul",{className:y.a.list},k.map(function(e){return i.a.createElement("li",{className:y.a.listItem,key:e.key},i.a.createElement("div",null,i.a.createElement("em",{className:y.a.listItemEm},e.key),e.key.includes("\u7535\u8bdd")?i.a.createElement("span",{className:y.a.listItemSpan},i.a.createElement("a",{className:y.a.listItemLink,href:"tel://".concat(e.value)},e.value)):i.a.createElement("span",{className:y.a.listItemSpan},e.value)))}))))}}]),t}(n.Component),g=a(10),j=a.n(g),O=[1,2,3,4,5,6],L=[{key:1,type:"\u5de5\u4f5c",list:O},{key:2,type:"\u4e3b\u6301",list:[{key:21,imgUrl:"https://shp.qpic.cn/ttkg/130117453/3a32cfe95872c6bc047e47ef83f9fafc598164af/640"},{key:22,imgUrl:"https://shp.qpic.cn/ttkg/130117453/290dcfe95872c6bc047e47ef83f9fafc5981dcac/640"},{key:23,imgUrl:"https://shp.qpic.cn/ttkg/130117453/250be7ed5872c6bc047e47ef83f9fafc5981acae/640"},{key:24,imgUrl:""},{key:25,imgUrl:""}]},{key:3,type:"\u914d\u97f3",list:[{key:31,isVideo:!0,imgUrl:"http://img4.peiyinxiu.com/20161208093933b4dbb84c9e260e.jpg",src:"http://video4.peiyinxiu.com/20181126181344d4dafb_f_1943387.mp4"},{key:32,isVideo:!0,imgUrl:"http://img4.peiyinxiu.com/201404041803e7648d0b32e7e450.jpg",src:"http://video4.peiyinxiu.com/201505111858fa44e4594e359702.mp4"},{key:33,isVideo:!0,imgUrl:"http://img4.peiyinxiu.com/201405261108d1d40a588881e67a.jpg",src:"http://video4.peiyinxiu.com/20150128080402d4b2eb5f35993a.mp4"},{key:34,isVideo:!0,imgUrl:"http://img4.peiyinxiu.com/201602271737268421f855e68bf5.jpg",src:"http://video4.peiyinxiu.com/201812081728019475f9_f_1943387.mp4"},{key:35,isVideo:!0,imgUrl:"http://img4.peiyinxiu.com/201801222246a0e4d75b0daf863a.jpg",src:"http://video4.peiyinxiu.com/2018012422437454632951f83d2d.mp4"},{key:36,isVideo:!0,imgUrl:"http://img4.peiyinxiu.com/201505171727d6b4c019ff8fbcc6.jpg",src:"http://video4.peiyinxiu.com/201805151717cdd40788d1be78e5.mp4"},{key:37,isVideo:!0,imgUrl:"http://img4.peiyinxiu.com/2018051423104d14d4fb44cc86f0.jpg",src:"http://video4.peiyinxiu.com/2019030420137a5456c9_f_1943387.mp4"}]},{key:4,type:"\u8fd0\u52a8",list:[10,20,30,40,50,60]},{key:5,type:"\u65c5\u6e38",list:[10,20,30,40,50,60]}],w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={active:1,activeList:O},a.handleChangeListItem=function(e){return function(){a.setState({active:e.key,activeList:e.list})}},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state,t=e.active,a=e.activeList,n=this.handleChangeListItem;return i.a.createElement("div",null,i.a.createElement("h2",{className:d()("animated fadeInDown",j.a.title)},"\u5de5\u4f5c\u77ac\u95f4"),i.a.createElement("ul",{className:j.a.navList},L.map(function(e){return i.a.createElement("li",{className:d()(j.a.navListItem,Object(_.a)({},j.a.activeItem,t===e.key)),key:e.key,onClick:n(e)},e.type)})),i.a.createElement("ul",{className:j.a.list},a.map(function(e){return i.a.createElement("li",{className:d()("animated flipInX",j.a.listItem),key:e.key||e},e.isVideo?i.a.createElement("video",{className:j.a.video,poster:e.imgUrl,controls:!0,playsInline:!0,"data-type":"play"},i.a.createElement("source",{src:e.src,type:"video/mp4"})):i.a.createElement("img",{className:j.a.image,src:e.imgUrl,alt:""}))})))}}]),t}(n.Component),T=a(1),x=a.n(T),C=[{title:"\u4ee3\u8868\u6211\u6821\u5230\u5e7f\u5dde\u62db\u751f",time:"2016.05",desc:"\u968f\u6211\u9662\u5b66\u5de5\u529e\u4e3b\u4efb\u5230\u5e7f\u5dde\u53c2\u52a0\u5168\u56fd\u9ad8\u6821\u62db\u751f\u5ba3\u4f20\u4f1a"},{title:"\u5e02\u9886\u5bfc\u7684\u63a5\u5f85\u3001\u8bb2\u89e3",time:"2016.04",desc:"\u7701\u3001\u5e02\u9886\u68c0\u67e5\u6211\u9662\u5fae\u79d1\u521b\u65b0\u521b\u4e1a\u57fa\u5730\u65f6\u8d1f\u8d23\u8bb2\u89e3\u63a5\u5f85"},{title:"\u9662\u5b66\u751f\u4f1a\u4e3b\u5e2d",time:"2015-2016",desc:"\u8d1f\u8d23\u5168\u9662\u5b66\u751f\u5de5\u4f5c\u7684\u6b63\u5e38\u5f00\u5c55\uff0c\u52a0\u5f3a\u521b\u65b0\uff0c\u63a8\u884c\u6bcf\u5468\u4e00\u661f\uff0c\u83b7\u5f97\u4e862015\u5e74\u5ea6\u5b66\u751f\u5de5\u4f5c\u5148\u8fdb\u5355\u4f4d"},{title:"\u6821\u5e7f\u64ad\u7535\u89c6\u53f0\u64ad\u97f3\u90e8\u90e8\u957f\u3001\u9662\u6587\u827a\u90e8\u90e8\u957f",time:"2014-2015",desc:"\u5f00\u53d1\u5e76\u5236\u4f5c\u5b66\u6821\u5e7f\u64ad\u8282\u76ee\u3001\u4e3e\u529e\u5b66\u9662\u5927\u578b\u6587\u827a\u665a\u4f1a\uff0c\u5982\u8fce\u65b0\u665a\u4f1a\u3001\u5973\u751f\u8282\u665a\u4f1a\u3001\u6bd5\u4e1a\u665a\u4f1a\u7b49\uff0c\u4e3b\u6301\u7701\u7ea7\u6bd4\u8d5b"},{title:"\u9662\u56e2\u603b\u652f\u4e66\u8bb0\u517c\u5b66\u751f\u5206\u4f1a\u4e3b\u5e2d",time:"2013-2014",desc:"\u7ba1\u7406\u5927\u4e00\u5e74\u7ea7\u7684\u65e5\u5e38\u4e8b\u52a1\uff0c\u79ef\u6781\u53c2\u52a0\u5b66\u6821\u5404\u7c7b\u6587\u4f53\u6d3b\u52a8\uff0c\u8fd0\u52a8\u4f1a\u3001\u4e3b\u6301\u4eba\u5927\u8d5b\uff0c\u5e76\u52a0\u5165\u5b66\u6821\u58f0\u4e50\u90e8\u53c2\u52a0\u7701\u7ea7\u6bd4\u8d5b"}],R=[{title:"\u5317\u4eac\u795e\u5dde\u6570\u7801\u6e20\u9053\u9500\u552e\u5b9e\u4e60\u751f",time:"2016-2017.05",desc:"\u5e2e\u52a9\u5e76\u5b66\u4e60\u4e86\u5408\u540c\u63d0\u7cfb\u7edf\u3001\u63d0\u9500\u552e\u3001\u63d0\u76d6\u7ae0\uff1b\u534f\u540c\u5236\u4f5c\u4e86\u6807\u4e66\uff1b\u62c5\u4efb\u5e74\u4f1a\u4e3b\u6301\u4eba"},{title:"\u8054\u60f3\u5317\u4eac\u603b\u90e8\u8054\u60f3\u793e\u533a\u8fd0\u8425\u5b9e\u4e60\u751f",time:"2016.09-2016.11",desc:"\u505a\u6bcf\u5468\u7684KPI\u7edf\u8ba1\uff0c\u5404\u533a\u57df\u6bcf\u5468\u53d1\u56de\u8d34\u7edf\u8ba1\uff1b\u793e\u533a\u9996\u9875banner\u548c\u63a8\u8350\u5185\u5bb9\uff0c\u7f16\u8f91\u4e0e\u6574\u7406\u6d3b\u52a8\u5e16\u5b50\uff1b\u8054\u60f3\u516c\u53f8\u7684\u5927\u578b\u4ea7\u54c1\u63a8\u8350\u4f1a\u51fa\u4efb\u63a5\u5f85\u5458\uff1b\u7edf\u8ba1\u6838\u67e5\u4e862\u4e07\u884c\u7684\u7535\u8111\u5ef6\u4fdd\u662f\u5426\u8d85\u671f\u53ca\u56de\u64a4\uff1b\u62c5\u4efb\u300a\u8054\u60f3\u60c5\u62a5\u5c40\u300b\u7537\u4e3b\u6301\uff0c\u300a\u8054\u60f3\u9ed1\u91d1\u300b\u9a7b\u573a\u5ba2\u4e32"}],S=[{title:"\u666e\u5929\u79d1\u521b\u5b9e\u4e1a\u6709\u9650\u516c\u53f8\u56ed\u533a\u8fd0\u8425\u90e8\u5546\u52a1\u4e13\u5458\uff0c\u517c\u4efb\u673a\u5173\u8054\u5408\u56e2\u652f\u90e8\u4e66\u8bb0\u3001\u673a\u5173\u5de5\u4f1a\u6587\u4f53\u59d4\u5458",time:"2017.07-\u81f3\u4eca",desc:"\u4e3b\u8981\u8d1f\u8d23\u6d3b\u52a8\u7b56\u5212\u5de5\u4f5c\u3001\u5408\u540c\u6267\u884c\u5de5\u4f5c\u3001\u9879\u76ee\u7533\u62a5\u5de5\u4f5c\u3001\u56e2\u652f\u90e8\u5de5\u4f5c\u3002\u5148\u540e\u7ec4\u7ec7\u7b56\u5212\u4e86\u56ed\u533a\u7684\u5305\u997a\u5b50\u5927\u8d5b\u3001\u6444\u5f71\u6bd4\u8d5b\u7b49\u6d3b\u52a8\uff1b\u8d1f\u8d235\u5bb6\u4f01\u4e1a\u7684\u5ba2\u6237\u63a5\u5f85\u3001\u5408\u540c\u8c08\u5224\u548c\u6267\u884c\u3001\u534f\u52a9\u529e\u7406\u516c\u53f8\u5165\u9a7b\u4e8b\u5b9c\uff0c\u7d2f\u8ba1\u6536\u53d6\u623f\u5c4b\u79df\u91d16780 \u4f59\u4e07\u5143\uff1b\u7533\u62a5\u4e862017\u5e74\u671d\u9633\u533a\u5b58\u91cf\u5546\u52a1\u697c\u5b87\u7ecf\u6d4e\u9879\u76ee\uff0c\u88ab\u8bc4\u4e3a\u667a\u6167\u7269\u4e1a\uff0c\u4e3a\u4f01\u4e1a\u83b7\u5f9720\u4e07\u5143\u5956\u52b1\u30012018\u5e746\u6708\u7533\u62a5\u4e86\u56fd\u5bb6\u7b2c\u4e8c\u6279\u5de5\u4e1a\u9057\u4ea7\u9879\u76ee\u3001\u7533\u62a5\u4e862018\u5e74\u5317\u4eac\u5e02\u8bda \u4fe1\u4f01\u4e1a\u5e76\u901a\u8fc7\u4e86\u5ba1\u6838\uff1b\u7ec4\u7ec7\u56e2\u5458\u6df1\u5165\u5b66\u4e60\u9886\u4f1a\u4e60\u8fd1\u5e73\u603b\u4e66\u8bb0\u201c7.2\u201d\u91cd\u8981\u8bb2\u8bdd\u7cbe\u795e\uff0c\u6293\u597d\u56e2\u7684\u5341\u516b\u5927\u7cbe\u795e\u5b66\u4e60\u5ba3\u4f20\u8d2f\u5f7b\u5de5\u4f5c\uff0c\u63a8\u9009\u4e86\u4e2d\u592e\u4f01\u4e1a\u7cfb\u7edf\uff08\u5728\u4eac\uff09\u56e2\u5341\u516b\u5927\u4ee3\u8868\uff0c\u901a \u8fc7\u5b8c\u5584\u56e2\u5458\u7684\u767b\u8bb0\u3001\u6ce8\u518c\u3001\u8003\u6838\u7b49\u5de5\u4f5c\uff0c\u5efa\u7acb\u5065\u5168\u56e2\u7ec4\u7ec7\u7ed3\u6784\uff0c\u843d\u5b9e\u76f8\u5173\u56e2\u52a1\u5de5\u4f5c\u5236\u5ea6 \u89c4\u5b9a\u5e76\u79ef\u6781\u53c2\u52a0\u515a\u59d4\u7ec4\u7ec7\u7684\u56e2\u5efa\u6d3b\u52a8\uff1b\u4e3b\u6301\u4e862018\u521b\u54cd\u4e2d\u56fd\xb7\u4e2d\u56fd\u666e\u5929\u7ad9\u201c\u666e\u5929\u53cc\u521b \u676f\u201d\u9996\u5c4a\u521b\u65b0\u521b\u4e1a\u5927\u8d5b\u9881\u5956\u5178\u793c\u3001\u516c\u53f8\u515a\u5458\u77e5\u8bc6\u7ade\u8d5b\u3001\u6625\u8282\u8054\u6b22\u4f1a\u7b49\u3002"}],P=[{title:"\u7b56\u5212\u80fd\u529b",percent:"85%"},{title:"\u7ba1\u7406\u80fd\u529b",percent:"90%"},{title:"\u6267\u884c\u80fd\u529b",percent:"90%"},{title:"\u8bed\u8a00\u80fd\u529b",percent:"95%"}],U=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",{className:d()("animated fadeInDown",x.a.title)},"Resume"),i.a.createElement("section",{className:d()("animated slideInLeft")},i.a.createElement("h4",{className:x.a.sectionTitle},"\u5de5\u4f5c\u7ecf\u5386"),i.a.createElement("div",{className:x.a.line2}),i.a.createElement("ul",{className:x.a.sectionList},S.map(function(e){return i.a.createElement("li",{className:x.a.sectionListItem,key:e.time},i.a.createElement("h5",{className:x.a.itemTitle},i.a.createElement("span",{className:x.a.itemTime},e.time),e.title),i.a.createElement("p",{className:x.a.itemDesc},e.desc))}))),i.a.createElement("section",{className:d()("animated slideInLeft")},i.a.createElement("h4",{className:x.a.sectionTitle},"\u5b9e\u4e60\u5de5\u4f5c\u7ecf\u5386"),i.a.createElement("div",{className:x.a.line2}),i.a.createElement("ul",{className:x.a.sectionList},R.map(function(e){return i.a.createElement("li",{className:x.a.sectionListItem,key:e.time},i.a.createElement("h5",{className:x.a.itemTitle},i.a.createElement("span",{className:x.a.itemTime},e.time),e.title),i.a.createElement("p",{className:x.a.itemDesc},e.desc))}))),i.a.createElement("section",{className:d()("animated slideInLeft")},i.a.createElement("h4",{className:x.a.sectionTitle},"\u5b66\u751f\u5de5\u4f5c\u7ecf\u5386"),i.a.createElement("div",{className:x.a.line2}),i.a.createElement("ul",{className:x.a.sectionList},C.map(function(e){return i.a.createElement("li",{className:x.a.sectionListItem,key:e.title},i.a.createElement("h5",{className:x.a.itemTitle},i.a.createElement("span",{className:x.a.itemTime},e.time),e.title),i.a.createElement("p",{className:x.a.itemDesc},e.desc))}))),i.a.createElement("section",null,i.a.createElement("h4",{className:x.a.sectionTitle},"Skills"),i.a.createElement("div",{className:x.a.line2}),i.a.createElement("ul",{className:x.a.sectionList},P.map(function(e){return i.a.createElement("li",{className:x.a.skillsListItem,key:e.title},i.a.createElement("p",{className:x.a.skillsItemTitle},e.title,i.a.createElement("span",{className:x.a.skillsItemNum},e.percent)),i.a.createElement("div",{className:x.a.skillsItemBg},i.a.createElement("span",{className:x.a.skillsItemBgSpan,style:{width:"".concat(e.percent)}})))}))))}}]),t}(n.Component),A=a(11),B=a.n(A),W=["2016\u5e74\u6821\u7279\u6b8a\u8d21\u732e\u5956","2015\u5e74\u9662\u4f18\u79c0\u5b66\u751f\u5e72\u90e8","2015\u5e74\u6821\u5e7f\u64ad\u7535\u89c6\u53f0\u4f18\u79c0\u64ad\u97f3\u5458","2015\u5e74\u5b8c\u6210\u4e86\u8f85\u4fee\u4e13\u4e1a-\u672c\u6821\u4eba\u529b\u8d44\u6e90\u7ba1\u7406\u5b66\u4e60","2014\u5e74\u6e56\u5357\u7701\u5927\u5b66\u751f\u827a\u672f\u5c55\u4e09\u7b49\u5956\uff08\u56e2\u4f53\u5956\uff09","2014\u5e74\u6821\u6587\u4f53\u6d3b\u52a8\u5148\u8fdb\u4e2a\u4eba","2014\u5e74\u6821\u5e7f\u64ad\u7535\u89c6\u53f0\u4f18\u79c0\u90e8\u95e8\u8d1f\u8d23\u4eba","2013\u5e74\u6821\u4e3b\u6301\u4eba\u5927\u8d5b\u7b2c\u4e00\u540d","2013\u5e74\u6821\u4e3b\u6301\u4eba\u5927\u8d5b\u6700\u4f73\u4eba\u6c14\u5956","2013\u5e74\u9662\u56db\u5927\u624d\u827a\u8d5b\u7b2c\u4e00\u540d"],D=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",{className:d()("animated fadeInDown",B.a.title)},"\u5173\u4e8e\u6211"),i.a.createElement("section",{className:d()("animated slideInLeft",B.a.section)},i.a.createElement("p",{className:B.a.sectionTitle},"\u83b7\u5956\u7ecf\u5386"),i.a.createElement("div",{className:B.a.line2}),i.a.createElement("ul",{className:B.a.honorList},W.map(function(e){return i.a.createElement("li",{className:B.a.honorListItem,key:e},i.a.createElement("i",{className:d()("fa fa-tag",B.a.listItemIcon)}),e)}))))}}]),t}(n.Component),V=window.BMAP_ANIMATION_BOUNCE,H=a(12),M=a.n(H),q=[{icon:"home",value:"\u5317\u4eac\u5e02\u671d\u9633\u533a\u5c06\u53f0\u8def"},{icon:"phone",value:"188600946777"},{icon:"envelope",value:"fan_sqiao@163.com"}],X=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=window.BMap,t=new e.Map("allmap"),a=new e.Point(116.496253,39.97696);t.centerAndZoom(a,12),t.setCurrentCity("\u5317\u4eac"),t.enableScrollWheelZoom(!0),t.addControl(new e.ScaleControl);var n=new e.Marker(a);t.addOverlay(n),n.setAnimation(V);var i=new e.InfoWindow("\u671d\u9633\u533a\u5c06\u53f0\u8def");n.addEventListener("click",function(){this.openInfoWindow(i)})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",{className:d()("animated fadeInDown",M.a.title)},"\u8054\u7cfb\u6211"),i.a.createElement("div",{className:M.a.map},i.a.createElement("div",{id:"allmap",style:{width:"100%",height:"100%"}})),i.a.createElement("ul",{className:M.a.list},q.map(function(e){return i.a.createElement("li",{className:M.a.listItem,key:e.icon},i.a.createElement("i",{className:d()("fa","fa-".concat(e.icon),M.a.listItemIcon)}),"phone"===e.icon?i.a.createElement("a",{className:M.a.listItemLink,href:"tel://".concat(e.value)},e.value):e.value)})))}}]),t}(n.Component),J=a(15),Q=a.n(J),Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(r.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={active:1},a.handleChangeTab=function(e){a.setState({active:e})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.active,t=this.handleChangeTab;return i.a.createElement("div",{className:Q.a.container},i.a.createElement(E,{className:Q.a.nav,onChangeTab:t}),i.a.createElement("div",{className:Q.a.content},1===e?i.a.createElement(b,null):null,2===e?i.a.createElement(w,null):null,3===e?i.a.createElement(U,null):null,4===e?i.a.createElement(D,null):null,5===e?i.a.createElement(X,null):null))}}]),t}(n.Component),F=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(Z,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.d6dd6fac.chunk.js.map