# Furina Theme for DSH

芙宁娜(Furina de Fontaine)主题插件,为 DeepSeek Harness(DSH)Web 界面叠加枫丹蓝金配色,并在输入框下方展示一枚水元素神之眼徽章。

A Furina (Genshin Impact / Fontaine) theme plugin for DeepSeek Harness: an alias-token palette overlay (light & dark) plus a Hydro Vision badge below the composer.

## 效果 / What it does

- **配色层** `--dsw-alias-*` + `--dsw-specific-sidebar-fill`:制服蓝品牌色、水色表面、宫廷金点缀,浅色/深色两套,跟随系统明暗切换
- **徽章**:在 `conversation.composer.dock` 槽位渲染手绘 SVG 水之神之眼 + "Focalors" 字样(打开会话后可见)
- **卸载即还原**:主题是叠加层(token override),不改动你的浅色/深色/跟随系统偏好

## 安装 / Install

方式一:在 DSH 会话里让 Agent 执行

```
帮我安装 <这个仓库克隆后的目录>
```

方式二:克隆后手动安装(目录即 bundle 包)

```bash
git clone https://github.com/vtnxpkv5t4-ctrl/furina-theme.git
```

然后在 DSH 插件管理中安装该目录,或让 Agent 用 `plugin_manager` 的 `install_bundle` 指向克隆目录。

## 文件结构 / Layout

```
furina-theme/
├── package.json        # bundle manifest(dsh.bundle.patch + dsh.client)
├── cordis.patch.yml    # Loader patch:插入 furina-theme 插件行
├── index.js            # Host 半端(空 apply)
├── client.js           # Client 半端:theme.overrideTokens + 槽位徽章
├── icon.svg            # 水之神之眼图标
└── locale/             # en.json / zh.json 展示元数据
```

## 说明

- 纯属粉丝向同人主题,与米哈游/《原神》无关;芙宁娜角色版权归米哈游所有
- 插件机制参考 DSH(cordis-plugin-development)文档;主题经 `ctx.theme.overrideTokens` 注册,卸载时由 fiber 自动清理
