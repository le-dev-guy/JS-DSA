const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;

function mergeSortedArray(nums1, m, nums2, n) {
    let i=0, j=0, k=0;
    let result = []
    while(i<m && j<n) {
        if(nums1[i] <= nums2[j]) {
            result[k++] = nums1[i++];
        } else if(nums1[i] > nums2[j]){
            result[k++] = nums2[j++];
        }
    }
    while(i<m) {
        result[k++] = nums1[i++];
    }
    while(j<n){
        result[k++] = nums2[j++];
    }
    nums1 = result;
    console.log(nums1);
}

mergeSortedArray(nums1, m, nums2, n);