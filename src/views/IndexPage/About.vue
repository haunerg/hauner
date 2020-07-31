<template>
  <div id="app">
    <div class="demo-class">store：{{num}}<br/>
    请求数据：{{ipAddress}}</div>
    <v-demo></v-demo>
    <el-input v-model="ipAddress"></el-input>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import IndexDomain from "@/domain/Index/Demo";
const indexDomain = new IndexDomain();

import { namespace } from "vuex-class";
const demoStore = namespace("DemoStore");

@Component
export default class Demo extends Vue {

  @demoStore.State("num") private num!: number;
  private ipAddress:string = "";

  private async created():Promise<void> {
    this.ipAddress = await indexDomain.getName();
  } 

}
</script>
<style lang="scss">
@import "@/style/IndexStyle/view/Demo.style";
</style>
