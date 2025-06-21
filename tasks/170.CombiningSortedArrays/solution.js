/**
 * @param {number[]} nums1 - первый отсортированный массив
 * @param {number} m - количество значимых элементов в nums1
 * @param {number[]} nums2 - второй отсортированный массив
 * @param {number} n - количество элементов в nums2
 * @return {void} Не возвращайте ничего, вместо этого модифицируйте nums1.
 */
 module.exports = function merge(nums1, m, nums2, n) {
	let i = m-1
 	let j = n-1
  	let f = n+m-1
  	while( i >= 0 && j >= 0){
    	if(nums1[i] >  nums2[j]){
      		nums1[f] = nums1[i]
      		i--
    	}else{
      		nums1[f] = nums2[j]
      		j--
    	}
    	console.log(nums1)
    	f--
  		}
  	while (j >= 0 ){
    	console.log(j)
    	nums1[f]=nums2[j]
    	j--
    	f--  
    }	
}