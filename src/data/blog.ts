import { StaticImageData } from "next/image";
import HealthImage from "../assets/healthcare.jpg";

export interface Blog {
  category: string;
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string | StaticImageData;
  author: string;
}

export const blogsContent: Blog[] = [
  {
    id: 1,
    title: "Breaking Barriers: Stories of Women Leaders",
    slug: "breaking-barriers-women-leaders",
    excerpt: "Inspiring journeys of women who shattered glass ceilings, driving change and innovation.",
    content: "In this post, discover the remarkable stories of women who have defied expectations and led transformative efforts across industries. From corporate boardrooms to grassroots initiatives, learn how determination, innovation, and unyielding spirit have fueled their success. Keywords: women leaders, empowerment, breaking barriers.",
    date: "2025-06-20",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
  {
    id: 2,
    title: "Empowering Girls Through Education",
    slug: "empowering-girls-education",
    excerpt: "Explore how quality education transforms lives and empowers young girls globally.",
    content: "This article discusses the transformative power of education for young girls. It highlights successful programs, actionable strategies, and real-life stories that show how education builds self-confidence and opportunity. Keywords: education, empowerment, girls education, future leaders.",
    date: "2025-06-18",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
  {
    id: 3,
    title: "Innovative Women in Tech: Pioneering the Digital Future",
    slug: "innovative-women-in-tech",
    excerpt: "Discover how trailblazing women are reshaping the tech landscape with groundbreaking ideas.",
    content: "The digital era is evolving thanks to innovative women in tech. This post features interviews and success stories that illustrate how female pioneers use creativity and technical expertise to lead digital innovation and disrupt the status quo. Keywords: technology, innovation, women in tech, digital transformation.",
    date: "2025-06-17",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
  {
    id: 4,
    title: "Entrepreneurial Spirit: Launching Women-Led Startups",
    slug: "women-entrepreneurship",
    excerpt: "Learn practical strategies and inspiring stories of women who built thriving startups.",
    content: "This blog post delves into the world of women entrepreneurs who are setting new standards in business leadership. Covering funding advice, market insights, and personal journeys, it provides an actionable roadmap for launching and growing a successful enterprise. Keywords: entrepreneurship, startups, women entrepreneurs, business growth.",
    date: "2025-06-15",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
  {
    id: 5,
    title: "Mental Health and Well-being for Women",
    slug: "mental-health-women",
    excerpt: "A comprehensive guide to managing mental health and achieving holistic well-being.",
    content: "This content focuses on mental health and wellness strategies tailored for women. Explore practical advice on stress management, mindfulness practices, and self-care routines, while understanding common challenges and effective solutions. Keywords: mental health, well-being, self-care, women wellness.",
    date: "2025-06-10",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
  {
    id: 6,
    title: "Balancing Career and Family: A Modern Woman’s Guide",
    slug: "career-family-balance",
    excerpt: "Expert strategies to harmonize professional ambitions with family life.",
    content: "This post offers actionable advice for managing a successful career while nurturing a fulfilling family life. Discover time management techniques, prioritization tips, and resources designed to help modern women excel both at work and at home. Keywords: career, work-life balance, family, women empowerment.",
    date: "2025-06-08",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
  {
    id: 7,
    title: "Women Empowering Women: Building Strong Networks",
    slug: "women-empowering-women",
    excerpt: "Explore the impactful role of mentorship and networks in advancing women’s careers.",
    content: "Focusing on the power of community, this post highlights inspiring stories of mentorship and peer support among women. It discusses how building robust networks can propel professional growth and create lasting personal connections. Keywords: mentorship, networking, empowerment, community support.",
    date: "2025-06-05",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
  {
    id: 8,
    title: "Breaking Stereotypes: Redefining Beauty and Strength",
    slug: "breaking-stereotypes",
    excerpt: "A deep dive into how women are challenging norms and celebrating diverse strength.",
    content: "This article examines evolving perceptions of beauty and strength, showcasing how women are redefining societal norms. Discover inspiring insights and cultural shifts that celebrate diversity, resilience, and inner power. Keywords: stereotypes, inner strength, beauty, diversity.",
    date: "2025-06-03",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
  {
    id: 9,
    title: "Leadership Lessons: Strategies for Women in Management",
    slug: "women-leadership-lessons",
    excerpt: "Unlock key strategies that empower women to excel in leadership and management roles.",
    content: "This comprehensive guide offers leadership strategies specifically designed for women in management. Through expert analysis and practical case studies, it provides tips for enhancing decision-making, inspiring teams, and driving organizational success. Keywords: leadership, management, strategies, women in business.",
    date: "2025-06-01",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
  {
    id: 10,
    title: "Work-Life Balance: Strategies for Sustainable Success",
    slug: "work-life-balance-women",
    excerpt: "Discover practical tips for achieving lasting work-life balance and self-care.",
    content: "In this post, we explore actionable strategies for maintaining a healthy equilibrium between professional commitments and personal well-being. Learn time management techniques, stress reduction practices, and lifestyle adjustments that support both career and family life. Keywords: work-life balance, self-care, career success, time management.",
    date: "2025-05-29",
    image: HealthImage,
    author: "Anuradha Kumari",
    category: ""
  },
];
