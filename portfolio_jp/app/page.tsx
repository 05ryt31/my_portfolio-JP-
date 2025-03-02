import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Image from "next/image"
import SkillCard from "./components/skill-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold text-blue-600 sm:inline-block">John.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-blue-600">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-blue-600">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-blue-600">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto border-blue-500 text-blue-600 hover:bg-blue-50">
            Resume
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32 gradient-bg text-white rounded-b-3xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:w-2/3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Full Stack Developer
                </h1>
                <p className="max-w-[700px] text-blue-100 md:text-xl">
                  Building digital experiences with modern technologies. Focused on creating elegant solutions to
                  complex problems.
                </p>
                <div className="flex space-x-4">
                  <Link href="https://github.com" target="_blank">
                    <Button variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 border-white/50">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank">
                    <Button variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 border-white/50">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://twitter.com" target="_blank">
                    <Button variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 border-white/50">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="mailto:hello@example.com">
                    <Button variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 border-white/50">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="John Doe"
                  width={400}
                  height={400}
                  className="rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Skill Highlights
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard
                title="Frontend Development"
                description="Crafting responsive and intuitive user interfaces using modern web technologies."
                image="/placeholder.svg?height=200&width=200"
                skills={["React", "Next.js", "TailwindCSS"]}
              />
              <SkillCard
                title="Backend Development"
                description="Building robust and scalable server-side applications and APIs."
                image="/placeholder.svg?height=200&width=200"
                skills={["Node.js", "Express", "PostgreSQL"]}
              />
              <SkillCard
                title="DevOps & Cloud"
                description="Implementing CI/CD pipelines and managing cloud infrastructure."
                image="/placeholder.svg?height=200&width=200"
                skills={["Docker", "AWS", "GitHub Actions"]}
              />
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                image="/placeholder.svg?height=300&width=400"
                link="https://github.com"
                tags={["Next.js", "Prisma", "Stripe"]}
              />
              <ProjectCard
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/placeholder.svg?height=300&width=400"
                link="https://github.com"
                tags={["React", "Node.js", "Socket.io"]}
              />
              <ProjectCard
                title="AI Chat Interface"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/placeholder.svg?height=300&width=400"
                link="https://github.com"
                tags={["OpenAI", "Next.js", "TailwindCSS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-blue-50 dark:bg-blue-950">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-blue-700 dark:text-blue-300">© 2024 John.dev. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-blue-700 dark:text-blue-300 hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-blue-700 dark:text-blue-300 hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

