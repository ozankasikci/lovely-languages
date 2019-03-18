package main

import (
 "fmt"
)

func binarySearch(sortedList []int, lookingFor int) int {
  var lo int = 0
  var hi int = len(sortedList) - 1

  for lo <= hi {
    var mid int = lo + (hi-lo)/2
    var midValue int = sortedList[mid]
    fmt.Println("Middle value is:", midValue)

    if midValue == lookingFor {
      return mid
    } else if midValue > lookingFor {
      // We want to use the left half of our list
      hi = mid - 1
    } else {
      // We want to use the right half of our list
      lo = mid + 1
    }
  }

  // If we get here we tried to look at an invalid sub-list
  // which means the number isn't in our list.
  return -1
}

func main() {

	arr := []int{ 2, 3, 4, 10, 40 }
	x := 10

	result := binarySearch(arr, x)

	if result != -1 {
		println("Element is present at index ", result)
	} else {
		println("Element is not present in array")
	}

}
