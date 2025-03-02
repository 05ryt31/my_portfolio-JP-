import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, X } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import Image from "next/image"
import SkillCard from "./components/skill-card"
import LifeEvent from "./components/life-event"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold text-blue-600 sm:inline-block">Portfolio</span>
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
                Ryuto's Portfolio
                </h1>
                <p className="max-w-[700px] text-blue-100 md:text-xl">
                現代のテクノロジーを駆使して、社会の課題の解決策を見つけ出し、<br /> 
                世の中に貢献していくことに重きを置いています。
                </p>
                <div className="flex space-x-4">
                  <Link href="https://github.com/05ryt31" target="_blank">
                    <Button variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 border-white/50">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/ryuto-kawabata-470997291/" target="_blank">
                    <Button variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 border-white/50">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="https://x.com/Ryut5331" target="_blank">
                    <Button variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 border-white/50">
                      <X className="h-4 w-4" />
                      <span className="sr-only">X</span>
                    </Button>
                  </Link>
                  <Link href="kawabataryuto@gmail.com">
                    <Button variant="outline" size="icon" className="bg-white/20 hover:bg-white/30 border-white/50">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <Image
                  src="/me.jpg?height=400&width=400"
                  alt="Ryuto"
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
                description="最新の Web テクノロジーを使用して、応答性が高く直感的なUIを作成します。"
                image="/frontendLang.png?height=200&width=200"
                skills={["React", "Next.js", "TypeScript", "TailwindCSS"]}
              />
              <SkillCard
                title="Backend Development"
                description="堅牢でスケーラブルなサーバーサイドアプリケーションと API を構築します。"
                image="/backendLang.png?height=200&width=200"
                skills={["Python", "Django", "TypeScript", "PostgreSQL"]}
              />
              <SkillCard
                title="Coming Soon.."
                description=""
                image=""
                skills={[]}
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
                title="Dream Step"
                description="PR TIMES主催のハッカソンに参加。テーマは『夢』で、開発したものは、誰もが抱える漠然として夢を、生成AIと一緒に具体化して
                実現を可能にしていくWebアプリケーション『Dream Step』を開発した"
                image="/DayDream.png"
                link="https://github.com/05ryt31/dream_step"
                tags={["Gemini API", "React", "TypeScript", "TypeScript"]}
              />
              <ProjectCard
                title="Engineer Guild Hackathon"
                description="環境問題をテーマとして、フードロス問題の解決策となりうるアプリケーションの開発を行なった。"
                image="/hackathon.png?height=300&width=400"
                link="https://github.com/05ryt31/Hackathon-team47"
                tags={["Azure OpenAI", "Google Map API", "Next.js", "TypeScript", "TailwindCSS", "Postgres", "Prisma"]}
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

        <section className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Life Journey
            </h2>
            <div className="grid gap-8">
              <LifeEvent 
                year={2020.04}
                title="滋賀県立彦根東高校に入学"
                description="Led a team of developers working on cutting-edge web applications and mentored junior developers."
                image="/highschool.jpg?height=300&width=400"
              />
              <LifeEvent 
                year={2023.03}
                title="彦根東高校卒業"
                description="Specialized in creating responsive, accessible user interfaces with modern JavaScript frameworks."
                image="/highschool2.jpg?height=300&width=400"
              />
              <LifeEvent 
                year={2023.08}
                title="カリフォルニア州にあるDiablo Valley Collegeに入学"
                description="Earned Bachelor's degree with honors, focusing on web technologies and software engineering."
                image="/dvc.jpg?height=300&width=400"
              />
              <LifeEvent 
                year={2024.12}
                title="ダイアモンドヘッド株式会社で初インターン"
                description="Earned Bachelor's degree with honors, focusing on web technologies and software engineering."
                image="/intern01.png?height=300&width=400"
              />
              <LifeEvent 
                year={2025.02}
                title="株式会社Public Technologies フルスタックエンジニアとしてフルタイムのインターン"
                description="Earned Bachelor's degree with honors, focusing on web technologies and software engineering."
                image="/placeholder.svg?height=300&width=400"
              />
              <LifeEvent 
                year={2025.08}
                title="San Jose State Universityに入学予定"
                description="Earned Bachelor's degree with honors, focusing on web technologies and software engineering."
                image="/placeholder.svg?height=300&width=400"
              />
            </div>
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
          <p className="text-xs text-blue-700 dark:text-blue-300">© 2025 All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

