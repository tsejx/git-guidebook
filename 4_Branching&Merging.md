# 分支与合并



# 分支 `branch`

> List, create, or delete branches
>
> 列出, 创建, 或者删除分支

- 查看当前分支

```
$ git branch
  master
* release/1.0.0
```

上面显示结果中，当前有两个分支：**master** 和 **release/1.0.0**，当前在 **release/1.0.0** 分支上，它前面有个星号(`*`)。

- 新建一个分支

```
$ git branch dev/1.0.0
```

上面命令新建一个名为 `dev/1.0.0` 的分支

- 切换到指定分支

```
$ git checkout dev/1.0.0

# 再次查看分支
$ git branch
* dev/1.0.0
  master
  release/1.0.0
```

- 查看本地和远程分支

```
$ git branch -a
* dev/1.0.0
  master
  release/1.0.0
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/release/1.0.0
```

- 将更改添加到新建分支上

```
# 省略提交到本地存储仓库等步骤 git status -> git add -> git commit 
$ git push origin dev/1.0.0
```

- 修改本地分支名称

```
$ git branch -m dev/1.0.0 develop/1.0.0

# 查看远程分支
$ git branch -r
  origin/HEAD -> origin/master
  origin/master
  origin/release/1.0.0
  origin/dev/1.0.0
  
# 查看本地分支
$ git branch
  master
  release/1.0.0
  develop/1.0.0
```

- 删除远程分支

删除一个名称为 **dev/1.0.0** 的远程分支

```
$ git push origin --delete dev/1.0.0
```

- 合并某个分支到当前分支

```
$ git branch
  master
* develop/1.0.0
  release/1.0.0
  
$ git checkout master
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'

$ git status
On branch master
Your branch is up-to-date with 'origin/master'
nothing to commit, working diretory clean

$ git merge develop/1.0.0
Updating ...
Fast-forward
...
```

