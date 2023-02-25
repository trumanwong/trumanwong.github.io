package main

import "fmt"

func main()  {
	oldSlice := make([]int64, 3, 3)
	newSlice := oldSlice[1:3]
	fmt.Printf("%p %p", oldSlice, newSlice)
}