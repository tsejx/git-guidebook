# 共享和更新项目

## 目录

**目录：共享和更新项目**

- [提取 `fetch`](#提取-fetch)
- [拉取 `pull`](#拉取-pull)
- [推送 `push`](#推送-push)
- [远程 `remote`](#远程-remote)
- [子模块 `submodule`](#子模块-submodule)

## 提取 `fetch`

> Download objects and refs from another repository 
>
> 用于从另一个存储库下载对象和引用

### 语法

```
git fetch [<options>] [<repository> [<refspec>…]]
git fetch [<options>] <group>
git fetch --multiple [<options>] [(<repository> | <group>)…]
git fetch --all [<options>]
```

### 用法

#### 更新远程跟踪分支

```bash
$ git fetch <remote>
```

<details>

<summary>例子</summary>

```bash
$ git fetch origin
```

</details>

#### 将某个远程主机的更新

一旦远程主机的版本库有了更新（Git术语叫做commit），需要将这些更新取回本地。

```bash
$ git fetch <repository>
```

<br>

[⬆回到顶端](#目录)

## 拉取 `pull`

> Fetch from and integrate with another repository or a local branch
>
> 用于从另一个存储库或本地分支获取并集成(整合)。

### 语法

```
git pull [<options>] [<repository> [<refspec>…]]
```

### 用法

#### 更新你的本地仓库至最新改动

```bash
$ git pull
```

<br>

[⬆回到顶端](#目录)

## 推送 `push`

> Update remote refs along with associated objects
>
> 将本地分支的更新，推送到远程主机。

### 语法

```
git push [--all | --mirror | --tags] [--follow-tags] [--atomic] [-n | --dry-run] [--receive-pack=<git-receive-pack>]
       [--repo=<repository>] [-f | --force] [-d | --delete] [--prune] [-v | --verbose]
       [-u | --set-upstream] [--push-option=<string>]
       [--[no-]signed|--sign=(true|false|if-asked)]
       [--force-with-lease[=<refname>[:<expect>]]]
       [--no-verify] [<repository> [<refspec>…]]
```

### 用法

#### 推送到远程仓库

执行如下命令以将本地仓库 HEAD 中的版本改动提交到远程仓库

```bash
$ git push
```

<details>

<summary>示例</summary>

上面命令表示，将本地的 `master` 分支推送到 `origin` 主机的 `master` 分支。如果 `master` 不存在，则会被新建。

```bash
$ git push origin master
```

可以将 master 换成你想要推送的任何分支。

</details>

#### 删除指定的远程分支

```bash
$ git push origin --delete <branch-name>
```

<details>

<summary>示例</summary>

下面命令表示删除`origin`主机的`master`分支。如果当前分支与远程分支之间存在追踪关系，则本地分支和远程分支都可以省略。

```bash
$ git push origin --delete master
# 等同于
$ git push origin
```

</details>

#### 推送标签修改

```bash
# 推送标签
$ git push origin --tags

# 删除远程标签
$ git push origin :<tag-name>
```

#### 推送分支修改

将当前分支推送到远程的同名的简单方法

```bash
$ git push origin HEAD
```

<br>

[⬆回到顶端](#目录)

## 远程 `remote`

> Manage set of tracked repositories
>
> 管理一组跟踪的存储库。

### 语法

```
git remote [-v | --verbose]
git remote add [-t <branch>] [-m <master>] [-f] [--[no-]tags] [--mirror=<fetch|push>] <name> <url>
git remote rename <old> <new>
git remote remove <name>
git remote set-head <name> (-a | --auto | -d | --delete | <branch>)
git remote set-branches [--add] <name> <branch>…
git remote get-url [--push] [--all] <name>
git remote set-url [--push] <name> <newurl> [<oldurl>]
git remote set-url --add [--push] <name> <newurl>
git remote set-url --delete [--push] <name> <url>
git remote [-v | --verbose] show [-n] <name>…
git remote prune [-n | --dry-run] <name>…
git remote [-v | --verbose] update [-p | --prune] [(<group> | <remote>)…]
```

### 用法

#### 查看远程分支

`-v` 即 `--verbose` 表现显示对应的克隆地址。

```bash
$ git remote

# 列出详细信息
$ git remote -v

# 查看指定远程仓库信息
$ git remote show <remote>
```

#### 添加远程仓库

增加一个新的远程仓库，并命名

```bash
$ git remote add origin <shortname> <url>
```

#### 获取远程仓库变化

如果你想获得远程仓库的变化，并与本地分支合并。

```bash
$ git pull <remote> <branch>
```

<br>

[⬆回到顶端](#目录)