// Q1:=> Make a function which can delete an element from array at defined index

// given => [2,4,3,5]
// achieve => [2,3,5]

function deleteEl(arr, index) {
    let arrStor;
    if (index > arr.length - 1) {
        return Error('please enter a number less than array length')
    } else {
        arr[index] = [arr[index]]
        arr[index].pop()
        arrStor = arr.flat()
    }
    return arrStor
}

// *********** OR ***********




//Q2:=>  Make a function which can add an element to array at defined index

// given => [2,3,5]
// achieve => [2,4,3,5]

function addEl(arr, el, p) {
    let arr2;
    if (p > arr.length - 1) {
        arr[p] = el
    }
    else {
        arr[p] = [el, arr[p]]
        arr2 = arr.flat()
    }
    return arr2
}

// *********** OR ***********

function addEl(arr, el, p) {
    if (p > arr.length || p < 0) {
        return Error('please enter a valid number')
    }
    for (let i = arr.length; i >= 0; i--) {
        if (i > p) {
            arr[i] = arr[i - 1]
        } else {
            arr[i] = el
            break;
        }
    }
    return arr
}





//Q3:=>  Search a element in an array and return it 

// given [4,21,3,8,9] , 21

function binarySearch(arr, el) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (arr[middle] === el) {
            // found the key
            return middle;
        } else if (arr[middle] < el) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found
    return -1;

}





// Q4:=> Merge two arrays without concat() method

//given = [3,4,5,6], [5,3,6]
//achieve = [3,4,5,6,5,3,6]

let arr1 = [3, 4, 5, 6]
let arr2 = [5, 3, 6]

let mergedArr = [...arr1, ...arr2]

// *********** OR ***********

let arr1 = [3, 4, 5, 6]
let arr2 = [5, 3, 6]
let mergedArr = []

for (i = 0; i < arr1.length; i++) {
    mergedArr[i] = arr1[i]
}
for (i2 = 0; i2 < arr2.length; i2++) {
    mergedArr[arr1.length + i2] = arr2[i2]
}



//Q5:=> Make a program which sorts the array using bubbleSort algorithm

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let checked;
    do {
        checked = false;
        for (let i = 0; i < len; i++) {
            console.log(i);
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                checked = true;
            }
        }
    } while (checked);
    return inputArr;
};



//Q6:=>  Make a function which find factorial of given argument through recursion.

function factorial(item) {
    if (item == 0) {
        return 1
    }
    return item * factorial(item - 1)
}



//Q7:=>  Sort Months in an array of objecs according to their occurence 


var dataCollection = [
    { values: { Month: { displayValue: "August" }, Sum: "10" } },
    { values: { Month: { displayValue: "February" }, Sum: "25" } },
    { values: { Month: { displayValue: "July" }, Sum: "35" } }
];

sortByMonth(dataCollection);

console.log(dataCollection);

function sortByMonth(arr) {
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    arr.sort(function (a, b) {
        return months.indexOf(a.values.Month.displayValue)
            - months.indexOf(b.values.Month.displayValue)
    });
}



//Q8:=>  Reverse an array 

//  given = ['Rohan', 'sohan', 'mohan','dhanodhar','ajmair']

let arr = ['Rohan', 'sohan', 'mohan', 'dhanodhar', 'ajmair']
console.log(arr.reverse())




//Q9:=>  Add and remove element without using push and pop method

//given = [2,4,5,2]

function myPop(arr) {
    arr.length = arr.length - 1
    return arr
}

function myPush(arr, ...el) {
    return arr.concat(el)
}



//Q10:  Show the execution of 3 asynchronous block of code, one after the other in sequence

function oneAfterAnother() {
    setTimeout(() => {
        console.log('1st')
        setTimeout((() => {
            console.log('2nd')
            setTimeout(() => {
                console.log('3rd')
            }, 1000)
        }), 1000)
    }, 1000)
}

//Q11 Write a code to make xmlHTTPRequest to get data from the server asynchronously

let xhr = new XMLHttpRequest()
xhr.open('GET', URL)
xhr.onload = () => {
    const data = JSON.parse(xhr.response)
    console.log(data)
}
xhr.onerror = () => {
    console.log(this.statusText)
}
xhr.send()



//Q12 Make a simple decryption function  which decrypt encrypted data

/*
obj{
    "A":"H",
    "B":"E",
    "C":"L",
    "D":"O"
}
*/

// input => ABCCD
// output => according to obj

function decrypted(input) {
    let obj = {
        "A": "H",
        "B": "E",
        "C": "L",
        "D": "O"
    }
    let inputArr = input.toUpperCase().split('')
    let decryptedArr = []
    for (let x of inputArr) {
        if (obj[x]) {
            decryptedArr.push(obj[x])
        }
    }

}


//Q13:=> Make a function which creates a property in object which does'nt exist in object

let obj = {
    greeting: 'hello'
}

function rand() {
    let random = Math.random()
    while (obj.hasOwnProperty(random)) {
        random = Math.random()
    }
    obj[random] = 'newly added'
    return obj
}
