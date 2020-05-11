<template>
    <div>
        <form action="/">
            <van-search
                v-model="value"
                show-action
                placeholder="请输入搜索关键词"
                @search="onSearch"
                @cancel="onCancel"
            />
        </form>
    </div>
</template>
<script>
export default {
    name:'vant',
    data() {
        return {
            value: ''
        };
    },
    methods: {
        onSearch(val) {
            this.$toast(val);
        },
        onCancel() {
            this.$toast('取消');
        }
    }
}
</script>