    /**
     * Title: Boats to Save People
     * Description: You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
     * Author: Hasibul Islam
     * Date: 03/04/2023
     */

    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);
    let i = 0;
    let j = people.length - 1;
    let count = 0;
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
        i++;
        }
        j--;
        count++;
    }
    return count;
    };

    console.log(numRescueBoats([3, 2, 2, 1], 3));
