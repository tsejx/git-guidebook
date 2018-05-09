# 设置和配置



## 配置 `config`

> Get and set repository or global options
>
> 获取并设置仓库

`git config` 命令用于获取并设置存储库或全局选项。这些变量可以控制Git的外观和操作的各个方面。

一般在新的系统上，我们都需要先配置下自己的 git 工作环境。配置工作只需一次，以后升级时还会沿用现在的配置。当然，如果需要，你随时可以用相同的命令修改已有的配置。

### 检查配置

检查已有的配置信息列表

```
$ git config --list
```

### 配置用户名和密码

#### 全局配置

当安装 Git 后首先要做的事情是设置用户名称和 e-mail 地址。这是非常重要的，因为每次 Git 提交都会使用该信息。它被永远的嵌入到了你的提交中：

```
$ git config --global user.name "Mercedes-benz"
$ git config --global user.email "mercedes@gmail.com"
```

重申一遍，只需要做一次这个设置。如果传递了 `--global` 选项，因为Git将总是会使用该信息来处理在系统中所做的一切操作。

#### 项目配置

如果希望在一个特定的项目中使用不同的名称或 `e-mail` 地址，可以在该项目中运行该命令而不要 `--global` 选项。

```
$ git config user.name "Lamborghini"
$ git config user.email "lammborghini@gmail.com"
```

## 帮助 `help`

> Display help information about Git
>
> 显示关于Git的帮助信息

`git help` 命令显示有关 Git 的帮助信息。

```
$ git help
```
