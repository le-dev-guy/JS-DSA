const nums1 = [4,9,5], nums2 = [9,4,9,8,4];

function intersectionArrayWithFreq(nums1, nums2) {
    let i=0, j=0;
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    let intersectedElements = [];
    while(i < nums1.length && j<nums2.length) {
        if(nums1[i] < nums2[j]) {
            i++;
        } else if(nums1[i] > nums2[j]) {
            j++
        } else {
            intersectedElements.push(nums1[i]);
            i++;
            j++;
        }
    }
    console.log(intersectedElements);
}

intersectionArrayWithFreq(nums1, nums2);