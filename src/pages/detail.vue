<template>
    <div>
        <div class='mainBody'>
            <div class='mainLeft'>
                
                <div class="detail">
                    <div class='imgDiv'>
                        <img :src="productIcon">
                    </div>
                    <ul>
                        <!-- <li v-for="item in products">
                            <a v-bind:href="item.url">{{item.name}}</a>
                        </li> -->
                        <router-link v-for="item in products" :key="item.key" :to="{path:item.path}"
                            tag="li" active-class="active">
                            {{item.name}}
                        </router-link>
                    </ul>
                </div>
            </div>

            <div class="mainRight">
                <keep-alive>
                    <router-view>

                    </router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import { Slider, SliderItem } from 'vue-easy-slider'
    export default {
        components: {
            Slider,
            SliderItem
        },
        //模拟数据
        data(){
            return {
                products:[
                    {
                        name:'数据统计',
                        path:'count',
                        active:false,
                        key:1
                        // icon:require('../assets/images/1.png')
                    },
                    {
                        name:'数据预测',
                        path:'forecast',
                        active:false,
                        key:2
                    },
                    {
                        name:'流量分析',
                        path:'analysis',
                        active:false,
                        key:3
                    },
                    {
                        name:'广告发布',
                        path:'publish',
                        active:false,
                        key:4
                    }
                ],
                imgMap:{
                    '/detail/count':require('../assets/images/1.png'),
                    '/detail/forecast':require('../assets/images/2.png'),
                    '/detail/analysis':require('../assets/images/3.png'),
                    '/detail/publish':require('../assets/images/4.png')
                }
            }
        },
        computed:{
            productIcon(){
                // console.log(this.$route.path,this.imgMap)
                return this.imgMap[this.$route.path]
            }
        }

    }
</script>

<style scoped>

a{
    color:black;
}
li:hover{
    background: green;
}
.active{
    background: blue;
}

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

/*最新消息*/ 
.detail{
    background: white;
}
.imgDiv{
    text-align: center;
}
.detail h2{
    background-color: green;
    color: white;
    font-size:16px;
    height: 30px;
    line-height: 30px;
    padding-left:10px;
}
.detail ul{
    /* background: white; */
    padding: 5px;
    padding-left:10px;
}
.detail ul li{
    /* background: white; */
    padding: 3px;
}

/* 右边*/
.mainRight{
    float: left;
    margin-left: 20px;
    width: 55%;
}


</style>