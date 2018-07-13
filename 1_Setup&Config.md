# 设置和配置

## 目录

- [配置 `config`](#配置-config)
- [帮助 `help`](#帮助-help)

## 配置 `config`

> Get and set repository or global options
>
> 获取并设置仓库

`git config` 命令用于获取并设置存储库或全局选项。这些变量可以控制Git的外观和操作的各个方面。

一般在新的系统上，我们都需要先配置下自己的 git 工作环境。配置工作只需一次，以后升级时还会沿用现在的配置。当然，如果需要，你随时可以用相同的命令修改已有的配置。

### 语法

```
git config [<file-option>] [type] [--show-origin] [-z|--null] name [value [value_regex]]
git config [<file-option>] [type] --add name value
git config [<file-option>] [type] --replace-all name value [value_regex]
git config [<file-option>] [type] [--show-origin] [-z|--null] --get name [value_regex]
git config [<file-option>] [type] [--show-origin] [-z|--null] --get-all name [value_regex]
git config [<file-option>] [type] [--show-origin] [-z|--null] [--name-only] --get-regexp name_regex [value_regex]
git config [<file-option>] [type] [-z|--null] --get-urlmatch name URL
git config [<file-option>] --unset name [value_regex]
git config [<file-option>] --unset-all name [value_regex]
git config [<file-option>] --rename-section old_name new_name
git config [<file-option>] --remove-section name
git config [<file-option>] [--show-origin] [-z|--null] [--name-only] -l | --list
git config [<file-option>] --get-color name [default]
git config [<file-option>] --get-colorbool name [stdout-is-tty]
git config [<file-option>] -e | --edit
```

### 用法

#### 展示所有命令和配置信息

**注意：** 配置信息分为：当前目录（local）和全局（golbal）的配置信息，默认为当前目录的配置信息。

```bash
$ git config --local --list (当前目录)
$ git config --global --list (全局)
```

#### 配置开发者信息

当安装 git 后你首先要做的事情是设置用户名称和 e-mail 地址。这是非常重要的，因为每次 git 提交都会使用该信息，它被永远的嵌入到了你的提交中。

如果你想在本机其他项目内使用相同的用户信息，可以加上 `--global` 参数，这个设置只需进行一次，后续版本管理无需多次设置。

如果希望在一个特定的项目中使用不同的名称或 `e-mail` 地址，可以在该项目中运行该命令而不要 `--global` 选项。

```bash
# 全局配置
$ git config --global user.name <name>
$ git config --global user.email <email>

# 当前目录配置
$ git config user.name <name>
$ git config user.email <email>
```

<details>

<summary>示例</summary>

```bash
$ git config --global user.name "Mercedes-benz"
$ git config --global user.email "mercedes@gmail.com"

$ git config user.name "Lamborghini"
$ git config user.email "lammborghini@gmail.com"
```

</details>

#### 添加配置项

如果你想添加当前项目的 git 配置项。默认添加在 local 配置中。

```bash
# 当前目录
$ git config --local –add <entry-name>

# 全局环境
$ git config --global –add <entry-name>

# 系统
$ git config --system –add <entry-name>
```

<details>

<summary>示例</summary>

注意 add 后面的 `section` 、 `key`、 `value` 一项都不能少，否则添加失败。

```bash
$ git config -–add site.name yiibai
```

</details>

#### 删除配置项

`entry-name` 为配置项名称。

```bash
# 当前目录
$ git config --local --unset <entry-name>

# 全局环境
$ git config --global--unset <entry-name>

# 系统环境
$ git config --system --unset <entry-name>
```

<details>

<summary>示例</summary>

```bash
$ git config --local -–unset site.name
```

</details>

#### 给git命令起别名

简化命令。

```bash
$ git config --global alias.<handle> <command>
```

<details>

<summary>示例</summary>

`git status` 改成 `git st` ，这样可以简化命令。

```bash
$ git config --global alias.st status
```

</details>

#### 忽略文件的权限变化

不再将文件的权限变化视作改动。

```bash
$ git config core.fileMode false
```

<br>[⬆回到顶端](#目录)

## 帮助 `help`

> Display help information about Git
>
> 显示关于Git的帮助信息

#### 展示帮助信息

```bash
$ git help -g
```

<br>

[⬆回到顶端](#目录)