(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{221:function(t,s,n){"use strict";n.r(s);var a=n(28),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"hello-event"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hello-event"}},[t._v("#")]),t._v(" Hello, event")]),t._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#什么是事件-event"}},[t._v("什么是事件(Event)?")]),n("ul",[n("li",[n("a",{attrs:{href:"#通俗的说法"}},[t._v("通俗的说法")])])])]),n("li",[n("a",{attrs:{href:"#如何监听事件"}},[t._v("如何监听事件")])]),n("li",[n("a",{attrs:{href:"#关于类型推断"}},[t._v("关于类型推断")])])])]),n("p"),t._v(" "),n("h2",{attrs:{id:"什么是事件-event"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么是事件-event"}},[t._v("#")]),t._v(" 什么是事件(Event)?")]),t._v(" "),n("p",[t._v("事件("),n("code",[t._v("Event")]),t._v(") 用于处理在无头客户端处广播的各式可观察事件, 并将其通过内置的事件处理机制进行分发.")]),t._v(" "),n("h3",{attrs:{id:"通俗的说法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通俗的说法"}},[t._v("#")]),t._v(" 通俗的说法")]),t._v(" "),n("p",[t._v('事件就是我们能看到的 "xxx被禁言了", "xxx群开全群禁言了" 这样的外部发生的状态变化.')]),t._v(" "),n("p",[t._v('我们将类似 "欸, 那个人被禁言辣", "欸, 这个群怎么群名变了" 这样的称为 "作为第三方观察到的外部发生的事件",\n而将类似 "机器人又被下管理了", "机器人被口球了" 这样以机器人账号为被执行者的称为 "作为被执行方所观察到的事件".')]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("其实, 你之前用到的 "),n("code",[t._v("FriendMessage")]),t._v(", "),n("code",[t._v("GroupMessage")]),t._v(",\n也是事件的一种特殊类型, 我们称这种特殊事件为 "),n("code",[t._v("Message")])])]),t._v(" "),n("h2",{attrs:{id:"如何监听事件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何监听事件"}},[t._v("#")]),t._v(" 如何监听事件")]),t._v(" "),n("p",[t._v("与之前使用的类似 "),n("code",[t._v('"FriendMessage"')]),t._v(" 一样, 你只需要将事件的名称传入 "),n("code",[t._v("Session.receiver")]),t._v(" 即可监听事件."),n("br"),t._v("\n事件的列表可以在"),n("a",{attrs:{href:"https://github.com/mamoe/mirai/blob/master/mirai-api-http/EventType_CH.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),n("OutboundLink")],1),t._v("看到.")]),t._v(" "),n("p",[t._v("当事件被传达时, "),n("code",[t._v("event_runner")]),t._v(" 会实例化一个 "),n("code",[t._v("EventContextBody")]),t._v("("),n("code",[t._v("mirai.prototypes.context.EventContextBody")]),t._v(")\n对象, 设置上下文对象 "),n("code",[t._v("EventContext")]),t._v("("),n("code",[t._v("mirai.context.event")]),t._v(" 或者 "),n("code",[t._v("mirai.Direct.Event")]),t._v("),\n并使用 "),n("code",[t._v("annotations")]),t._v(" 特性将参数传入事件运行主体运行.")]),t._v(" "),n("p",[t._v("这里是一个监听事件 "),n("code",[t._v('"MemberJoinEvent"')]),t._v(" 的实例.")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" mirai "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    Mirai"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Plain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" At"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MemberJoinEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    EventContextBody\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("receiver")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MemberJoinEvent"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("member_join")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mirai"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MemberJoinEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendGroupMessage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("member"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("group"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            At"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("member"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Plain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"欢迎进群!"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br")])]),n("p",[t._v("运行这段代码, 当有新成员加入有该机器人的群时, 机器人会发送一条欢迎消息.")]),t._v(" "),n("h2",{attrs:{id:"关于类型推断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关于类型推断"}},[t._v("#")]),t._v(" 关于类型推断")]),t._v(" "),n("p",[t._v("因为我们使用了 "),n("code",[t._v("annotations")]),t._v(" 的特性,\n你可以使用优雅的方式处理事件:")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("所有的事件模型都在包 "),n("code",[t._v("mirai.event.external")]),t._v(" 内被定义, 同时被公开到 "),n("code",[t._v("mirai")]),t._v(" 下, 你可以直接导入:")]),t._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" mirai "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    MemberJoinEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MemberJoinEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MemberLeaveEventKick"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MemberLeaveEventQuit"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    MemberCardChangeEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);