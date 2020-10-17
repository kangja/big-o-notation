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

//how our algorithm grows as n grows. as n goes to 3 to 300, we run the loop from 3 times to 300 times.

// Example 1's big o notation is O(n). As our input scales from 3 to 300, our algorithm is going to scale in time linearly. It grows 1 to 1 with the size of our input. 
// ****************************** 






// EXAMPLE 2 ******************************
const data = ["A", "B", "C"];
const data2 = [1,2,3,4,5]

for (let i = 0; i < data.length; i++) {
  console.log(data[i])
}

for (let j = 0; j < data2.length; j++) {
  console.log(data2[j]);
}


//n represents data and a represents the length of data2. 
//So our algorithm is going to scale based on the length of data1 and data2. We have a big o of O(n+ a)
// we loop through everything in data2(which is a) and we loop through everything in data1(n times) because it's the length of of data1. We have n + a length loop here. 
// ****************************** 





// EXAMPLE 3 ******************************
const data = ["A", "B", "C"];
const data2 = [1,2,3,4,5]

for (let j = 0; j < data2.length; j++) {
  for (let i = 0; j < data.length; i++) {
    console.log(data[i] + data2[j] );
  }
}

// O( n * a) to represent how long this algorithm takes. If we increase the data2 to [1,2,3,4,5,6], our algorithm will loop through one more time for each element in inside of our data because we have these nested loops inside. Your big o notation becomes quite scalable quickly. 
// ****************************** 





// EXAMPLE 4 ******************************
const data = ["A", "B", "C"];

for (let j = 0; j < data.length; j++) {
  for (let i = 0; j < data.length; i++) {
    console.log(data[i] + data[j]);
  }
}

//O(n^2) because every single time we loop through we have to loop through n again for each element of n. 
// ****************************** 





// EXAMPLE 5 ******************************
const data = ["A", "B", "C"];

for (let j = 0; j < data.length; j++) {
  for (let i = 0; j < data.length; i++) {
    console.log(data[i] + data[j]);
    console.log(data[i] + data[j]);
    console.log(data[i] + data[j]);
    console.log(data[i] + data[j]);
  }
}

// you would think this would be O(4n^2), but when you are doing big o notation, one thing you are always going to do is remove any leading constants. We don't really care it's 4n^2 because 4 is meaningless. What we really care about is n^2. It will tell how the algorithm grows over time so we could completely remove any leading constants. So it becomes O(n^2).

// Again, we only care how it grows based on the input. Any extra constant and any extra number added, we can just completely remove. 
// ****************************** 




// EXAMPLE 6 ******************************
const data = ["A", "B", "C"];

for (let j = 0; j < data.length; j++) {
  for (let i = 0; j < data.length; i++) {
    console.log(data[i] + data[j]);
    console.log(data[i] + data[j]);
    console.log(data[i] + data[j]);
    console.log(data[i] + data[j]);
  }
}

// ****************************** 

