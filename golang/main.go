package main

import "fmt"

func main() {
    var test interface{}
    test = 123

    fmt.Printf("%T,%v\n", test, test)
    test = "abc"

    fmt.Printf("%T,%v\n", test, test)
    test = true

    fmt.Printf("%T,%v\n", test, test)
    test = 312.2

    fmt.Printf("%T,%v\n", test, test)

}