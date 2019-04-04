<template>
    <div class="scroll_container">
        <div id="wrapper" class="wrapper">
            <div class="scroll_content_box">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
import MoreScroll from 'iscroll/build/iscroll-probe';
export default {
    props: {
        probeType: {
            default: 1,
        },
        container: {
            default: '#wrapper'
        }
    },
    data() {
        return {
            myScroll: null,
        }
    },
    methods: {
        initScroll () {   // 初始化iscroll
            let IScroll = MoreScroll;
            this.myScroll = new IScroll(this.container, {
                disableMouse: false,
                scrollbars: false,
                probeType: this.probeType, // 3的时候实时监听事件
            });
            document.querySelector(this.container).addEventListener('touchmove', e=>{
                e.preventDefault();
            })
        },
        remountSrcoll(fn) {
            if (this.myScroll) {
                this.myScroll.on('scroll', fn);
            }
        },
        update() { // 对外方法  用于更新iScroll
            this.myScroll.refresh();
        }
    }
}
</script>
<style lang="scss">
.scroll_container{
    // width: 100vw;
    #wrapper{
        height: 100vh;
        overflow: hidden;
        .scroll_content_box{
        }
    }
}
</style>
