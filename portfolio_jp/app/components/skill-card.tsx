import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface SkillCardProps {
  title: string
  description: string
  image: string
  skills: string[]
}

export default function SkillCard({ title, description, image, skills }: SkillCardProps) {
  return (
    <Card className="overflow-hidden card-hover border-blue-100 dark:border-blue-900">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Image src={image || "/placeholder.svg"} alt={title} width={200} height={200} className="rounded-full mb-4" />
          <h3 className="font-semibold text-xl mb-2 text-blue-700 dark:text-blue-300">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md tech-badge px-2 py-1 text-xs font-medium ring-1 ring-inset"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

