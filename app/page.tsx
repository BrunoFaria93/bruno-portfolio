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
} from "lucide-react";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "resume",
        "projects",
        "mobile-app",
        "design",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Portfólio</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Início" },
                { id: "about", label: "Sobre" },
                { id: "resume", label: "Currículo" },
                { id: "projects", label: "Projetos" },
                { id: "mobile-app", label: "App Mobile" },
                { id: "design", label: "Design" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                    activeSection === item.id
                      ? "text-gray-900"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              {[
                { id: "home", label: "Início" },
                { id: "about", label: "Sobre" },
                { id: "resume", label: "Currículo" },
                { id: "projects", label: "Projetos" },
                { id: "mobile-app", label: "App Mobile" },
                { id: "design", label: "Design" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Olá, eu sou
                <span className="block text-emerald-600">Seu Nome</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Desenvolvedor Full Stack & Designer apaixonado por criar
                experiências digitais incríveis
              </p>
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => scrollToSection("projects")} size="lg">
                  Ver Projetos
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
              <div className="flex gap-4 mt-8">
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre Mim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sou um desenvolvedor apaixonado por tecnologia com experiência em
              desenvolvimento web, mobile e design.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Com mais de X anos de experiência em desenvolvimento, tenho
                trabalhado com diversas tecnologias e frameworks para criar
                soluções inovadoras. Minha paixão está em transformar ideias em
                produtos digitais que fazem a diferença na vida das pessoas.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Especializo-me em desenvolvimento full stack, com foco em React,
                Next.js, Flutter e design UX/UI. Sempre busco aprender novas
                tecnologias e metodologias para entregar os melhores resultados.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Informações Pessoais
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      seu.email@exemplo.com
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      (11) 99999-9999
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      São Paulo, SP
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Tecnologias
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "Flutter",
                      "Node.js",
                      "TypeScript",
                      "Figma",
                    ].map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">
                    Projetos Concluídos
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    3+
                  </div>
                  <div className="text-sm text-gray-600">
                    Anos de Experiência
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    30+
                  </div>
                  <div className="text-sm text-gray-600">
                    Clientes Satisfeitos
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-gray-600">Suporte</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Currículo
            </h2>
            <p className="text-xl text-gray-600">
              Minha jornada profissional e acadêmica
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-emerald-600" />
                Experiência Profissional
              </h3>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Desenvolvedor Full Stack</CardTitle>
                    <CardDescription>
                      Empresa XYZ • 2022 - Presente
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Desenvolvimento de aplicações web e mobile utilizando
                      React, Next.js e Flutter.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "Flutter", "Node.js"].map(
                        (tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        )
                      )}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Desenvolvedor Frontend</CardTitle>
                    <CardDescription>Startup ABC • 2021 - 2022</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Criação de interfaces modernas e responsivas para
                      aplicações web.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "TypeScript", "Tailwind CSS"].map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Code className="w-6 h-6 text-emerald-600" />
                Formação Acadêmica
              </h3>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Bacharelado em Ciência da Computação</CardTitle>
                    <CardDescription>
                      Universidade XYZ • 2018 - 2022
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Formação sólida em programação, algoritmos, estruturas de
                      dados e engenharia de software.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Curso de UX/UI Design</CardTitle>
                    <CardDescription>Instituto ABC • 2021</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Especialização em design de experiência do usuário e
                      interfaces digitais.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projetos
            </h2>
            <p className="text-xl text-gray-600">
              Alguns dos meus trabalhos mais recentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <Card
                key={project}
                className="group hover:shadow-lg transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=400`}
                    alt={`Projeto ${project}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>Projeto {project}</CardTitle>
                  <CardDescription>
                    Descrição breve do projeto e tecnologias utilizadas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Tailwind"].map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section id="mobile-app" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Aplicativo Mobile
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Desenvolvido em Flutter, este aplicativo demonstra minhas
                habilidades em desenvolvimento mobile com uma interface moderna
                e funcionalidades avançadas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Interface Intuitiva
                    </h3>
                    <p className="text-gray-600">
                      Design moderno e fácil de usar
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Performance Otimizada
                    </h3>
                    <p className="text-gray-600">
                      Carregamento rápido e responsivo
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Multiplataforma
                    </h3>
                    <p className="text-gray-600">Funciona em iOS e Android</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Flutter", "Dart", "Firebase", "REST API"].map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Ver no GitHub
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download APK
                </Button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>

                    {/* Video Container */}
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="text-gray-600 text-sm">
                          Clique para ver o vídeo
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          demonstração do app
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Shadow */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-gray-900/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section id="design" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <Palette className="w-8 h-8 text-emerald-600" />
              Design & Ilustração
            </h2>
            <p className="text-xl text-gray-600">
              Trabalhos criativos em design gráfico e ilustração
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((design) => (
              <Card
                key={design}
                className="group hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=250&width=400`}
                    alt={`Design ${design}`}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold mb-1">
                        Design {design}
                      </h3>
                      <p className="text-white/80 text-sm">
                        Categoria do trabalho
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Palette className="w-4 h-4 mr-2" />
              Ver Mais Designs
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Vamos Trabalhar Juntos?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Estou sempre aberto a novos projetos e oportunidades. Entre em
              contato para discutirmos como posso ajudar.
            </p>

            <div className="flex justify-center gap-6 mb-8">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>

            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              <Mail className="w-4 h-4 mr-2" />
              Entrar em Contato
            </Button>

            <Separator className="my-8 bg-gray-800" />

            <p className="text-gray-400 text-sm">
              © 2024 Seu Nome. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
