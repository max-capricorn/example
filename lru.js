
class LRUCache {
  construtor (capacity) {
    this.capacity = capacity;
    this.cache = {}
  }

  get (key) {
    if (!this.cache[key]) return -1
    const val = this.cache[key]

    delete this.cache[key]
    this.cache[key] = val
    return val
  }

  put () { }
}