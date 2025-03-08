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
        <section id="about" className="py-12 md:py-24 lg:py-32 gradient-bg text-white rounded-3xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left md:w-2/3">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Ryuto's Portfolio
                </h1>
                <p className="max-w-[700px] text-blue-100 md:text-xl">
                現代のテクノロジーを駆使して、社会の課題の解決策を見つけ出し、<br /> 
                未来の社会への貢献を実現していくことを目指しています。
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
                description="堅牢でスケーラブルなサーバーサイドアプリケーション、 API を構築します。"
                image="/backendLang.png?height=200&width=200"
                skills={["Python", "Django", "TypeScript", "PostgreSQL"]}
              />
              <SkillCard
                title="Coming Soon.."
                description=""
                image="null"
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
                title="Internship @Public Technologies"
                description="株式会社パブリックテクノロジーズでフルスタックエンジニアとして、長期インターンシップに挑戦しています。
                使用技術としては、Next.js, React, TypeScript(tRPC), PrismaやPython(Fast API)などを使用しています。"
                image="/pubtech.jpg?height=300&width=400"
                link="https://github.com/05ryt31"
                tags={["Next.js", "React", "TypeScript", "Prisma"]}
              />
              <ProjectCard
                title="Dream Step"
                description="PR TIMES主催のハッカソンに参加。テーマは『夢』で、開発したものは、誰もが抱える漠然として夢を、生成AIと一緒に具体化して
                実現を可能にしていくWebアプリケーション『Dream Step』を開発しました。"
                image="/DayDream.png"
                link="https://github.com/05ryt31/dream_step"
                tags={["Gemini API", "React", "TypeScript", "TypeScript"]}
              />
              <ProjectCard
                title="Engineer Guild Hackathon"
                description="環境問題をテーマとして、フードロス問題の解決策となりうるアプリケーションの開発を行いました。現在も継続開発中です。"
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
                description="高校受験に合格して、第一志望だった彦根東高校に入学しました。
                彦根城の内堀と中堀に挟まれた旧彦根藩家老屋敷跡にある彦根東高校は、彦根藩藩校以来の200年以上の歴史ある学校です。高校ではバスケ部に入り、彦根東が長年掲げてきた学業とスポーツの両立”文武両道”を
                体現することに日々励んでいました。"
                image="/highschool.jpg?height=300&width=400"
              />
              <LifeEvent 
                year={2023.03}
                title="彦根東高校卒業"
                description="受験期間中は、塾に友人たちと毎日こもって、12時間を超えるほど勉強をコンスタントに行っていました。現役時代、当時第一志望だった名古屋大学の情報学部を目指して受験もしましたが、
                結果的にはあと10点足りずに不合格となってしまいました。しかし、これまでの頑張って積み重ねてきた努力は無駄にはならないという自信もあったので、
                その後の進路に向けて新たな目標を見つけ、この彦根東高校を卒業することができました。"
                image="/highschool2.jpg?height=300&width=400"
              />
              <LifeEvent 
                year={2023.08}
                title="カリフォルニア州にあるDiablo Valley Collegeに入学"
                description="受験は、前期試験のほかに私立大学や後期試験は特に受けていなかったので浪人をする考えがありましたが、
                自分が将来本当にやりたいことを真剣に考えた時に、小さい頃からスティーブ・ジョブズとAppleに憧れを抱いて、
                アメリカでエンジニアとして働きたいという夢が強かったこともあったので、日本の大学を目指す道を諦め、夢に一歩でも近づくために
                直接アメリカの大学に行ってコンピュータサイエンスを学ぼうと決意しました。そして、
                カリフォルニア州にあるDiablo Valley Collegeに入学しました。この学校は、アメリカのコミュニティカレッジの一つで、
                四年生大学への編入プログラムを提供している学校です。この学校では、コンピュータサイエンスを専攻し、Associate degreeの取得をしました。
                カレッジ時代には、学内のクラブ活動に積極的に参加していました。Japanese Associationという日本人団体のメンバーとして、新しく入ってくる新入生のサポートやイベントの運営にも
                携わっていました。中でも、当時同じ選考を学んでいた友人たちと共に、団体を紹介するWebサイトをチーム開発で作るというプロジェクトを立ち上げ、
                リーダーとしてメンバーを率いた経験は、今後のリーダーシップを発揮する上で大きな経験となりました。"
                image="/dvc.jpg?height=300&width=400"
              />
              <LifeEvent 
                year={2024.12}
                title="ダイアモンドヘッド株式会社で初インターン"
                description="会社の都合上、4週間という短期のインターンにはなってしまいましたが、初めてのインターンを経験し、バックエンドエンジニアとして、
                自社ECサイトの開発に携わりました。メンターさんが中国出身だったこともあり、普段から英語でミーティングをしたり、業務のやり取りをしていました。
                この経験を通して、普段の学校の授業では学べないような経験や知識を得られることができ、非常に貴重な経験となりました。"
                image="/intern01.png?height=300&width=400"
              />
              <LifeEvent 
                year={2025.02}
                title="株式会社Public Technologies フルスタックエンジニアとしてフルタイムインターン"
                description="初の長期インターンに挑戦することになり、今回はフロントエンド、バックエンド関係なく、様々な最新技術を使いながら自社Webアプリーケーションの開発をしています。
                インターン生ながらも、色々なミーティングに参加して自分の意見をしっかりと主張してチームの中での貢献をしていくことや、積極的に難易度の高いタスクを引き受け、自分の成長に繋げることを心がけています。"
                image="/pubtech.jpg?height=300&width=400"
              />
              <LifeEvent 
                year={2025.08}
                title="San Jose State Universityに入学予定"
                description="アメリカのシリコンバレーの中心にあるサンノゼ州立大学。この大学でBachelor degreeの取得を目指して、コンピュータサイエンス専攻として引き続き学業に専念することを予定しています。 
                クラブ活動を活発に行ったり、学外ではHackathonやTech Conferenceに参加したいと考えています。"
                image="/sanjose.jpg?height=300&width=400"
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

