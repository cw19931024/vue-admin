
<template>
  <div>
    <a-menu mode="inline" 
      :openKeys="openKeys" 
      @openChange="onOpenChange" 
      :inlineIndent="menuSetting.inlineIndent"
      :defaultSelectedKeys="menuSetting.defaultSelectedKeys">
      <a-sub-menu :key="item.keys" v-for="item in menuList">
        <span slot="title">
          <a-icon :type="item.icontype"/>
          <span>{{item.title}}</span>
        </span>
        <a-menu-item :key="data.key" v-for="data in item.children">
          <router-link :to="{path:data.url,query:{father:item,data:data}}">{{data.childrenName}}</router-link> |
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Menu } from "ant-design-vue";
@Component
export default class MenuComponent extends Vue {
  menuSetting:object={
    inlineIndent:10,
    defaultSelectedKeys:[2]
  }
  openKeys: any = ['menu1'];
  menuList: any = [
    {
      keys: "menu1",
      icontype: "user",
      title: "客户列表",
      url:'/party-a',
      children: [
        { childrenName: "甲方客户", url: "/party-a", key: 1 },
        { childrenName: "乙方客户", url: "/party-b", key: 2 },
        { childrenName: "合作客户", url: "", key: 3 }
      ]
    },
    {
      keys: "menu2",
      icontype: "shop",
      title: "商品管理",
      children: [
        { childrenName: "以上架管理", url: "", key: 4 },
        { childrenName: "未上架管理", url: "", key: 5 },
        { childrenName: "审核管理", url: "", key: 6 }
      ]
    },
    {
      keys: "menu3",
      icontype: "setting",
      title: "管理设置",
      children: [
        { childrenName: "权限设置", url: "", key: 7 },
        { childrenName: "菜单选项", url: "", key: 8 },
        { childrenName: "附件工具", url: "", key: 9 }
      ]
    }
  ];
  constructor() {
    super();
  }
  onOpenChange(key: any) {
    this.openKeys = key;
    console.log(this.openKeys)
  }
  mounted() {}
}
</script>
<style scoped lang="less">
</style>
