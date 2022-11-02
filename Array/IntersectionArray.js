const nums2 = [1,2,2,1], nums1 = [2,2];

function intersectionArray(nums1, nums2) {
    const m = nums1.length - 1;
    const n = nums2.length - 1;
    const size = m > n ? m : n;
    const result = [];
    let count = {}
    for(let i=0; i<=m; i++) {
        if(count[nums1[i]]) {
            count[nums1[i]]++
        } else {
            count[nums1[i]] = 1;
        }
    }
    for(let s of nums2) {
        if(count[s]) {
            result.push(s);
        }
    }
    console.log(result);
}
intersectionArray(nums1, nums2);