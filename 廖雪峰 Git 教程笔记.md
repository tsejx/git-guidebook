
# 廖雪峰 Git 教程 笔记整理

**前言**

 - 本笔记主要记录教程中所有的命令，概念内容不包括在内
 - 建议看完教程再看Git官网的[Pro Git][1]一书。

**创建版本库**

     git init # 初始化所在目录为Git仓库

> 注意：初始化的目录可以不为空

**添加文件到版本库**

    git add <file> ... # 添加文件到暂存区（stage）
    git add -f <file> ... # 强制添加到暂存区（可用于添加忽略文件）
    git commit -m "description"

> git add 命令可以多次执行，然后commit一次。

**时光机穿梭**

- *查看状态、差异*

```
    git status # 查看仓库当前状态
    git diff [file] # 比较工作区和暂存区的差异
    git diff --cached [file] # 比较暂存区和版本库的差异
    git diff HEAD -- [file] # 比较工作区和版本库的差异
```

- *版本切换*

```
    git log # 查看提交历史
    git log -1 # 查看最后一次提交信息（-2则是最后两次）
    git log --pretty=online # 单行格式显示提交历史
    git log -- graph # 显示分支合并图
    git log --abbrev-commit # 简写的commit_id
    git reflog # 查看所有操作记录，包括删除的commit记录
    git reset --hard HEAD^ # 回退到上一版本
    \# HEAD 表当前版本， HEAD^ 表上一版本，HEAD^^ 表上两版本，HEAD~99 表上99版本。
    git reset --hard commit_id # 切换到指定版本
```

> Git跟踪管理的是修改，而非文件

- *撤销修改*

```
    git checkout -- <file>  #撤销工作区的修改
    git reset HEAD <file>  #撤销暂存区的修改
```
    
若已commit但没提交到远程库，可用版本回退进行撤销

- *删除文件*

 - 方法一：工作区删除文件，然后正常提交
```
    rm <file> ...  #工作区删除
    git add <file> ...  #将修改提交至暂存区
    git commit -m "说明"  #提交到版本库
```
 - 方法二：直接命令删除工作区和暂存区，然后提交版本库
```
    git rm <file> ...  #删除工作区和暂存区文件
    git commit -m "说明"  #提交到版本库
```
> 删除、增加文件也都属于修改

**远程仓库**

 - 创建SSH Key

```
ssh-keygen -t rsa -C "youremail@example.com"#生成的Key在家目录.ssh文件夹里面，pub后缀是公钥，另一个是私钥。
```

 - 添加远程库
```
 git remote add origin git@server-name:path/repo-name.git  #添加远程仓库
git remote  #查看远程库信息
           -v  #显示详细信息
git push -u origin <branch>  #推送并关联指定分支到远程库
```

> 除第一次关联，之后push不用加-u选项

 - 从远程库克隆
```
    git clone git@server-name:path/repo-name.git  #将远程仓库克隆到当前目录
    git pull  #拉取远程仓库内容
```

**分支管理**

    git branch <branch>  #创建分支
    git checkout <branch>  #切换到指定分支
    git checkout -b <branch>  #创建并切换到该分支
    git branch  #查看现有分支
    git branch -d <branch>  #删除指定分支
    git branch --set-upstream <branch_local> <branch_remote>  #指定本地分支与远程分支的链接
    git merge <branch>  #合并指定分支到当前分支
              --no-ff <branch>  #禁用快速合并
    git merge --no-ff -m "提交说明" <branch>  #普通方式合并，并附提交说明
    git stash  #保存当前工作环境（包括工作区和暂存区）
    git stash list  #查看保存的工作列表
    git stash apply [stash@{X}]  #恢复工作状态，但不删除stash内容
    git stash pop [stash@{X}]  #恢复工作状态，并删除stash内容
    git stash drop [stash@{X}]  #删除stash内容
    git branch -D <branch> #强制删除分支（常用于未合并的分支）
    
> HEAD不是直接指向提交点，而是指向分支，分支再指向提交点

- 多人协作

```
    \##error: failed to push some refs to ...
    1. git pull 远程库
    2. 解决冲突（若有），再push
```

 - 分支管理策略图

 ![image][2]

**标签管理**

    git tag  #查看现有标签
    git tag <tag_name>  #给当前所在的commit打标签
    git tag <tag_name> <commit_id>  #给指定commit打标签
    git tag -a <tag_name> -m "标签说明" <commit_id>  #给指定commit打标签，并附说明
            -s <tag_name> -m "标签说明" <commit_id>  #用gpg私钥签名
            -d <tag_name>  #删除标签
    git show <tag_name>  #显示标签信息
    git push origin <tag_name>  #推送标签到远程库
    git push origin --tags  #推送所有未推送的标签到远程库
    git push origin :refs/tags/<tag_name>  #删除远程标签（先删除本地，再使用该命令删除）

**自定义Git**

    git config --global user.name "you_name"  #设置全局用户名
    git config --global user.email "email@example.com"  #设置全局邮箱
    git config --global color.ui true  #设置全局颜色显示
    git config --global alias.<alias_name> <'command_name'>  #设置别名

- 忽略特殊文件

i.工作区创建`.gitignore`文件
ii.内容举例，如下：

    #Windows:
    Thumbs.db
    ehthumbs.db
    Desktop.ini
    
    #Python:
    *.py[cod]
    *.so
    *.egg
    *.egg-info
    dist
    build
    #My configurations:
    db.ini
    deploy_key_rsa

> git check-ignore -v <file>  #查看忽略该文件的规则

> 规则有错时常用上述命令查找定位

- 配置别名列表

```
    git config --global alias.confg 'config --global'
    git confg alias.st status
    git confg alias.co checkout
    git confg alias.ci commit
    git confg alias.br branch
    git confg alias.unstage 'reset HEAD'
    git confg alias.last 'log -1'
    git confg alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold b
```
搭建Git服务器 [教程地址][3]

 


  [1]: https://git-scm.com/book/zh/v2
  [2]: https://camo.githubusercontent.com/64ee45ca6222cfce64ec679d18b0c9e6ab0862d0/687474703a2f2f7777772e6c69616f78756566656e672e636f6d2f66696c65732f6174746163686d656e74732f30303133383439303932333933393064333535656230376439643634333035623633323261616634656461633165333030302f30
  [3]: http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137583770360579bc4b458f044ce7afed3df579123eca000