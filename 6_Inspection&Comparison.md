# 检查和比较

## 目录

**目录：检查和比较**

- [日志 `log`](#日志-log)
- [差异 `diff`](#差异-diff)

## 日志 `log`

> Show commit logs
>
> 用于显示提交日志信息

### 语法

```
git log [<options>] [<revision range>] [[\--] <path>…]
```

### 说明

`git log ` 命令用于显示提交日志信息。

该命令采用适用于 `git rev-list` 命令的选项来控制显示的内容以及如何以及适用于 `git diff- *` 命令的选项，以控制如何更改每个提交引入的内容。

### 用法

#### 查看提交记录

```bash
# 查看所有提交记录
$ git log

# 查看指定次数提交记录
$ git log -n

# 根据ID查看提交记录
$ git log <commit-id>

# 根据多个ID查看提交记录
$ git log <commit1_id> <commit2_id>

# 查看最后一次提交记录
$ git log HEAD

# 查看倒数第二次提交记录
$ git log HEAD^
$ git log HEAD~1
```

<details>

<summary>例子</summary>

查看最近三次的提交记录

```bash
$ git log -3
```

```bash
$ git log c5f8a258babf5eec54edc794ff980d8340396592
```

</details>

#### 显示本地执行过的git命令

```bash
$ git relog
```

[⬆回到顶端](#目录)

## 差异 `diff`

> how changes between commits, commit and working tree, etc
>
> 用于显示提交和工作树等之间的更改。此命令比较的是工作目录中当前文件和暂存区域快照之间的差异,也就是修改之后还没有暂存起来的变化内容。

### 语法

```
git diff [options] [<commit>] [--] [<path>…]
git diff [options] --cached [<commit>] [--] [<path>…]
git diff [options] <commit> <commit> [--] [<path>…]
git diff [options] <blob> <blob>
git diff [options] [--no-index] [--] <path> <path>
```

### 说明

在工作树和索引或树之间显示更改，索引和树之间的更改，两个树之间的更改，两个blob对象之间的更改或两个文件在磁盘上的更改。

### 用法

#### 查看工作区与暂存区差异

查看文件在工作区与暂存区的差别

```bash
$ git diff <filename>
```

如果还没 add 进暂存区，则查看文件自身修改前后的差别。也可查看和另一分支的区别。

```bash
$ git diff <branch> <filename>
```

#### 查暂存区与最近版本的差异

表示查看已经 add 进暂存区但是尚未 commit 的内容同最新一次 commit 时的内容的差异。

```bash
$ git diff --cached <filename>
```

如果你要比较指定仓库版本。

```bash
$ git diff --cached <commit> <filename>
```

#### 查看工作区与最近版本间差异

查看工作区同Git仓库指定提交版本的差异。

```bash
$ git diff <commit> <filename>
```

#### 查看提交版本间的差异

```bash
$ git diff <commit> <commit>
```
#### 查看工作区、暂存区和最近版本间的差异

```bash
$ git diff HEAD
```

<br>

[⬆回到顶端](#目录)