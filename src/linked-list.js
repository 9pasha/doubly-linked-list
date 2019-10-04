const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else {
            this._head = node;
            this._tail = node;
        }

        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let currNode = this._head;
        let counter = 0;

        while (counter < index) {
            currNode = currNode.next;
            counter++;
        }

        return currNode.data;
    }

    insertAt(index, data) {
        let node = new Node(data);
        let currNode = this._head;
        let counter = 1;

        while (counter < index) {
            currNode = currNode.next;
            counter++;
        }

        if (counter === index) {
            node.prev = currNode;
            node.next = currNode.next;
            currNode.prev = node.prev;
            currNode.next = node.next;
        }
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {

    }

    deleteAt(index) {

    }

    reverse() {

    }

    indexOf(data) {
        let currNode = this._head;
        let index = 0;

        while (index < this.length) {
            if (data === currNode.data) {
                return index;
            }

            currNode = currNode.next;
            index++;
        }
            
        return -1;
    }
}

module.exports = LinkedList;

// let list = new LinkedList();
// list.append(11);
// list.append(33);
// list.indexOf(11);
// list.indexOf(33);
