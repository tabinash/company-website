export const posts = [
  {
    slug: 'designing-for-growth',
    title: 'Designing for Growth: UI Patterns That Convert',
    date: 'Oct 1, 2025',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1587613865760-4b8b0b92c1de?auto=format&fit=crop&w=1200&q=80',
    content: `
## Practical UI Patterns for Growth

In modern web products, **design is not decoration — it’s a conversion strategy**. A strong UI balances aesthetics and usability to guide users naturally toward desired actions.

### Key Techniques
- Use **clear primary CTAs** with adequate contrast.  
- Apply **progressive disclosure** to reduce visual clutter.  
- Ensure **visual hierarchy** through type scale, spacing, and color contrast.  
- Keep navigation consistent and intuitive.

### Why It Matters
Good design boosts both trust and engagement. Every color, motion, and layout choice should reinforce clarity — helping users achieve their goals effortlessly.
`,
  },
  {
    slug: 'scaling-react-apps',
    title: 'Scaling React Apps: Architecture Decisions That Matter',
    date: 'Sep 12, 2025',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80',
    content: `
## Building for Scale

As React apps grow, complexity can quickly snowball. Making the right **architectural decisions early** keeps your project fast, modular, and developer-friendly.

### Core Principles
- Organize files by **feature domains**, not types.  
- Use **lazy loading** and **code splitting** to reduce bundle size.  
- Prefer **custom hooks** for logic reuse instead of bloated utilities.  
- Enforce strong typing with **TypeScript**.  

### Long-Term Impact
Architecture is about **team velocity** as much as code quality. Clear boundaries, component isolation, and performance monitoring allow your app to scale without friction.
`,
  },
  {
    slug: 'idea-to-appstore',
    title: 'From Idea to App Store: The Modern Launch Checklist',
    date: 'Aug 18, 2025',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    content: `
## App Launch Blueprint

Transforming an idea into a successful app requires structure and focus. This **launch checklist** helps teams avoid last-minute chaos and ensure a smooth rollout.

### Checklist
1. **Validate your concept** — identify user pain points and market demand.  
2. **Prototype & test** — gather quick feedback using tools like Figma or ProtoPie.  
3. **Build smart** — prioritize MVP features and ship early.  
4. **Optimize store presence** — write compelling app descriptions and screenshots.  
5. **Analyze performance** — track engagement and retention from day one.

### Final Tip
An app’s first impression in the store is everything — treat the listing page as your landing page.
`,
  },
  {
    slug: 'performance-budgets',
    title: 'Performance Budgets: Keep Your Site Lightning Fast',
    date: 'Jul 5, 2025',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=1200&q=80',
    content: `
## Why Performance Budgets Work

Every extra kilobyte slows your users down. A **performance budget** keeps your website lean and efficient by setting measurable speed targets.

### Common Metrics
- Limit total page weight to **<1MB**.  
- Ensure **Time to Interactive < 3s** on mobile.  
- Keep **JavaScript bundle < 200KB gzipped**.  
- Use next-gen image formats (WebP, AVIF).  

### Continuous Monitoring
Integrate Lighthouse and WebPageTest into your CI/CD pipeline. Review performance as a team metric, not a developer afterthought.
`,
  },
];

export function findPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
