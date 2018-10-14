<template>
    <div>
        <div class='mainBody'>
            <div class='mainLeft'>
                <div class='allProduct'>
                    <h2>全部产品</h2>
                    
                    <template v-for="product in productList">
                        <h3>{{product.title}}</h3>
                        <ul>
                            <li v-for="item in product.list">
                                <a :href="item.url">{{item.name}}</a>
                                <!-- HOT标记 样式 -->
                                <span v-if="item.hot">HOT</span>
                            </li>
                        </ul>
                        <!-- 如果不是最后一项 就加上横线 -->
                        <hr v-if="!product.last" style='border:1px solid #eef0f1;'>
                    </template>
                </div>

                <div class="news">
                    <h2>最新消息</h2>
                    <ul>
                        <li v-for="item in newsList">
                            <a :href="item.url">{{item.title}}</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mainRight">
                <!-- vue-awesome轮播插件 实现 -->
                <div class="silder">
                    <slider animation="normal" height='400px'>
                        <slider-item v-for="(i, index) in list" :key="index">
                            <a :href="list[index].url">
                                <div :style="i" :class="'sld'+index">
                                    <!-- 获取不到图片, 先放一边了 -->
                                    <!-- <img :src="list[index].pic"> -->
                                </div>
                            </a>
                        </slider-item>
                    </slider>
                </div>

                <div class="buyIt">
                    <div class="buyIt-item"
                         v-for="(item,index) in borderList"
                         :class="[{'line-last' : index%2 !==0 },
                        'buyIt-item-'+ item.id ]">
                        <div class='buyIt-item-inner'>
                            <h2>{{item.title}}</h2>
                            <p>{{item.describtion}}</p>
                            <div class="buyIt-board-button">
                                <a href="" class='btn'>立即购买</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //vue-awesome轮播插件 先用npm安装,再引入
    import { Slider, SliderItem } from 'vue-easy-slider'
    export default {
        components: {
            Slider,
            SliderItem
        },
        //模拟数据
        data(){
            return {
                //全部产品
                productList:{
                    pc:{
                        title:'PC产品',
                        list:[
                            {
                                name:'数据统计',
                                url:'#'
                            },
                            {
                                name:'数据预测',
                                url:'#'
                            },
                            {
                                name:'流量分析',
                                url:'#',
                                hot:true
                            },
                            {
                                name:'广告发布',
                                url:'#'
                            }
                        ]
                    },
                    app:{
                        title:'手机应用',
                        last: true, //表示是数据的最后一项
                        list:[
                            {
                                name:'iTunes',
                                url:'#'
                            },
                            {
                                name:'产品助手',
                                url:'#',
                                hot:true
                            },
                            {
                                name:'智能地图',
                                url:'#'
                            },
                            {
                                name:'团队语音',
                                url:'#'
                            }
                        ]
                    }
                },
                newsList:[
                    {
                        title:'news1',
                        url:'#'
                    },
                    {
                        title:'news2',
                        url:'#'
                    },
                    {
                        title:'news3',
                        url:'#'
                    },
                    {
                        title:'news4',
                        url:'#'
                    }
                ],
                borderList:[
                    {
                        title:'product 1',
                        describtion:'#1111111111',
                        id:'car',
                        saleout:false
                    },
                    {
                        title:'product 2',
                        describtion:'#2222',
                        id:'earth',
                        saleout:false
                    },
                    {
                        title:'product 3',
                        describtion:'#333',
                        id:'loud',
                        saleout:false
                    },
                    {
                        title:'product 4',
                        describtion:'#444',
                        id:'hill',
                        saleout:false
                    }
                ],
                list: [
                    // 这个slider插件的list 只支持自带的前3个属性??
                    { backgroundColor: '#fff', width: '100%', height: '100%',pic:"../assets/slideShow/pic1.jpg",url:'#0'},
                    { backgroundColor: '#eee', width: '100%', height: '100%',pic:"../assets/slideShow/pic2.jpg",url:'#1' },
                    { backgroundColor: '#f44336', width: '100%', height: '100%',pic:"../assets/slideShow/pic3.jpg",url:'#2' },
                    { backgroundColor: '#3f51b5', width: '100%', height: '100%',pic:"../assets/slideShow/pic4.jpg",url:'#3' },
                ]
            }
        }

    }
</script>

<style scoped>
.mainBody{
    background-color: #eef0f1;
    padding: 10px;
    /* height: 500px; */
    overflow: hidden;
    min-width:600px;
}
.mainLeft{
    float: left;
    margin-left: 15%;
    width: 15%;
    min-width:130px;
}
/*全部产品*/
.allProduct{
    margin-bottom:10px;
}
.allProduct h2{
    background-color: green;
    color: white;
    font-size:16px;
    height: 30px;
    line-height: 30px;
    padding-left:10px;
}
.allProduct h3{
    background: white;
    padding: 8px;
    padding-left:10px;
    font-size:16px;
}
.allProduct ul{
    background: white;
    padding: 5px;
    padding-top:0;
    padding-left:10px;
}
.allProduct ul li{
    padding: 3px;
}
.allProduct ul li span{
    background-color:red;
    color: white;
    display: inline-block;
    height: 15px;
    font-size:10px;
    vertical-align: top;
}
a{
    color:black;
}
/*最新消息*/ 
.news h2{
    background-color: green;
    color: white;
    font-size:16px;
    height: 30px;
    line-height: 30px;
    padding-left:10px;
}
.news ul{
    background: white;
    padding: 5px;
    padding-left:10px;
}
.news ul li{
    background: white;
    padding: 3px;
}

/* 右边*/
.mainRight{
    float: left;
    margin-left: 20px;
    width: 55%;
}

/*右下角*/
.buyIt{
    overflow: hidden;
    min-width:550px;
}
.buyIt-item{
    background-color: white;
    width: 48%;
    height: 150px;
    float: left;
    margin-top: 20px;
    margin-right: 4%;
}
.buyIt-item-inner{
    height: 150px;
    padding-left: 50%;
    padding-top:10px;
}


.buyIt-item-car .buyIt-item-inner{ 
    background: url(../assets/images/1.png) no-repeat;
    background-position:7% 20px;
}
.buyIt-item-earth .buyIt-item-inner{
    background: url(../assets/images/2.png) no-repeat;
    background-position:7% 20px;
}
.buyIt-item-loud .buyIt-item-inner{
    background: url(../assets/images/3.png) no-repeat;
    background-position:7% 20px;
}
.buyIt-item-hill .buyIt-item-inner{
    background: url(../assets/images/4.png) no-repeat;
    background-position:7% 20px;
}

.buyIt-board-button{
    background-color: green;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
    width: 100px;
    margin-top:20px;
}
.btn{
    color: white;
}
.line-last{
    margin-right:0;
}
/* 轮播图 */
.sld0{
    background: url(../assets/slideShow/pic1.jpg) no-repeat;
}
.sld1{
    background: url(../assets/slideShow/pic2.jpg) no-repeat;
}
.sld2{
    background: url(../assets/slideShow/pic3.jpg) no-repeat;
}
.sld3{
    background: url(../assets/slideShow/pic4.jpg) no-repeat;
}

</style>