/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle1 = function(head) {
    let seen = new Set();
    while(head !== null) {
        if(seen.has(head)) {
            return true;
        }
        seen.add(head);
        head = head.next;
    }
    return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle2 = function(head) {
    if(head === null || head.next === null) return false;
    let slow = head;
    let fast = head.next;
    while(slow !== fast) {
        if(fast === null || fast.next === null) return false;
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};