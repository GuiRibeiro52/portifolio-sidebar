import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    fallbackLng: 'pt', 
    resources: {
      en: {
        translation: {
          sidebar: {
            home: "HOME",
            about: "ABOUT",
            works: "WORKS",
            contact: "CONTACT",
            rights: "All rights reserved."
          },
          home: {
            title: "MY NAME IS...",
            subtitle: "Front-End Developer based in Brazil"
          },
          about: {
            greeting: "Nice to meet you!",
            welcome: "WELCOME TO...",
            developer: "Front-End Developer",
            based: "based in",
            country: "Brazil",
            years: "Years experience...",
            clients: "Clients Worldwide...",
            description:
            "Hello there! My name is Guilherme Ribeiro. I am a Front-End developer, and I’m very passionate and dedicated to my work.",
            clientsDescription:
            "With 10+ years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.",
            quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin.”",
            altText: "Image of {{name}}",
          },
          contact: {
            title: "REACH OUT ME",
            address: "City: Franca, State: São Paulo, Country: Brazil.",
            project: "ANY PROJECT?",
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Submit now →"
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
              description: "",
            },
            grMaxPlus: {
              title: "GR MAX PLUS",
              description:
                "🚀 Presenting my project: HBO Max Clone \nI created a functional clone of HBO Max, where I explored technologies such as React, TypeScript, TailwindCSS, React Router, and Slick Slider. The website includes:\n🎬 Films and series with complete details (cast, trailers, where to watch).\n📅 Seasons and episodes with pagination for efficient navigation.\n🔍 Smart search, searching for films, series and genres.\n✨ Themed sections such as Marvel Universe, Star Wars, and Harry Potter.\n💻 Automatic and responsive carousels for a great experience on any device.",
            },
            foreverHomes: {
              title: "Forever Homes",
              description:
                "Forever Homes is a web application designed to help rescue and rehabilitate severely injured or neglected dogs and cats. The application offers features for adopting animals, donating to the cause, volunteering, and information about upcoming events.\n FEATURES\nAdopt an Animal: Users can apply to adopt animals through a dedicated form.\nDonate: Users can donate to the cause using a variety of payment methods.\nNewsletter Subscription: Users can sign up for the newsletter to receive updates.",
            },
            furniro: {
              title: "Furniro",
              description:
                "Furniro is an application developed to offer online furniture sales. The application has a user-friendly interface, with interactive features to improve the user experience.\n The project was developed with ReactTS + Vite and Tailwindcss, using the Firebase API for user authentication, ViaCep to fill in the mail fields, the product images are hosted in an AWS bucket and the project is running on an AWS EC2 instance, using modern technologies to provide a rich and interactive experience to users.",
              shortDescription: "Check the site by clicking the link below.",
            },
          }
        }


      },
      pt: {
        translation: {
          sidebar: {
            home: "INÍCIO",
            about: "SOBRE",
            works: "TRABALHOS",
            contact: "CONTATO",
            rights: "Todos os direitos reservados."
          },
          home: {
            title: "MEU NOME É...",
            subtitle: "Desenvolvedor Front-End"
          },
          about: {
            greeting: "Prazer em conhecê-lo!",
            welcome: "BEM-VINDO...",
            developer: "Desenvolvedor Front-End",
            based: "",
            country: "",
            years: "Anos de experiência...",
            clients: "Clientes em todo o mundo...",
            description:
            "Olá! Meu nome é Guilherme Ribeiro. Sou Desenvolvedor Front-End e sou muito apaixonado e dedicado ao meu trabalho.",
            clientsDescription:
            "Com mais de 10 anos de experiência como designer gráfico profissional, adquiri as habilidades e conhecimentos necessários para fazer do seu projeto um sucesso.",
            quote: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed sit ultrices et sed metus sollicitudin.”",
            altText: "Imagem de {{name}}",
          },
          contact: {
            title: "ENTRE EM CONTATO",
            address: "Cidade: Franca, Estado: São Paulo, País: Brasil.",
            project: "ALGUM PROJETO?",
            name: "Nome",
            email: "E-mail",
            message: "Mensagem",
            submit: "Enviar agora →"
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
              description: "",
            },
            grMaxPlus: {
              title: "GR MAX PLUS",
              description:
                "🚀 Apresentando meu projeto: Clone do HBO Max \nCriei um clone funcional do HBO Max, onde explorei tecnologias como React, TypeScript, TailwindCSS, React Router e Slick Slider. O site inclui:\n🎬 Filmes e séries com detalhes completos (elenco, trailers, onde assistir).\n📅 Temporadas e episódios com paginação para navegação eficiente.\n🔍 Pesquisa inteligente, pesquisando por filmes, séries e gêneros.\n✨ Seções temáticas como Universo Marvel, Star Wars e Harry Potter.\n💻 Carrosséis automáticos e responsivos para uma ótima experiência em qualquer dispositivo.",
            },
            foreverHomes: {
              title: "Forever Homes",
              description:
                "Forever Homes é uma aplicação web projetada para ajudar a resgatar e reabilitar cães e gatos gravemente feridos ou negligenciados. A aplicação oferece recursos para adoção de animais, doações para a causa, voluntariado e informações sobre eventos futuros.\n RECURSOS\nAdote um Animal: Os usuários podem se inscrever para adotar animais através de um formulário dedicado.\nDoação: Os usuários podem doar para a causa usando vários métodos de pagamento.\nAssinatura de Newsletter: Os usuários podem se inscrever para receber atualizações.",
            },
            furniro: {
              title: "Furniro",
              description:
                "Furniro é um aplicativo desenvolvido para oferecer vendas de móveis online. O aplicativo tem uma interface amigável, com recursos interativos para melhorar a experiência do usuário.\n O projeto foi desenvolvido com ReactTS + Vite e Tailwindcss, usando a API do Firebase para autenticação de usuários, ViaCep para preenchimento dos campos de correspondência, as imagens dos produtos estão hospedadas em um bucket AWS e o projeto está rodando em uma instância AWS EC2, utilizando tecnologias modernas para proporcionar uma experiência rica e interativa aos usuários.",
              
            },
          }
        }
      }
    }
  });

export default i18n;
