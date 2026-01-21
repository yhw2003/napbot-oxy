You should use utf-8 encoding when reading files.

# AGENTS

### 关于项目
这是一个基于NapCat的QQ机器人项目，项目使用typescript编写，并运行在nodejs平台上。
Api类型定义应该使用zod进行校验。
使用对于不完整的类型interface而不是type

### 项目结构

- napbot-oxy 根目录
    - src 主要源码
    - .agent Ai可能需要的阅读资料

### 主要依赖：

[NapCat](https://github.com/NapNeko/NapCatQQ) 文档位于./agent/NapCatDocs文件夹，本项目通过http-sse链接到NapCat。./agent/NapCatDocs/api-list.md是openai风格的所以api的文档。

### 关于环境
如果你需要调用node/npm等nodejs工具，你应该使用fnm exec