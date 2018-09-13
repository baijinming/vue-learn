export default {
  'ADD'(state) {
    state.count++
  },
  'REDUCE'(state) {
    state.count--
  },
  'CHANGE_COUNT'(state, newcount) {
    state.count = newcount
  }
}
