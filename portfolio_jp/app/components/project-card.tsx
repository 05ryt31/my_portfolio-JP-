import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden card-hover border-blue-100 dark:border-blue-900">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-xl mb-2 text-blue-700 dark:text-blue-300">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-400/30 dark:bg-blue-900 dark:text-blue-200 dark:ring-blue-700/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <Github className="h-4 w-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}

