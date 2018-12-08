## Commit Guide Standard

:octocat: Git 提交规范 团队合作必备

Git 是对代码管理的一种工具，为了更好的团队合作，我们需要限定一些大家都看得懂的注释方法。

对 commit 做比较规范性的描述，方便追溯整个改动的起因和结果。

### 目录

- 格式
  - Header
    - Type 修改类型
    - Scope 影响范围
    - Subject 对应事件
  - Body
  - Footer
  - Revert

### 格式

完整的 commit message 都包括三个部分：Header，Body 和 Footer。

其中，Header 是必需的，Body 和 Footer 可以省略。

不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。这是为了避免自动换行影响美观。

#### Header

Header 包含两个部分：**type** 和 **subject**。

```
<type>:<subject>
```

##### type

type 用于说明 commit 的类别。

| 类型     | 说明                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 新功能                                                       |
| fix      | 修复错误                                                     |
| docs     | 文档修改                                                     |
| style    | 格式修改（不影响代码运行的变化，如空白、格式化、缺少分号等） |
| refactor | 重构（既不新增功能，也不是修改错误的代码变动）               |
| test     | 测试（添加缺失测试或更正现有测试）                           |
| chore    | 构建过程或辅助工具的变动                                     |
| perf     | 改进性能的代码更改                                           |

如果 `type` 为 `feat` 和 `fix`，则该 commit 将肯定出现在 Change log 之中。其他情况（`docs`、`chore`、`style`、`refactor`、`test`）由你决定，要不要放入 Change log，建议是不要。

##### subject

subject 是 commit 目的的简短描述，不超过50个字符。

 - 以动词开头，使用第一人称现在时，比如 **change**，而不是 changed 或 changes
 - 第一个字母小写
 - 结尾不加句号（`.`）

#### Body

Body 部分是对本次 commit 的详细描述，可以分成多行。下面是一个范例。

 ```
More detailed explanatory text, if necessary.  Wrap it to 
about 72 characters or so. 
 
Further paragraphs come after blank lines.
 
- Bullet points are okay, too
- Use a hanging indent
 ```

有两个注意点：

- 使用第一人称现在时，比如使用 change 而不是 changed 或 changes
- 应该说明代码变动的动机，以及与以前行为的对比。

#### Footer

Footer 部分只用于两种情况。

##### 不兼容变动

如果当前代码与上一个版本不兼容，则 Footer 部分以 `BREAKING CHANGE` 开头，后面是对变动的描述、以及变动理由和迁移方法。

 ```
BREAKING CHANGE: isolate scope bindings definition has changed.
 
    To migrate the code follow the example below:
 
    Before:
 
    scope: {
      myAttr: 'attribute',
    }
 
    After:
 
    scope: {
      myAttr: '@',
    }
 
The removed `inject` wasn't generaly useful for directives so there should be no code using it.
 ```

##### 关闭 Issue

如果当前 commit 针对某个 issue，那么可以在 Footer 部分关闭这个 issue 。

 ```
 Closes #234
 ```

也可以一次关闭多个 issue 。

 ```
 Closes #123, #245, #992
 ```

### Revert

还有一种特殊情况，如果当前 commit 用于撤销以前的 commit，则必须以 `revert:` 开头，后面跟着被撤销 Commit 的 Header。

 ```
revert: feat(pencil): add 'graphiteWidth' option
 
This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
 ```

Body 部分的格式是固定的，必须写成 `This reverts commit &lt;hash>.`，其中的 `hash` 是被撤销 commit 的 SHA 标识符。

如果当前 commit 与被撤销的 commit，在同一个发布（release）里面，那么它们都不会出现在 Change log 里面。如果两者在不同的发布，那么当前 commit，会出现在 Change log 的 `Reverts` 小标题下面。
