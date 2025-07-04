"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  Code,
  Palette,
  Play,
  Moon,
  Sun,
  Globe,
} from "lucide-react";

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      resume: "Currículo",
      projects: "Projetos",
      mobileApp: "App Mobile",
      design: "Design",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Bruno Faria",
      description:
        "Desenvolvedor Front-end | Next.js | React.js | Vue.js | Tailwind | TypeScript | Integração com APIs REST | Integração com WebSocket | Git | React Native | Node.js | Python",
      viewProjects: "Ver Projetos",
      downloadCV: "Baixar Currículo",
    },
    about: {
      title: "Sobre Mim",
      description1:
        "Com mais de 4 anos de experiência em desenvolvimento, tenho trabalhado com diversas tecnologias e frameworks para criar soluções inovadoras. Minha paixão está em transformar ideias em produtos digitais que fazem a diferença na vida das pessoas.",
      description2:
        "Especializo-me em desenvolvimento Front-end, com foco em React, Next.js, Vue.js e design UX/UI. Sempre busco aprender novas tecnologias e metodologias para entregar os melhores resultados.",
      personalInfo: "Informações Pessoais",
      technologies: "Tecnologias",
    },
    resume: {
      title: "Currículo",
      subtitle: "Minha jornada profissional e acadêmica",
      experience: "Experiência Profissional",
      educationTitle: "Formação Acadêmica",
      downloadCV: "Baixar Currículo",
      jobs: {
        current: {
          title: "Desenvolvedor Front-end Pleno",
          company: "Diven Tecnologia",
          period: "Set 2024 - Presente",
          description:
            "Desenvolvimento de sistema CRM para equipe do Beach Park, unificando funcionalidades de 4 sistemas anteriores. Implementação de chat em tempo real usando Chatwoot API e WebSockets, com integração a dados do cliente e ações como reservas e criação de tickets.\n\nAlgumas atividades atuei como PO: entender a necessidade do cliente, coleta de requisitos, criação de backlog, criação de tarefas para a equipe e garantir que atividades atendem o cliente.",
        },
        deway: {
          title: "Desenvolvedor Front-end",
          company: "Deway",
          period: "Fev 2024 - Out 2024",
          description:
            "Desenvolvimento de portais web e apps para empresas de grande porte no Brasil. Integração de APIs em colaboração com o back-end, garantindo comunicação fluida entre a equipe.",
        },
        muzie: {
          title: "Desenvolvedor Front-end",
          company: "Muzie Online",
          period: "2022 - 2023",
          description:
            "Criação de novas funcionalidades para rede social (chat, feed de fotos, pagamentos). Redesign de páginas com melhorias de layout e implementação de técnicas de SEO para aumentar visibilidade da plataforma.",
        },
        kenzie: {
          title: "Peer Coach (Monitor de turma)",
          company: "Kenzie Academy Brasil",
          period: "Out 2021 - Fev 2022",
          description:
            "Suporte a alunos na correção de testes e esclarecimento de dúvidas em HTML, CSS e JavaScript. Desenvolvimento de soft skills como comunicação, autonomia e gestão de tempo.",
        },
      },
      education: {
        postGrad: {
          title: "Pós-Graduação em Desenvolvimento Full Stack",
          institution: "Descomplica",
          period: "2025 - Atualmente",
          description:
            "Backend com Node.js e Spring Boot, frontend com Angular, banco de dados SQL/MongoDB, práticas DevOps com Docker e AWS. Enfoque em arquitetura escalável, testes e metodologias ágeis.",
        },
        tech: {
          title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          institution: "UNINASSAU",
          period: "2023 - 2024",
          description:
            "Formação completa em desenvolvimento de sistemas, cobrindo desde fundamentos de programação até arquitetura de software, banco de dados e metodologias ágeis. Preparação sólida para atuar em diversas áreas do desenvolvimento de software.",
        },
        fullStack: {
          title: "Formação Profissionalizante em Desenvolvimento Full Stack",
          institution: "Kenzie Academy Brasil",
          period: "2021 - 2022",
          description:
            "Curso intensivo de Desenvolvimento Full Stack com 2.000 horas cobrindo tanto tecnologias Front End quanto de Back End, além de habilidades interpessoais relevantes para o mercado de trabalho.",
        },
      },
    },
    projects: {
      title: "Projetos",
      subtitle:
        "Alguns projetos pessoais que desenvolvi em momentos de folga do trabalho.",
      blitzbee: {
        title: "BlitzBee",
        description:
          "Rede social completa, onde você pode criar sua conta, postar fotos, curtir, comentar e seguir outras pessoas. Possui um feed exclusivo com publicações de quem você segue e uma área interativa que destaca os posts mais populares da plataforma.",
      },
      hotel: {
        title: "Hotel Reservas",
        description:
          'O "Bruno\'s Hotel" é um site que permite aos usuários explorar quartos de hotel, ver suas características, filtrar por preço ou outro item único e fazer reservas. O site oferece uma interface amigável para encontrar e reservar quartos de hotel de forma conveniente.',
      },
      chat: {
        title: "Chat React",
        description:
          "Aplicação de chat em tempo real que permite conversas entre duas pessoas com interface moderna.",
      },
      mario: {
        title: "Mario Game",
        description:
          "Recriação do clássico jogo do Mario com JavaScript puro e animações fluidas.",
      },
      pokedex: {
        title: "Pokédex",
        description:
          "Aplicação completa com todos os Pokémons, consumindo a PokéAPI com interface interativa.",
      },
      upcoming: {
        title: "Próximo Projeto",
        description:
          "Novo projeto em desenvolvimento. Fique ligado nas atualizações!",
        comingSoon: "Em breve...",
        inDevelopment: "Novo projeto em desenvolvimento",
      },
      viewDemo: "Ver Demo",
    },
    footer: {
      title: "Vamos Trabalhar Juntos?",
      description:
        "Estou sempre aberto a novos projetos e oportunidades. Entre em contato para discutirmos como posso ajudar.",
      contact: "Entrar em Contato",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      resume: "Resume",
      projects: "Projects",
      mobileApp: "Mobile App",
      design: "Design",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Bruno Faria",
      description:
        "Frontend Developer | Next.js | React.js | Vue.js | Tailwind | TypeScript | REST API Integration | WebSocket Integration | Git | React Native | Node.js | Python",
      viewProjects: "View Projects",
      downloadCV: "Download Resume",
    },
    about: {
      title: "About Me",
      description1:
        "With over 4 years of development experience, I have worked with various technologies and frameworks to create innovative solutions. My passion is transforming ideas into digital products that make a difference in people's lives.",
      description2:
        "I specialize in Frontend development, focusing on React, Next.js, Vue.js, and UX/UI design. I always seek to learn new technologies and methodologies to deliver the best results.",
      personalInfo: "Personal Information",
      technologies: "Technologies",
    },
    resume: {
      title: "Resume",
      subtitle: "My professional and academic journey",
      experience: "Professional Experience",
      educationTitle: "Academic Background",
      downloadCV: "Download Resume",
      jobs: {
        current: {
          title: "Frontend Developer - Mid Level",
          company: "Diven Tecnologia",
          period: "Sep 2024 - Present",
          description:
            "Development of CRM system for Beach Park team, unifying functionalities from 4 previous systems. Implementation of real-time chat using Chatwoot API and WebSockets, with integration to customer data and actions like reservations and ticket creation.\n\nSome activities I acted as PO: understanding client needs, requirements gathering, backlog creation, task creation for the team and ensuring activities meet client needs.",
        },
        deway: {
          title: "Frontend Developer",
          company: "Deway",
          period: "Feb 2024 - Oct 2024",
          description:
            "Development of web portals and apps for large companies in Brazil. API integration in collaboration with the backend, ensuring smooth communication between the team.",
        },
        muzie: {
          title: "Frontend Developer",
          company: "Muzie Online",
          period: "2022 - 2023",
          description:
            "Creation of new features for social network (chat, photo feed, payments). Page redesign with layout improvements and implementation of SEO techniques to increase platform visibility.",
        },
        kenzie: {
          title: "Peer Coach (Class Monitor)",
          company: "Kenzie Academy Brasil",
          period: "Oct 2021 - Feb 2022",
          description:
            "Support for students in test correction and clarification of doubts in HTML, CSS and JavaScript. Development of soft skills such as communication, autonomy and time management.",
        },
      },
      education: {
        postGrad: {
          title: "Post-Graduate in Full Stack Development",
          institution: "Descomplica",
          period: "2025 - Currently",
          description:
            "Backend with Node.js and Spring Boot, frontend with Angular, SQL/MongoDB databases, DevOps practices with Docker and AWS. Focus on scalable architecture, testing and agile methodologies.",
        },
        tech: {
          title: "Technology Degree in Systems Analysis and Development",
          institution: "UNINASSAU",
          period: "2023 - 2024",
          description:
            "Complete training in systems development, covering from programming fundamentals to software architecture, databases and agile methodologies. Solid preparation to work in various areas of software development.",
        },
        fullStack: {
          title: "Professional Training in Full Stack Development",
          institution: "Kenzie Academy Brasil",
          period: "2021 - 2022",
          description:
            "Intensive Full Stack Development course with 2,000 hours covering both Front End and Back End technologies, plus interpersonal skills relevant to the job market.",
        },
      },
    },
    projects: {
      title: "Projects",
      subtitle:
        "Some personal projects I developed during my free time from work.",
      blitzbee: {
        title: "BlitzBee",
        description:
          "Complete social network where you can create your account, post photos, like, comment and follow other people. Features an exclusive feed with posts from people you follow and an interactive area that highlights the most popular posts on the platform.",
      },
      hotel: {
        title: "Hotel Reservations",
        description:
          '"Bruno\'s Hotel" is a website that allows users to explore hotel rooms, see their features, filter by price or other unique item and make reservations. The site offers a user-friendly interface to find and book hotel rooms conveniently.',
      },
      chat: {
        title: "React Chat",
        description:
          "Real-time chat application that allows conversations between two people with modern interface.",
      },
      mario: {
        title: "Mario Game",
        description:
          "Recreation of the classic Mario game with pure JavaScript and smooth animations.",
      },
      pokedex: {
        title: "Pokédex",
        description:
          "Complete application with all Pokémon, consuming the PokéAPI with interactive interface.",
      },
      upcoming: {
        title: "Next Project",
        description: "New project in development. Stay tuned for updates!",
        comingSoon: "Coming soon...",
        inDevelopment: "New project in development",
      },
      viewDemo: "View Demo",
    },
    footer: {
      title: "Let's Work Together?",
      description:
        "I'm always open to new projects and opportunities. Get in touch to discuss how I can help.",
      contact: "Get in Touch",
      rights: "All rights reserved.",
    },
  },
};
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false); // tema branco por padrão
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const dark = saved === "dark" || (!saved && prefersDark);

    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const t = translations[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    document.documentElement.classList.toggle("dark", next);
  };
  if (!mounted) return null;
  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href =
      language === "pt"
        ? "/bruno-faria-curriculo-1.pdf"
        : "/bruno-faria-resume-1.pdf";
    link.download =
      language === "pt"
        ? "Bruno_Faria_Curriculo.pdf"
        : "Bruno_Faria_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <nav
        className={`fixed top-0 left-0 right-0 backdrop-blur-sm border-b z-50 transition-colors duration-300 ${
          isDark
            ? "bg-gray-900/95 border-gray-700"
            : "bg-white/95 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">
              {language === "pt" ? "Portfólio" : "Portfolio"}
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "resume", "projects"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    activeSection === item
                      ? "text-emerald-600"
                      : isDark
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {t.nav[item as keyof typeof t.nav]}
                </button>
              ))}
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleLanguage}
                  className={`p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                    isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                  }`}
                >
                  <Globe className="w-4 h-4" />
                </button>
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                    isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                  }`}
                >
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className={`p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                <Globe className="w-4 h-4" />
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors hover:bg-gray-100 ${
                  isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                }`}
              >
                {isDark ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div
              className={`md:hidden py-4 border-t ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              {["home", "about", "resume", "projects"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {t.nav[item as keyof typeof t.nav]}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section
        id="home"
        className={`pt-16 min-h-screen flex items-center transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-br from-gray-800 to-gray-900"
            : "bg-gradient-to-br from-gray-50 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className={`text-4xl md:text-6xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {t.hero.greeting}
                <span className="block text-emerald-600">{t.hero.name}</span>
              </h1>
              <p
                className={`text-lg md:text-xl mb-8 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  {t.hero.viewProjects}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={downloadCV}
                  className={`border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white ${
                    isDark ? "border-emerald-500 text-emerald-500" : ""
                  }`}
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t.hero.downloadCV}
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <a
                  target="_blank"
                  href="https://github.com/BrunoFaria93"
                  className={`transition-colors hover:text-emerald-600 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/brunofaria93/"
                  className={`transition-colors hover:text-emerald-600 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                <Image
                  src="/bruno-foto.jpg"
                  alt="Profile"
                  width={280}
                  height={280}
                  className="rounded-full w-64 h-64 md:w-72 md:h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {t.about.title}
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className={`mb-6 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.about.description1}
              </p>
              <p
                className={`mb-8 leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.about.description2}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3
                    className={`font-semibold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t.about.personalInfo}
                  </h3>
                  <div
                    className={`space-y-2 text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-emerald-600" />
                      brunofaria7.dev@gmail.com
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-emerald-600" />
                      (85)99605-6772
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      Fortaleza, CE
                    </div>
                  </div>
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t.about.technologies}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React.js",
                      "Next.js",
                      "Vue.js",
                      "TypeScript",
                      "Tailwind",
                      "Styled Components",
                      "Firebase",
                      "WebSockets",
                      "REST API",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`${
                          isDark
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className={`rounded-2xl p-8 relative overflow-hidden ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800 to-gray-700"
                    : "bg-gradient-to-br from-blue-50 to-indigo-100"
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Developer working with code"
                  className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-sm font-medium text-gray-800">
                    Hello World!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="resume"
        className={`py-20 transition-colors duration-300 ${
          isDark ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {t.resume.title}
            </h2>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="hidden sm:block w-32"></div>
              <p
                className={`text-lg md:text-xl ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t.resume.subtitle}
              </p>
              <Button
                variant="outline"
                onClick={downloadCV}
                className={`border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white ${
                  isDark ? "border-emerald-500 text-emerald-500" : ""
                }`}
              >
                <Download className="w-4 h-4 mr-2" />
                {t.resume.downloadCV}
              </Button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3
                className={`text-2xl font-bold mb-8 flex items-center gap-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <Calendar className="w-6 h-6 text-emerald-600" />
                {t.resume.experience}
              </h3>
              <div className="space-y-6">
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={isDark ? "text-white" : "text-gray-900"}
                    >
                      {t.resume.jobs.current.title}
                    </CardTitle>
                    <CardDescription
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {t.resume.jobs.current.company} •{" "}
                      {t.resume.jobs.current.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`mb-4 leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t.resume.jobs.current.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Vue.js",
                        "Styled Components",
                        "WebSockets",
                        "REST API",
                        "Product Owner",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`${
                            isDark
                              ? "border-gray-600 text-gray-300"
                              : "border-gray-300 text-gray-700"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={isDark ? "text-white" : "text-gray-900"}
                    >
                      {t.resume.jobs.deway.title}
                    </CardTitle>
                    <CardDescription
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {t.resume.jobs.deway.company} •{" "}
                      {t.resume.jobs.deway.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`mb-4 leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t.resume.jobs.deway.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "React Native",
                        "Tailwind CSS",
                        "REST API",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className={`${
                            isDark
                              ? "border-gray-600 text-gray-300"
                              : "border-gray-300 text-gray-700"
                          }`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={isDark ? "text-white" : "text-gray-900"}
                    >
                      {t.resume.jobs.muzie.title}
                    </CardTitle>
                    <CardDescription
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {t.resume.jobs.muzie.company} •{" "}
                      {t.resume.jobs.muzie.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`mb-4 leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t.resume.jobs.muzie.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Next.js", "Tailwind CSS", "Node.js", "SEO"].map(
                        (tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className={`${
                              isDark
                                ? "border-gray-600 text-gray-300"
                                : "border-gray-300 text-gray-700"
                            }`}
                          >
                            {tech}
                          </Badge>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={isDark ? "text-white" : "text-gray-900"}
                    >
                      {t.resume.jobs.kenzie.title}
                    </CardTitle>
                    <CardDescription
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {t.resume.jobs.kenzie.company} •{" "}
                      {t.resume.jobs.kenzie.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`mb-4 leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t.resume.jobs.kenzie.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["HTML5", "CSS", "JavaScript", "Mentoria"].map(
                        (tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className={`${
                              isDark
                                ? "border-gray-600 text-gray-300"
                                : "border-gray-300 text-gray-700"
                            }`}
                          >
                            {tech}
                          </Badge>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <h3
                className={`text-2xl font-bold mb-8 flex items-center gap-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <Code className="w-6 h-6 text-emerald-600" />
                {t.resume.educationTitle}
              </h3>

              <div className="space-y-6">
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={isDark ? "text-white" : "text-gray-900"}
                    >
                      {t.resume.education.postGrad.title}
                    </CardTitle>
                    <CardDescription
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {t.resume.education.postGrad.institution} •{" "}
                      {t.resume.education.postGrad.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t.resume.education.postGrad.description}
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={isDark ? "text-white" : "text-gray-900"}
                    >
                      {t.resume.education.tech.title}
                    </CardTitle>
                    <CardDescription
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {t.resume.education.tech.institution} •{" "}
                      {t.resume.education.tech.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t.resume.education.tech.description}
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`${
                    isDark
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <CardHeader>
                    <CardTitle
                      className={isDark ? "text-white" : "text-gray-900"}
                    >
                      {t.resume.education.fullStack.title}
                    </CardTitle>
                    <CardDescription
                      className={isDark ? "text-gray-300" : "text-gray-600"}
                    >
                      {t.resume.education.fullStack.institution} •{" "}
                      {t.resume.education.fullStack.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p
                      className={`leading-relaxed ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {t.resume.education.fullStack.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {t.projects.title}
            </h2>
            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t.projects.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              className={`group hover:shadow-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:shadow-emerald-500/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/blitzbee-img.png"
                  alt="BlitzBee - Rede Social"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() =>
                      window.open(
                        "https://blitzbee-bruno.vercel.app/",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.projects.viewDemo}
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className={isDark ? "text-white" : "text-gray-900"}>
                  {t.projects.blitzbee.title}
                </CardTitle>
                <CardDescription
                  className={isDark ? "text-gray-300" : "text-gray-600"}
                >
                  {t.projects.blitzbee.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Firebase"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${
                        isDark
                          ? "border-gray-600 text-gray-300"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card
              className={`group hover:shadow-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:shadow-emerald-500/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Hotel Reservas"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() =>
                      window.open(
                        "https://hotel-project-three.vercel.app/",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.projects.viewDemo}
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className={isDark ? "text-white" : "text-gray-900"}>
                  {t.projects.hotel.title}
                </CardTitle>
                <CardDescription
                  className={isDark ? "text-gray-300" : "text-gray-600"}
                >
                  {t.projects.hotel.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Contentful"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${
                        isDark
                          ? "border-gray-600 text-gray-300"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card
              className={`group hover:shadow-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:shadow-emerald-500/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/chat.png"
                  alt="Chat Application"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() =>
                      window.open(
                        "https://chat-bruno-react.vercel.app/",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.projects.viewDemo}
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className={isDark ? "text-white" : "text-gray-900"}>
                  {t.projects.chat.title}
                </CardTitle>
                <CardDescription
                  className={isDark ? "text-gray-300" : "text-gray-600"}
                >
                  {t.projects.chat.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "Firebase", "Tailwind", "Real-time"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className={`${
                          isDark
                            ? "border-gray-600 text-gray-300"
                            : "border-gray-300 text-gray-700"
                        }`}
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
            <Card
              className={`group hover:shadow-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:shadow-emerald-500/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/mario.jpg"
                  alt="Jogo do Mario"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() =>
                      window.open(
                        "https://mario-game-red.vercel.app/",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.projects.viewDemo}
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className={isDark ? "text-white" : "text-gray-900"}>
                  {t.projects.mario.title}
                </CardTitle>
                <CardDescription
                  className={isDark ? "text-gray-300" : "text-gray-600"}
                >
                  {t.projects.mario.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "HTML5", "CSS"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${
                        isDark
                          ? "border-gray-600 text-gray-300"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card
              className={`group hover:shadow-lg transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:shadow-emerald-500/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1613771404721-1f92d799e49f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Pokedex"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() =>
                      window.open(
                        "https://pokedex-eosin-two.vercel.app/",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t.projects.viewDemo}
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className={isDark ? "text-white" : "text-gray-900"}>
                  {t.projects.pokedex.title}
                </CardTitle>
                <CardDescription
                  className={isDark ? "text-gray-300" : "text-gray-600"}
                >
                  {t.projects.pokedex.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["React", "API REST", "Tailwind"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className={`${
                        isDark
                          ? "border-gray-600 text-gray-300"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card
              className={`group hover:shadow-lg transition-all duration-300 opacity-60 ${
                isDark
                  ? "bg-gray-800 border-gray-700 hover:shadow-emerald-500/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Próximo Projeto"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg font-semibold">
                      {t.projects.upcoming.title}
                    </p>
                    <p className="text-sm">{t.projects.upcoming.comingSoon}</p>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className={isDark ? "text-white" : "text-gray-900"}>
                  {t.projects.upcoming.title}
                </CardTitle>
                <CardDescription
                  className={isDark ? "text-gray-300" : "text-gray-600"}
                >
                  {t.projects.upcoming.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className={`${
                      isDark
                        ? "border-gray-600 text-gray-300"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    {t.projects.upcoming.inDevelopment}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className={`py-12 ${isDark ? "bg-gray-900" : "bg-gray-900"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              {t.footer.title}
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t.footer.description}
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a
                target="_blank"
                href="https://github.com/BrunoFaria93"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/brunofaria93/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() =>
                window.open(
                  "https://wa.me/5585996056772?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais%20sobre%20seu%20trabalho.",
                  "_blank"
                )
              }
            >
              <Mail className="w-4 h-4 mr-2" />
              {t.footer.contact}
            </Button>
            <Separator className="my-8 bg-gray-800" />
            <p className="text-gray-400 text-sm">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
