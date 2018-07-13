# 分支与合并

## 目录

**目录：分支与合并**

- [分支 `branch`](#分支-branch)
- [查看 `checkout`](#查看-checkout)
- [合并 `merge`](#合并-merge)
- [储藏 `stash`](#储藏-stash)
- [标签 `tag`](#标签-tag)
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

```bash
# 查看所有分支
$ git branch

# 查看远程分支 -r相当于remote
$ git branch -r

# 查看本地分支和远程分支 -a相当于all
$ git branch -a

# 查看本地分支关联远程分支的情况
$ git branch -vv
```

<details>

<summary>示例</summary>

```bash
# 本地分支
$ git branch
  master
* release/1.0.0
```

上面显示结果中，当前有两个分支：**master** 和 **release/1.0.0**，当前在 **release/1.0.0** 分支上，它前面有个星号(`*`)。

```bash
# 远程分支
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

新建一个分支，但依然停留在当前分支。`<branch-name>` 为新建分支名称。

```bash
# 新建分支但并不切换分支
$ git branch <branch-name>

# 新建分支并切换到该本地分支
$ git checkout -b <branch-name>

# 新建一个分支，指向指定提交
$ git branch <branch-name> <commit-id>

# 新建一个分支，与指定的远程分支建立追踪关系
$ git branch --track <branch-name> <remote-branch>
```

#### 关联远程分支

关联之后，`git branch -vv` 就可以展示关联的远程分支名了，同时推送到远程仓库：`git push` 不要指定远程仓库了。

```bash
$ git branch -u <branch-name>
```

或者在 `git push` 时加上参数 `-u` 参数。

```bash
$ git push origin/<branch-name>
```

#### 切换分支

切换到指定分支。`<branch-name>` 为切换到的分支。

```bash
$ git checkout <branch-name>
```

<details>

<summary>示例</summary>

```bash
$ git checkout dev/1.0.0
```

</details>

#### 修改分支

修改指定分支名称。`<branch-name>` 为指定分支新名称。`-m` 即 `--move` 表示移动或重命名和相应的引用日志。

```bash
$ git branch -m <branch-name>
```

<details>

<summary>例子</summary>

```bash
$ git branch -m dev/1.0.0 develop/1.0.0
```

</details>

#### 删除本地分支

通过如下命令可以删除指定本地分支。`<local-branch-name>` 为本地分支名称。

```bash
$ git branch -d <local-branch-name>
```

<details>

<summary>例子</summary>

删除一个名称为 **dev/1.0.0** 的远程分支

```bash
$ git push origin --delete dev/1.0.0
```

</details>

#### 删除远程分支

通过如下命令可以删除指定的远程分支。

```bash
$ git push origin --delete <branch-name>
$ git branch -dr [remote/branch]
```

<details>

<summary>例子</summary>

删除一个名称为 **dev/1.0.0** 的远程分支

```bash
$ git push origin --delete dev/1.0.0
```

</details>

#### 重命名本地分支

```bash
$ git -m <new-branch-name>
```

<br>

[⬆回到顶端](#目录)

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

#### 撤销/恢复文件

```bash
# 放弃工作区所有文件的修改
$ git checkout .

# 放弃工作区指定文件的修改
$ git checkout <file>

# 恢复某个提交的指定文件到暂存区和工作区
$ git checkout <commit> <file>
```

#### 切换分支

```bash
# 切换到指定分支
$ git checkout <branch-name>

# 切换到上一个分支
$ git checkout -
```

#### 切换标签

一般上线之前都会打tag，就是为了防止上线后出现问题，方便快速回退到上一版本。下面的命令是回到某一标签下的状态。

```bash
$ git checkout -b branch_name tag_name
```

#### 替换本地改动

假如你操作失误，你可以使用如下命令替换本地改动

```bash
$ git checkout -- <filename>
```

此命令会使用 HEAD 中的最新内容替换掉你的工作目录中的文件。已添加到暂存区的改动以及新文件都不会受到影响。

#### 创建分支并切换分支

通过如下命令可以创建一个自定义命名的分支，并切换到该分支上。`<branch-name>` 为分支命名。

```bash
# 切换的分支保留提交记录日志
$ git checkout -b <branch-name>

# 切换的分支重写提交记录日志
$ git checkout --orphan <branch-name>
```

<details>

<summary>例子</summary>

创建一个命名为 feature_x 的分支，并切换到该分支上。

```bash
$ git checkout -b feature_x
```

</details>

#### 从储藏库中拿出指定提交

```bash
$ git checkout <stash@{n}> -- <file-name>
```

#### 恢复删除的文件

```bash
# 得到 deleting_commit
$ git rev-list -n 1 HEAD -- <file_path> 

# 回到删除文件 deleting_commit 之前的状态
$ git checkout <deleting_commit>^ -- <file_path> 
```

<br>

[⬆回到顶端](#目录)

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

```bash
$ git merge <branch1> <branch2> ...
```

<br>

[⬆回到顶端](#目录)

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

### 用法

#### 储藏文件修改

储藏文件修改，但是不用提交到版本库。

```bash
# 将所有文件修改储藏
$ git stash

# 储藏包括未跟踪（untracked）的文件
$ git stash -u
```

#### 查看所有储藏记录

```bash
$ git stash list
```

#### 重回指定储藏版本

重新应用你刚刚实施的储藏（但是储藏的内容仍然在栈上）。

```bash
$ git stash apply <stash@{n}>
```

也可以应用更早的储藏，你需要通过名称指定它。如果你不指明，Git 默认使用最近的储藏并尝试使用它。

<details>

<summary>示例</summary>

```bash
$ git stash apply stash@{2}
```

</details>

#### 重回最后储藏版本

重回最后一个储藏的版本，并删除这个储藏版本库中的版本。

```bash
$ git stash pop
```

#### 移除储藏

你可以运行 `git stash drop` 加上你希望移除的储藏的名称来移除储藏。

```
$ git stash drop <stash@{n}>
```

<details>

<summary>示例</summary>

```bash
$ git stash drop stash@{0}
```

</details>

#### 清空储藏

```bash
$ git stash clear
```

<br>

[⬆回到顶端](#目录)

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

```bash
# 查看所有标签
$ git tag

# 查看标签信息
$ git show <tag-name>

# 展示当前分支的最近标签
$ git describe --tags --abbrev=0
```

#### 推送标签

首先要保证本地创建好了标签才可以推送标签到远程仓库

```bash
# 提交指定标签
$ git push <remote> <tag-name>

# 提交所有标签
$ git push <remote> --tags
```

#### 新建标签

```bash
# 在当前提交新建标签（默认打在最近一次提交记录上）
$ git tag <tag-name>

# 在指定提交中新建标签
$ git tag <tag-name> <commit-id>

# 新建分支指向标签
$ git checkout -b <branch-name> <tag-name>
```

#### 删除标签

 ```bash
# 删除本地标签
$ git tag -d <tag-name>

# 删除远程标签
$ git push origin :refs/tags/<tag-name>
 ```

<br>

[⬆回到顶端](#目录)