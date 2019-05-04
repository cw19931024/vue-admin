
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
      <a-form :form="form" >
        <a-form-item label="客户姓名" :label-col="{ span:3 }" :wrapper-col="{ span: 5 }">
          <a-input/>
        </a-form-item>
        <a-form-item label="email" :label-col="{ span:3 }" :wrapper-col="{ span: 5 }">
          <a-input/>
        </a-form-item>
        <a-form-item label="性别" :label-col="{ span:3 }" :wrapper-col="{ span: 5 }">
          <a-select v-decorator placeholder="请在下列选择">
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="等级" :label-col="{ span:3 }" :wrapper-col="{ span: 5 }">
          <a-select v-decorator placeholder="请在下列选择">
            <a-select-option value="★">★</a-select-option>
            <a-select-option value="★★">★★</a-select-option>
            <a-select-option value="★★★">★★★</a-select-option>
            <a-select-option value="★★★★">★★★★</a-select-option>
            <a-select-option value="★★★★★">★★★★★</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="手机号  " :label-col="{ span:3 }" :wrapper-col="{ span: 5 }">
          <div class="components-input-demo-presuffix">
            <a-input placeholder="请输入手机号" type="number" ref="userNameInput">
              <a-icon slot="prefix" type="phone"/>
              <a-icon slot="suffix" type="close-circle"/>
            </a-input>
          </div>
        </a-form-item>
        <a-form-item label="备注" :label-col="{ span:3 }" :wrapper-col="{ span: 10 }">
          <a-textarea placeholder="Basic usage" :rows="4"/>
        </a-form-item>
        <a-form-item label="地址" :label-col="{ span:3 }" :wrapper-col="{ span: 10 }">
          <a-cascader
            :options="options.data"
            :defaultValue="['zhejiang', 'hangzhou', 'xihu']"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
      </a-form>
      {}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Action, namespace } from "vuex-class";
import { PartyItem, CityItem } from "../../types/party";
const Party = namespace("Party");
@Component
export default class PartyAddComponent extends Vue {
  @Party.State("city") private options!: CityItem[];
  @Party.Action("getCity") private getCity!: () => void;
  mounted() {
    this.getCity();
  }
}
</script>
