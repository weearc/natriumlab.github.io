(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{272:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"生命周期-life-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期-life-cycle"}},[t._v("#")]),t._v(" 生命周期(Life Cycle)")]),t._v(" "),a("p",[t._v("有时候, 你可能会有在程序的各个不同阶段执行代码的需求:")]),t._v(" "),a("ul",[a("li",[t._v("程序启动时, 向 Master 进程汇报并获取 Worker ID")]),t._v(" "),a("li",[t._v("程序关闭时, 向 Master 进程汇报并释放自己的 Worker ID")]),t._v(" "),a("li",[t._v("还有很多...")])]),t._v(" "),a("p",[t._v("而我们也提供了相应的解决方案, 即我们接下来要讲的 "),a("code",[t._v("Mirai.on_stage")]),t._v(" 方法")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("使用的方式非常简单, 只需要用该方法装饰一个函数(异步同步皆可):")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("on_stage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start_stage_subroutine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mirai"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("我们传入的是一个 阶段名称(Stage name), 你可以随便注册阶段名,\n但我们的 "),a("code",[t._v("run")]),t._v(" 方法只会执行注册了这几个阶段的函数:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"start"')]),t._v(": 在程序启动时执行, 最先被执行.")]),t._v(" "),a("li",[a("code",[t._v('"around"')]),t._v(": 在程序启动和被终止时执行(Ctrl-C), 执行优先级比 "),a("code",[t._v("start")]),t._v(" 低, 但比 "),a("code",[t._v("end")]),t._v(" 高.")]),t._v(" "),a("li",[a("code",[t._v('"end"')]),t._v(": 在程序被终止时执行(Ctrl-C), 执行优先级比 "),a("code",[t._v("start")]),t._v(" 和 "),a("code",[t._v("ground")]),t._v(" 都低.")])]),t._v(" "),a("h2",{attrs:{id:"与-subroutine-的异同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与-subroutine-的异同"}},[t._v("#")]),t._v(" 与 Subroutine 的异同")]),t._v(" "),a("p",[t._v("执行生命周期时, 主线程会被堵塞, 并且 "),a("code",[t._v("subroutine")]),t._v(" 是在 "),a("code",[t._v("start")]),t._v(" 和 "),a("code",[t._v("around")]),t._v(" 执行完后和事件监听/广播协程一起运行的.")]),t._v(" "),a("p",[t._v("但相同的一处是, 无论是 "),a("code",[t._v("subroutine")]),t._v(" 还是生命周期, 在他们执行前, "),a("code",[t._v("session_key")]),t._v(" 就已经被激活,\n保证无论执行的是哪个, 其内部运行的事务都会顺利的执行")]),t._v(" "),a("p",[t._v("当然, 前提是你不要自己绊自己调用 "),a("code",[t._v("Mirai.release")]),t._v(" 方法释放 "),a("code",[t._v("session_key")]),t._v(",\n虽然 "),a("code",[t._v("python-mirai")]),t._v(" 会自动对其进行刷新, 但还是会对程序的稳定性产生影响的.")])])}),[],!1,null,null,null);s.default=n.exports}}]);