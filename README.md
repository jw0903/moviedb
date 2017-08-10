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
  先对网站路由有大概的思考，比如，这个项目总共有5个页面，需要路由进行跳转
  具体为：
  
        / (主页面）
        其中主要包含MovieTag组件，向该组件传递正在上映的影片信息。
        /MovieTag组件：主体部分是正在上映影片的展示，采用v-for的形式循环显示，重点在于点击电影图片时展示该电影的详细信息
        点击电影图片触发showDetail(id)事件，传递的参数为该电影的id，路由跳转到movieDetail。
        先通过mounted的getMovieDetail取得电影详情的数据存入movieDetail中，在进行上一步
        该页面中的computed ...mapGetters{
            'movieDetail',//获取数据并创建data对象，使组件内部有数据进行填充。
        }
  
         /upcoming (即将放映电影页面)
         先dispatch("getUpcoming")触发函数，将数据存入state中的upcoming中，再由页面进行显示
         
         
         /top250 (top250页面)
         先dispatch("getTop250")触发该函数，将state中的ranking250存入数据待用
         computed计算属性中的方法ranking250返回ranklist
         top250电影展示用的是searchTag组件，向组件传递ranklist数据(即包含top250电影的数据)
         
         
         /movieDetail (电影详情页面)
         由点击电影主页面、upcoming页面、top250页面中的电影图片跳转而得到，this.$router.push{path:'/movieDetail',query:{id:id}})进行跳转。
         
         
         /search (电影搜索结果页面)
         先dispatch("getSearchList")触发函数，将数据存入state的searchList中，传入searchTag组件中，便于组件数据的获取



   
