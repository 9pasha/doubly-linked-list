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
        let counter = 0;

        while (counter < index) {
            currNode = currNode.next;
            counter++;
        }

        if (counter === index) {
            node.prev = currNode.prev;
            node.next = currNode;
            currNode.prev = node;
            node.prev.next = node;
            this.length++;
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
        this._head.data = null;
        this._head.next = null;
        this._tail.data = null;
        this._tail.prev = null;
        this.length = 0;
    }

    deleteAt(index) {
        let counter = 0;
        let currNode = this._head;

        while (index < this.length) {
            if (index === counter) {
                currNode.prev.next = currNode.next;
                currNode.next.prev = currNode.prev;
                this.length--;
                break;
            }
            currNode = currNode.next;
            counter++;
        }
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

// list.append(32);
// list.append(47);
// list.insertAt(1, 34);
// console.log(list.at(1));