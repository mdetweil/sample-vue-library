<template>
  <v-text-field :label="this.label" :rules="this.rulesFlags"></v-text-field>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseTextField extends Vue {
  @Prop({ default: false }) required!: boolean;
  @Prop() label!: string;
  
  rulesFlags: Array<string> = this.required == true ? ['Required'] : [];
}
</script>

<style scoped>

</style>