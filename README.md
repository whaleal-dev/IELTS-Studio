# IELTS Studio

IELTS Studio 是一个面向雅思学习者的中文学习网站，提供词汇、听力、同义词、词表播放、本地音频播放与学习资源下载。无需注册账号，打开网页即可使用；个人词库、笔记和学习记录保存在当前浏览器中。

**在线使用：[IELTS Studio](https://docs.whaleal.com/IELTS-Studio/) 。**

[项目说明](https://docs.whaleal.com/IELTS-Studio/about/) · [操作说明](https://docs.whaleal.com/IELTS-Studio/help/) · [网站地图](https://docs.whaleal.com/IELTS-Studio/sitemap/) · [版本记录](CHANGELOG.md) · [本次发布信息](release.json)

## 可以做什么

| 模块 | 主要用途 | 在线入口 |
| --- | --- | --- |
| 单词 | 按章节和分组学习内置主题词汇或个人词库，使用单词卡片、中文选择题和听写，记录笔记并查看统计 | [进入单词](https://docs.whaleal.com/IELTS-Studio/) |
| 听力 | 使用原声语料进行听音和听写，复练错词，查看完整分组练习成绩 | [进入听力](https://docs.whaleal.com/IELTS-Studio/listening/) |
| 同义词 | 按组学习同义替换，导入 TXT／CSV 词库，搜索、循环播放并记录笔记 | [进入同义词](https://docs.whaleal.com/IELTS-Studio/synonyms/) |
| 单词播放 | 粘贴自己的英文词表，设置发音、顺序、重复次数及间隔，进行播放或逐词听写 | [进入单词播放](https://docs.whaleal.com/IELTS-Studio/word-player/) |
| 音频播放 | 混排最多 100 份录音与 CSV／TXT，词表可选发音人及两种语速，1000 份历史、全局应用与拖拽 | [进入音频播放](https://docs.whaleal.com/IELTS-Studio/audio-player/) |
| 资源下载 | 搜索学习材料，预览 TXT／JSON／CSV／PDF，下载单份文件或批量打包为 ZIP | [进入资源下载](https://docs.whaleal.com/IELTS-Studio/downloads/) |

单词与听力支持错题间隔复习：默认依次为 20 分钟、1 天、3 天、7 天、15 天、30 天，可以在设置中自定义六阶段间隔。实际答错会重置复习计划，到期后首次独立答对才推进；查看材料后的巩固作答不推进阶段。右上角「复习」提供到期任务入口。

全站提供快捷键、八套预设主题和自选主色。六个网站模块之间切换会保留已打开页面的状态，离开学习模块时暂停播放，返回后主动继续。电脑与手机均可使用；英文学习材料保持原文。

## 开始学习

1. 打开网站，选择单词或听力的章节、分组，进入学习；也可直接使用同义词或粘贴词表播放。
2. 如需个人词库，准备 CSV 或 TXT 文件。单词词库依次填写「单词、释义、音标、单词章节、单词分组」，使用英文逗号分隔；CSV 需要表头，TXT 不需要。页面提供可下载模板。
3. 功能旁的问号会进入对应操作说明；首次使用可阅读 [个人词库导入](https://docs.whaleal.com/IELTS-Studio/help/words-import/) 和 [词表播放与听写](https://docs.whaleal.com/IELTS-Studio/help/player-wordlist/) 教程。
4. 在「设置」→「备份」定期导出完整学习记录，并在浏览器下载列表确认文件已保存。恢复前可预览备份内容，操作见 [完整备份与恢复教程](https://docs.whaleal.com/IELTS-Studio/help/backup/) 。

## 学习资料保存在什么地方

音频播放支持录音与 CSV／TXT 词表混排，词表提取英文单词和短语，独立选择发音人及单词／词组语速。两类合计记住最多 1000 份历史设置，按类型和文件元信息匹配并纳入完整备份。文件内容、顺序和进度仅临时保留，刷新需重新导入；文件不上传本站，浏览器语音可能联网。录音暂停保留时间，词表继续从当前词开头重读。

网站是无后端的静态应用，没有账号、云同步或服务器端学习记录。个人词库、笔记、错词、成绩与设置主要保存在当前网站来源的浏览器 IndexedDB 中。不同设备、浏览器、域名或端口之间不会自动共享；清除网站数据会失去本地资料。

完整 JSON 备份用于迁移和恢复；难点词或错词 CSV 仅用于查看和整理，不能替代完整备份。网页提示保存失败时，先保留页面与输入并重试，不要通过清除网站数据排障。网站升级不会把本地学习资料上传到发布仓库。

资源下载模块运行时读取独立托管的资料清单，资料更新与主站发版分开进行。音频和下载材料请按页面声明及各自授权范围使用。

## 版本与发布

本仓库用于公开项目说明和部署静态产物。`main` 分支保存本文、[版本记录](CHANGELOG.md) 与 [本次发布信息](release.json) ；实际网站由独立的 `gh-pages-YYYYMMDD-HHmmss` 分支发布，分支时间使用北京时间，历史发布分支保留。

- 发布版本：`gh-pages-20261022-161742`。
- 公网核验时间：2026年10月22日星期四 16:20:33（北京时间）。
- 产物提交：`218e17d87c6bcd4cd63bce738989476febf008dc`。
- 开发源码基线：`491d84f85506ec65a6392e6611fdfb69c6fb49c9`。
- 完整静态产物：13085 个文件，555532934 B。
- 本地压缩包：`dist/packages/ielts-studio-gh-pages-20261022-161742.tar.gz`，510481487 B。
- 压缩包 SHA-256：`113d30f32639b0973ed2a030e9a8da36ae8041165111ce9d43ffe78cfa971fae`。
- [对应 Pages 部署](https://github.com/whaleal-dev/IELTS-Studio/actions/runs/39746805285) 。

每次发布在维护者本地生成完整静态压缩包与 SHA-256 校验文件；网站部署并完成公网文件校验后，发布流程同步更新 `main` 的说明和发版信息。可在 `release.json` 核对本次分支、产物提交、构建和压缩包信息，详细变化见 `CHANGELOG.md`。压缩包是网站部署产物，不包含个人学习资料，也不等同于学习记录备份；本流程不创建 GitHub Release 或公开压缩包下载链接。

## 开发与维护

项目使用 Vue 3、Vite 和 PrimeVue 4，构建为纯静态文件，通过 GitHub Pages 托管。主站采用 `/IELTS-Studio/` 基础路径，公开模块、教程及项目说明均可通过固定网址访问和刷新。

开发源码、启动命令、维护规范和部署流程见 [开发仓库 whaleal-dev/ielts](https://github.com/whaleal-dev/ielts) 。本发布仓库的 `main` 分支不保存完整开发源码；请从开发仓库了解本地运行方式。
