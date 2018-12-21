## 共享和更新项目

**目录：**

- [提取 `fetch`](#提取-fetch)
- [拉取 `pull`](#拉取-pull)
- [推送 `push`](#推送-push)
- [远程 `remote`](#远程-remote)
- [子模块 `submodule`](#子模块-submodule)

### 提取 `fetch`

> Download objects and refs from another repository 
>
> 用于从另一个存储库下载对象和引用

#### 获取远程分支列表

可以用于本地显示的更新远程分支列表。

```bash
$ git fetch <remote>
```

<details>

<summary>例子</summary>

```bash
$ git fetch origin
```

</details>

#### 获取远程指定分支提交记录

一旦远程主机的版本库有了更新，需要将这些更新取回本地。

```bash
$ git fetch <repository>
```

[⬆回到章节目录](#共享和更新项目)

### 拉取 `pull`

> Fetch from and integrate with another repository or a local branch
>
> 用于从另一个存储库或本地分支获取并集成(整合)。

#### 获取版本修改记录

```bash
# 更新本地仓库至最新改动
$ git pull

# 当本地分支与远程分支没有共同祖先
$ git pull --rebase origin master
```

[⬆回到章节目录](#共享和更新项目)

### 推送 `push`

> Update remote refs along with associated objects
>
> 将本地分支的更新，推送到远程主机。

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

[⬆回到章节目录](#共享和更新项目)

### 远程 `remote`

> Manage set of tracked repositories
>
> 管理一组跟踪的存储库。

```bash
# 查看远程分支
$ git remote

# 列出远程分支的详细信息
$ git remote -v

# 查看指定远程仓库信息
$ git remote show <remote>

# 添加新的远程仓库
$ git remote add orgin <shortname> <url>

# 获取远程仓库变化
$ git pull <remote> <branch>
```

[⬆回到章节目录](#共享和更新项目)