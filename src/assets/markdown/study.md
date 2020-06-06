# github 操作说明



##### 1、注册 github 账号：<https://github.com/>



##### 2、创建仓库： New repository



##### 3、配置ssh秘钥（非必须：如果提交代码的过程中提示无权限则需要进行配置）



##### 4、按照如下步骤进行代码提交：

![image.png](https://upload-images.jianshu.io/upload_images/18620107-9147173d0a8bbf9e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

##### 

### 常见问题：

##### 1、[【github】git push错误failed to push some refs to的解决](<https://blog.csdn.net/rocling/article/details/82956402>)

解决方案：

​		这个问题是因为远程库与本地库不一致造成的，那么我们把远程库同步到本地库就可以了。
使用指令。

```
git pull --rebase origin master
```

##### 2、通过强推的方法，把之前的代码覆盖掉

```
git push origin master -u -f
```

