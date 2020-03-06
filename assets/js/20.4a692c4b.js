(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{224:function(s,t,a){"use strict";a.r(t);var n=a(28),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"hello-world"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world"}},[s._v("#")]),s._v(" Hello World")]),s._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#启动无头客户端"}},[s._v("启动无头客户端")]),a("ul",[a("li",[a("a",{attrs:{href:"#成功依照其指示启动后"}},[s._v("成功依照其指示启动后")])])])]),a("li",[a("a",{attrs:{href:"#安装-python-mirai"}},[s._v("安装 python-mirai")]),a("ul",[a("li",[a("a",{attrs:{href:"#从-pypi-安装"}},[s._v("从 Pypi 安装")])]),a("li",[a("a",{attrs:{href:"#从-github-源代码仓库安装"}},[s._v("从 Github 源代码仓库安装")])])])]),a("li",[a("a",{attrs:{href:"#hello-world"}},[s._v("Hello, world!")]),a("ul",[a("li",[a("a",{attrs:{href:"#发生了什么"}},[s._v("发生了什么?")])])])])])]),a("p"),s._v(" "),a("h2",{attrs:{id:"启动无头客户端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动无头客户端"}},[s._v("#")]),s._v(" 启动无头客户端")]),s._v(" "),a("p",[s._v("由于 "),a("code",[s._v("python-mirai")]),s._v(" 基于 "),a("code",[s._v("mirai-http-api")]),s._v(" 实现, 所以若你想通过 "),a("code",[s._v("python-mirai")]),s._v(" 编写机器人,\n我建议你先按照Mirai的"),a("a",{attrs:{href:"https://github.com/mamoe/mirai/tree/master/mirai-console",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档"),a("OutboundLink")],1),s._v("启动一个\n"),a("code",[s._v("mirai-console")]),s._v(" 实例, 然后按照其输出进行操作即可")]),s._v(" "),a("h3",{attrs:{id:"成功依照其指示启动后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成功依照其指示启动后"}},[s._v("#")]),s._v(" 成功依照其指示启动后")]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("mirai-console.jar")]),s._v(" 同级目录下会有一个 "),a("code",[s._v("mirai.properties")]),s._v(" 文件, 打开这个文件, 大概是这样的:")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("HTTP_API_PORT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("8080")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("HTTP_API_AUTH_KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v('"xxxxxxxxxxxxxxxxxxx"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("HTTP_API_ENABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("将 "),a("code",[s._v("HTTP_API_AUTH_KEY")]),s._v(" 和 "),a("code",[s._v("HTTP_API_PORT")]),s._v(" 这两个字段的值记住, 接下来要用到")]),s._v(" "),a("h2",{attrs:{id:"安装-python-mirai"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-python-mirai"}},[s._v("#")]),s._v(" 安装 python-mirai")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("由于 "),a("code",[s._v("mirai")]),s._v(" 现在处于快速流转状态, 建议你在其结束前尽量使用来自仓库的源代码安装,\n以免导致接口不兼容的情况的发生.")])]),s._v(" "),a("h3",{attrs:{id:"从-pypi-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-pypi-安装"}},[s._v("#")]),s._v(" 从 Pypi 安装")]),s._v(" "),a("p",[s._v("从 Pypi 安装是获取 "),a("code",[s._v("python-mirai")]),s._v(" 最快捷的方式, 通常情况下, 从该来源安装的包较从源代码仓库安装更稳定, 但可能不包括新的特性.")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" kuriyama\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"从-github-源代码仓库安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-github-源代码仓库安装"}},[s._v("#")]),s._v(" 从 Github 源代码仓库安装")]),s._v(" "),a("p",[s._v("从 Github 源代码仓库安装是获取 "),a("code",[s._v("python-mirai")]),s._v(" 最新特性与兼容的唯一方式,\n通常的, 我们会尽量使仓库下的 "),a("code",[s._v("test.py")]),s._v(" 文件可以被执行,\n但这并不包含其他未被使用的特性.")]),s._v(" "),a("p",[s._v("从该途径安装, 需要你先安装好 "),a("code",[s._v("git")]),s._v(", "),a("code",[s._v("setuptools")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/Chenwe-i-lin/python-mirai\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" python-mirai\n$ pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -r requirements.txt\n$ python setup.py "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("若你还没有学习过 Python 的标准库 "),a("code",[s._v("asyncio")]),s._v(" 的基本用法,\n或是因为没有接触过这方面的内容,\n所以自己无法理解接下来的内容,\n那么请"),a("strong",[s._v("不要")]),s._v("将自己的怒火发泄到开发者身上.")]),s._v(" "),a("blockquote",[a("p",[s._v("无知不是什么挡箭牌, 只有知识的渊博才能使人成为受人敬仰的对象.")])])]),s._v(" "),a("h2",{attrs:{id:"hello-world-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-2"}},[s._v("#")]),s._v(" Hello, world!")]),s._v(" "),a("p",[s._v("代码实现最简单的机器人如下所示, 我们使用了标准库 "),a("code",[s._v("typing")]),s._v(" 以获得更好的开发体验."),a("br"),s._v("\n在这里我们将假设你已经配置好了 "),a("code",[s._v("mirai-console")]),s._v(" 及 "),a("code",[s._v("mirai-http-api")]),s._v(", 同时将一些关键信息设置为如下形式:")]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http-locate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost:8080"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 这里是表示 mirai-console 自带的 mirai-http-api 所启动的服务的地址, 不需要什么 "http://" 之类的')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("authKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this-is-a-authkey"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 字段 "HTTP_API_AUTH_KEY" 的值')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("qq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("183213564 ")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 你登录 mirai-console 用的QQ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("这是一段代码样例, 当有用户私聊机器人时, 会向其发送一条 "),a("code",[s._v('"Hello, world!"')]),s._v(".\n出于使任何人理解的目的, 我会带着你一一解析我们提供的 API .")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("由于"),a("a",{attrs:{href:"https://github.com/mamoe/mirai/issues/108",target:"_blank",rel:"noopener noreferrer"}},[s._v("客观原因"),a("OutboundLink")],1),s._v(", 导致目前 "),a("code",[s._v("FriendMessage")]),s._v(" 的事件监听无法使用..."),a("br"),s._v("\n我们会尽力给出解决方案.")])]),s._v(" "),a("p",[s._v("首先, 给出一段 "),a("code",[s._v("Hello, world!")]),s._v(" 代码:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" asyncio\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" mirai "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Friend\n\nauthKey "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this-is-a-authkey"')]),s._v("\nqq "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("183213564")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"mirai://localhost:8080/?authKey=')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("authKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("&qq=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("qq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("receiver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FriendMessage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("event_friendmessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Friend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendFriendMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n                sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("joinMainThread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    asyncio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" KeyboardInterrupt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("在运行这段代码后, 私聊你的机器人, 她会发送一条消息:")]),s._v(" "),a("panel-view",{attrs:{title:"聊天记录"}},[a("chat-message",{attrs:{nickname:"Alice",color:"#cc0066"}},[s._v("向这个世界问个好吧.")]),s._v(" "),a("chat-message",{attrs:{nickname:"Bot",avatar:s.$withBase("/mirai-head.png")}},[s._v("Hello, world!")])],1),s._v(" "),a("h3",{attrs:{id:"发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#发生了什么"}},[s._v("#")]),s._v(" 发生了什么?")]),s._v(" "),a("p",[s._v("我们会分几个章节来说明一个 "),a("code",[s._v("Hello, world")]),s._v(" 实例, 这里我们先介绍下 "),a("code",[s._v("Session")]),s._v("."),a("br"),s._v(" "),a("code",[s._v("Session")]),s._v(" 实例负责从无头客户端处获取消息/事件, 同时负责协调与执行事件.")]),s._v(" "),a("p",[s._v("首先, 我们从第"),a("code",[s._v("8")]),s._v("行开始解析.")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"mirai://localhost:8080/?authKey=')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("authKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("&qq=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("qq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("去除无关部分:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"mirai://localhost:8080/?authKey=')]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("authKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("&qq=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("qq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("你可以很清晰的看出, 我们使用了一个 URL 实例化了一个 "),a("code",[s._v("Session")]),s._v(" 对象, 这是推荐的做法."),a("br"),s._v("\n如果你需要传入具名参数, 需要使用类似 "),a("code",[s._v("host")]),s._v(", "),a("code",[s._v("port")]),s._v(", "),a("code",[s._v("qq")]),s._v(" 之类的字段, 也是可以的:")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("host"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" authKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("authKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" qq"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("qq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("无论如何, 在实例中, 我们都使用了 "),a("code",[s._v("async with")]),s._v(" 语法启动了 "),a("code",[s._v("Session")]),s._v(" 内部的相关机制,\n同时你的程序接收到了一个返回值, 这个返回值即是 "),a("code",[s._v("Session")]),s._v(" 对象本身.")]),s._v(" "),a("p",[s._v("到底发生了什么?")]),s._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("DETAILS")]),s._v(" "),a("p",[s._v("我们使用 异步上下文("),a("code",[s._v("async context manager")]),s._v(") 机制自动向无头客户端 "),a("code",[s._v("mirai-http-api")]),s._v(" 发起请求, 并完成以下几件事:")]),s._v(" "),a("ul",[a("li",[s._v("向无头客户端发起认证, 获取并记录 "),a("code",[s._v("sessionKey")])]),s._v(" "),a("li",[s._v("发起一次 "),a("code",[s._v("verify")]),s._v(" 请求, 绑定机器人的 qq")]),s._v(" "),a("li",[s._v("启动 短轮询/事务运行 线程, 用于从无头服务器端获取事件并传递事件到 "),a("code",[s._v("event_runner")]),s._v(".")])])]),s._v(" "),a("p",[s._v("然后我们使用 "),a("code",[s._v("Session.receiver")]),s._v(" 注册了事件 "),a("code",[s._v('"FriendMessage"')]),s._v(".")]),s._v(" "),a("p",[s._v("当我们的 短轮询/事务运行 线程从无头客户端获取到事件时,\n会对其下发的 "),a("code",[s._v("JSON")]),s._v(" 进行序列化, 并传递到 "),a("code",[s._v("event_runner")]),s._v(", 并由其进行事务的运行.")]),s._v(" "),a("p",[s._v("于是当 "),a("code",[s._v("Session")]),s._v(" 获取到事件 "),a("code",[s._v('"FriendMessage"')]),s._v(" 时,\n"),a("code",[s._v("event_runner")]),s._v(" 从已注册的事件列表内抽出 "),a("code",[s._v("事件运行主体(Event Body)")]),s._v(",\n并传入 "),a("code",[s._v("上下文(Context)")]),s._v(" 运行事务.")]),s._v(" "),a("p",[s._v("简单来说, 就是:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("注册事件 -> 监听事件 -> 收到事件 -> 传入上下文并运行\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("同时, 我们还支持一定程度上的 "),a("code",[s._v("事件上下文(Event Context)")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[s._v("@session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("receiver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FriendMessage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("lambda")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("133454534")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("event_friendmessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Friend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" session"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sendFriendMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Plain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("当事件注册把一个 "),a("code",[s._v("Callable[[Union[MessageContext, EventContext]], bool]")]),s._v(" 作为第二个参数传入时,\n在 "),a("code",[s._v("event_runner")]),s._v(" 内会先传入 "),a("code",[s._v("InternalEvent.body")]),s._v(" 执行该 "),a("code",[s._v("Callable")]),s._v(",\n并根据其返回值判断是否执行事件运行主体.")])],1)}),[],!1,null,null,null);t.default=e.exports}}]);