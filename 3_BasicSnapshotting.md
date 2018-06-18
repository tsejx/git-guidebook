# 基本快照

**目录：基本快照**

-  添加`add`
- 状态 `status`
- 提交 `commit`
- 回滚 `reset`
- 删除 `rm`
- 移动和重命名 `mv`

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

### 说明

此命令将要提交的文件的信息添加到索引库中（将修改添加到暂存区），以准备为下一次提交分段的内容。 它通常将现有路径的当前内容作为一个整体添加，但是通过一些选项，它也可以用于添加内容，只对所应用的工作树文件进行一些更改，或删除工作树中不存在的路径了。

“索引”保存工作树内容的快照，并且将该快照作为下一个提交的内容。 因此，在对工作树进行任何更改之后，并且在运行 `git commit` 命令之前，必须使用 `git add` 命令将任何新的或修改的文件添加到索引。

该命令可以在提交之前多次执行。它只在运行 `git add` 命令时添加指定文件的内容; 如果希望随后的更改包含在下一个提交中，那么必须再次运行 `git add` 将新的内容添加到索引。

`git status` 命令可用于获取哪些文件具有为下一次提交分段的更改的摘要。（提交文件前最好先 `git status` 查看一下文件修改情况）

### 用法

#### 添加版本修改记录到暂存区

通过如下命令能判断已修改（不包括已删除）的文件和新添的文件，并把它们的信息添加到索引库(Index)中。

##### 指定文件

添加指定文件到暂存区

```
$ git add <file1> <file2> <file3> ...
```

##### 文件目录

添加指定目录到暂存区，包括子目录

```
$ git add <dir>
```

##### 所有目录文件

添加当前目录的所有文件到暂存区

```
$ git add .
```

##### 分次提交

添加每个变化前，都会要求确认。

对于同一个文件的多处变化，可以实现分次提交。

```
$ git add -p
```

<details>

<summary>命令扩展</summary>

```
$ git add *Controller   # 将以Controller结尾的文件的所有修改添加到暂存区

$ git add Hello*   # 将所有以Hello开头的文件的修改添加到暂存区 例如:HelloWorld.txt,Hello.java,HelloGit.txt ...

$ git add Hello?   # 将以Hello开头后面只有一位的文件的修改提交到暂存区 例如:Hello1.txt,HelloA.java 如果是HelloGit.txt或者Hello.java是不会被添加的$ git add [file1] [file2] ...
```

</details>

#### 添加跟踪文件到暂存区

把 `<path>` 中所有跟踪文件中被修改过或已删除文件的信息添加到索引库。它不会处理那些不被跟踪的文件。省略 `<path>` 表示  `.` ,即当前目录。

```
$ git add -u [<path>]
```

#### 添加已修改、已删除以及未跟踪文件修改记录到暂存区

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

`git status` 命令用于显示工作目录和暂存区的状态。使用此命令能看到那些修改被暂存到了，哪些没有，, 哪些文件没有被 git 跟踪到。

`git status` 不显示已经 `commit` 到项目历史中去的信息。看项目历史的信息要使用 `git log`。

### 语法

```
git status [<options>…] [--] [<pathspec>…]
```

### 说明

显示索引文件和当前 HEAD 提交之间的差异，在工作树和索引文件之间有差异的路径以及工作树中没有被 git 跟踪的路径。 第一个是通过运行 `git commit` 来提交的；第二个和第三个是你可以通过在运行 `git commit` 之前运行 `git add` 来提交的。

`git status` 相对来说是一个简单的命令，它简单的展示状态信息。输出的内容分为3个分类/组。

<details>

<summary>例子</summary>

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

</details>

### 用法

#### 查看代码仓库版本更改

在每次执行 `git commit` 之前先使用 `git status` 检查文件状态是一个很好的习惯, 这样能防止你不小心提交了您不想提交的东西。 下面的例子展示 stage 前后的状态, 并最后提交一个快照。

`git status` 命令可以列出当前目录所有还没有被git管理的文件和被git管理且被修改但还未提交(`git commit`)的文件。

```
$ git status
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

#### 提交暂存区到本地仓库区

如果你想将通过 `git add` 存入暂存区(Index)的文件修改记录提交到本地仓库区，你可以使用如下的命令。`<message>` 表示你对这次提交记录的描述，需要使用引号包括。如果文件已修改但未添至暂存区，则提交时不会提交任何修改。

```
$ git commit -m <message>
```

<details>

<summary>例子</summary>

```
$ git commit -m 'the commit messge'
```

</details>

如果你想将暂存区指定的文件修改提交到本地仓库区，你可以使用如下的命令。`<file>` 表示你要提交的文件路径，文件可以是多个。

```
$ git commit <file1> <file2> ... -m <message>
```

#### 提交工作区有版本记录文件

如果你想将工作区所有自上一次提交(commit)之后的变化直接提交到仓库区，你可以使用如下命令，相当于省略了 `git add`。对于还没有 track 的文件，还是需要执行 `git add <file>` 命令。

```
$ git commit -a
```

#### 提交时显示所有 diff 信息

```
$ git commit -v
```

#### 增补提交文件

如果你想重做上一次commit，并包括指定文件的新变化，那么你可以使用如下命令。

增补提交，会使用与当前提交节点相同的父节点进行一次新的提交，旧的提交将会被取消。

```
$ git commit -amend <file1> <file2>
```

如果你想使用一次新的提交(commit)，替代上一次提交，那么你可以使用如下命令。如果代码没有任何新变化，则用来改写上一次commit的提交信息


```
$ git commit -amend -m <message>
```

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

#### 重置暂存区

重置暂存区的指定文件，与上一次commit保持一致，但工作区不变

```
$ git reset <file>
```

重置暂存区与工作区，与上一次commit保持一致

```
$ git reset --hard
```

重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变

```
$ git reset <commit>
```

重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致 

```
$ git reset --hard <commit>
```

重置当前HEAD为指定commit，但保持暂存区和工作区不变

```
$ git reset --keep <commit>
```

#### 回滚添加操作

```
$ edit    file1.c file2.c           		# (1) 
$ git add file1.c file1.c           		# (1.1) 添加两个文件到暂存
$ mailx                             		# (2) 
$ git reset                           		# (3) 
$ git pull git://info.example.com/ nitfol   # (4)
```

1. 编辑文件 `file1.js ` 和 `file2.js` ，做了些更改，并把更改添加到暂存区
2. 此时有人修改文件，并需要您执行 `git pull` ，有一些改变需要合并下来。
3. 然而，您已经把暂存区搞乱了，因为暂存区同 HEAD commit 不匹配了，但是即将 `git pull` 下来的东西不会影响已经修改的 `file1.js` 和 `file2.js`，因此可以 `revert` 这两个文件的改变。在 `还原 revert` 之后，那些改变应该依旧在工作目录中，因此执行 `git reset`。
4. 然后，执行了 `git pull` 之后，自动合并，`file1.js` 和 `file2.js` 这些改变依然在工作目录中。

#### 回滚最近一次提交

```
$ git commit -a -m "这是提交的备注信息"
$ git reset --soft HEAD^      			#(1) 
$ edit code                        		#(2) 编辑代码操作
$ git commit -a -c ORIG_HEAD  			#(3)
```

1. 当执行了提交之后，又发现代码没有提交完整，或者想重新编辑一下提交的信息，可执行 `git reset --soft HEAD^` ，让工作目录回滚到 `reset` 之前一样，不作任何改变。（`HEAD^` 表示指向 `HEAD` 之前最近的一次提交）
2. 对工作目录下的文件做修改，例如：修改文件中的代码等。
3. 然后使用 `reset` 之前那次提交的注释、作者、日期等信息重新提交。
   - 注意，当执行 `git reset` 命令时，git会把老的HEAD拷贝到文件 `.git/ORIG_HEAD` 中，在命令中可以使用 ORIG_HEAD 引用这个提交。
   - `git commit` 命令中 `-a`参数的意思是告诉 git，自动把所有修改的和删除的文件都放进暂存区，未被 git 跟踪的新建的文件不受影响。
   - `git commit`命令中`-c <commit>` 或者 `-C <commit>`意思是拿已经提交的对象中的信息（作者，提交者，注释，时间戳等）提交，那么这条`git commit` 命令的意思就非常清晰了，把所有更改的文件加入暂存区，并使用上次的提交信息重新提交。

#### 回滚最近几次提交，并把这几次提交放到指定分支中

回滚最近几次提交，并把这几次提交放到叫做 `feature` 的分支上去。

```
$ git branch feature				#(1)
$ git reset --hard HEAD~3 			#(2)
$ git checkout feature				#(3)
```

1. 假设已经提交了一些代码，但是此时发现这些提交还不太成熟，不能合并进入主分支（`master` 分支），希望在新的分支上缓存这些改动，因此执行创建分支命令，在当前的 HEAD 上建立了新的 `feature` 分支。
2. 然后回滚到主分支上的最近三次提交。`HEAD~3` 指向当前 `HEAD-3` 个提交，`git reset --hard HEAD~3`，即删除最近的三个提交（删除 `HEAD` 、 `HEAD^` 、`HEAD~2`）,将 HEAD 指向 `HEAD~3`

#### 永久删除最后几个提交

```
$ git commit ## 执行一些提交
$ git reset --hard HEAD~3			#(1)
```

1. 最后三个提交（即 `HEAD` 、 `HEAD^` 、`HEAD~2`）有问题，想永久删除这三个提交。

#### 中断工作流程处理

在实际开发中经常出现这样的情形：你正在开发一个大的新功能（工作在分支：`feature` 中），此时来了一个紧急的 BUG 需要修复，但是目前在工作区中的内容还没有成型，还不足以提交，但是又必须切换的另外的分支去修改 BUG。

```
$ git checkout feature		# you were working in 'feature' branch 
$ work work work 			# develop new feature
$ git commit -a -m "snapshot WIP" 						(1)
$ git checkout master
$ fix fix fix				# fix bug
$ git commit				# commit with real log
$ git checkout feature
$ git reset --soft HEAD^ 	# go back to WIP state		(2)
$ git reset												(3)
```

1. 这次属于临时提交，因此随便添加一个临时注释即可
2. 这次 `reset` 删除了 WIP commit，并且把工作区设置成提交 WIP 快照之前的状态。
3. 此时，在索引中依然遗留着“snapshot WIP”提交时所做的未提交变化，`git reset` 将会清理索引成为尚未提交”*snapshot WIP*“时的状态便于接下来继续工作。

####  重置单独的一个文件

假设你已经添加了一个文件进入索引，但是而后又不打算把这个文件提交，此时可以使用 `git reset` 把这个文件从索引中去除。

```
$ git reset -- index.js						(1)
$ git commit -m "Commit files in index"		(2)
$ git add index.js							(3)
```

1. 把文件 `index.js` 从索引中去除
2. 把索引中的文件提交
3. 再次把 `index.js` 加入索引

## 删除 `rm`

> Remove files from the working tree and from the index
>
> 用于从工作区和索引中删除文件

### 语法

```
git rm [-f | --force] [-n] [-r] [--cached] [--ignore-unmatch] [--quiet] [--] <file>…
```

### 用法

如果你想删除工作区文件，并且将这次删除的记录放入暂存区。

```
$ git rm <file1> <file2> ...
```

如果你想停止追踪指定文件，并将该文件保留在工作区。

```
$ git rm --cached <file>
```

## 移动和重命名 `mv`

> Move or rename a file, a directory, or a symlin
>
> 用于移动或重命名文件，目录或符号链接。

### 语法

```
git mv <options>… <args>…
```

### 用法

#### 移动或重命名文件

##### 重命名文件

如果你想重命名文件，并且将这个改名放入暂存区。`source` 必须存在，并且是文件，符号链接或目录。`destination` 为重命名后的名称。

```
$ git mv <source> <destination>
```

##### 移动文件

移动 `<source>` 到 `<destination directory>` 。最后一个参数必须是现有目录。

索引在成功完成后更新，但仍必须提交更改。

```
$ git mv <source> ... <destination directory>
```

