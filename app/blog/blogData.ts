// app/blog/blogData.ts

export const blogData = [
  {
    id: '1',
    title: 'Building Scalable Web Applications with Next.js 14',
    excerpt: 'Learn how to leverage the latest features in Next.js 14 to build performant and scalable web applications that your users will love.',
    content: `
      <h2>Introduction</h2>
      <p>Next.js 14 brings groundbreaking features that revolutionize how we build modern web applications. In this comprehensive guide, we'll explore the latest capabilities and best practices for building scalable, performant applications.</p>

      <h2>Server Components</h2>
      <p>Server Components are one of the most exciting features in Next.js 14. They allow you to render components on the server, reducing the JavaScript bundle size sent to the client and improving performance.</p>

      <h2>Performance Optimization</h2>
      <p>Next.js 14 introduces several performance enhancements that make your applications blazingly fast. From improved caching strategies to better code splitting, these features ensure your users get the best experience possible.</p>

      <h2>Conclusion</h2>
      <p>Next.js 14 provides developers with powerful tools to build modern, performant web applications. By leveraging Server Components, optimizing performance, and following best practices, you can create exceptional user experiences.</p>
    `,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=80',
    category: 'Development',
    tags: ['Next.js', 'React', 'Web Development', 'Performance'],
    date: '2025-01-15',
    readTime: '8 min read',
    author: {
      name: 'Brijesh Gupta',
      role: 'Lead Developer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop&q=80',
      bio: 'Full-stack developer with 10+ years of experience building scalable web applications.'
    },
    featured: true
  },
  {
    id: '2',
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how artificial intelligence is transforming the way we write code, test applications, and deliver software products.',
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence is reshaping the landscape of software development. From intelligent code completion to automated testing, AI is becoming an indispensable tool for modern developers.</p>

      <h2>AI-Powered Code Completion</h2>
      <p>Modern IDEs now feature intelligent code suggestions powered by machine learning models trained on millions of lines of code. These tools can predict your next line of code with remarkable accuracy.</p>

      <h2>Automated Testing</h2>
      <p>AI can generate comprehensive test suites automatically, identifying edge cases that human developers might miss. This leads to more robust applications with fewer bugs.</p>

      <h2>The Road Ahead</h2>
      <p>As AI continues to evolve, we can expect even more revolutionary changes in how we approach software development. The future is exciting!</p>
    `,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80',
    category: 'AI & ML',
    tags: ['AI', 'Machine Learning', 'Automation', 'Future Tech'],
    date: '2025-01-12',
    readTime: '6 min read',
    author: {
      name: 'Sarah Chen',
      role: 'AI Researcher',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80',
      bio: 'AI researcher passionate about the intersection of machine learning and software engineering.'
    },
    featured: false
  },
  {
    id: '3',
    title: 'Best Practices for API Design in 2025',
    excerpt: 'A comprehensive guide to designing RESTful and GraphQL APIs that are intuitive, scalable, and developer-friendly.',
    content: `
      <h2>Introduction</h2>
      <p>API design is crucial for modern applications. A well-designed API can make or break the developer experience and the success of your product.</p>

      <h2>RESTful Principles</h2>
      <p>Following REST principles ensures consistency and predictability in your API. Use proper HTTP methods, status codes, and resource naming conventions.</p>

      <h2>GraphQL Advantages</h2>
      <p>GraphQL offers flexible data querying, allowing clients to request exactly the data they need. This reduces over-fetching and improves performance.</p>

      <h2>Best Practices</h2>
      <p>Always version your API, provide comprehensive documentation, implement proper error handling, and ensure robust security measures are in place.</p>
    `,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80',
    category: 'Backend',
    tags: ['API', 'REST', 'GraphQL', 'Backend Development'],
    date: '2025-01-10',
    readTime: '10 min read',
    author: {
      name: 'Michael Roberts',
      role: 'Backend Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
      bio: 'Backend architect specializing in scalable API design and microservices architecture.'
    },
    featured: false
  },
  {
    id: '4',
    title: 'Mobile App Development Trends to Watch',
    excerpt: 'Stay ahead of the curve with these emerging trends in mobile app development, from cross-platform frameworks to progressive web apps.',
    content: `
      <h2>Introduction</h2>
      <p>The mobile app development landscape is constantly evolving. Stay ahead with these key trends shaping the industry in 2025.</p>

      <h2>Cross-Platform Frameworks</h2>
      <p>React Native and Flutter continue to dominate, allowing developers to build for both iOS and Android with a single codebase.</p>

      <h2>Progressive Web Apps</h2>
      <p>PWAs bridge the gap between web and native apps, offering app-like experiences without the need for app store distribution.</p>

      <h2>5G and Beyond</h2>
      <p>With 5G becoming mainstream, mobile apps can leverage faster speeds for richer, more interactive experiences.</p>
    `,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80',
    category: 'Mobile',
    tags: ['Mobile', 'React Native', 'Flutter', 'PWA'],
    date: '2025-01-08',
    readTime: '7 min read',
    author: {
      name: 'Emily Rodriguez',
      role: 'Mobile Developer',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80',
      bio: 'Mobile development expert with experience in native and cross-platform solutions.'
    },
    featured: false
  },
  {
    id: '5',
    title: 'Optimizing Database Performance at Scale',
    excerpt: 'Learn proven strategies for optimizing database queries, indexing, and architecture to handle millions of users.',
    content: `
      <h2>Introduction</h2>
      <p>Database performance is critical for application success. Learn how to optimize your database to handle massive scale efficiently.</p>

      <h2>Query Optimization</h2>
      <p>Analyze and optimize slow queries using EXPLAIN plans. Avoid N+1 queries and use proper JOINs to reduce database round trips.</p>

      <h2>Indexing Strategies</h2>
      <p>Proper indexing can dramatically improve query performance. But be careful - too many indexes can slow down write operations.</p>

      <h2>Scaling Approaches</h2>
      <p>Understand when to use vertical vs horizontal scaling, implement read replicas, and consider sharding for extreme scale.</p>
    `,
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1200&auto=format&fit=crop&q=80',
    category: 'Database',
    tags: ['Database', 'Performance', 'PostgreSQL', 'Optimization'],
    date: '2025-01-05',
    readTime: '12 min read',
    author: {
      name: 'David Kumar',
      role: 'Database Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      bio: 'Database engineer specializing in high-performance systems and large-scale data architecture.'
    },
    featured: false
  },
  {
    id: '6',
    title: 'UI/UX Design Principles for SaaS Products',
    excerpt: 'Master the essential design principles that make SaaS products intuitive, engaging, and conversion-focused.',
    content: `
      <h2>Introduction</h2>
      <p>Great UI/UX design is what separates successful SaaS products from the rest. Learn the principles that drive user engagement and conversions.</p>

      <h2>User-Centered Design</h2>
      <p>Always start with understanding your users. Conduct user research, create personas, and design with empathy for their needs and pain points.</p>

      <h2>Consistency is Key</h2>
      <p>Maintain consistent design patterns, terminology, and interactions throughout your product. This reduces cognitive load and improves usability.</p>

      <h2>Conversion Optimization</h2>
      <p>Use clear CTAs, reduce friction in user flows, and employ persuasive design techniques to guide users toward desired actions.</p>
    `,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80',
    category: 'Design',
    tags: ['UI/UX', 'Design', 'SaaS', 'User Experience'],
    date: '2025-01-03',
    readTime: '9 min read',
    author: {
      name: 'Lisa Park',
      role: 'UX Designer',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&auto=format&fit=crop&q=80',
      bio: 'UX designer focused on creating delightful experiences for SaaS products.'
    },
    featured: false
  }
];

export const categories = ['All', 'Development', 'AI & ML', 'Backend', 'Mobile', 'Database', 'Design'];