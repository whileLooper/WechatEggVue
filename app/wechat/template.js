'use strict';

const ejs = require('ejs');
const heredoc = require('heredoc');

const tpl = heredoc(function() {
  /*
    <xml>
    <ToUserName><![CDATA[<%= toUserName %>]]></ToUserName>
    <FromUserName><![CDATA[<%= fromUserName %>]]></FromUserName>
    <CreateTime><% createTime %></CreateTime>
    <MsgType><![CDATA[<%= msgType %>]]></MsgType>
    <% if (msgType === 'text') {%>
      <Content><![CDATA[<%= content %>]]></Content>
    <% } else if (msgType === 'image') {%>
      <Image>
        <MediaId><![CDATA[<%= content.media_id %>]]>
      </Image>
    <% } else if (msgType === 'voice') {%>
      <Image>
        <MediaId><![CDATA[<%= content.media_id %>]]></MediaId>
      </Image>
    <% } else if (msgType === 'video') {%>
      <Voice>
        <MediaId><![CDATA[<%= content.media_id %>]]></MediaId>
        <Title><![CDATA[<%= content.title %>]]></Title>
        <Description><![CDATA[<%= content.description %>]]></Description>
      </Voice>
    <% } else if (msgType === 'music') {%>
      <Music>
        <Title><![CDATA[<%=content.title%>]]></Title>
        <Description><![CDATA[<%=content.description%>]]></Description>
        <MusicUrl><![CDATA[<%=content.musicUrl || content.url %>]]></MusicUrl>
        <HQMusicUrl><![CDATA[<%=content.hqMusicUrl || content.hqUrl %>]]></HQMusicUrl>
      </Music>
    <% } else if (msgType === 'news') {%>
      <ArticleCount><%=content.length%></ArticleCount>
      <Articles>
      <% content.forEach(function(item){ %>
        <item>
          <Title><![CDATA[<%= item.title%>]]></Title>
          <Description><![CDATA[<%= item.description%>]]></Description>
          <PicUrl><![CDATA[<%= item.picUrl || item.picurl || item.pic || item.thumb_url %>]]></PicUrl>
          <Url><![CDATA[<%= item.url%>]]></Url>
        </item>
      <% }); %>
      </Articles>
    <% }%>
    </xml>
   */
});

const compiled = ejs.compile(tpl);
exports = module.exports = {
  compiled,
};
