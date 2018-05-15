

# 基本快照



## 添加 `add`

> Add file contents to the index
>
> 将文件内容添加到索引

`git add` 命令将文件内容添加到索引(将修改添加到暂存区)。也就是将要提交的文件的信息添加到索引库中。

### 语法

```
git add [--verbose | -v] [--dry-run | -n] [--force | -f] [--interactive | -i] [--patch | -p]
	  [--edit | -e] [--[no-]all | --[no-]ignore-removal | [--update | -u]]
	  [--intent-to-add | -N] [--refresh] [--ignore-errors] [--ignore-missing] [--renormalize]
	  [--chmod=(+|-)x] [--] [<pathspec>…]
```

### 说明

此命令将要提交的文件的信息添加到索引库中（将修改添加到暂存区），以准备为下一次提交分段的内容。 它通常将现有路径的当前内容作为一个整体添加，但是通过一些选项，它也可以用于添加内容，只对所应用的工作树文件进行一些更改，或删除工作树中不存在的路径了。

“索引”保存工作树内容的快照，并且将该快照作为下一个提交的内容。 因此，在对工作树进行任何更改之后，并且在运行 `git commit` 命令之前，必须使用 `git add` 命令将任何新的或修改的文件添加到索引。

该命令可以在提交之前多次执行。它只在运行 `git add` 命令时添加指定文件的内容; 如果希望随后的更改包含在下一个提交中，那么必须再次运行 `git add` 将新的内容添加到索引。

`git status` 命令可用于获取哪些文件具有为下一次提交分段的更改的摘要。（提交文件前最好先 `git status` 查看一下文件修改情况）

### 用法

#### 添加到暂存区

通常是通过 `git add <path>` 的形式把 `<path>` 添加到索引库中，`<path>` 可以是文件也可以是目录。

git不仅能判断出 `<path>` 中，修改（不包括已删除）的文件，还能判断出新添的文件，并把它们的信息添加到索引库中。

```
$ git add .  # 将所有修改添加到暂存区
$ git add *  # Ant风格添加修改
$ git add *Controller   # 将以Controller结尾的文件的所有修改添加到暂存区

$ git add Hello*   # 将所有以Hello开头的文件的修改添加到暂存区 例如:HelloWorld.txt,Hello.java,HelloGit.txt ...

$ git add Hello?   # 将以Hello开头后面只有一位的文件的修改提交到暂存区 例如:Hello1.txt,HelloA.java 如果是HelloGit.txt或者Hello.java是不会被添加的$ git add [file1] [file2] ...
```



- 添加每个变化前，都会要求确认。对于同一个文件的多处变化，可以实现分次提交。

```
$ git add -p
```

#### 添加跟踪文件到暂存区

把 `<path>` 中所有跟踪文件中被修改过或已删除文件的信息添加到索引库。它不会处理那些不被跟踪的文件。省略 `<path>` 表示  `.` ,即当前目录。

```
$ git add -u [<path>]
```

#### 添加已修改、已删除以及未跟踪文件到暂存区

表示把中所有跟踪文件中被修改过或已删除文件和所有未跟踪的文件信息添加到索引库。省略 `<path>` 表示  `.` ,即当前目录。

```
$ git add -A
```

#### 查看已修改、已修改但未提交文件

我们可以通过 `git add -i [<path>]` 命令查看中被所有修改过或已删除文件但没有提交的文件，并通过其 `revert` 子命令可以查看 `<path>` 中所有未跟踪的文件，同时进入一个子命令系统。

```
$ git add -i [<path>]
```

## 状态 `status`

> Show the working tree status
>
> 显示工作树的状态

`git status` 命令用于显示工作目录和暂存区的状态。使用此命令能看到那些修改被暂存到了，哪些没有，, 哪些文件没有被 Git 跟踪到。

`git status` 不显示已经 `commit` 到项目历史中去的信息。看项目历史的信息要使用 `git log`。

### 语法

```
git status [<options>…] [--] [<pathspec>…]
```

### 说明

显示索引文件和当前 HEAD 提交之间的差异，在工作树和索引文件之间有差异的路径以及工作树中没有被 Git 跟踪的路径。 第一个是通过运行 `git commit` 来提交的；第二个和第三个是你可以通过在运行 `git commit` 之前运行 `git add` 来提交的。

`git status` 相对来说是一个简单的命令，它简单的展示状态信息。输出的内容分为3个分类/组。

```
# On branch master
# Changes to be committed:  (已经在stage区, 等待添加到HEAD中的文件)
# (use "git reset HEAD <file>..." to unstage)
#
#modified: hello.py
#
# Changes not staged for commit: (有修改, 但是没有被添加到stage区的文件)
# (use "git add <file>..." to update what will be committed)
# (use "git checkout -- <file>..." to discard changes in working directory)
#
#modified: main.py
#
# Untracked files:(没有tracked过的文件, 即从没有add过的文件)
# (use "git add <file>..." to include in what will be committed)
#
#hello.pyc
```

### 用法

#### 检查仓库版本更改

在每次执行 `git commit` 之前先使用 `git status` 检查文件状态是一个很好的习惯, 这样能防止你不小心提交了您不想提交的东西。 下面的例子展示 stage 前后的状态, 并最后提交一个快照。

`git status` 命令可以列出当前目录所有还没有被git管理的文件和被git管理且被修改但还未提交(`git commit`)的文件。

```
$ git status
```

## 差异 `diff`

>Show changes between commits, commit and working tree, etc
>
>在提交，提交和工作树等之间显示更改

### 语法

```
git diff [options] [<commit>] [--] [<path>…]
git diff [options] --cached [<commit>] [--] [<path>…]
git diff [options] <commit> <commit> [--] [<path>…]
git diff [options] <blob> <blob>
git diff [options] [--no-index] [--] <path> <path>
```

### 说明

`git diff` 命令用于显示提交和工作树等之间的更改。此命令比较的是工作目录中当前文件和暂存区域快照之间的差异,也就是修改之后还没有暂存起来的变化内容。

在工作树和索引或树之间显示更改，索引和树之间的更改，两个树之间的更改，两个blob对象之间的更改或两个文件在磁盘上的更改。

### 用法

#### 查看尚未暂存的文件差异

此命令比较的是工作目录（Working tree）和暂存区域快照（index）之间的差异 也就是修改之后还没有暂存起来的变化内容。 

```
$ git diff
```

#### 查看暂存文件和上次快照之间的差异

```
$ git diff --cached
$ git diff --staged
```

#### 显示工作版本和HEAD的差异

```
$ git diff HEAD
```

#### 查看两个分支最新提交的差异

```
$ git diff topic master
```

#### 查看当前目录和另一个分支(`test`)的差异

```
$ git diff test
```

#### 比较两个历史版本之间的差异

```
$ git diff SHA1 SHA2
```

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

#### 提交所有已修改文件

会先把所有已经 track 的文件的改动 `git add` 进来，然后提交(有点像svn的一次提交,不用先暂存)。对于没有track的文件,还是需要执行 `git add <file>`  命令。

```
$ git commit -a
```

#### 提交缓存区文件至本地仓库区

该命令会将 `git add` 存入暂存区修改内容提交至本地仓库中，若文件未添加至暂存区，则提交时不会提交任何修改。

```
$ git commit -m 'the commit messge'
```

#### 增补提交文件

增补提交，会使用与当前提交节点相同的父节点进行一次新的提交，旧的提交将会被取消。

```
$ git commit -amend
```

## 重启 `reset`





## 删除 `rm`





## 移动和重命名 `mv`