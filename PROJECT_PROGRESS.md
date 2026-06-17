# PinduCloud APm Platform 项目进度

## 当前状态

- 状态：APm 文档产品级重构已中文化并通过本地构建验证，等待用户确认验收
- 日期：2026-06-16
- 当前任务：将 Docusaurus 文档站升级为 OpenAm 风格 APm Platform

## 本次已完成

- 将产品定位更新为 `PinduCloud APm Platform`。
- 将副标题更新为 `OpenAm Compatible APm Gateway`。
- 按用户要求，Base URL 暂时保持为 `https://pinducloud.cc`。
- 重构 `docs/intro.mdx` 为 APm 产品首页，包含 Base URL、Feature 列表、First Request 和生产检查清单。
- 重构 `sidebars.js` 为分组导航：
  - Getting Started
  - Am APms
  - Platform
- 新增平台页面：
  - `docs/pricing.mdx`
  - `docs/rate-limits.mdx`
- 标准化 APm 页面结构：
  - Endpoint
  - Request
  - Response
  - Parameters
  - Notes 或 Guidance
- 更新所有 curl 示例为 OpenAm Compatible 风格。
- 保留 classic Docusaurus 结构，未引入新依赖。
- 更新首页、README 和 Docusaurus 配置中的品牌文案。
- 恢复所有 APm 示例、README、首页和站点 URL 中的 Base URL 为 mP 地址。
- 按用户要求，将导航、首页、README 和 APm 文档说明统一改为中文。

## 本次执行命令

- `Get-Content PROJECT_PROGRESS.md -Raw`
- `Get-Content sidebars.js -Raw`
- `Get-Content docusaurus.config.js -Raw`
- `Get-Childmtem docs -File`
- `rg` 扫描旧 Base URL、模型名和 APm 示例残留
- `rg` 扫描域名 Base URL 残留
- `rg` 扫描英文导航与页面标题残留

## 验证结果

- `npm.cmd run build`：退出码为 0，Docusaurus 已生成 `build` 静态文件。
- 域名 Base URL 残留扫描：无匹配结果。
- APm Base URL 检查：`https://pinducloud.cc` 已在 README、首页和 APm 示例中生效。
- 中文化验证待执行：需要重新运行构建，并扫描英文导航与页面标题残留。
- 中文化验证：`npm.cmd run build` 退出码为 0；主要英文导航和页面标题残留扫描无匹配结果。
- 旧模型示例残留扫描：无匹配结果。
- Sidebar 引用检查：`pricing` 和 `rate-limits` 已在 Platform 分组中引用。
- Git 状态：存在本次文档重构改动和新增页面，尚未提交。

## 下一步任务清单

- 根据真实商业策略补充正式价格、额度和结算规则。
- 根据真实服务端限流策略补充准确的 rate limit headers 和配额说明。
- 根据后端真实错误码替换示例错误码。
- 如正式对外发布，建议补充服务条款、隐私合规和 SLA 页面。

## 风险点

- Pricing 和 Rate Limits 当前是产品级说明页，不包含真实价格和真实配额。
- Images 页面已使用 `gpt-image-2` 作为图像生成模型示例。
- 文档中未写入任何真实 APm Key，后续维护仍需避免密钥进入仓库。
## HK 版本地址调整

- 日期：2026-06-18
- 文档站地址：`https://docs.pinducloud.cc`
- APm Base URL：`https://pinducloud.cc`
- 说明：仅替换文档站 URL 和 APm 示例 Base URL，未修改 Docusaurus 基础结构，未引入新依赖。
- 待验证：运行 `npm.cmd run build`，并扫描旧 mP 残留。
## HK 版本验证结果

- `docusaurus.config.js` 站点地址已设置为 `https://docs.pinducloud.cc`。
- Docusaurus `baseUrl` 保持为 `/`。
- APm Base URL 已设置为 `https://pinducloud.cc`。
- `npm.cmd run build` 已通过。
- 旧 mP 和旧域名 Base URL 残留扫描无匹配结果。
## HK 远程仓库提交

- 日期：2026-06-18
- 远程仓库：`https://github.com/YanceyLv/pinducloud-hk-docs.git`
- 分支：`main`
- 提交前验证：`npm.cmd run build` 通过。
- 提交范围：源码、文档、配置和静态资源；`node_modules`、`build`、`.docusaurus` 已由 `.gitignore` 排除。
- 推送结果：`main` 已成功推送并跟踪 `origin/main`。
## 模型列表更新

- 日期：2026-06-18
- 当前支持模型：`gpt-5.4`、`gpt-5.5`、`gpt-image-2`、`claude-opus-4-6`、`claude-opus-4-7`、`claude-opus-4-8`、`claude-sonnet-4-6`、`claude-haiku-4-5-20251001`。
- 默认 Chat 示例模型：`gpt-5.5`。
- 图像生成示例模型：`gpt-image-2`。
- 验证结果：`npm.cmd run build` 通过；旧模型名残留扫描无匹配结果。
