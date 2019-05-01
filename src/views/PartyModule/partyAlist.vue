
<template>
  <div class="about">
    <div>
      <a-breadcrumb>
        <a-breadcrumb-item :href="$route.query.father.url">
          <a-icon type="user"/>
          <span>{{$route.query.father.title}}</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item>{{$route.query.data.childrenName}}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <h1>This is an about 111111111ge</h1>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Menu } from "ant-design-vue";
@Component
export default class PartyAComponent extends Vue {
  menuSetting:object={
    inlineIndent:10,
    defaultSelectedKeys:[2]
  }
  BreadcrumbSetting:object={}
  constructor() {
    super();
  }
  mounted() {
    
  }
}
</script>
