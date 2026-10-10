const describeValue = (value) => {
    
    // ১. typeof দিয়ে ভ্যালুর ডাটা টাইপ বের করা হলো
    let type = typeof value; 
    
    // ২. কন্ডিশনাল (Ternary) অপারেটর বা if-else দিয়ে Truthy/Falsy নির্ধারণ করা হলো
    let truthiness = value ? "truthy" : "falsy";
    
    // ৩. আপনার শেখা ES6 Template Literal (ব্যাকটিক) দিয়ে জোড়া দেওয়া হলো
    return `${type} | ${truthiness}`;
};

// টেস্ট করে দেখি অ্যাসাইনমেন্টের এক্সাম্পল মিলছে কিনা:
console.log(describeValue("hello")); // আউটপুট: "string | truthy"
console.log(describeValue(0));       // আউটপুট: "number | falsy"
console.log(describeValue(null));    // আউটপুট: "object | falsy" (JS এর অদ্ভুত নিয়ম!)




