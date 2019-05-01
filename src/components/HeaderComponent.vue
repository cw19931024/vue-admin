
<template>
  <div class="header">
    1
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>
<style scoped lang="less">
    .header{
        background: black;
        height: 60px;
    }
</style>
