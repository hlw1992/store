<template>
    <div class="dialog-wrap" v-if="isShow" @click="closeMyself">
        <div class="dialog-content"  @click.stop="deliver">
            <div class="dialog-close" @click="closeMyself">x</div>
            <slot>empty</slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        // 自定义属性
        isShow:{
            type:Boolean,
            default:false
        }
    },
    // name: 'myDialog',
    data(){
        return{
            
        }
    },
    methods:{
        closeMyself(){
            // 自定义事件
            this.$emit('on-close')
        },
        deliver(){
            
        }
    }
}
</script>

<style>
.dialog-wrap{
    position: fixed;
    left: 0;
    top:0;
    bottom: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.5);
}

.dialog-content{
    position: fixed;
    left: 35%;
    top:35%;
    width:25%;
    min-width: 280px;
    border: 1px solid black;
    background-color: rgba(255, 255, 255);
}
.dialog-close{
    cursor: pointer;
    text-align:right;
    padding-right:8px;
}
</style>

