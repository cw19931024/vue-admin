
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
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
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
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
            :filterOption="filterOption"
          >
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-col>
        <a-col>
          <a-range-picker @change="onChange"/>
        </a-col>
        <a-col>
          <a-button type="primary" icon="search">查询</a-button>
        </a-col>
      </a-row>
    </div>
    <div class="table-lyout">
      <a-table
        :columns="tableSesttings.columns"
        :bordered="tableSesttings.bordered"
        :dataSource="data.data.result"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, namespace } from "vuex-class";
import { PartyItem } from "../../types/party";
const Party = namespace("Party");
@Component
export default class PartyBComponent extends Vue {
  tableSesttings: object = {
    bordered: true,
    columns: [
      {
        title: "姓名",
        dataIndex: "name",
        width: 180
      },
      {
        title: "性别",
        dataIndex: "gender",
        width: 80,
        align: "center"
      },

      {
        title: "录入时间",
        dataIndex: "importTime",
        width: 120,
        align: "center"
      },
      {
        title: "email",
        dataIndex: "email"
      },
      {
        title: "地址",
        dataIndex: "address",
        width: 310
      },
      {
        title: "星级",
        dataIndex: "grade"
      }
    ]
  };
  @Party.State("data") private data!: PartyItem[];
  @Party.Action("getParty") private getParty!: () => void;

  menuSetting: object = {
    inlineIndent: 10,
    defaultSelectedKeys: [2]
  };
  constructor() {
    super();
  }
  mounted() {
    this.getParty();
  }
}
</script>
<style lang="less" scoped>
</style>

