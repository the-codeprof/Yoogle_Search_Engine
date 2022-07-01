
// creading my course DB source using array. I am assuming this is my database
const courses = [
    {
        id:1,
        title: "Web Design",
        fee: 250,
        duration: "3 months",
        img:"./assets/img/webdesign.png",
        signup: "./signup.html",
        descBody:"Web design is a course that deals on everything related to building web pages that can be displayed on the browser. It is one of the most highly demanded skills in the IT industry. This course covers HTML5, CSS3, JavaScript, and Figma. This course is suitable for anyone who can read, write, and think logically. It requires no prerequiste. The only requirements to take this course is your laptop and your determination to learn. It is a very lucrative IT skill that can make you be your own boss. ",
        benefits: ["Wide Job Opportunities", "Become your own boss", "Attractive Salary", "Become a Certified developer"]
    },
    {
        id:2,
        title: "Web Development",
        fee: 400,
        duration: "6 months",
        img:"./assets/img/web.jpg",
        signup: "./signup.html",
        descBody:"Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Become a Certified developer"]

    },
    {
        id:3,
        title: "Graphics Design",
        fee: 200,
        duration: "3 months",
        img:"./assets/img/graphics.jpg",
        signup: "./signup.html",
        descBody:'Graphic design is the profession and academic discipline whose activity consists in projecting visual communications intended to transmit specific messages to social groups, with specific objectives. Design is based on the principle of "form follows a specific function". Wikipedia',
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },
    {
        id:4,
        title: "Digital Marketing",
        fee: 100,
        duration: "2 months",
        img:"./assets/img/digital.png",
        signup: "./signup.html",
        descBody:"Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },
    {
        id:5,
        title: "AutoCAD",
        fee: 200,
        duration: "3 months",
        img:"./assets/img/autoCAD.jpg",
        signup: "./signup.html",
        descBody:"AutoCAD is a commercial computer-aided design and drafting software application. Developed and marketed by Autodesk, AutoCAD was first released in December 1982 as a desktop app running on microcomputers with internal graphics controllers. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },
    {
        id:6,
        title: "Software Engineering",
        fee: 500,
        duration: "6 months",
        img:"./assets/img/software.jpg",
        signup: "./signup.html",
        descBody:"Software engineering is a systematic engineering approach to software development. A software engineer is a person who applies the principles of software engineering to design, develop, maintain, test, and evaluate computer software. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

     {
        id:7,
        title: "Python",
        fee: 250,
        duration: "4 months",
        img:"./assets/img/python.jpg",
        signup: "./signup.html",
        descBody:"Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },
    
     {
        id:8,
        title: "C++",
        fee: 300,
        duration: "5 months",
        img:"./assets/img/cplus.jpg",
        signup: "./signup.html",
        descBody:'C++ is a general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language, or "C with Classes". Wikipedia',
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

    
     {
        id:9,
        title: "C#",
        fee: 300,
        duration: "5 months",
        img:"./assets/img/csharp.jpg",
        signup: "./signup.html",
        descBody:"C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

    
     {
        id:10,
        title: "JavaScript",
        fee: 300,
        duration: "4 months",
        img:"./assets/img/javascript.png",
        signup: "./signup.html",
        descBody:"JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

    
     {
        id:11,
        title: "Mobile Apps Dev",
        fee: 500,
        duration: "6 months",
        img:"./assets/img/mobile.png",
        signup: "./signup.html",
        descBody:"A mobile application or app is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch. Mobile applications often stand in contrast to desktop applications which are designed to run on desktop computers, and web applications which run in mobile web browsers rather than directly on the mobile device. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

    
     {
        id:12,
        title: "Machine Learning",
        fee: 300,
        duration: "5 months",
        img:"./assets/img/machine.jpg",
        signup: "./signup.html",
        descBody:"Machine learning is a field of inquiry devoted to understanding and building methods that 'learn', that is, methods that leverage data to improve performance on some set of tasks. It is seen as a part of artificial intelligence. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

    
     {
        id:13,
        title: "After Effect",
        fee: 400,
        duration: "4 months",
        img:"./assets/img/after.jpg",
        signup: "./signup.html",
        descBody:"Adobe After Effects is a digital visual effects, motion graphics, and compositing application developed by Adobe Systems and used in the post-production process of film making, video games and television production. Among other things, After Effects can be used for keying, tracking, compositing, and animation. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },
   
     {
        id:14,
        title: "Information Technology",
        fee: 850,
        duration: "8 months",
        img:"./assets/img/information.jpg",
        signup: "./signup.html",
        descBody:"Information technology is the use of computers to create, process, store, retrieve, and exchange all kinds of electronic data and information. IT is typically used within the context of business operations as opposed to personal or entertainment technologies. IT forms part of information and communications technology. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },
     {
        id:15,
        title: "UX Design",
        fee: 400,
        duration: "5 months",
        img:"./assets/img/ui_design.jpeg",
        signup: "./signup.html",
        descBody:"User experience design is the process of creating evidence-based, interaction designs between human users and products or websites. Design decisions in UX design are driven by research, data analysis, and test results rather than aesthetic preferences and opinions. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

     {
        id:16,
        title: "Cinematography",
        fee: 500,
        duration: "3 months",
        img:"./assets/img/cinematography.jpg",
        signup: "./signup.html",
        descBody:"Cinematography is the art of motion picture photography. Cinematographers use a lens to focus reflected light from objects into a real image that is transferred to some image sensor or light-sensitive material inside a movie camera. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

     {
        id:17,
        title: "Sage 50",
        fee: 200,
        img:"./assets/img/sage50.jpg",
        signup: "./signup.html",
        duration: "2 months",
        descBody:"Sage 50cloud is a set of accountancy and payroll products developed by Sage Group aimed at small and medium enterprises. Sage offer different products under the Sage 50 name in different regions. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

     {
        id:18,
        title: "Java Spring",
        fee: 300,
        duration: "4 months",
        img:"./assets/img/java.png",
        signup: "./signup.html",
        descBody:"The Spring Framework is an application framework and inversion of control container for the Java platform. The framework's core features can be used by any Java application, but there are extensions for building web applications on top of the Java EE platform. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

     {
        id:19,
        title: "Video Editing",
        fee: 250,
        duration: "3 months",
        img:"./assets/img/video_editing.jpg",
        signup: "./signup.html",
        descBody:"Video editing is the manipulation and arrangement of video shots. Video editing is used to structure and present all video information, including films and television shows, video advertisements and video essays. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

     {
        id:20,
        title: "CISCO",
        fee: 500,
        duration: "4 months",
        img:"./assets/img/cisco.jpg",
        signup: "./signup.html",
        descBody:"Cisco Systems, Inc., commonly known as Cisco, is an American-based multinational technology conglomerate corporation headquartered in San Jose, California. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

     {
        id:21,
        title: "MS Excel",
        fee: 100,
        duration: "1 month",
        img:"./assets/img/excel.jpg",
        signup: "./signup.html",
        descBody:"Microsoft Excel is a spreadsheet developed by Microsoft for Windows, macOS, Android and iOS. It features calculation or computation capabilities, graphing tools, pivot tables, and a macro programming language called Visual Basic for Applications. Excel forms part of the Microsoft Office suite of software. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

      {
        id:22,
        title: "Oracle DB",
        fee: 350,
        duration: "2 months",
        img:"./assets/img/oracle.png",
        signup: "./signup.html",
        descBody:"Oracle Corporation is an American multinational computer technology corporation headquartered in Austin, Texas. In 2020, Oracle was the third-largest software company in the world by revenue and market capitalization. Wikipedia",
        benefits: ["Wide Job Opportunities", "Become your own boss", "High Salary Payment.", "Higly Recognized Certificate will be awarded after completing the course. "]
    },

]


// this function gets called when the detail button is clicked on

function fetchDetail(result){ 
    // the rsult parameter is standing for the object that will be passed into the function 
    

        

           //    Creating the side container that display the course details
           let detailCard = document.createElement('aside');
           detailCard.classList.add('detailCard');


           //    Creating  the small close button 
           let close = document.createElement('img');
           close.src = "./close.png"
           close.classList.add('close');


           //    the top-level container in the detail container by the RHS

            let detailCardTop = document.createElement('div');
            detailCardTop.classList.add('detailCardTop');


           //   creating the bottom-level container in the detail container by the RHS

            let detailCardBottom = document.createElement('div');
            detailCardBottom.classList.add('detailCardBottom');

            // creating the  about course container
            let aboutCourse = document.createElement('div')
            aboutCourse.classList.add('aboutCourse');

            //  **** I want to have three sub divs in the about course container
            // -----------------------------------------------------------------

            // ****course description
            /* Inside the course description container, I am going to create an h3 tag to hold the description title, then a div to hold the body of the desc for the course. */

            let courseDesc = document.createElement('div');
            courseDesc.classList.add('courseDesc');
            aboutCourse.append(courseDesc)

            // the description title
            let courseDescTitle  = document.createElement('h3');
            courseDescTitle.classList.add('courseDescTitle');
            courseDescTitle.textContent = "Overview:"


             // the description body
            let courseDescBody  = document.createElement('p');
            courseDescBody.classList.add('courseDescBody');
            courseDescBody.textContent = result.descBody

            courseDesc.append(courseDescTitle);
            courseDesc.append(courseDescBody)


            // ****benefits of taking this course
            let benefitContainer = document.createElement('div')
            benefitContainer.classList.add('benefitContainer');

            // **** creating the children of the benefit container
             
             let benefits = document.createElement('div');
            benefits.classList.add('benefits');
            benefitContainer.append(benefits)

            // 8888 creating the children inside the benefit
             // the benefit title
            let benefitTitle  = document.createElement('h3');
            benefitTitle.classList.add('benefitTitle');
            benefitTitle.textContent = "Benefits:"


             // the benefit body
            let benefitBody  = document.createElement('p');
            benefitBody.classList.add('benefitBody');

            // iterating through the benefits array to outline it contents
            for(let i=0; i<result.benefits.length; i++){
                benefitBody.innerHTML += `<li>${result.benefits[i]}</li>`  
            }

            benefits.append(benefitTitle);
            benefits.append(benefitBody);


           //  creating the course image in the detail container at RHS

            let dImage = document.createElement('img');
            dImage.classList.add('dImage')
            dImage.src = result.img;


            //  creating the h2 element to hold the course id
            let dId = document.createElement('h2');
            dId.classList.add('dId');
            dId.textContent = "Id: " + result.id

            //  creating the h2 element to hold the course title
            let dTitle = document.createElement('h2');
            dTitle.classList.add('dTitle');
            dTitle.textContent = "Title: " +  result.title


            //  creating the h2 element to hold the course fee
            let dFee = document.createElement('h2');
            dFee.classList.add('dFee');
            dFee.textContent = "Fee: " + "$" + result.fee + ".00"


            //  creating the h2 element to hold the course duration
            let dDuration = document.createElement('h2');
            dDuration.classList.add('dDuration');
            dDuration.textContent = "Duration: " + result.duration

            //creating a div to hold cours id, title, fee, duration
            let coursePropsCont = document.createElement('div');
            coursePropsCont.classList.add('coursePropsCont');


            // appending all the child elements to the coursePropsCont
            coursePropsCont.append(dId)
            coursePropsCont.append(dTitle)
            coursePropsCont.append(dDuration)
            coursePropsCont.append(dFee)

             // appending all the child elements to the top level in detail container
            detailCardTop.append(dImage)
            detailCardTop.append(coursePropsCont)


             // appending all the child elements to the bottom level in detail container
            detailCardBottom.append(aboutCourse);
            detailCardBottom.append(benefitContainer);


            // appending all the child elements to the top detail container
            detailCard.append(close)
            detailCard.append(detailCardTop)
            detailCard.append(detailCardBottom)
            document.body.append(detailCard)
            

            // on clicking details, this class is added to the detailCard
            detailCard.classList.add("showCardDetail")


            // adding event listener to the close button
            close.onclick = (e)=>{
                detailCard.remove()
            }
        }



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
          let {title, img, fee, duration, signup, details} = result;
   

          
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
          detailsLink.addEventListener('click', ()=>{
            fetchDetail(result)
          })
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




