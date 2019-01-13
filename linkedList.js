/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  const getHead = () => head;
  const getTail = () => tail;

  /* ADD(value) */
  const add = value => {
    const o = {
      value: value,
      next: null
    };
    if (!tail) {
      tail = o;
      head = o;
    } else {
      // point last item to new item
      tail.next = o;
      // point tail to the new item
      tail = o;
    }
    return o;
  };

  /* GET(index) */
  const get = index => {
    let iNodeCtr = 0;
    let curNode = head; // 0th node
    if (!head) {
      return false;
    } else {
      while (curNode) {
        if (iNodeCtr === index) {
          // found the spot, get the node
          return curNode;
        }
        curNode = curNode.next;
        iNodeCtr++;
      }
      return false;
    }
  };

  /* REMOVE(index) */
  const remove = index => {
    let curNode = get(index);
    let prevNode = get(index - 1);

    if (curNode) {
      if (prevNode) {
        prevNode.next = curNode.next;
      } else {
        head = curNode.next;
      }
      if (!curNode.next) {
        tail = prevNode;
      }
      return curNode;
    } else {
      return false;
    }
  };

  /* INSERT */
  const insert = (value, index) => {
    if (index < 0) {
      return false;
    }
    const o = {
      value: value,
      next: null
    };
    const prevNode = get(index - 1);
    const curNode = get(index);
    if (curNode) {
      o.next = curNode;
      if (index === 0) {
        head = o;
      } else {
        prevNode.next = o;
      }
    } else {
      // out of range or last position
      if (prevNode == tail) {
        tail.next = o;
        tail = o;
      } else {
        return false;
      }
    }
    checkNode = get(index);
  };

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
