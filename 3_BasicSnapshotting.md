

# 基本快照



## 添加 `add`

> Add file contents to the index
>
> 将文件内容添加到索引

`git add` 命令将文件内容添加到索引(将修改添加到暂存区)。也就是将要提交的文件的信息添加到索引库中。

### 描述

此命令将要提交的文件的信息添加到索引库中（将修改添加到暂存区），以准备为下一次提交分段的内容。 它通常将现有路径的当前内容作为一个整体添加，但是通过一些选项，它也可以用于添加内容，只对所应用的工作树文件进行一些更改，或删除工作树中不存在的路径了。

“索引”保存工作树内容的快照，并且将该快照作为下一个提交的内容。 因此，在对工作树进行任何更改之后，并且在运行 `git commit` 命令之前，必须使用 `git add` 命令将任何新的或修改的文件添加到索引。

该命令可以在提交之前多次执行。它只在运行 `git add` 命令时添加指定文件的内容; 如果希望随后的更改包含在下一个提交中，那么必须再次运行 `git add` 将新的内容添加到索引。

`git status` 命令可用于获取哪些文件具有为下一次提交分段的更改的摘要。（提交文件前最好先 `git status` 查看一下文件修改情况）

### 示例

- 添加指定文件到暂存区

```
$ git add [file1] [file2] ...
```

- 添加指定目录到暂存区，包括子目录

```
$ git add [dir]
```

- 添加当前目录所有文件到暂存区

```
$ git add .
```

- 添加每个变化前，都会要求确认。对于同一个文件的多处变化，可以实现分次提交。

```
$ git add -p
```

- 把 `<path>` 中所有跟踪文件中被修改过或已删除文件的信息添加到索引库。它不会处理那些不被跟踪的文件。省略 `<path>` 表示  `.` ,即当前目录。

```
$ git add -u [<path>]
```

- 表示把中所有跟踪文件中被修改过或已删除文件和所有未跟踪的文件信息添加到索引库。省略 `<path>` 表示  `.` ,即当前目录。

```
$ git add -A
```

- 我们可以通过 `git add -i [<path>]` 命令查看中被所有修改过或已删除文件但没有提交的文件，并通过其 `revert` 子命令可以查看 `<path>` 中所有未跟踪的文件，同时进入一个子命令系统。

```
$ git add -i [<path>]
```



## 状态 `status`

> Show the working tree status
>
> 显示工作树的状态

`git status` 命令用于显示工作目录和暂存区的状态。使用此命令能看到那些修改被暂存到了，哪些没有，, 哪些文件没有被 Git 跟踪到。

`git status` 不显示已经 `commit` 到项目历史中去的信息。看项目历史的信息要使用 `git log`。

### 描述

显示索引文件和当前 HEAD 提交之间的差异，在工作树和索引文件之间有差异的路径以及工作树中没有被 Git 跟踪的路径。 第一个是通过运行 `git commit` 来提交的; 第二个和第三个是你可以通过在运行 `git commit` 之前运行 `git add` 来提交的。

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

#### 忽略文件(Untracked Files)

没有 `tracked` 的文件分为两类。

-  已经被放在工作目录下但是还没有执行 `git add` 的。
- 一些编译了的程序文件(如`.pyc`, `.obj`, `.exe` 等)。

当这些不想add的文件一多起来, `git status` 的输出简直没法看。

Git 让我们能在一个特殊的文件 `.gitignore` 中把要忽略的文件放在其中， 每一个想忽略的文件应该独占一行， `*` 这个符号可以作为通配符使用。

例如在项目根目录下的 `.gitignore` 文件中加入下面内容能阻止 `.pyc` 和 `.tmp` 文件出现在 `git status` 中：

```
*.pyc
*.tmp
```

## 差异 `diff`

>Show changes between commits, commit and working tree, etc
>
>在提交，提交和工作树等之间显示更改



`git diff` 命令用于显示提交和工作树等之间的更改。此命令比较的是工作目录中当前文件和暂存区域快照之间的差异,也就是修改之后还没有暂存起来的变化内容。

### 描述

在工作树和索引或树之间显示更改，索引和树之间的更改，两个树之间的更改，两个blob对象之间的更改或两个文件在磁盘上的更改。

### 示例

#### 工作目录与暂存区对比



#### 暂存区与库存区对比



#### 工作目录与库存区对比



#### 库存区与库存区对比

 



- 比较文件在工作区与库存区的差别。如果还没 add 进库存区，则查看文件自身修改前后的差别。也可查看和另一分支的区别。

```
$ git diff <filename>
```

```
$ git diff <branch> <filename>
```

```
$ git diff <branch1> <branch2>
```

- 比较暂存区与最新本地版本库（本地库中最近一次 commit 的内容）。也可指定仓库版本。

```
$ git diff --cached <filename>
```

```
$ git diff --cached <commit> <filename>
```

- 比较工作区与最新本地版本库

```
git diff HEAD <filename>
```

- 比较工作区与指定 commit-id 的差异

```
git diff commit-id
```







## 提交 `commit`





## 重启 `reset`





## 删除 `rm`





## 移动和重命名 `mv`