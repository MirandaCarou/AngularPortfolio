
export const COURSES: any = [

    {
        id: 1,
        description: "Education and Courses",
        iconUrl: './assets/brainstorm_1787077.png',
        longDescription: "My Bacherol Degree and courses",
        url: "/education-page",
    },
    {
        id: 2,
        description: "Experience",
        iconUrl: './assets/coding_3242257.png',
        longDescription: "All my roles and job positions",
        url: "/experience-page",
    },

    {
        id: 3,
        description: 'Projects',
        longDescription: "Let's take a look !!",
        iconUrl: './assets/folder_3767084.png',
        url: "/projects-page",
    },
    {
      id: 4,
      description: "About Me",
      iconUrl: './assets/flower_346218.png',
      longDescription: "Do you want to know me more?",
      url: "/about-me-page",
  },

  {
      id: 5,
      description: 'Contact me',
      longDescription: "It's only one click :)",
      iconUrl: './assets/integrity_10162741.png',
      url: "/contact-me",
  },


];


export const PROJECTS: any = [

  {
      id: 1,
      description: "Final Degree Thesis",
      iconUrl: './assets/tfg.PNG',
      url: "https://cookieweb.netlify.app/",
      isImage: true
  },
  {
      id: 2,
      description: "Github",
      iconUrl: './assets/siiGithub.png',
      url: "https://github.com/MirandaCarou",
  },

  {
      id: 3,
      description: 'My First Portfolio',
      iconUrl: './assets/portfolio.PNG',
      url: "https://mcarou.netlify.app/",
      isImage: true
  },

];



export function findCourseById(courseId:number) {
    return COURSES.find(course => course.id === courseId);
}
