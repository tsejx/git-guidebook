# 工作中使用git的实用技巧总结

## 创建一个新的本地git分支

`git branch master_local`

## 切换到本地分支

`git checkout master`

## 查看当前是那个分支

`git branch`

## 查看远程分支

`git branch -a`

## 创建并切换到本地分支

`git checkout -b dev3333`

## 删除本地分支

`git branch -d dev3333`

## 删除远程分支

`git push origin --delete dev3333333 remote`

## 回滚未commit的修改

前提：该文件不是新增文件，并且没有提交(commit)

```
    git checkout -- test.sh
    git checkout -- readme.txt
```

回滚多个文件：

```
    git checkout HEAD --prod.sh
    src/main/java/com/chanjet/gov/controller/LogViewController.java
```

## 回滚已经commit但未push的修改

前提：commit过，但是未push

`git reset --hard 123456789`

注意：后面的一串字符串从哪里获取呢？

参考下面的命令 `git log --pretty=online`

`git reset --hard HEAD^`

## 查看提交记录

`git log --pretty=online`

## 把本地分版支提交到新的远程分支

`git -c core.quotepath=false push -- --progress --porcelain origin  refs/heads/dev333::dev3333_remote --set upstream`

**简化版**

`git push origin refs/heads/dev3333:dev333333_remote -set-upstream`

说明：dev3333是本地分支

## 拉取git最新消息

`git fetch origin --progress --prue`

## 删除本地分支和远程分支的关联关系

`git branch --unset-upstream`

参考资料：

1. [工作中使用git的实用技巧总结][1]


  [1]: http://blog.csdn.net/hw1287789687/article/details/51915068