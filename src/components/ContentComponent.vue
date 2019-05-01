
<template>
  <div class="view-lyout">    
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Menu } from "ant-design-vue";
@Component
export default class ContentComponent extends Vue {}
</script>
<style scoped lang="less">
.view-lyout {
  text-align: left;
  padding: 10px;
}
</style>
