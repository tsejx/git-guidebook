# 获取和创建项目

有两种取得 Git 项目仓库的方法。 

- 第一种是在现有项目或目录下导入所有文件到 Git 中。
-  第二种是从一个服务器克隆一个现有的 Git 仓库。



## 初始化 `init`

> Create an empty Git repository or reinitialize an existing one
>
> 创建一个空的 Git 存储库或重新初始化现有的存储库

`git init` 命令创建一个空的 Git 仓库或重新初始化一个现有仓库。

```javascript
$ git init
```

该命令将创建一个名为 `.git` 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。

- 如果你是在一个**已经存在文件**的文件夹（而不是空文件夹）中初始化 Git 仓库来进行版本控制的话，你应该开始跟踪这些文件并提交。 

你可通过 `git add` 命令来实现对指定文件的跟踪，然后执行 `git commit` 提交

```
$ git add *.c
$ git add LICENSE
$ git commit -m 'initial project version'
```

## 克隆 `clone`

`git clone` 命令将存储库克隆到新目录中。

### 描述

将存储库克隆到新创建的目录中，为克隆的存储库中的每个分支创建远程跟踪分支(使用`git branch -r`可见)，并从克隆检出的存储库作为当前活动分支的初始分支。

在克隆之后，没有参数的普通 Git 提取将更新所有远程跟踪分支，并且没有参数的`git pull`将另外将远程主分支合并到当前主分支(如果有的话)。

### 示例

```
$ git clone <url>
```

- 从已存在 git 管理的仓库中克隆一个版本库

```
$ git clone https://github.com/jquery/jquery.git
```

该命令会在本地主机生成一个目录，与远程主机的版本库同名。

- 生成的目录要指定不同的目录名

```
git clone https://github.com/jquery/jquery.git 'jQuery'
```







