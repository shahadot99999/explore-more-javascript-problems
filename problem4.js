//২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

function smallestNumber(first, second, third, fourth) {
    if (first < second && first < third && first < fourth) {
        return first;
    } else if (second < first && second < third && second < fourth) {
        return second;
    }
    else if (third < second && third < first && third < fourth) {
        return third;
    } else {
        return fourth;
    }
}
const num1 = 120;
const num2 = 150;
const num3 = 80;
const num4 = 70;
console.log(smallestNumber(num1, num2, num3, num4));