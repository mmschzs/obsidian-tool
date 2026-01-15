# Obsidian Tool

一个强大的 Obsidian 插件，让您可以在 Obsidian 和 VS Code 之间无缝切换，使用 URL 方案实现高效的跨应用工作流。

## 功能特性

- **跨应用导航**: 使用 URL 方案在 Obsidian 和 VS Code 之间快速切换
- **文件同步**: 轻松在两个应用间打开相同的文件
- **工作流优化**: 专为需要在 Obsidian 中做笔记、在 VS Code 中编码的用户设计
- **快捷操作**: 通过命令面板快速访问常用功能

## 安装方法

### 从社区插件市场安装

1. 打开 Obsidian 设置 → 社区插件
2. 浏览社区插件
3. 搜索 "Obsidian Tool"
4. 点击安装并启用

### 手动安装

1. 下载最新版本的插件文件
2. 将 `main.js`、`styles.css` 和 `manifest.json` 复制到您的库文件夹 `.obsidian/plugins/obsidian-tool/`
3. 在 Obsidian 设置中启用插件

## 使用方法

### 基本用法

1. 在 Obsidian 中，使用命令面板 (`Ctrl/Cmd+P`) 搜索 "Obsidian Tool" 相关命令
2. 选择相应的命令在 VS Code 中打开当前文件
3. 在 VS Code 中，可以通过配置的 URL 方案返回到 Obsidian

### URL 方案

插件支持以下 URL 方案：
- `obsidian://open?file=filename` - 在 Obsidian 中打开指定文件
- `vscode://file/path/to/file` - 在 VS Code 中打开指定文件

## 开发环境

此项目使用 TypeScript 开发，提供类型检查和文档支持。

### 开发设置

1. 确保您的 Node.js 版本至少为 v16 (`node --version`)
2. 克隆此仓库
3. 运行 `npm i` 安装依赖
4. 运行 `npm run dev` 启动编译监听模式

## 配置选项

插件提供以下配置选项：

- **VS Code 路径**: 设置 VS Code 可执行文件的路径
- **默认行为**: 选择在 VS Code 中打开文件时的默认行为
- **快捷键**: 自定义快捷键绑定

## 故障排除

### 常见问题

1. **VS Code 无法打开文件**
   - 检查 VS Code 路径配置是否正确
   - 确保 VS Code 已添加到系统 PATH

2. **URL 方案不工作**
   - 确保已正确注册 URL 方案
   - 检查系统是否允许应用处理自定义 URL

3. **插件无法加载**
   - 检查 Obsidian 版本兼容性
   - 查看 Obsidian 控制台的错误信息

## 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 此仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 更新日志

### v1.0.0
- 初始版本发布
- 基本的 Obsidian 和 VS Code 之间切换功能
- URL 方案支持

## 支持

如果您遇到问题或有功能建议，请：

1. 查看 [常见问题](#故障排除) 部分
2. 搜索现有的 [Issues](https://github.com/mmschzs/obsidian-tool/issues)
3. 创建新的 Issue 描述您的问题或建议

## 致谢

- 感谢 Obsidian 团队提供了优秀的插件 API
- 感谢所有贡献者和用户的反馈

## 链接

- [Obsidian 官网](https://obsidian.md)
- [Obsidian 插件开发文档](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin)
- [VS Code 官网](https://code.visualstudio.com/)
