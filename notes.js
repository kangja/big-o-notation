//speed + memory usuage = big o notation.

//how much space does this take up or how long does this algorithm take as size of my input changes?
//will my algorithm take up more space? or will it become slower?

// how much slower will it get and how much space will it take up compared to other similar algorithms based on the same sets of inputs. 

// EXAMPLE 1 ******************************
const data = ["A", "B", "C"];

for (let i = 0; i < data.length; i++) {
  console.log(data[i])
}

// A
// B
// C

//as we increase the input, how long will our algorithm take? how does it scale as we increase the scale? in order to figure out, we have to figure out what the CORE part. The core part is console.log(i). It is the one thing that the algorithm does over and over again to get the end result and we take this and determine how many times it runs based on how large our input is. 

// to determine how long our input is, we create a variable called n. The length of our data array is equal to n.





// ******************************

