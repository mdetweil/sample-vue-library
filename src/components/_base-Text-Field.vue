<template>
  <v-text-field 
    type = input
    single-line
    :label="this.label" 
    :rules="this.rulesFlags"
    v-model="inputText"
    :placeholder="this.label" ></v-text-field>

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseTextField extends Vue {
  @Prop({ default: false }) required!: boolean;
  @Prop() label!: string;
  inputText = ''; 
  rulesFlags: Array<string> = this.required == true ? ['Required'] : [];
}
</script>

<style scoped>

</style>