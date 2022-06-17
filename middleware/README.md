## 中间件目录

link: [go to documentation](https://v3.nuxtjs.org/guide/directory-structure/middleware)

Nuxt 提供了一个可定制的路由中间件框架，您可以在整个应用程序中使用它，非常适合在导航到特定路由之前提取您想要运行的代码。

路由中间件在 Nuxt 应用程序的 Vue 部分中运行。尽管名称相似，但它们与在应用程序的 Nitro 服务器部分中运行的服务器中间件完全不同。

路由中间件分为三种：

- 匿名（或内联）路由中间件，直接在使用它们的页面中定义。
- 命名路由中间件，放置在 `middleware/` 目录中，在页面使用时会通过异步导入自动加载。（注意：路由中间件名称被规范化为 kebab-case，因此someMiddleware变为some-middleware。）
- 全局路由中间件，放置在 `middleware/` 目录中（带.global后缀），每次路由更改都会自动运行。
