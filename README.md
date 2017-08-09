# act-dbmovie

> a doubanmovie project 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

项目目录

![Image text](https://github.com/lin559/moviedb/raw/master/img-folder/1.png)
项目运行界面
![Image text](https://github.com/lin559/moviedb/raw/master/img-folder/2.png)
![Image text](https://github.com/lin559/moviedb/raw/master/img-folder/3.png)
![Image text](https://github.com/lin559/moviedb/raw/master/img-folder/4.png)
![Image text](https://github.com/lin559/moviedb/raw/master/img-folder/6.png)
过程
1 vue init webpack 'project-name' //初始化项目
2 npm install //安装项目依赖
3 由于项目运用了element-ui 先下载依赖 npm install element-ui --save
  在main.js中添加import elementUI from 'element-ui';
                import 'element-ui/lib/theme-default/index.css';
                vue.use(elementUI);
4 项目中所用到的数据由豆瓣提供的api获得，需更改/config/index.js中的proxytable设置，跨域获取豆瓣api数据
5 /router/index.js进行路由的设置
