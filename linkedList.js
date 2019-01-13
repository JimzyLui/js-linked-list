/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  // const ll = {};
  let head = null;
  let tail = null;
  const getHead = () => {
    return head;
  };

  const getTail = () => {
    return tail;
  };

  const add = value => {
    const o = {};
    o["value"] = value;
    o["next"] = null;
    if (tail === null) {
      tail = o;
      head = o;
    } else {
      // get reference to last item
      const nextToLast = tail;
      // point last item to new item
      nextToLast.next = o;
      // point tail to the new item
      tail = o;
    }
    return o;
  };
  const get = n => {
    let thisNode = head; // 0th node
    if (head === null) {
      return false;
    } else {
      let iNodeCtr = 0;
      while (iNodeCtr < n) {
        if (thisNode.next !== null) {
          thisNode = thisNode.next;
        } else {
          return false;
        }
        iNodeCtr++;
      }
      return thisNode;
    }
  };

  const remove = n => {
    console.log("-->Remove: n: " + n);
    let thisNode = head; // 0th node
    let previousNode;
    let nodeToReturn;
    let iNodeCtr = 0;
    if (head === null) {
      return false;
    } else {
      previousNode = thisNode;
      // thisNode = thisNode.next;

      console.log(
        "-->n: " + n + " head.value(" + iNodeCtr + "): " + head.value
      );
      if (n === 0) {
        nodeToReturn = head;
        head = head.next;
      }

      while (iNodeCtr < n) {
        console.log("while iNodeCtr(" + iNodeCtr + ") <= n" + n);
        if (thisNode.next !== null) {
          console.log(
            "loop n: " +
              n +
              " thisNode.value(" +
              iNodeCtr +
              "): " +
              thisNode.value
          );
          previousNode = thisNode;
          thisNode = thisNode.next;
        } else {
          return false;
        }
        iNodeCtr++;
      }
      // remove the node
      console.log("==>removing: " + thisNode.value);
      nodeToReturn = thisNode;
      if (thisNode === tail) {
        tail = previousNode;
      }
      previousNode.next = thisNode.next;
      return nodeToReturn;
    }
  };
  const insert = (value, n) => {
    let iNodeCtr = 0;
    let tempNode;
    const o = {};
    o["value"] = value;
    o["next"] = null;
    if (n === 0) {
      tempNode = head;
      head = o;
      if (tempNode === null) {
        // ll is empty
        tail = o;
      } else {
        o.next = tempNode;
      }
    }
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
