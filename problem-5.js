/* 

How will you display

a) programming er coddogosti

b) VW

c) Bangladesh

*/

let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,
  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming ercoddogosti"],
    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};


// Output: programming ercoddogosti
console.log(instructor.additionalData.books[1]);

// Output: VW
console.log(instructor.additionalData.moreDetails.hometown.state);

// Output: Bangladesh
console.log(instructor.additionalData.moreDetails.countriesLivedIn[0]);