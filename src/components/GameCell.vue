<template>
    <div 
      class="cell" 
      v-bind:style="{ color: activeColor, backgroundColor: activeBackgoundColor, border: borderWidth }">
      <div v-if="value !== 0">{{ value }}</div>
    </div>
</template>

<script>
  export default {
    name: "GameCell",
    props: {
      value: Number,
      index: Number
    },

    data() {
      return {
        activeColor: this.value === this.index + 1 ? 'white' : 'black',
        activeBackgoundColor: this.value === this.index + 1 ? 'green' : 'white',
        borderWidth: this.value === 0 ? '2px solid rgb(255,255,255)' : '2px solid rgb(75,75,75)' 
      }
    },

    updated() {
      this.activeColor = this.value === this.index + 1 ? 'white' : 'black',
      this.activeBackgoundColor = this.value === this.index + 1 ? 'green' : 'white',
      this.borderWidth = this.value === 0 ? '2px solid rgb(255,255,255)' : '2px solid rgb(75,75,75)' 
    }
  }
</script>

<style>

.cell {
  width: 100px;
  height: 100px;
  font-size: 40px;
  border: 2px solid rgb(75,75,75);
  margin: 1px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
}
</style>