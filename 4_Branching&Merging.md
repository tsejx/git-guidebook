# 分支与合并

**目录：分支与合并**

- [分支 `branch`](#分支-branch)
- [查看 `checkout`](#查看checkout)
- [合并 `merge`](#合并merge)
- [储藏 `stash`](#储藏stash)
- [标签 `tag`](#标签tag)
- worktree

## 分支 `branch`

> List, create, or delete branches
>
> 列出, 创建, 或者删除分支

### 语法

```
git stash list [<options>]
git stash show [<stash>]
git stash drop [-q|--quiet] [<stash>]
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash save [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
         [-u|--include-untracked] [-a|--all] [<message>]
git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
         [-u|--include-untracked] [-a|--all] [-m|--message <message>]]
         [--] [<pathspec>…]]
git stash clear
git stash create [<message>]
git stash store [-m|--message <message>] [-q|--quiet] <commit>
```

### 用法

#### 查看分支

##### 查看所有分支

```
$ git branch
```

<details>

<summary>例子</summary>

```
$ git branch
  master
* release/1.0.0
```

上面显示结果中，当前有两个分支：**master** 和 **release/1.0.0**，当前在 **release/1.0.0** 分支上，它前面有个星号(`*`)。

</details>

##### 查看远程分支

```
$ git branch -r
```

##### 查看本地分支和远程分支

```
$ git branch -a
```

<details>

<summary>例子</summary>

```
$ git branch -a
* dev/1.0.0
  master
  release/1.0.0
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/release/1.0.0
```

</details>

#### 新建分支

##### 新建分支但并不切换分支

新建一个分支，但依然停留在当前分支。`<branch-name>` 为新建分支名称。

```
$ git branch <branch-name>
```

<details>

<summary>例子</summary>

```
$ git branch dev/1.0.0
```

上面命令新建一个名为 `dev/1.0.0` 的分支

</details>

##### 新建分支并切换到该分支

```
$ git checkout -b <branch>
```

##### 新建一个分支，指向指定commit

```
$ git branch <branch> <commit>
```

##### 新建一个分支，与指定的远程分支建立追踪关系

```
$ git branch --track <branch> <remote-branch>
```

#### 切换分支

切换到指定分支。`<branch>` 为切换到的分支。

```
$ git checkout <branch>
```

<details>

<summary>例子</summary>

```
$ git checkout dev/1.0.0
```

</details>

#### 修改分支

修改指定分支名称。`<branch-name>` 为指定分支新名称。

```
$ git branch -m <branch-name>
```

<details>

<summary>例子</summary>

```
$ git branch -m dev/1.0.0 develop/1.0.0
```

</details>

#### 删除分支

##### 删除本地分支

通过如下命令可以删除指定本地分支。`<branch>` 为分支名称。

```
$ git branch -d <branch>
```

<details>

<summary>例子</summary>

删除一个名称为 **dev/1.0.0** 的远程分支

```
$ git push origin --delete dev/1.0.0
```

</details>

##### 删除远程分支

通过如下命令可以删除指定的远程分支。

```
$ git push origin --delete <branch>
$ git branch -dr [remote/branch]
```

<details>

<summary>例子</summary>

删除一个名称为 **dev/1.0.0** 的远程分支

```
$ git push origin --delete dev/1.0.0
```

</details>

## 查看 `checkout`

> Switch branches or restore working tree files
>
> 切换分支或恢复工作树文件。

### 语法

```
git checkout [-q] [-f] [-m] [<branch>]
git checkout [-q] [-f] [-m] --detach [<branch>]
git checkout [-q] [-f] [-m] [--detach] <commit>
git checkout [-q] [-f] [-m] [[-b|-B|--orphan] <new_branch>] [<start_point>]
git checkout [-f|--ours|--theirs|-m|--conflict=<style>] [<tree-ish>] [--] <paths>…
git checkout [-p|--patch] [<tree-ish>] [--] [<paths>…]
```

### 用法

#### 撤销/恢复

##### 恢复暂存区的指定文件到工作区

```
$ git checkout <file>
```

##### 恢复某个commit的指定文件到暂存区和工作区

```
$ git checkout <commit> <file>
```

##### 恢复暂存区的所有文件到工作区

```
$ git checkout .
```

#### 切换分支

```
$ git checkout <branch>
```

##### 切换到指定分支，并更新工作区

```
$ git checkout <branch-name>
```

##### 切换到上一个分支

```
$ git checkout -
```

#### 替换本地改动

假如你操作失误，你可以使用如下命令替换本地改动

```
$ git checkout -- <filename>
```

此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到暂存区的改动以及新文件都不会受到影响。

#### 创建分支并切换分支

通过如下命令可以创建一个自定义命名的分支，并切换到该分支上。`<branch>` 为分支命名。

```
$ git checkout -b <branch>
```

<details>

<summary>例子</summary>

创建一个命名为 feature_x 的分支，并切换到该分支上。

```
$ git checkout -b feature_x
```

</details>

## 合并 `merge`

> Join two or more development histories together
>
> 用于将两个或两个以上的开发历史加入(合并)一起。

### 语法

```
git merge [-n] [--stat] [--no-commit] [--squash] [--[no-]edit]
    [-s <strategy>] [-X <strategy-option>] [-S[<keyid>]]
    [--[no-]allow-unrelated-histories]
    [--[no-]rerere-autoupdate] [-m <msg>] [<commit>…]
git merge --abort
git merge --continue
```

### 用法

#### 合并分支

以在你的工作目录中*获取（fetch）* 并 *合并（merge）*远端的改动。

如果你要合并指定分支到当前分支。`branch` 为需要合并到当前分支的名称。

```
$ git merge <branch1> <branch2> ...
```

## 储藏 `stash`

> Stash the changes in a dirty working directory away
>
> 将更改储藏在脏工作目录中

### 语法

```
git stash list [<options>]
git stash show [<stash>]
git stash drop [-q|--quiet] [<stash>]
git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
git stash branch <branchname> [<stash>]
git stash [push [-p|--patch] [-k|--[no-]keep-index] [-q|--quiet]
	     [-u|--include-untracked] [-a|--all] [-m|--message <message>]
	     [--] [<pathspec>…]]
git stash clear
git stash create [<message>]
git stash store [-m|--message <message>] [-q|--quiet] <commit>
```

### 说明

经常有这样的事情发生，当你正在进行项目中某一部分的工作，里面的东西处于一个比较杂乱的状态，而你想转到其他分支上进行一些工作。问题是，你不想提交进行了一半的工作，否则以后你无法回到这个工作点。解决这个问题的办法就是 `git stash` 命令。

“‘储藏”“可以获取你工作目录的中间状态——也就是你修改过的被追踪的文件和暂存的变更——并将它保存到一个未完结变更的堆栈中，随时可以重新应用。

### 用法

#### 储藏暂存区版本变更

当你的工作进行到了一半，而又接到紧急的代码修复任务，却并不想提交你当前进行中的工作，所以你需要暂时储藏当前的变更，切换到另一个分支进行紧急的修复任务。

```
$ git stash
Saved working diretory and index state \
 "WIP on master: 049d078 added the index file" 
 HEAD is now at 049d078 added the index file
 (To restore them type "git stash apply")
```

这时，你可以方便切换其他分支进行工作，你的变更都保存在栈中。

#### 查看现有的储藏

```
$ git stash list
stash@{0}: WIP on master: 049d078 added the index file
stash@{1}: WIP on master: c264051 Revert "added file_size"
stash@{2}: WIP on master: 21d80a5 added number to log
```

在这个案例中，之前已经进行了两次储藏，所以你可以访问到三个不同的储藏。

#### 重新应用储藏并保留栈中的储藏

你可以重新应用你刚刚实施的储藏（但是储藏的内容仍然在栈上）。

```
$ git stash apply
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#
#      modified:   index.html
#      modified:   lib/simplegit.rb
#
```

也可以应用更早的储藏，你需要通过名称指定它。如果你不指明，Git 默认使用最近的储藏并尝试使用它。

```
$ git stash apply stash@{2}
```

你可以看到 Git 重新修改了你所储藏的那些当时尚未提交的文件。在这个案例里，你尝试应用储藏的工作目录是干净的，并且属于同一分支；但是一个干净的工作目录和应用到相同的分支上并不是应用储藏的必要条件。你可以在其中一个分支上保留一份储藏，随后切换到另外一个分支，再重新应用这些变更。在工作目录里包含已修改和未提交的文件时，你也可以应用储藏——Git 会给出归并冲突如果有任何变更无法干净地被应用。

#### 移除储藏

你可以运行 `git stash drop` 加上你希望移除的储藏的名称来移除储藏。

```
$ git stash drop stash@{0}
Dropped stash@{0} (364e91f3f268f0900bc3ee613f9f733e82aaed43)
```

#### 重新应用储藏并移除栈中的储藏

```
$ git stash pop
```

#### 取消储藏

某些情况下，你可能想应用储藏的修改，在进行了一些其他的修改后，又要取消之前所应用储藏的修改。Git没有提供类似于 `stash unapply` 的命令，但是可以通过取消该储藏的补丁达到同样的效果：

```
$ git stash show -p stash@{0} | git apply -R
```

同样的，如果你没有指定具体的某个储藏，Git 会选择最近的储藏。

```
$ git stash show -p| git apply -R
```

#### 从储藏中创建分支

如果你储藏了一些工作，暂时不去理会，然后继续在你储藏工作的分支上工作，你在重新应用工作时可能会碰到一些问题。如果尝试应用的变更是针对一个你那之后修改过的文件，你会碰到一个归并冲突并且必须去化解它。如果你想用更方便的方法来重新检验你储藏的变更，你可以运行 `git stash branch`，这会创建一个新的分支，检出你储藏工作时的所处的提交，重新应用你的工作，如果成功，将会丢弃储藏。

```
$ git stash branch testchanges
Switched to a new branch "testchanges"
# On branch testchanges
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#      modified:   index.html
#
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#
#      modified:   lib/simplegit.rb
#
Dropped refs/stash@{0} (f0dfc4d5dc332d1cee34a634182e168c4efc3359)
```



## 标签 `tag`

> Create, list, delete or verify a tag object signed with GPG
>
> 用于创建，列出，删除或验证使用GPG签名的标签对象

### 语法

```
git tag [-a | -s | -u <keyid>] [-f] [-m <msg> | -F <file>]
    <tagname> [<commit> | <object>]
git tag -d <tagname>…
git tag [-n[<num>]] -l [--contains <commit>] [--no-contains <commit>]
    [--points-at <object>] [--column[=<options>] | --no-column]
    [--create-reflog] [--sort=<key>] [--format=<format>]
    [--[no-]merged [<commit>]] [<pattern>…]
git tag -v [--format=<format>] <tagname>…
```

### 用法

#### 查看标签

##### 查看所有标签

```
$ git tag
```

##### 查看标签信息

```
$ git show <tag>
```

#### 提交标签

##### 提交指定标签

```
$ git push <remote> <tag>
```

##### 提交所有标签

```
$ git push <remote> --tags
```

#### 新建标签

##### 在指定提交中新建标签

```
$ git tag [tag] [commit]
```

##### 在当前提交新建标签

```
$ git tag <tag>
```

#####  新建分支指向标签

```
$ git checkout -b [branch] [tag]
```

#### 删除标签

#####删除本地标签

 ```
$ git tag -d [tag]
 ```

##### 删除远程标签

```
$ git push origin :refs/tags/[tagName]
```