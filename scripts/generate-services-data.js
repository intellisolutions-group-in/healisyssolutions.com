const fs = require('fs')
const path = require('path')

const servicesMeta = [
  {
    slug: 'web-development',
    title: 'Web Development',
    category: 'Development',
    short:
      'Responsive, scalable web applications built with modern frameworks and best practices.',
    image: '/icons/mobile-app.webp',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Development',
    short:
      'Native and cross-platform mobile applications for iOS and Android devices.',
    image: '/icons/mobile-app.webp',
  },
  {
    slug: 'windows-application-development',
    title: 'Windows Application Development',
    category: 'Development',
    short:
      'Robust Windows desktop applications tailored for business and enterprise workflows.',
    image: '/icons/mobile-app.webp',
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    category: 'Development',
    short:
      'Bespoke software solutions designed around your unique business processes and goals.',
    image: '/icons/conversation.webp',
  },
  {
    slug: 'progressive-web-apps',
    title: 'Progressive Web Apps',
    category: 'Development',
    short:
      'Fast, installable web applications that deliver app-like experiences across devices.',
    image: '/icons/mobile-app.webp',
  },
  {
    slug: 'cross-platform-development',
    title: 'Cross-Platform App Development',
    category: 'Development',
    short:
      'Single codebase applications that run seamlessly on multiple platforms and devices.',
    image: '/icons/mobile-app.webp',
  },
  {
    slug: 'enterprise-applications',
    title: 'Enterprise Application Development',
    category: 'Enterprise',
    short:
      'Large-scale enterprise systems built for performance, security, and scalability.',
    image: '/icons/conversation.webp',
  },
  {
    slug: 'desktop-applications',
    title: 'Desktop Application Development',
    category: 'Development',
    short:
      'Powerful desktop software for Windows, macOS, and Linux environments.',
    image: '/icons/mobile-app.webp',
  },
  {
    slug: 'software-modernization',
    title: 'Software Modernization',
    category: 'Consulting',
    short:
      'Upgrade legacy systems with modern architectures, APIs, and cloud-ready infrastructure.',
    image: '/icons/ai.webp',
  },
  {
    slug: 'maintenance-support',
    title: 'Application Maintenance & Support',
    category: 'Support',
    short:
      'Ongoing maintenance, monitoring, and support to keep your software running smoothly.',
    image: '/icons/content-strategy.webp',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design Services',
    category: 'Design',
    short:
      'User-centred interface design that improves usability, engagement, and conversion.',
    image: '/icons/pantone.webp',
  },
  {
    slug: 'database-development',
    title: 'Database Design & Development',
    category: 'Data',
    short:
      'Efficient database architecture, optimisation, and data management solutions.',
    image: '/icons/ai.webp',
  },
  {
    slug: 'api-development',
    title: 'API Development & Integration',
    category: 'Integration',
    short:
      'Secure REST and GraphQL APIs with seamless third-party system integrations.',
    image: '/icons/conversation.webp',
  },
  {
    slug: 'software-testing',
    title: 'Software Testing & QA',
    category: 'Quality',
    short:
      'Comprehensive manual and automated testing to ensure reliable, bug-free releases.',
    image: '/icons/shield.webp',
  },
  {
    slug: 'cloud-applications',
    title: 'Cloud Application Development',
    category: 'Cloud',
    short:
      'Cloud-native applications deployed on AWS, Azure, and Google Cloud platforms.',
    image: '/icons/ai.webp',
  },
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    category: 'Commerce',
    short:
      'Feature-rich online stores with secure payments, inventory, and order management.',
    image: '/icons/shopping.webp',
  },
  {
    slug: 'cms-development',
    title: 'CMS Development',
    category: 'Content',
    short:
      'Flexible content management systems that empower your team to manage digital content.',
    image: '/icons/content-strategy.webp',
  },
  {
    slug: 'software-consulting',
    title: 'Software Consulting',
    category: 'Consulting',
    short:
      'Expert technology guidance to align your software strategy with business objectives.',
    image: '/icons/conversation.webp',
  },
]

const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  '.NET',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Kubernetes',
  'Flutter',
  'React Native',
]

function buildLongDescription(service) {
  return `${service.title} is a core offering at Healisys Solutions, designed to help businesses across India build reliable, scalable, and user-friendly software. Since our establishment in 2010, we have partnered with organisations that need practical technology solutions — not buzzwords. Our ${service.title.toLowerCase()} services focus on understanding your business context first, then designing and delivering software that fits your workflows, team, and growth plans.

Whether you are a startup launching your first product or an established enterprise modernising legacy systems, our development approach balances speed with quality. We follow agile methodologies with clear milestones, regular demos, and transparent communication so you always know where your project stands. Every engagement begins with a discovery phase where we map requirements, identify technical constraints, and propose an architecture that will serve you for years.

Our engineers bring hands-on experience across modern technology stacks. We select tools based on project needs rather than trends — prioritising maintainability, security, and performance. For Indian businesses, we also consider local compliance requirements, payment integrations, regional language support, and infrastructure choices that work well within the Indian market.

Quality is built into every stage of delivery. We write clean, documented code, conduct thorough testing, and perform security reviews before deployment. Post-launch, we offer maintenance and support options to ensure your application continues to perform as your user base grows.

From initial concept to production deployment and beyond, Healisys Solutions acts as a long-term technology partner. We believe great software is built through collaboration, clear expectations, and a commitment to solving real business problems. Contact us to discuss how our ${service.title.toLowerCase()} expertise can support your next initiative.`
}

const services = servicesMeta.map((meta, index) => ({
  id: index + 1,
  ...meta,
  description: meta.short,
  longDescription: buildLongDescription(meta),
  features: [
    'Tailored solutions aligned with your business objectives',
    'Agile development with regular progress updates',
    'Modern, maintainable codebase and documentation',
    'Responsive design for all screen sizes',
    'Security-first development practices',
    'Post-launch support and maintenance options',
  ],
  technologies: technologies.slice(0, 8),
  process: [
    'Discovery and requirements gathering',
    'Architecture and technical planning',
    'Iterative design and development',
    'Testing, QA, and performance optimisation',
    'Deployment and knowledge transfer',
    'Ongoing support and enhancements',
  ],
}))

const outDir = path.join(__dirname, '..', 'src', 'data')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(
  path.join(outDir, 'services.json'),
  JSON.stringify(services, null, 2)
)
console.log(`Generated ${services.length} services`)
