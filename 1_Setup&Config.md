

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

#### 检查配置

如果你想检查已有的配置信息列表

```
$ git config --list
```

#### 配置用户名和密码

##### 全局配置

当安装 git 后你首先要做的事情是设置用户名称和 e-mail 地址。这是非常重要的，因为每次 git 提交都会使用该信息，它被永远的嵌入到了你的提交中。

如果你想在本机其他项目内使用相同的用户信息，可以加上 `--global` 参数，这个设置只需进行一次，后续版本管理无需多次设置。

```
$ git config --global user.name "Mercedes-benz"
$ git config --global user.email "mercedes@gmail.com"
# 引号内为用户名和用户邮箱
```

##### 项目配置

如果希望在一个特定的项目中使用不同的名称或 `e-mail` 地址，可以在该项目中运行该命令而不要 `--global` 选项。

```
$ git config user.name "Lamborghini"
$ git config user.email "lammborghini@gmail.com"
# 引号内为用户名和用户邮箱
```

#### 添加/删除配置项

##### 添加配置项

如果你想添加当前项目的 git 配置项。

```
$ git config [–local|–global|–system] –add section.key value
# 默认添加在 local 配置中
```

<details>

<summary>例子</summary>

注意 add 后面的 `section` 、 `key`、 `value` 一项都不能少，否则添加失败。

```
$ git config -–add site.name yiibai
```

</details>

##### 删除配置项

如果你想删除当前项目的 git 配置项。

```
$ git config [–local|–global|–system] –unset section.key
```

<details>

<summary>例子</summary>

```
$ git config --local -–unset site.name
```

</details>

<br>[⬆回到顶端](#目录)

## 帮助 `help`

> Display help information about Git
>
> 显示关于Git的帮助信息

如果你想知道使用 git 的一些帮助信息。

```
$ git help
```

<br>

[⬆回到顶端](#目录)