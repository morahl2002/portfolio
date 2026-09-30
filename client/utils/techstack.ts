export interface TechBadge {
  name: string
  src: string
}

const base = 'https://img.shields.io/badge/'

const badge = (name: string, path: string): TechBadge => ({
  name,
  src: `${base}${path}`,
})

export const techStack: TechBadge[] = [
  badge('CSS3', 'css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white'),
  badge('HTML5', 'html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white'),
  badge('JavaScript', 'javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E'),
  badge('Markdown', 'markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white'),
  badge('TypeScript', 'typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'),
  badge('Render', 'Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white'),
  badge('Vercel', 'vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white'),
  badge('DaisyUI', 'daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white'),
  badge('Esbuild', 'esbuild-%23FFCF00.svg?style=for-the-badge&logo=esbuild&logoColor=black'),
  badge('Express.js', 'express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'),
  badge('JWT', 'JWT-black?style=for-the-badge&logo=JSON%20web%20tokens'),
  badge('NPM', 'NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white'),
  badge('Next.js', 'Next-black?style=for-the-badge&logo=next.js&logoColor=white'),
  badge('Node.js', 'node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white'),
  badge('Radix UI', 'radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white'),
  badge('React', 'react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'),
  badge('React Query', '-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white'),
  badge('React Router', 'React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white'),
  badge('React Hook Form', 'React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white'),
  badge('Sass', 'SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white'),
  badge('Tailwind CSS', 'tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white'),
  badge('Vite', 'vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white'),
  badge('MySQL', 'mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white'),
  badge('SQLite', 'sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white'),
  badge('Supabase', 'Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white'),
  badge('Adobe', 'adobe-%23FF0000.svg?style=for-the-badge&logo=adobe&logoColor=white'),
  badge('Adobe Illustrator', 'adobe%20illustrator-%23FF9A00.svg?style=for-the-badge&logo=adobe%20illustrator&logoColor=white'),
  badge('Adobe Lightroom', 'Adobe%20Lightroom-31A8FF.svg?style=for-the-badge&logo=Adobe%20Lightroom&logoColor=white'),
  badge('Adobe Photoshop', 'adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white'),
  badge('Adobe Premiere Pro', 'Adobe%20Premiere%20Pro-9999FF.svg?style=for-the-badge&logo=Adobe%20Premiere%20Pro&logoColor=white'),
  badge('Canva', 'Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white'),
  badge('Figma', 'figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white'),
  badge('Framer', 'Framer-black?style=for-the-badge&logo=framer&logoColor=blue'),
  badge('Git', 'git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white'),
  badge('GitHub', 'github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white'),
  badge('Vitest', '-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B'),
  badge('ESLint', 'ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white'),
  badge('Notion', 'Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white'),
  badge('Jira', 'jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white'),
  badge('Prettier', 'prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black'),
  badge('Trello', 'Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white'),
]