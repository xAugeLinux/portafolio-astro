// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Astro Blog",
  title: "Astro Blog",
  description: "A modern blog built with Astro",
  
  // Navigation
  navigation: {
    home: "Inicio",
    posts: "Proyectos",
    contact: "Contacto",
    comments: "Comentarios",
  },
  
  // Hero Section
  hero: {
    prefix: "Yo soy",
    name: "Jose Dominguez",
    intro: "Bienvenido a mi portafolio personal, Hola, soy José, un desarrollador web." +
          " Me gusta explorar nuevas tecnologías." +
          " En este portafolio encontrarás mis proyectos " +
          " personales que he realizado a lo largo de mi carrera. " +
          " Espero que mi contenido sea de utilidad a otros" +
          " en su viaje de programación .",
    avatar: "/image/img1.png",
    buttons: {
      viewPosts: "Ver proyectos",
      contactMe: "Contactarme",
    },
    socialLinks: [
      { name: "Twitter", icon: "/svg/twitter.svg", url: " " },
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: " " },
      { name: "Facebook", icon: "/svg/facebook.svg", url: " " },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/xAugeLinux" },
    ],
  },
  
  // Acerca de mi Section
  about: {
    title: "Acerca de mi",
    text: "Hola, soy José, un desarrollador web. Me gusta " +
          "explorar nuevas tecnologías. " +
          "En este portafolio encontrarás mis proyectos "
  },
  
  // Pagina de Contacto
  contact: {
    title: "Contacto",
    subtitle: "Estoy siempre abierto a discutir nuevos proyectos, ideas creativas o oportunidades para formar parte de tus visiones.",
    info: {
      email: {
        label: "Email",
        value: "jose@example.com",
        link: "mailto:jose@example.com",
      },
      phone: {
        label: "Teléfono",
        value: "+55 783 567-890",
        link: "tel:+55 783 567-890",
      },
      location: {
        label: "Ubicación",
        value: "Hidalgo, México",
      },
    },
    followMe: {
      title: "Sigueme en las redes sociales",
      links: [
        { name: "Twitter", icon: "/svg/twitter.svg", url: " " },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: " " },
        { name: "Facebook", icon: "/svg/facebook.svg", url: " " },
        { name: "GitHub", icon: "/svg/github.svg", url: " " },
      ],
    },
    footerText: [
      "Suelo responder a los mensajes dentro de las 24 horas hábiles.",
      "Espero poder hablar contigo pronto!",
    ],
    messageButton: "💬 Deja un mensaje",
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Someone. All rights reserved.",
    links: [
      { text: "Politica de Privacidad", url: "#" },
      { text: "Terminos de Servicio", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Iniciar este proyecto en GitHub",
      url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
    },
  },
  
  // Pagiana de Proyectos
  posts: {
    title: "Blog de Proyectos",
    subtitle: "Explora mis proyectos personales, donde comparto mis experiencias, aprendizajes y desafíos en el desarrollo web.",
    searchPlaceholder: "Buscar proyectos...",
  },
  
  // Pagina de Comentarios
  comments: {
    title: "Comentarios y Discusión",
    subtitle: "Comparte tus pensamientos, preguntas o sugerencias aquí. ¡Conectemos y discutamos!",
    guidelines: {
      title: "Normas de la Comunidad",
      items: [
        "Sé respetuoso y constructivo en tus comentarios",
        "Nadie es perfecto; todos estamos aquí para aprender",
        "Nada de spam o autopromoción, ataques ni enlaces irrelevantes",
        "Mantén la privacidad y seguridad de todos",
        "Nada de contenido inapropiado, ofensivo o ilegal",
        "Usar un lenguaje respetuoso y apropiado",
      ],
    },
  },
};

