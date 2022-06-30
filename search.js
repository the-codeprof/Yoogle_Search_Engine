
// creading my course DB source using array. I am assuming this is my database

const courses = [
    {
        id:1,
        title: "Web Design",
        fee: 250,
        duration: "3 months",
        img:"./assets/img/webdesign.png",
        signup: "./signup.html",
        details: "./details.html",
    },
    {
        id:2,
        title: "Web Development",
        fee: 400,
        duration: "6 months",
        img:"./assets/img/web.jpg",
        signup: "./signup.html",
        details: "./details.html",

    },
    {
        id:3,
        title: "Graphics Design",
        fee: 200,
        duration: "3 months",
        img:"./assets/img/graphics.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },
    {
        id:4,
        title: "Digital Marketing",
        fee: 100,
        duration: "2 months",
        img:"./assets/img/digital.png",
        signup: "./signup.html",
        details: "./details.html",
    },
    {
        id:5,
        title: "AutoCAD",
        fee: 200,
        duration: "3 months",
        img:"./assets/img/autoCAD.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },
    {
        id:6,
        title: "Software Engineering",
        fee: 500,
        duration: "6 months",
        img:"./assets/img/software.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

     {
        id:7,
        title: "Python",
        fee: 250,
        duration: "4 months",
        img:"./assets/img/python.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },
    
     {
        id:8,
        title: "C++",
        fee: 300,
        duration: "5 months",
        img:"./assets/img/cplus.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

    
     {
        id:9,
        title: "C#",
        fee: 300,
        duration: "5 months",
        img:"./assets/img/csharp.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

    
     {
        id:10,
        title: "cplus",
        fee: 300,
        duration: "5 months",
        img:"./assets/img/cplus.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

    
     {
        id:11,
        title: "Mobile Apps Dev",
        fee: 500,
        duration: "6 months",
        img:"./assets/img/mobile.png",
        signup: "./signup.html",
        details: "./details.html",
    },

    
     {
        id:12,
        title: "Machine Learning",
        fee: 300,
        duration: "5 months",
        img:"./assets/img/machine.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

    
     {
        id:13,
        title: "After Effect",
        fee: 400,
        duration: "4 months",
        img:"./assets/img/after.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },
   
     {
        id:14,
        title: "Information Technology",
        fee: 850,
        duration: "8 months",
        img:"./assets/img/information.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },
     {
        id:15,
        title: "UI/UX Design",
        fee: 400,
        duration: "5 months",
        img:"./assets/img/ui_design.jpeg",
        signup: "./signup.html",
        details: "./details.html",
    },

     {
        id:16,
        title: "Cinematography",
        fee: 500,
        duration: "3 months",
        img:"./assets/img/cinematography.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

     {
        id:17,
        title: "Sage 50",
        fee: 200,
        duration: "2 months",
        img:"./assets/img/sage50.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

     {
        id:18,
        title: "Java Spring",
        fee: 300,
        duration: "4 months",
        img:"./assets/img/java.png",
        signup: "./signup.html",
        details: "./details.html",
    },

     {
        id:19,
        title: "Video Editing",
        fee: 250,
        duration: "3 months",
        img:"./assets/img/video_editing.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

     {
        id:20,
        title: "CISCO",
        fee: 500,
        duration: "4 months",
        img:"./assets/img/cisco.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

     {
        id:21,
        title: "MS Excel",
        fee: 100,
        duration: "1 month",
        img:"./assets/img/excel.jpg",
        signup: "./signup.html",
        details: "./details.html",
    },

    
   
]



// grabbing the DOM elements
const search_input = document.querySelector('.search-value');
const search_btn = document.querySelector(".search-btn");
const results_tray  = document.querySelector('.search-result-container');
const resultsContainer = document.querySelector('.results')



// creating my logic function
const search = (e)=>{

    e.preventDefault(); // prevent auto reload of page / form submission

    
    //showing results tray
    results_tray.classList.add('show')
    let search_text = search_input.value.toLowerCase().trim()
   
    // iterate through the courses  to filter out the wanted course
    const search_results = [... new Set(courses.filter((course)=> course.title.toLocaleLowerCase().trim().includes(search_text)))]
   

    // iterating through the search results (course objects)
    if(search_text == ""){
        alert("Ooops! Search error! pls enter your course")
    }else{
    if(search_results.length > 0){

    
         for(const result of search_results){

          //  destructuring the course objects
          const {title, img, fee, duration, signup, details} = result;
   

          
          // creating DOM elements such as div, img, h4, and h5

          const div = document.createElement('div'); // result card
          div.classList.add('result');

          const image = document.createElement('img'); // course image
          image.src = img;

          const h4 = document.createElement('h4'); // course title
          h4.textContent = title;
          h4.classList.add('title');

          const dur = document.createElement('h4'); // course duration
          dur.textContent = duration;
          dur.classList.add('duration');

          const h5 = document.createElement('h5'); // course fee
          h5.textContent = '$'+fee;
          h5.classList.add('fee');


           // Creating the box for course image, title, fee, duration
           
           const coursePropsbox = document.createElement('div');
           coursePropsbox.classList.add('courseProps');
           coursePropsbox.append(image);
           coursePropsbox.append(h4)
           coursePropsbox.append(dur)
           coursePropsbox.append(h5)
        


          // Creating the signup and details links 
          const signupLink = document.createElement('a');
          const signupLinkText = document.createTextNode('Signup')
          signupLink.appendChild(signupLinkText)
          signupLink.href = signup;
          signupLink.classList.add('signup');

          const detailsLink = document.createElement('a');
          const detailsLinkText = document.createTextNode('Details')
          detailsLink.appendChild(detailsLinkText);
          detailsLink.href = details;
          detailsLink.classList.add('details');


         // creating signup and details links container
          const linksBox = document.createElement('div');
          linksBox.classList.add('linksBox')
          linksBox.append(signupLink);
          linksBox.append(detailsLink);

          div.appendChild(coursePropsbox)
          div.append(linksBox)

          resultsContainer.appendChild(div);


  }
 

    //  if no search result was found
    }else{
        alert("Ooops! no result found!")
    }

    }

}

// adding event listener

search_btn.addEventListener('click', search)




