//৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে। 

function rectangleAreas(long, wide) {
    const rectangleArea = long * wide;
    return rectangleArea;

}
const myrectanglevolum = rectangleAreas(20, 30);
console.log("My myrectangle volume", myrectanglevolum);