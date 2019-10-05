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

        return this;
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

        if (this.length === 0) {
            this._tail = node;
            this._head = node;
        }
        else if (counter === index) {
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

        return this;
    }

    deleteAt(index) {
        let counter = 0;
        let currNode = this._head;

        if (this.length === 1) {
            this._head.data = null;
            this._tail.data = null;
        }
        else {
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

        return this;
    }

    reverse() {
        let lowMiddle = Math.floor(this.length / 2);
        let leftNode = this._head;
        let rightNode = this._tail;
        let count = 0;

        if (this.length % 2 === 0) {
            while (count < lowMiddle) {
                let leftNodeData = leftNode.data;
                let rightNodeData = rightNode.data;

                leftNode.data = rightNodeData;
                rightNode.data = leftNodeData;
                leftNode = leftNode.next;
                rightNode = rightNode.prev;
                count++;
            }
        }
        
        return this;
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
