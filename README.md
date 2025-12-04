# 基础网页项目

这是一个包含HTML、CSS和JavaScript的基础网页项目，包含首页、新页面和额外页面三个主要页面。

## 项目结构

```
aoqi_webside/
├── index.html          # 首页
├── new_page.html       # 新页面（梦队思维导图表格）
├── extra_page.html     # 额外页面（包含百度脑图链接）
├── style.css           # 样式文件
├── script.js           # JavaScript文件
├── .gitignore          # Git忽略文件
├── package/            # 包文件夹
│   └── list.xlsx       # Excel文件
└── README.md           # 项目说明
```

## 如何将网页变成人人可点击查看的网页

### 方法一：使用GitHub Pages（推荐）

GitHub Pages是GitHub提供的免费静态网站托管服务，非常适合部署这个项目。

1. **在GitHub上创建新仓库**
   - 登录您的GitHub账号
   - 点击右上角的"+"图标，选择"New repository"
   - 输入仓库名称（如`aoqi-webside`）
   - 选择"Public"（公开）
   - 点击"Create repository"

2. **将本地仓库推送到GitHub**
   - 复制新仓库的SSH或HTTPS地址
   - 在本地终端中执行以下命令：
     ```bash
     # 添加远程仓库
     git remote add origin <您的GitHub仓库地址>
     
     # 推送到远程仓库
     git push -u origin master
     ```

3. **启用GitHub Pages**
   - 进入GitHub仓库的"Settings"页面
   - 向下滚动到"GitHub Pages"部分
   - 在"Source"下拉菜单中选择"master branch"
   - 点击"Save"
   - 几秒钟后，您将看到一个URL，类似`https://<您的用户名>.github.io/aoqi-webside/`
   - 访问这个URL，您的网站就可以被任何人查看了！

### 方法二：使用Vercel

Vercel是另一个免费的静态网站托管服务，部署非常简单。

1. **安装Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **部署项目**
   - 在项目根目录执行：
     ```bash
     vercel
     ```
   - 按照提示进行配置
   - 部署完成后，Vercel会提供一个公开URL

### 方法三：使用Netlify

Netlify也是一个优秀的静态网站托管服务。

1. **访问Netlify官网**：https://www.netlify.com/
2. **登录或注册账号**
3. **点击"New site from Git"**
4. **连接GitHub仓库**
5. **配置部署设置**（保持默认即可）
6. **点击"Deploy site"**
7. 部署完成后，您将获得一个公开URL

### 方法四：本地测试服务器

如果您只是想在本地测试网站，可以使用以下方法：

1. **使用Python**（如果已安装）
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   然后在浏览器访问：http://localhost:8000

2. **使用Node.js**（如果已安装）
   ```bash
   # 安装http-server
   npm i -g http-server
   
   # 启动服务器
   http-server -p 8000
   ```
   然后在浏览器访问：http://localhost:8000

## 网站功能说明

- **首页**：基础介绍，点击可跳转到新页面
- **新页面**：梦队思维导图表格，展示了不同阶段的精灵信息
- **额外页面**：包含百度脑图链接，可跳转到外部资源

## 自定义和扩展

您可以根据需要修改和扩展这个网站：

1. 修改HTML内容：在对应的.html文件中编辑
2. 调整样式：在style.css文件中修改
3. 添加交互功能：在script.js文件中编写JavaScript代码

## 联系方式

如有问题或建议，请随时联系。
