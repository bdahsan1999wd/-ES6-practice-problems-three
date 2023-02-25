// Define an array of objects called "Students"
const Students = [
    {
        // Define an object with student1's details
        student1: {
            name: 'abul',
            age: '17',
            isMale: true,
            education: {
                class: 7,
                subjects: ['bangla', 'english', 'math'],
                school: 'durgapur high school',
            }
        },
        // Define an object with student2's details
        student2: {
            name: 'jarina',
            age: '19',
            isMale: false,
            education: {
                class: 6,
                subjects: ['bangla', 'english', 'math'],
                school: 'Rajshahi high school',
            }
        },
        // Define an object with student3's details
        student3: {
            name: 'habul',
            age: '15',
            isMale: true,
            education: {
                class: 9,
                subjects: ['bangla', 'english', 'math'],
                school: 'Dhaka high school',
            }
        }
    }
]

// Use the map function to iterate over the array of objects
Students.map(student => {
    // Use a for loop to iterate over each object in the array
    for(let i in student){
        // Destructure the student's details and education information
        const {name, age, isMale, education} = student[i];
        const {subjects} = education;

        // Create a string with the student's information and log it to the console
        const information = `
        My name is ${name}
        My age is ${age}
        My gender is ${isMale === true ? 'Male' : 'Female'}
        My subjects are: ${subjects.map((s) => s)}
        `
        console.log(information)
    }
}) 


// This code will iterate over each student object in the Students array and log their information to the console. It will output:

// My name is abul
// My age is 17
// My gender is Male
// My subjects are: bangla,english,math

// My name is jarina
// My age is 19
// My gender is Female
// My subjects are: bangla,english,math

// My name is habul
// My age is 15
// My gender is Male
// My subjects are: bangla,english,math