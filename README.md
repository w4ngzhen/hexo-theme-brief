# hexo-theme-brief

A brief theme based on the Hexo **v7.3+**.

一款适用于 Hexo v7.3+ 版本hexo主题。

## 使用方式

### 配置修改

1. 创建Hexo项目
2. 进入Hexo项目根目录，打开根目录下`_config.yml`文件，将`_config.yml`中关于`theme: xxx`的配置改为`theme: brief`

> 上述步骤确保你的hexo项目确认启用hexo-theme-**brief**主题

### 安装主题

接下来进行`hexo-theme-brief`主题的正式安装。Hexo使用具体主题主要有两种方式：

- 手工方式：主题文件放置到`Hexo项目目录/themes/`目录下主题目录中
- npm方式：Hexo项目通过包管理器（npm、yarn、pnpm等）安装主题npm包

#### 手工方式

1）在`Hexo项目目录`下的`themes`目录中（没有则手动创建），创建一个名称对应于`_config.yml`中`theme`字段的主题名的空目录。在这里我们创建名为`brief`的目录：

```
Hexo项目目录/
  - themes/
    - brief/ <--- 主题包目录
```

2）下载主题包文件：

![Download theme files by manual](./doc/imgs/01-download-zip.png)

3）解压主题包，将其中的相关内容（例如`layout`、`source`等目录）拷贝至`Hexo项目目录/themes/brief`中：

![Copy theme files to theme dir](./doc/imgs/02-copy-to-theme-dir.png)

除上述手工安装方式外，另一种方式则是将本项目克隆到`themes/brief`目录下：

1. 进入`Hexo项目目录/themes/`目录中
2. 使用命令`git clone https://github.com/w4ngzhen/hexo-theme-brief.git brief`（注意最后一个参数`brief`含义就是将克隆后的所有文件都放置于`brief`目录中）

> 无论是下载文件拷贝至主题目录还是使用git克隆，其核心目的都是将主题文件放到正确的位置。当然，下载并拷贝文件的方式有一个缺点就是更新主题时需要再次手动拷贝文件，而使用克隆方式只需要在`/Hexo项目/themes/brief`目录中执行命令`git pull`即可完成更新，请使用者自行斟酌。

完成主题包文件位置后，在Hexo项目根目录下创建`_config.brief.yml`配置文件，具体配置部分见[配置](#配置)

#### npm方式

使用npm包形式，只需要在Hexo项目根目录下，使用包管理器安装`hexo-theme-brief@latest`：

```bash
npm install hexo-theme-brief@latest
# yarn add hexo-theme-brief@latest
# pnpm add hexo-theme-brief@latest
```

安装完成后，确保Hexo项目下package.json依赖中存在：

```json5
{
  "dependencies": {
    "hexo": "^7.3.0",
    "hexo-generator-archive": "^2.0.0",
    "hexo-generator-category": "^2.0.0",
    "hexo-generator-feed": "^3.0.0",
    "hexo-generator-index": "^4.0.0",
    "hexo-generator-searchdb": "^1.4.1",
    "hexo-generator-tag": "^2.0.0",
    "hexo-renderer-ejs": "^2.0.0",
    "hexo-renderer-markdown-it-plus": "^1.0.6",
    "hexo-renderer-stylus": "^3.0.1",
    "hexo-server": "^3.0.0",
    "hexo-theme-brief": "指定版本" // <--- 指定版本
  }
}
```

## 配置

brief主题的配置非常少：

```yml
menus:
  主页: /
  关于: /about/
  分类: /categories/
  标签: /tags/
  友情链接: /links/

social:
  GitHub: https://github.com/w4ngzhen/hexo-theme-brief || fa fa-github
  RSS: /atom.xml || fa fa-rss

favicon:
  small: /images/hexo-logo.svg
  medium: /images/hexo-logo.svg
  apple_touch_icon: /images/hexo-logo.svg
  safari_pinned_tab: /images/hexo-logo.svg
```