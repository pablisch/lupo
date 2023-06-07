const TIMEOUTS = {
  timeouts: [],
  setTimeout: function(fn, delay) {
      const id = setTimeout(fn, delay);
      this.timeouts.push(id);
  },
  clearAllTimeouts: function() {
      while (this.timeouts.length) {
          clearTimeout(this.timeouts.pop())
      }
  }
}

export default TIMEOUTS;