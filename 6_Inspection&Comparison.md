# 检查和比较

**目录：检查和比较**

- [日志 `log`](#日志log)
- [差异 `diff`](#差异diff)

## 日志log

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

#### 查看本地仓库的历史记录

##### 查看所有提交记录

如果你想了解本地仓库当前分支的版本历史记录。

```
$ git log
```

##### 查看指定次数

如果你想了解最近 n 次的提交。`n` 为想查看提交记录的次数。

```
$ git log -n
```

<details>

<summary>例子</summary>

查看最近三次的提交记录

```
$ git log -3
```

</details>

##### 根据ID查看提交记录

根据提交ID查询日志

```
$ git log commit_id
```

根据多个ID 查看日志。

```
$ git log commit1_id commit2_id
```

其中，commit_id可以是提交哈希值的简写模式，也可以使用HEAD代替。HEAD代表最后一次提交，`HEAD^`为最后一个提交的父提交，等同于`HEAD～1`，`HEAD～2`代表倒数第二次提交

```
# git log HEAD
```

<details>

<summary>例子</summary>

```
$ git log c5f8a258babf5eec54edc794ff980d8340396592
```

</details>

#### 查看指定格式提交日志

如果你想只看某一个人的提交记录

```
$ git log --author=bob
```

一个压缩后的每一条提交记录只占一行。

```
$ git log --pretty=oneline
```

或者你想通过 ASCII 艺术的树形结构来展示所有的分支, 每个分支都标示了他的名字和标签。

```
$ git log --graph --oneline --decorate --all
```

看看哪些文件改变了

```
$ git log --name-status
```

## 差异diff

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

#### 查看工作目录与暂存区差异

查看文件在工作目录与暂存区的差别

```
$ git diff <filename>
```

如果还没 add 进暂存区，则查看文件自身修改前后的差别。也可查看和另一分支的区别。

```
$ git diff <branch> <filename>
```

#### 查暂存区与本地仓库差异

表示查看已经 add 进暂存区但是尚未 commit 的内容同最新一次 commit 时的内容的差异。

```
$ git diff --cached <filename>
```

如果你要比较指定仓库版本。

```
$ git diff --cached <commit> <filename>
```

#### 查看工作目录与本地仓库版本间差异

查看工作目录同Git仓库指定 commit 的内容的差异。

```
$ git diff <commit> <filename>
```

#### 查看版本间的差异

```
$ git diff <commit> <commit>
```