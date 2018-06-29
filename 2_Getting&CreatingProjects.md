# 获取和创建项目

## 目录

**目录：获取和创建项目**

- [初始化 `init`](#初始化-init)
- [克隆 `clone`](#克隆-clone)

有两种取得 Git 项目仓库的方法。 

- 第一种是在现有项目或目录下导入所有文件到 Git 中。
-  第二种是从一个服务器克隆一个现有的 Git 仓库。

## 初始化 `init`

> Create an empty Git repository or reinitialize an existing one
>
> 创建一个空的 Git 存储库或重新初始化现有的存储库

### 语法

```
git init [-q | --quiet] [--bare] [--template=<template_directory>]
      [--separate-git-dir <git dir>]
      [--shared[=<permissions>]] [directory]
```

### 用法

#### 初始化新的版本仓库 

```bash
$ git init
```

该命令将创建一个名为 `.git` 的子目录，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。

<details>

<summary>扩展</summary>

新建一个目录，将其初始化为Git代码库。`<project-name>` 为新建代码库的名称。

```bash
$ git init <project-name>
```

</details>

<br>

[⬆回到顶端](#目录)

## 克隆 `clone`

> Clone a repository into a new directory
>
> 将已有存储库克隆到新目录中

### 语法

```
git clone [--template=<template_directory>]
	  [-l] [-s] [--no-hardlinks] [-q] [-n] [--bare] [--mirror]
	  [-o <name>] [-b <name>] [-u <upload-pack>] [--reference <repository>]
	  [--dissociate] [--separate-git-dir <git dir>]
	  [--depth <depth>] [--[no-]single-branch] [--no-tags]
	  [--recurse-submodules[=<pathspec>]] [--[no-]shallow-submodules]
	  [--jobs <n>] [--] <repository> [<directory>]
```

### 说明

将存储库克隆到新创建的目录中，为克隆的存储库中的每个分支创建远程跟踪分支(使用`git branch -r`可见)，并从克隆检出的存储库作为当前活动分支的初始分支。

在克隆之后，没有参数的普通 Git 提取将更新所有远程跟踪分支，并且没有参数的`git pull`将另外将远程主分支合并到当前主分支(如果有的话)。

### 用法

#### 克隆本地仓库

克隆一个现有项目和它的整个版本历史。`<url>` 为项目路径，该路径可为本地路径，亦可是远程服务端路径。

```bash
$ git clone <url>
```

<details>

<summary>示例</summary>

```bash
# 本地仓库
$ git clone /path/to/repository

# 远程仓库
$ git clone username@host:/path/to/repository
```

</details>

#### 克隆仓库到指定到分支

```bash
$ git clone -b <branch-name> --single-branch <url>
```

<details>

<summary>示例</summary>

```bash
$ git clone -b <branch-name> --single-branch https://github.com/user/repo.git
```

</details>

<br>

[⬆回到顶端](#目录)