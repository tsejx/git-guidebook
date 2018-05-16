

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

### 说明





### 用法

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





## 移动和重命名 `mv`