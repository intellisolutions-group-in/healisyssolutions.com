import servicesData from '@/data/services.json'

export const services: IService[] = servicesData.map((s) => ({
  id: s.id,
  title: s.title,
  slug: s.slug,
  description: s.description,
  image: s.image,
}))

export const servicesFull = servicesData
