# 基本快照

## 目录

**目录：基本快照**

-  [添加`add`](#添加-add)
- [状态 `status`](#状态-status)
- [提交 `commit`](#提交-commit)
- [回滚 `reset`](#回滚-reset)
- [删除 `rm`](#删除-rm)
- [移动和重命名 `mv`](#移动和重命名-mv)

## 添加 `add`

> Add file contents to the index
>
> 将文件内容添加到索引

`git add` 命令将文件内容添加到索引(将修改记录添加到暂存区)。也就是将要提交的文件的信息添加到索引库中。

### 语法

```
git add [--verbose | -v] [--dry-run | -n] [--force | -f] [--interactive | -i] [--patch | -p]
	  [--edit | -e] [--[no-]all | --[no-]ignore-removal | [--update | -u]]
	  [--intent-to-add | -N] [--refresh] [--ignore-errors] [--ignore-missing] [--renormalize]
	  [--chmod=(+|-)x] [--] [<pathspec>…]
```

### 用法

#### 添加版本修改记录到暂存区

```bash
# 文件
$ git add <file1> <file2> <file3> ...

# 目录
$ git add <dir>

# 所有目录文件
$ git add .
```

#### 分次添加版本修改到暂存区

添加每个变化前，都会要求确认。对于同一个文件的多处变化，可以实现分次提交。

`-p` 参数相当于 `--patch`，表示多次提交。

```bash
$ git add -p
```

<details>

<summary>扩展</summary>

```bash
# 将以Controller结尾的文件的所有修改添加到暂存区
$ git add *Controller

# 将所有以Hello开头的文件的修改添加到暂存区 例如:HelloWorld.txt,Hello.java,HelloGit.txt ...
$ git add Hello*

# 将以Hello开头后面只有一位的文件的修改提交到暂存区 例如:Hello1.txt,HelloA.java 如果是HelloGit.txt或者Hello.java是不会被添加的$ git add [file1] [file2] ...
$ git add Hello?   
```

</details>

#### 添加跟踪文件到暂存区

把 `<path>` 中所有跟踪文件中被修改过或已删除文件的信息添加到索引库。它不会处理那些不被跟踪的文件。省略 `<path>` 表示  `.` ，即当前目录。

`-u` 即 `--update` 表示更新索引，使其具有与 `<pathspec>` 匹配的条目。这将删除和修改索引项以匹配工作树，但是不添加新文件。

```bash
$ git add -u [<pathspec>]
```

#### 添加所有修改记录到暂存区

把所有跟踪文件中被修改过或已删除文件和所有未跟踪的文件信息添加到索引库。省略 `<path>` 表示  `.` ，即当前目录。

`-A` 即 `--all` 或 `--no-ignore-removal` 表示更新索引，不仅在工作树具有匹配 `<pathspec>` 的文件的位置，而且索引已经有条目的位置。这会添加，修改和删除索引条目以匹配工作树。

```bash
$ git add -A
```

#### 查看已修改及已修改但未提交文件

我们可以通过 `git add -i [<path>]` 命令查看中被所有修改过或已删除文件但没有提交的文件，并通过其 `revert` 子命令可以查看 `<path>` 中所有未跟踪的文件，同时进入一个子命令系统。

```bash
$ git add -i [<path>]
```

<br>

[⬆回到顶端](#目录)

## 状态 `status`

> Show the working tree status
>
> 显示工作树的状态

`git status` 命令用于显示工作目录和暂存区的状态。使用此命令能看到那些修改被暂存到了，哪些没有，, 哪些文件没有被 git 跟踪到。

`git status` 不显示已经 `commit` 到项目历史中去的信息。看项目历史的信息要使用 `git log`。

### 语法

```
git status [<options>…] [--] [<pathspec>…]
```

### 用法

#### 查看版本更改

在每次执行 `git commit` 之前先使用 `git status` 检查文件状态是一个很好的习惯, 这样能防止你不小心提交了您不想提交的东西。 下面的例子展示 stage 前后的状态, 并最后提交一个快照。

`git status` 命令可以列出当前目录所有还没有被git管理的文件和被git管理且被修改但还未提交(`git commit`)的文件。

```bash
$ git status
```

#### 查看忽略的文件

```bash
$ git status --ignored
```

<br>

[⬆回到顶端](#目录)

## 提交 `commit`

> Record changes to the repository
>
> 记录对存储库的更改

`git commit` 命令用于将更改记录（提交）到存储库。将索引的当前内容与描述更改的用户和日志消息一起存储在新的提交中。

### 语法

```
git commit [-a | --interactive | --patch] [-s] [-v] [-u<mode>] [--amend]
       [--dry-run] [(-c | -C | --fixup | --squash) <commit>]
       [-F <file> | -m <msg>] [--reset-author] [--allow-empty]
       [--allow-empty-message] [--no-verify] [-e] [--author=<author>]
       [--date=<date>] [--cleanup=<mode>] [--[no-]status]
       [-i | -o] [-S[<keyid>]] [--] [<file>…]
```

### 说明

`git commit` 命令将索引的当前内容与描述更改的用户和日志消息一起存储在新的提交中。

要添加的内容可以通过以下几种方式指定：

- 在使用 `git commit` 命令之前，通过使用 `git add` 对索引进行递增的“添加”更改（注意：修改后的文件的状态必须为 `added`）;
- 通过使用 `git rm` 从工作树和索引中删除文件，再次使用 `git commit` 命令;
- 通过将文件作为参数列出到 `git commit` 命令（不使用 `--interactive` 或 `--patch` 选项），在这种情况下，提交将忽略索引中分段的更改，而是记录列出的文件的当前内容（必须已知到Git的内容）;
- 通过使用带有 `-a` 选项的 `git commit` 命令来自动从所有已知文件（即所有已经在索引中列出的文件）中添加更改，并自动从已从工作树中删除索引中的 `rm` 文件 ，然后执行实际提交;
- 通过使用 `--interactive` 或 `--patch` 选项与 `git commit` 命令一起确定除了索引中的内容之外哪些文件或hunks应该是提交的一部分，然后才能完成操作。

如果您提交，然后立即发现错误，可以使用 `git reset` 命令恢复。

### 用法

#### 提交暂存区到本地仓库区

如果你想将通过 `git add` 存入暂存区(Index)的文件修改记录提交到本地仓库区，你可以使用如下的命令。`-m <msg>` 即 `--message=<msg>` 表示使用给定的 `<msg>` 作为提交的版本描述，如果给出了多个 `-m` ，它们的值将作为单独的段落连接起来。

```bash
$ git commit -m <msg>
```

<details>

<summary>例子</summary>

```bash
$ git commit -m 'the commit messge'
```

</details>

如果你想将暂存区指定的文件修改提交到本地仓库区，你可以使用如下的命令。`<file>` 表示你要提交的文件路径，文件可以是多个。

```bash
$ git commit <file1> <file2> ... -m <message>
```

#### 提交工作区有版本记录文件

如果你想将工作区所有自上一次提交(commit)之后的变化直接提交到仓库区，你可以使用如下命令，相当于省略了 `git add`。对于还没有跟踪（track）的文件，还是需要执行 `git add <file>` 命令。

```bash
$ git commit -a
```

#### 提交时查看所有 diff 信息

```bash
$ git commit -v
```

#### 增补提交文件

如果你想重做上一次 commit，并包括指定文件的新变化，那么你可以使用如下命令。

增补提交，会使用与当前提交节点相同的父节点进行一次新的提交，旧的提交将会被取消。

```bash
$ git commit -amend <file1> <file2>
```

如果你想使用一次新的提交(commit)，替代上一次提交，那么你可以使用如下命令。如果代码没有任何新变化，则用来改写上一次commit的提交信息


```bash
$ git commit -amend -m <message>
```

#### 修改提交作者名

```bash
$ git commit --amend --author=<author>
```

<details>

<summary>示例</summary>

```bash
$ git commit --amend --author='Author Name <email@address.com>'
```

</details>

#### 重设第一个版本提交

也就是把所有的改动都重新放回工作区，并**清空所有的commit**，这样就可以重新提交第一个commit了。

```bash
$ git update-ref -d HEAD
```

<br>

[⬆回到顶端](#目录)

## 回滚 `reset`

> Reset current HEAD to the specified state
>
> 用于将当前 `HEAD` 复位到指定状态（一般用于撤消之前的一些操作）

### 语法

```
git reset [-q] [<tree-ish>] [--] <paths>…
git reset (--patch | -p) [<tree-ish>] [--] [<paths>…]
git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]
```

### 用法

#### 回滚暂存区

```bash
# 撤销暂存区的修改，重新放回工作区（使用HEAD表示最新版本）
$ git reset <file-name>

# 重置暂存区与工作区，与上一次提交保持一致
$ git reset --hard
```

#### 回滚到某个提交版本

和 `revert` 的区别：`reset` 命令会抹去某个提交记录（commit id）之后的所有提交（commit）

```bash
# 回滚当前分支的指针到指定提交版本，同时重置暂存区，但工作区不变（默认就是-mixed参数）
$ git reset <commit-id>

# 回滚至上个版本，它将重置HEAD到另外一个提交记录,并且重置暂存区以便和HEAD相匹配，但是也到此为止。工作区不会被更改。
$ git reset -mixed HEAD^

# 回退至三个版本之前，只回退了提交的信息，暂存区和工作区与回退之前保持一致。如果还要提交，直接commit即可。
$ git reset -soft HEAD~3

# 回退到指定的提交版本，暂存区和工作区也会与变为指定提交版本一致
$ git reset --hard <commit-id>

# 回退到指定提交版本，但保持暂存区和工作区不变
$ git reset --keep <commit-id>
```

#### 中断工作流程处理

在实际开发中经常出现这样的情形：你正在开发一个大的新功能（工作在分支：`feature` 中），此时来了一个紧急的 BUG 需要修复，但是目前在工作区中的内容还没有成型，还不足以提交，但是又必须切换的另外的分支去修改 BUG。

```bash
$ git checkout feature		# you were working in 'feature' branch 

# develop new feature

$ git commit -a -m "snapshot WIP" 						# (1)
$ git checkout master

# fix bug

$ git commit				# commit with real log

$ git checkout feature
$ git reset --soft HEAD^ 	# go back to WIP state		# (2)
$ git reset												# (3)
```

1. 这次属于临时提交，因此随便添加一个临时注释即可
2. 这次 `reset` 删除了 WIP commit，并且把工作区设置成提交 WIP 快照之前的状态。
3. 此时，在索引中依然遗留着“snapshot WIP”提交时所做的未提交变化，`git reset` 将会清理索引成为尚未提交”*snapshot WIP*“时的状态便于接下来继续工作。

<br>

[⬆回到顶端](#目录)

## 删除 `rm`

> Remove files from the working tree and from the index
>
> 用于从工作区和索引中删除文件

### 语法

```
git rm [-f | --force] [-n] [-r] [--cached] [--ignore-unmatch] [--quiet] [--] <file>…
```

### 用法

#### 删除文件

当我们需要删除暂存区或分支上的文件，同时工作区也不需要这个文件了。

```bash
$ git rm <file1> <file2> ...
```

#### 从版本库中删除文件

当我们需要删除暂存区或分支上的文件，但本地又需要使用，只是不希望这个文件被版本库控制。

```bash
$ git rm --cached <file>
```

<br>

[⬆回到顶端](#目录)

## 移动和重命名 `mv`

> Move or rename a file, a directory, or a symlin
>
> 用于移动或重命名文件，目录或符号链接。

### 语法

```bash
$ git mv <options>… <args>…
```

### 用法

#### 重命名文件

如果你想重命名文件，并且将这个改名放入暂存区。`source` 必须存在，并且是文件，符号链接或目录。`destination` 为重命名后的名称。

```bash
$ git mv <source> <destination>
```

#### 移动文件

移动 `<source>` 到 `<destination directory>` 。最后一个参数必须是现有目录。

索引在成功完成后更新，但仍必须提交更改。

```bash
$ git mv <source> ... <destination directory>
```

<br>

[⬆回到顶端](#目录)