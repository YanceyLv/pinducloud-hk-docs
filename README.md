# PinduCloud API Platform

基于 Docusaurus classic 构建的 OpenAI 兼容 API 网关文档站。

## 本地开发

```bash
npm run start
```

如果 PowerShell 拦截 `npm.ps1`，可使用：

```bash
npm.cmd run start
```

## 生产构建

```bash
npm run build
```

PowerShell：

```bash
npm.cmd run build
```

## API Base URL

```text
https://pinducloud.cc
```

## 文档结构

- `docs/intro.mdx`：API 平台首页
- `docs/quickstart.mdx`：快速接入
- `docs/auth.mdx`：API 鉴权
- `docs/chat-completions.mdx`：GPT 文本模型接口
- `docs/claude-messages.mdx`：Claude Messages 接口
- `docs/images.mdx`：图像生成 API
- `docs/models.mdx`：模型列表
- `docs/errors.mdx`：错误处理
- `docs/pricing.mdx`：价格说明
- `docs/rate-limits.mdx`：限流策略

不要提交 API Key、Token 或其他敏感凭据。
