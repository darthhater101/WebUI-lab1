import { createStore } from 'vuex'
import Board from '@/cls/model/Board'
import UserList from '@/cls/model/UserList';

export default createStore({
  state: {
    board: new Board(),
    userList: new UserList(),
    currentUser: null
  },
  getters: {
    isSolved: (state) => {
      return state.board.isOrdered();
    }
  },
  mutations: {
    MOVE: (state, index) => {
      state.board.move(index);
    },
    RESET: (state) => {
      state.board.reset();
    },
    ADD_USER: (state, user) => {
      const userToAdd = state.userList.getUserByUsername(user.username);
      if(!userToAdd) {
        state.userList.addUser(user);
      } else {
        alert("Such user is alredy exist");
      }
    },
    UPDATE_USER: (state, user) => {
      const userToUpdate = state.userList.getUserByUsername(user.username);
      if(!userToUpdate) {
        state.userList.updateUser(state.currentUser.id, user);
      } else {
        alert("Such user is alredy exist");
      }
    },
    LOGIN_USER: (state, user) => {
      const userToLogin = state.userList.getUserByUsername(user.username);
      if(!userToLogin) {
        alert("No user with such username");
        return;
      }
      if(userToLogin.password === user.password) {
        state.currentUser = userToLogin;
      } else {
        alert("Wrong password");
      }
    },
    LOGOUT_USER: (state) => {
      state.currentUser = null;
    }
  },
  actions: {
    MOVE: (context, index) => {
      context.commit('MOVE', index);
    },
    RESET: (context) => {
      context.commit('RESET');
    },
    ADD_USER: (context, user) => {
      context.commit('ADD_USER', user);
    },
    UPDATE_USER: (context, user) => {
      context.commit('UPDATE_USER', user);
    },
    LOGIN_USER: (context, user) => {
      context.commit('LOGIN_USER', user);
    },
    LOGOUT_USER: (context) => {
      context.commit('LOGOUT_USER');
    }
  },
  modules: {
  }
})
