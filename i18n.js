import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "pt",
    resources: {
      en: {
        translation: {
          sidebar: {
            home: "HOME",
            about: "ABOUT",
            works: "WORKS",
            contact: "CONTACT",
            rights: "All rights reserved.",
          },
          home: {
            title: "MY NAME IS...",
            subtitle: "Front-End Developer based in Brazil",
          },
          about: {
            greeting: "Nice to meet you!",
            welcome: "WELCOME TO...",
            developer: "Front-End Developer",
            based: "based in",
            country: "Brazil",
            age: "36 yrs",
            city: "Brazil, Franca",
            years: "Years as an Inspiring Educator...",
            clients: "Development Projects",
            description:
              "Hello there! I am Guilherme Ribeiro, passionate about teaching and learning. With over 10 years of experience as a Math teacher, I have developed a unique ability to solve problems and teach clear solutions. This passion for learning has led me to a new journey in the field of Information Technology.",
            clientsDescription:
              "I am currently a Systems Analysis and Development student, combining my love of logic with practical programming skills. I have created and implemented projects that showcase my creativity and dedication. I am always exploring ways to turn ideas into innovative solutions.",
            quote:
              "Horace Mann (1796 - 1859) said: “Be ashamed to die until you have won some victory for mankind.” This is my victory.",
            altText: "Image of {{name}}",
          },
          contact: {
            title: "REACH OUT TO ME",
            address: "City: Franca, State: São Paulo, Country: Brazil.",
            project: "ANY PROJECT?",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit now →",
            successMessageTitle: "Message Sent!",
            successMessageBody:
              "Thank you for reaching out. We will respond shortly.",
            errorRequired: "All fields are required.",
            errorInvalidEmail: "Please enter a valid email address.",
            errorSubmission:
              "There was an error submitting the message. Please try again later.",
          },
          works: {
            sectionTitle: "Works",
            pageTitle: "RECENT PROJECTS",
            caseStudy: "UX case study",
            noDescription: "No additional description available.",
            visitSite: "Visit Site",
            close: "Close",
            loadMore: "Load more",
            brasfal: {
              title: "Brasfal",
              subtitle: "Web Development",
              description: "",
            },
            grMaxPlus: {
              title: "GR MAX PLUS",
              subtitle: "UX case study",
              description:
                "🚀 Presenting my project: HBO Max Clone \nI created a functional clone of HBO Max, where I explored technologies such as React, TypeScript, TailwindCSS, React Router, and Slick Slider. The website includes:\n🎬 Films and series with complete details (cast, trailers, where to watch).\n📅 Seasons and episodes with pagination for efficient navigation.\n🔍 Smart search, searching for films, series and genres.\n✨ Themed sections such as Marvel Universe, Star Wars, and Harry Potter.\n💻 Automatic and responsive carousels for a great experience on any device.",
            },
            foreverHomes: {
              title: "Forever Homes",
              subtitle: "UX case study",
              description:
                "Forever Homes is a web application designed to help rescue and rehabilitate severely injured or neglected dogs and cats. The application offers features for adopting animals, donating to the cause, volunteering, and information about upcoming events.\n FEATURES\nAdopt an Animal: Users can apply to adopt animals through a dedicated form.\nDonate: Users can donate to the cause using a variety of payment methods.\nNewsletter Subscription: Users can sign up for the newsletter to receive updates.",
            },
            furniro: {
              title: "Furniro",
              subtitle: "UX case study",
              description:
                "Furniro is an application developed to offer online furniture sales. The application has a user-friendly interface, with interactive features to improve the user experience.\n The project was developed with ReactTS + Vite and Tailwindcss, using the Firebase API for user authentication, ViaCep to fill in the mail fields, the product images are hosted in an AWS bucket and the project is running on an AWS EC2 instance, using modern technologies to provide a rich and interactive experience to users.",
            },
            chromebooks: {
              subtitle: "Application development",
              title: "Chromebook Management",
              description:
                "I recently created a Chromebook Management System, created to meet a real need in my work: organizing the loan and return of devices in an efficient and transparent way.",
            },
            portifolio: {
              title: "Portfolio Landing Page",
              subtitle: "Application development",
              description:
                "Previously I created a Landing Page version which I used until January 2025. In this project I used React JavaScript.",
            },
          },
        },
      },
      pt: {
        translation: {
          sidebar: {
            home: "INÍCIO",
            about: "SOBRE",
            works: "TRABALHOS",
            contact: "CONTATO",
            rights: "Todos os direitos reservados.",
          },
          home: {
            title: "MEU NOME É...",
            subtitle: "Desenvolvedor Front-End",
          },
          about: {
            greeting: "Prazer em conhecê-lo!",
            welcome: "BEM-VINDO...",
            developer: "Desenvolvedor Front-End",
            based: "",
            country: "",
            city: "Franca, Brasil",
            age: "35 anos",
            years: "Anos como Educador Inspirador...",
            clients: "Projetos de Desenvolvimento.",
            description:
              "Olá! Meu nome é Guilherme Ribeiro, um apaixonado por ensinar e aprender. Com mais de 10 anos de experiência como professor de Matemática, desenvolvi uma habilidade única de resolver problemas e ensinar soluções claras. Essa paixão pelo aprendizado me levou a uma nova jornada na área de Tecnologia da Informação.",
            clientsDescription:
              "Atualmente, sou estudante de Análise e Desenvolvimento de Sistemas, combinando meu amor pela lógica com habilidades práticas de programação. Já criei e implementei projetos que mostram minha criatividade e dedicação. Estou sempre explorando maneiras de tornar ideias em soluções inovadoras.",
            quote:
              "Horace Mann (1796 - 1859) disse: \"Tenha vergonha de morrer até você ter conquistado alguma vitória para a humanidade\". Essa é a minha vitória.",
            altText: "Imagem de {{name}}",
          },
          contact: {
            title: "ENTRE EM CONTATO",
            address: "Cidade: Franca, Estado: São Paulo, País: Brasil.",
            project: "ALGUM PROJETO?",
            name: "Nome",
            email: "E-mail",
            message: "Mensagem",
            submit: "Enviar agora →",
            successMessageTitle: "Mensagem enviada!",
            successMessageBody:
              "Obrigado por entrar em contato. Responderemos em breve.",
            errorRequired: "Todos os campos são obrigatórios.",
            errorInvalidEmail: "Por favor, insira um e-mail válido.",
            errorSubmission:
              "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.",
          },
          works: {
            sectionTitle: "Trabalhos",
            pageTitle: "PROJETOS RECENTES",
            caseStudy: "Estudo de caso de UX",
            noDescription: "Nenhuma descrição adicional disponível.",
            visitSite: "Visitar Site",
            close: "Fechar",
            loadMore: "Carregar mais",
            brasfal: {
              title: "Brasfal",
              subtitle: "Desenvolvimento Web",
              description: "",
            },
            grMaxPlus: {
              title: "GR MAX PLUS",
              subtitle: "Caso de Estudo UX",
              description:
                "🚀 Apresentando meu projeto: Clone do HBO Max \nCriei um clone funcional do HBO Max, onde explorei tecnologias como React, TypeScript, TailwindCSS, React Router e Slick Slider. O site inclui:\n🎬 Filmes e séries com detalhes completos (elenco, trailers, onde assistir).\n📅 Temporadas e episódios com paginação para navegação eficiente.\n🔍 Pesquisa inteligente, pesquisando por filmes, séries e gêneros.\n✨ Seções temáticas como Universo Marvel, Star Wars e Harry Potter.\n💻 Carrosséis automáticos e responsivos para uma ótima experiência em qualquer dispositivo.",
            },
            foreverHomes: {
              title: "Forever Homes",
              subtitle: "Caso de Estudo UX",
              description:
                "Forever Homes é uma aplicação web projetada para ajudar a resgatar e reabilitar cães e gatos gravemente feridos ou negligenciados. A aplicação oferece recursos para adoção de animais, doações para a causa, voluntariado e informações sobre eventos futuros.\n RECURSOS\nAdote um Animal: Os usuários podem se inscrever para adotar animais através de um formulário dedicado.\nDoação: Os usuários podem doar para a causa usando vários métodos de pagamento.\nAssinatura de Newsletter: Os usuários podem se inscrever para receber atualizações.",
            },
            furniro: {
              title: "Furniro",
              subtitle: "Caso de Estudo UX",
              description:
                "Furniro é um aplicativo desenvolvido para oferecer vendas de móveis online. O aplicativo tem uma interface amigável, com recursos interativos para melhorar a experiência do usuário.\n O projeto foi desenvolvido com ReactTS + Vite e Tailwindcss, usando a API do Firebase para autenticação de usuários, ViaCep para preenchimento dos campos de correspondência, as imagens dos produtos estão hospedadas em um bucket AWS e o projeto está rodando em uma instância AWS EC2, utilizando tecnologias modernas para proporcionar uma experiência rica e interativa aos usuários.",
            },
            chromebooks: {
              title: "Gerenciamento de Chromebooks",
              subtitle: "Desenvolvimento de Aplicação",
              description:
                "Recentemente criei um Sistema de Gerenciamento de Chromebooks, criado para atender a uma necessidade real do meu trabalho: organizar o empréstimo e devolução de dispositivos de forma eficiente e transparente.",
            },
            portifolio: {
              title: "Portifolio Landing Page",
              subtitle: "Desenvolvimento de Aplicação",
              description:
                "Anteriormente criei uma versão de Landing Page a qual usei até Janeiro de 2025. Nesse projeto usei React JavaScript.",
            },
          },
        },
      },
    },
  });

export default i18n;
