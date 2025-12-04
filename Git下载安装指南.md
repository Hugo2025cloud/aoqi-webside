# Git下载与安装指南（Windows系统）

## 一、下载Git

### 官方下载地址

1. **Git官方网站**：[https://git-scm.com/](https://git-scm.com/) <mcreference link="https://git-scm.com/" index="1">1</mcreference>

2. **Windows专用下载页面**：[https://git-scm.com/download/windows](https://git-scm.com/download/windows) <mcreference link="https://blog.csdn.net/weixin_47033595/article/details/154659653" index="2">2</mcreference>

3. **通用下载页面**：[https://git-scm.com/downloads](https://git-scm.com/downloads) <mcreference link="https://m.php.cn/faq/1384136.html" index="3">3</mcreference>

### 选择正确的版本

Git for Windows提供32位和64位版本，请根据您的Windows系统类型选择：

#### 查看系统类型的方法
1. 按下 `Win + R` 键，打开「运行」对话框
2. 输入 `cmd`，点击「确定」打开命令提示符
3. 输入 `wmic os get osarchitecture` 并按回车键
4. 查看结果：如果显示 `64-bit` 则选择64位版本，如果显示 `32-bit` 则选择32位版本

#### 直接下载链接（推荐64位）
- **64位版本**：点击「64-bit Git for Windows Setup」
- **32位版本**：点击「32-bit Git for Windows Setup」

## 二、安装Git

下载完成后，双击安装程序开始安装。以下是详细的安装步骤：

### 步骤1：选择安装目录
默认安装目录为 `C:\Program Files\Git`，您可以根据需要更改，但建议使用默认目录。

### 步骤2：选择组件
建议勾选以下组件：
- 勾选「Git Bash Here」
- 勾选「Git GUI Here」
- 勾选「Add Git to the system PATH」
- 勾选「Git LFS (Large File Support)」（如果需要处理大文件）

### 步骤3：选择默认编辑器
Git需要一个默认编辑器来编辑提交信息等，可以选择：
- Notepad++（推荐，如果已安装）
- Vim（Git自带，但学习曲线较陡）
- Visual Studio Code（如果已安装）

### 步骤4：选择初始分支名称
建议选择「Override the default branch name for new repositories」并输入「main」（这是GitHub等平台的默认分支名称）。

### 步骤5：调整环境变量
选择「Git from the command line and also from 3rd-party software」，这样Git可以在命令提示符和其他软件中使用。

### 步骤6：选择HTTPS传输后端
默认选择「Use the OpenSSL library」即可。

### 步骤7：配置行尾转换
选择「Checkout Windows-style, commit Unix-style line endings」，这是Windows系统的推荐设置。

### 步骤8：选择终端模拟器
选择「Use Windows' default console window」，或者如果您熟悉可以选择「Use MinTTY」。

### 步骤9：配置额外选项
建议勾选：
- Enable file system caching
- Enable Git Credential Manager（用于记住GitHub等平台的登录信息）

### 步骤10：完成安装
点击「Install」按钮开始安装，安装完成后点击「Finish」。

## 三、验证Git安装

安装完成后，验证Git是否正确安装：

1. 按下 `Win + R` 键，打开「运行」对话框
2. 输入 `cmd`，点击「确定」打开命令提示符
3. 输入以下命令并按回车键：
   ```bash
   git --version
   ```
4. 如果显示Git版本信息（如 `git version 2.45.0.windows.1`），则表示安装成功。

## 四、配置Git用户信息

安装完成后，需要配置您的用户名和邮箱，这些信息将出现在您的所有Git提交中：

1. 打开命令提示符或Git Bash
2. 输入以下命令（替换为您自己的信息）：
   ```bash
   # 配置用户名
   git config --global user.name "您的用户名"
   
   # 配置邮箱
   git config --global user.email "您的邮箱地址"
   ```
3. 验证配置是否正确：
   ```bash
   git config --list
   ```
   您应该能看到刚才配置的用户名和邮箱信息。

## 五、常见问题解决

1. **安装后无法在命令提示符中使用git命令**
   - 检查环境变量是否正确添加
   - 尝试重启命令提示符或电脑

2. **忘记Git安装目录**
   - 可以在命令提示符中输入 `where git` 查找安装路径

3. **需要卸载或重新安装Git**
   - 通过控制面板的「程序和功能」卸载Git
   - 然后重新下载安装程序进行安装

## 六、Git使用资源

- **Git官方文档**：[https://git-scm.com/doc](https://git-scm.com/doc)
- **GitHub Git教程**：[https://docs.github.com/zh/get-started/getting-started-with-git](https://docs.github.com/zh/get-started/getting-started-with-git)

安装完成后，您就可以使用Git来管理您的项目代码了！

---

如果您在下载或安装过程中遇到问题，可以随时查看Git官方文档或搜索相关解决方案。
