import EducationImage from '../assets/education.jpg'
import AgricultureImage from '../assets/agriculture.jpg'
import WomenImage from '../assets/womenempowerment.jpg'
import HealthCare from '../assets/healthcare.jpg'


import { StaticImageData } from 'next/image';

export interface Program {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string | StaticImageData;
  category: string;
  impact: string;
  beneficiaries: number;
}

export const programs: Program[] = [
  {
    id: 1,
    title: "Educational Empowerment",
    description: "Providing quality education and learning resources to underprivileged children.",
    icon: "📚",
    image: EducationImage,
    category: "Education",
    impact: "Improved literacy rates by 45% in target communities",
    beneficiaries: 1000,
  },
  {
    id: 2,
    title: "Sustainable Agriculture",
    description: "Promoting sustainable farming practices and food security.",
    icon: "🌱",
    image: AgricultureImage,
    category: "Sustainability",
    impact: "Established 25 community gardens",
    beneficiaries: 500,
  },
  {
    id: 3,
    title: "Women Empowerment",
    description: "Supporting women through skill development and entrepreneurship.",
    icon: "💪",
    image: WomenImage,
    category: "Social Development",
    impact: "Launched 50 women-led businesses",
    beneficiaries: 750,
  },
  {
    id: 4,
    title: "Healthcare Access",
    description: "Improving access to quality healthcare services.",
    icon: "🏥",
    image: HealthCare,
    category: "Healthcare",
    impact: "Provided medical care to remote communities",
    beneficiaries: 2000,
  },
];