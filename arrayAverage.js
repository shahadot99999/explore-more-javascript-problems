//৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 
const grades = [80, 77, 88, 95, 68];
function arrayAverage() {
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    var avg = total / grades.length;
    return avg;
}

const average = arrayAverage()
console.log("Array average  is: " + average);
