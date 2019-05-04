
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
    <div class="search-lyout">
      <a-row type="flex" justify="start" :gutter="16">
        <a-col class="gutter-row">
          <a-input addonBefore="客户名称" placeholder="请输入客户名称" style="width:300px;"/>
        </a-col>
        <a-col class="gutter-row">
          <a-select
            showSearch
            placeholder="星级"
            optionFilterProp="children"
            style="width:120px"
          >
            <a-select-option value="★">★</a-select-option>
            <a-select-option value="★★">★★</a-select-option>
            <a-select-option value="★★★">★★★</a-select-option>
            <a-select-option value="★★★★">★★★★</a-select-option>
            <a-select-option value="★★★★★">★★★★★</a-select-option>
          </a-select>
        </a-col>
        <a-col>
          <a-select
            showSearch
            placeholder="性别"
            optionFilterProp="children"
            style="width:80px"
          >
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-col>
        <a-col>
          <a-range-picker 
          />
        </a-col>
        <a-col>
          <a-button type="primary" icon="search">查询</a-button>
        </a-col>
      </a-row>
    </div>
    <div class="table-lyout">
      <a-table
        size="small"
        :columns="tableSesttings.columns"
        :bordered="tableSesttings.bordered"
        :dataSource="data.data.result"
      >
      </a-table>
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
  tableSesttings: object = {
    bordered: true,
    columns: [
      {
        title: "商品名称",
        dataIndex: "name",
      },
      {
        title: "种类",
        dataIndex: "type",
        width: 80,
        align: "center"
      },

      {
        title: "价格",
        dataIndex: "money",
        width: 80,
        align: "left"
      },
      {
        title: "库存数量",
        dataIndex: "lasdCount",
        width: 90,
        align: "left"
      },
      {
        title: "已售数量",
        dataIndex: "soldCount",
        align: "left",
        width: 90
      },
      {
        title: "状态",
        width: 80,
        dataIndex: "status",
        scopedSlots: { customRender: 'status' }
      },
      {
        title: "上架人员",
        width: 120,
        dataIndex: "pushName"
      },
      {
        title: "审批人员",
        width: 120,
        dataIndex: "ApprovalName"
      }
    ]
  };
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
</style>

