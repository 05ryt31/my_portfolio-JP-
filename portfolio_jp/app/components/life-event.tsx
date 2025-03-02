import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface LifeEventProps {
  year: number
  title: string
  description: string
  image: string
}

export default function LifeEvent({ year, title, description, image }: LifeEventProps) {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden card-hover border-blue-100 dark:border-blue-900">
      <div className="md:w-1/3 relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-6 md:w-2/3">
        <div className="text-2xl font-bold text-blue-600 mb-2">{year}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

