<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <Header/>
    <div class="content">
      <div class="content-menu">
        <Menu/>
      </div>
      <div class="content-lyout">
        <Content/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import "../public/public.css";
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/HeaderComponent.vue"; // @ is an alias to /src
import Menu from "@/components/MenuComponent.vue"; // @ is an alias to /src
import Content from "@/components/ContentComponent.vue";
@Component({
  components: {
    Header,
    Menu,
    Content
  }
})
export default class Index extends Vue {}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.content {
  display: table;
  width: 100%;
}
.content-menu {
  display: table-cell;
  width: 200px;
}
.content-lyout {
  display: table-cell;
}
</style>
