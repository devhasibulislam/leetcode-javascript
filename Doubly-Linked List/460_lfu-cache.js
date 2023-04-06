/**
 * Title: LFUCache
 * Description: Design and implement a data structure for a Least Frequently Used (LFU) cache.
 * Author: Hasibul Islam
 * Date: 06/04/2023
 */

/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.key2countRef = new Map();
  this.LRUCaches = new Map();
  this.maxSize = capacity;
  this.size = 0;
};

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (this.maxSize === 0) {
    return -1;
  }

  const freq = this.key2countRef.get(key);

  if (freq === undefined) {
    return -1;
  }

  const prevLRUCache = this.LRUCaches.get(freq);
  const value = prevLRUCache.get(key);
  prevLRUCache.delete(key);
  this.key2countRef.delete(key);

  const nextFreq = freq + 1;

  const nextLRUCache = this.LRUCaches.get(nextFreq);
  this.key2countRef.set(key, nextFreq);
  if (nextLRUCache === undefined) {
    this.LRUCaches.set(nextFreq, new Map([[key, value]]));
  } else {
    nextLRUCache.set(key, value);
  }

  return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.maxSize === 0) {
    return;
  }

  const freq = this.key2countRef.get(key);
  const nextFreq = (freq || 0) + 1;

  if (freq) {
    const prevLRUCache = this.LRUCaches.get(freq);
    prevLRUCache.delete(key);

    const nextLRUCaches = this.LRUCaches.get(nextFreq);
    this.key2countRef.set(key, nextFreq);

    if (nextLRUCaches === undefined) {
      this.LRUCaches.set(nextFreq, new Map([[key, value]]));
    } else {
      nextLRUCaches.set(key, value);
    }
  } else {
    this.size++;

    if (this.size > this.maxSize) {
      let LRUCacheForRemove = null;

      for (let [curFreq, freqMap] of this.LRUCaches) {
        if (freqMap.size) {
          LRUCacheForRemove = freqMap;
          break;
        }
      }

      const keyForRemoval = LRUCacheForRemove.keys().next().value;
      LRUCacheForRemove.delete(keyForRemoval);
      this.key2countRef.delete(keyForRemoval);
      this.size--;
    }

    this.key2countRef.set(key, 1);
    const prevLRUCache = this.LRUCaches.get(nextFreq);
    if (prevLRUCache !== undefined) {
      prevLRUCache.set(key, value);
    } else {
      this.LRUCaches.set(nextFreq, new Map([[key, value]]));
    }
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
