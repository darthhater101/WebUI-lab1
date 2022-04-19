<template>
  <div class="home">
    <GameBoard :board="$store.state.board.cells" />
  </div>
  <button class="newgamebutton" @click="startNewGame()">New Game</button>
</template>

<script>
import GameBoard from '../components/GameBoard.vue'

export default {
  name: 'HomeView',
  components: { GameBoard },

  methods: {
    startNewGame() {
      this.$store.dispatch('RESET');
    }
  }
}
</script>

<style>

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.newgamebutton {
  position: relative;
  top: 50px;
}

</style>
