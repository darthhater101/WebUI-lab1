<template>
  <div class="board">
    <div 
    v-for="(item, index) in board" 
    :key="item.value"
    @click="move(index)">
      <GameCell :value="item.value" :index="index"></GameCell>
    </div>
  </div>
</template>

<script>
import GameCell from "./GameCell.vue";
export default {
  components: { GameCell },
  name: "GameBoard",
  props: {
    board: Array,
  },

  methods: {
    move(index) {
      this.$store.dispatch('MOVE', index);
      if(this.$store.getters.isSolved) {
        if(this.$store.state.currentUser) {
          this.$store.state.currentUser.score++;
        }
        alert("You won");
      }
    }
  }
};
</script>

<style>
.board {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  width: 424px;
  height: 400px;
}
</style>