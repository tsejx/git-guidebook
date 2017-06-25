
# Git 命令 入门笔记（常用）

标签（空格分隔）： Git

---
**生成 SSH**

`$ ssh-keygen -t ras -C "email@xxx"` 将生成的SSH key复制到文本框中即可（title默认为邮箱名）

**设置用户名邮箱**
`$ git config --global user.name "Your Name"`
`$ git config --global user.email "email@example.com"`

**初始化当前目录的项目**
`git init`

**在该目录下新建一个文件，然后查看，将修改添加到暂存区**
`git add *` // 将工作区所有修改添加到暂存区
`git add .` // 将工作区所有修改添加到暂存区
`git add filename` // 将指定文件添加到暂存区

`git status` // 查看状态变更文件信息

**将暂存区修改添加到本地仓库**
`git commit - m '版本描述'`

**创建仓库，并上诉改动push到远程仓库**
`git remote add origin git@github.com:tsejx/git-books.git`
`git push -u origin master`

**从远程仓库克隆**
`git clone url`

**放弃暂存区修改**
`git checkout -- filename` // 放弃暂存区修改（修改不在）
`git rm --cached filename` // 放弃add（修改还在，但产生一条delete记录）
`git reset HEAD filename` // 同上（没有delete记录）

`git stash` // 暂时放弃未提交的修改
`git stash pop` // 恢复

**查看操作版本记录**
`$ git log` // 查看过去版本的历史记录
`$ git relog` // 查看命令历史

`$ git reset` // 回退版本

**分支操作**
**查看分支**
`git branch` // 所有本地分支
`git branch -r` // 所有远程分支
`git branch -a` // 所有远程分支和本地分支

**创建分支**
`git branch branchName` // 留在当前分支
`git checkout -b branchName` // 创建并切换分支
`git branch --set-upstream-to-<remote>/branchName` // 建立本地分支与远程分支的追踪关系
`git branch --track branchName [remote branch]` // 新建一个分支，并与远程建立追踪关系
`git checkout branchName` // 切换到指定分支

**分支合并**
`git pull origin branch` // 取回远程更新并与本地分支合并
`git fetch origin branch` // 取回远程更新
`git merge branch` // 合并指定分支到当前分支（产生提交记录）
`git rebase branch` // 合并指定分支到当前分支（不产生提交记录，比较适合有强迫症的）

`git cherry-pick commit` 将与commitID对应的提交合并当前分支

