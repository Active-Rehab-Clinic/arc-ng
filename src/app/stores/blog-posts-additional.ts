// Additional blog posts to be added to blog.store.ts

export const additionalBlogPosts = [
  {
    id: '3',
    title:
      'Benefits of Home Visit Physiotherapy for Elderly Patients in Delhi NCR',
    slug: 'home-visit-physiotherapy-benefits-elderly',
    excerpt:
      'Discover why home visit physiotherapy is ideal for elderly patients. Learn about the benefits, what to expect, and how it improves recovery outcomes for seniors in Delhi NCR.',
    content: `Complete article content here...`,
    author: 'Dr. Raju Pal',
    authorRole: 'Lead Physiotherapist, BPT, MPT',
    publishDate: new Date('2025-12-03'),
    lastUpdated: new Date('2025-12-07'),
    readTime: 12,
    category: 'home-care' as const,
    tags: [
      'home visit',
      'elderly care',
      'geriatric physiotherapy',
      'Delhi NCR',
      'senior care',
    ],
    metaTitle:
      'Home Visit Physiotherapy for Elderly in Delhi NCR | Benefits & Guide',
    metaDescription:
      'Complete guide to home visit physiotherapy for elderly patients in Delhi NCR. Learn benefits, what to expect, and how it improves recovery for seniors at home.',
    keywords:
      'home visit physiotherapy Delhi NCR, elderly physiotherapy at home, geriatric physiotherapy, senior care at home, mobile physiotherapy Delhi, home rehabilitation elderly',
    relatedServices: ['home-visit', 'neurological-therapy', 'pain-management'],
    relatedPosts: ['2', '4', '5'],
  },
  {
    id: '4',
    title: 'Sports Injury Recovery: Complete Guide for Athletes in Delhi',
    slug: 'sports-injury-recovery-guide-athletes',
    excerpt:
      'Comprehensive guide to sports injury recovery for cricket, football, and gym athletes. Learn about treatment, recovery timeline, and how to return to sports safely.',
    content: `Sports injury recovery guide content...`,
    author: 'Dr. Raju Pal',
    authorRole: 'Lead Physiotherapist, BPT, MPT',
    publishDate: new Date('2025-12-04'),
    lastUpdated: new Date('2025-12-07'),
    readTime: 15,
    category: 'sports-injury' as const,
    tags: [
      'sports injury',
      'cricket injury',
      'football injury',
      'ACL tear',
      'athlete recovery',
    ],
    metaTitle:
      'Sports Injury Recovery Guide for Athletes | Cricket, Football & Gym',
    metaDescription:
      'Expert guide to sports injury recovery for athletes in Delhi. Learn about treatment, recovery timeline, and safe return to cricket, football, and gym activities.',
    keywords:
      'sports injury recovery, cricket injury treatment Delhi, football injury physiotherapy, ACL tear recovery, sports medicine Delhi, athlete rehabilitation',
    relatedServices: [
      'sports-medicine',
      'musculoskeletal-therapy',
      'pain-management',
    ],
    relatedPosts: ['1', '2', '5'],
  },
  {
    id: '5',
    title:
      'Stroke Recovery at Home: Essential Physiotherapy Guide for Families',
    slug: 'stroke-recovery-physiotherapy-guide',
    excerpt:
      'Essential guide for families supporting stroke recovery at home. Learn physiotherapy techniques, exercises, and how to help your loved one regain independence.',
    content: `Stroke recovery guide content...`,
    author: 'Dr. Raju Pal',
    authorRole: 'Lead Physiotherapist, BPT, MPT',
    publishDate: new Date('2025-12-05'),
    lastUpdated: new Date('2025-12-07'),
    readTime: 14,
    category: 'recovery-tips' as const,
    tags: [
      'stroke recovery',
      'neurological rehabilitation',
      'home care',
      'family support',
      'brain injury',
    ],
    metaTitle:
      'Stroke Recovery at Home: Physiotherapy Guide for Families | Delhi',
    metaDescription:
      "Complete stroke recovery guide for families. Learn physiotherapy techniques, exercises, and how to support your loved one's recovery at home in Delhi NCR.",
    keywords:
      'stroke recovery at home, stroke physiotherapy Delhi, neurological rehabilitation, post-stroke care, brain injury recovery, stroke exercises at home',
    relatedServices: ['neurological-therapy', 'home-visit', 'pain-management'],
    relatedPosts: ['1', '2', '3'],
  },
];
