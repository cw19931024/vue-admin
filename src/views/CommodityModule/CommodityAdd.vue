
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
    <div class="fromLyout">
      <a-form :form="form">
        <a-form-item label="商品名称" :label-col="{ span:3 }" :wrapper-col="{ span: 12 }">
          <a-input/>
        </a-form-item>
        <a-form-item label="商品类型" :label-col="{ span:3 }" :wrapper-col="{ span: 12 }">
          <a-select placeholder="Select a option and change input text above">
            <a-select-option value="male">male</a-select-option>
            <a-select-option value="female">female</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="上架价格" :label-col="{ span:3 }" :wrapper-col="{ span: 12 }">
          <a-select placeholder="Select a option and change input text above">
            <a-select-option value="male">male</a-select-option>
            <a-select-option value="female">female</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, namespace } from "vuex-class";
import { CommodityItem } from "../../types/commodity";
const Commodity = namespace("Commodity");
@Component
export default class CommodityListComponent extends Vue {
  menuSetting: object = {
    inlineIndent: 10,
    defaultSelectedKeys: [2]
  };
  @Commodity.State("data") private data!: CommodityItem[];
  @Commodity.Action("getCommodity") private getCommodityList!: () => void;
  constructor() {
    super();
  }
  mounted() {
    this.getCommodityList();
  }
}
</script>
<style lang="less" scoped>
.fromLyout{
    width: 800px;
    padding-top: 20px;
}
</style>

