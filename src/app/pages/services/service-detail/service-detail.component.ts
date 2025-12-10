import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MetaService } from '../../../services/meta.service';
import { AnalyticsService } from '../../../services/analytics.service';

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  iconColor: string;
  heroImage?: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string;

  // Content sections
  overview: string;
  benefits: string[];
  conditions: string[];
  treatments: string[];
  whyChooseUs: string[];

  // FAQ
  faqs: { question: string; answer: string }[];

  // Related services
  relatedServices: string[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent implements OnInit {
  service: ServiceDetail | null = null;
  relatedServices: ServiceDetail[] = [];

  private services: ServiceDetail[] = [
    {
      id: 'musculoskeletal-therapy',
      title: 'Musculoskeletal Physiotherapy',
      subtitle: 'Expert Treatment for Bone, Joint & Muscle Problems in Dwarka',
      description:
        'Specialized musculoskeletal physiotherapy for back pain, knee pain, shoulder pain, and sports injuries. Evidence-based treatment by certified physiotherapists in Dwarka, Delhi.',
      icon: '🦴',
      iconColor: 'blue',
      metaTitle:
        'Musculoskeletal Physiotherapy in Dwarka | Back Pain, Knee Pain Treatment',
      metaDescription:
        'Expert musculoskeletal physiotherapy in Dwarka for back pain, knee pain, shoulder pain, arthritis, and sports injuries. Manual therapy, exercise programs, and pain relief. Book appointment today!',
      keywords:
        'musculoskeletal physiotherapy Dwarka, back pain treatment Delhi, knee pain physiotherapy, shoulder pain treatment, arthritis physiotherapy, joint pain relief, muscle injury treatment, fracture rehabilitation, manual therapy Dwarka, orthopedic physiotherapy Delhi',
      overview:
        'Musculoskeletal physiotherapy focuses on treating conditions affecting your bones, joints, muscles, ligaments, and tendons. Our experienced physiotherapists use evidence-based techniques including manual therapy, therapeutic exercises, and modern equipment to help you recover from injuries, manage chronic pain, and improve mobility.',
      benefits: [
        'Reduce pain without heavy medication',
        'Improve joint mobility and flexibility',
        'Strengthen muscles and prevent future injuries',
        'Faster recovery from surgeries and fractures',
        'Better posture and body mechanics',
        'Return to daily activities and sports safely',
      ],
      conditions: [
        'Back Pain & Sciatica',
        'Neck Pain & Cervical Spondylosis',
        'Knee Pain & Osteoarthritis',
        'Shoulder Pain & Frozen Shoulder',
        "Tennis Elbow & Golfer's Elbow",
        'Plantar Fasciitis & Heel Pain',
        'Hip Pain & Bursitis',
        'Ankle Sprains & Ligament Injuries',
        'Post-Fracture Rehabilitation',
        'Post-Surgery Recovery (ACL, Meniscus, Rotator Cuff)',
      ],
      treatments: [
        'Manual Therapy & Joint Mobilization',
        'Therapeutic Exercise Programs',
        'Dry Needling & Trigger Point Release',
        'Ultrasound & Electrotherapy',
        'Kinesiology Taping',
        'Postural Correction & Ergonomic Advice',
        'Core Strengthening Programs',
        'Sports-Specific Rehabilitation',
      ],
      whyChooseUs: [
        'Certified & experienced physiotherapists',
        'Evidence-based treatment protocols',
        'Modern equipment & techniques',
        'Personalized treatment plans',
        'Home visit services available in Delhi NCR',
        'Flexible appointment scheduling',
      ],
      faqs: [
        {
          question: 'How many sessions will I need?',
          answer:
            'Treatment duration varies based on your condition. Acute injuries may need 4-6 sessions, while chronic conditions might require 8-12 sessions. We assess your progress regularly and adjust the plan accordingly.',
        },
        {
          question: 'Is physiotherapy painful?',
          answer:
            'Physiotherapy should not be painful. You may experience mild discomfort during certain exercises or manual therapy, but we always work within your comfort level. Pain relief is our primary goal.',
        },
        {
          question: "Do I need a doctor's referral?",
          answer:
            'No referral is needed. You can book directly with us. However, if you have recent imaging (X-rays, MRI), please bring them to your first session.',
        },
        {
          question: 'Can I continue my regular activities during treatment?',
          answer:
            "We encourage staying active within your limits. We'll guide you on which activities to modify or avoid during recovery and gradually help you return to full activity.",
        },
      ],
      relatedServices: ['sports-medicine', 'pain-management', 'home-visit'],
    },
    {
      id: 'neurological-therapy',
      title: 'Neurological Physiotherapy',
      subtitle: "Specialized Care for Stroke, Parkinson's & Nerve Conditions",
      description:
        "Expert neurological physiotherapy for stroke recovery, Parkinson's disease, multiple sclerosis, and nerve injuries. Restore movement, balance, and independence with specialized neuro rehab in Delhi.",
      icon: '🧠',
      iconColor: 'green',
      metaTitle:
        "Neurological Physiotherapy in Delhi | Stroke Recovery, Parkinson's Treatment",
      metaDescription:
        "Specialized neurological physiotherapy in Delhi for stroke recovery, Parkinson's disease, MS, and nerve injuries. Expert neuro rehab to restore movement, balance, and independence. Home visits available.",
      keywords:
        "neurological physiotherapy Delhi, stroke rehabilitation, Parkinson's disease treatment, neuro physiotherapy Dwarka, brain injury rehabilitation, multiple sclerosis therapy, balance training, gait training, nerve injury treatment, post-stroke recovery Delhi",
      overview:
        "Neurological physiotherapy specializes in treating conditions affecting the brain, spinal cord, and nervous system. Our neuro-trained physiotherapists help patients recover movement, improve balance, and regain independence after stroke, brain injury, or with progressive neurological conditions like Parkinson's disease.",
      benefits: [
        'Improve movement and coordination',
        'Restore balance and prevent falls',
        'Increase strength and endurance',
        'Enhance independence in daily activities',
        'Better walking pattern and mobility',
        'Reduce spasticity and muscle stiffness',
      ],
      conditions: [
        'Stroke & Post-Stroke Recovery',
        "Parkinson's Disease",
        'Multiple Sclerosis (MS)',
        'Traumatic Brain Injury',
        'Spinal Cord Injury',
        'Cerebral Palsy',
        'Peripheral Neuropathy',
        "Bell's Palsy & Facial Paralysis",
        'Guillain-Barré Syndrome',
        'Balance & Vestibular Disorders',
      ],
      treatments: [
        'Gait & Balance Training',
        'Functional Movement Retraining',
        'Strength & Endurance Programs',
        'Spasticity Management',
        'Constraint-Induced Movement Therapy',
        'Task-Specific Training',
        'Fall Prevention Programs',
        'Assistive Device Training',
      ],
      whyChooseUs: [
        'Specialized neuro-physiotherapy training',
        'Compassionate, patient-centered care',
        'Family education and support',
        'Home-based therapy available',
        'Progress tracking and goal setting',
        'Coordination with doctors and caregivers',
      ],
      faqs: [
        {
          question: 'When should I start physiotherapy after a stroke?',
          answer:
            "Ideally, physiotherapy should begin as soon as you're medically stable, often within 24-48 hours after stroke. Early intervention leads to better recovery outcomes.",
        },
        {
          question: "Can physiotherapy help with Parkinson's disease?",
          answer:
            "Yes! Physiotherapy is crucial for managing Parkinson's. We focus on maintaining mobility, improving balance, reducing falls, and helping you stay independent longer.",
        },
        {
          question: 'How long does neurological recovery take?',
          answer:
            'Recovery varies greatly depending on the condition and severity. Stroke recovery is most rapid in the first 3-6 months but can continue for years. We provide ongoing support throughout your journey.',
        },
        {
          question: 'Do you provide home visits for neurological patients?',
          answer:
            'Yes, we offer home visit services across Delhi NCR, which is especially beneficial for patients with mobility challenges or those in early recovery stages.',
        },
      ],
      relatedServices: [
        'pediatric-therapy',
        'home-visit',
        'musculoskeletal-therapy',
      ],
    },
    {
      id: 'sports-medicine',
      title: 'Sports Physiotherapy & Injury Treatment',
      subtitle: 'Get Back to Your Game Faster & Stronger',
      description:
        'Specialized sports physiotherapy for cricket injuries, football injuries, gym injuries, and athletic performance. Expert treatment for ACL tears, ankle sprains, and sports-related pain in Delhi.',
      icon: '💪',
      iconColor: 'purple',
      metaTitle:
        'Sports Physiotherapy in Delhi | Cricket, Football & Gym Injury Treatment',
      metaDescription:
        'Expert sports physiotherapy in Delhi for cricket injuries, football injuries, ACL tears, ankle sprains, and athletic performance. Fast recovery, injury prevention, and return-to-sport programs.',
      keywords:
        'sports physiotherapy Delhi, sports injury treatment, cricket injury physiotherapy, football injury treatment, ACL tear rehabilitation, ankle sprain treatment, gym injury recovery, athletic performance, sports medicine Dwarka, injury prevention, return to sport program Delhi',
      overview:
        "Sports physiotherapy combines specialized knowledge of sports biomechanics with advanced treatment techniques to help athletes of all levels recover from injuries and enhance performance. Whether you're a professional athlete, weekend warrior, or fitness enthusiast, we help you return to your sport safely and stronger.",
      benefits: [
        'Faster recovery from sports injuries',
        'Reduce risk of re-injury',
        'Improve athletic performance',
        'Sport-specific training programs',
        'Biomechanical analysis and correction',
        'Safe return to competition',
      ],
      conditions: [
        'ACL & PCL Tears',
        'Meniscus Injuries',
        'Ankle Sprains & Instability',
        'Rotator Cuff Injuries',
        "Tennis Elbow & Golfer's Elbow",
        'Hamstring & Groin Strains',
        'Shin Splints & Stress Fractures',
        "Runner's Knee & IT Band Syndrome",
        'Cricket Bowling Injuries',
        'Football & Contact Sport Injuries',
      ],
      treatments: [
        'Sports-Specific Rehabilitation',
        'Functional Movement Screening',
        'Strength & Conditioning Programs',
        'Plyometric & Agility Training',
        'Biomechanical Analysis',
        'Taping & Bracing Techniques',
        'Return-to-Sport Testing',
        'Injury Prevention Programs',
      ],
      whyChooseUs: [
        'Experience with professional athletes',
        'Sport-specific rehabilitation protocols',
        'Advanced performance testing',
        'Collaboration with coaches and trainers',
        'Cutting-edge treatment techniques',
        'Focus on long-term athletic development',
      ],
      faqs: [
        {
          question: 'When can I return to sports after an injury?',
          answer:
            'Return-to-sport timing depends on injury severity and healing. We use objective criteria including strength, range of motion, and functional tests to ensure safe return. Rushing back increases re-injury risk.',
        },
        {
          question: 'Can physiotherapy improve my athletic performance?',
          answer:
            'Absolutely! We identify movement inefficiencies, address muscle imbalances, and design sport-specific training programs to enhance your strength, speed, agility, and endurance.',
        },
        {
          question: 'Do I need surgery for my sports injury?',
          answer:
            'Many sports injuries can be successfully treated with physiotherapy alone. We work closely with orthopedic surgeons and will refer you if surgery is necessary. Post-surgery, we provide comprehensive rehabilitation.',
        },
        {
          question: 'How can I prevent sports injuries?',
          answer:
            'Prevention includes proper warm-up, strength training, flexibility work, technique correction, and adequate recovery. We offer injury prevention assessments and personalized programs.',
        },
      ],
      relatedServices: [
        'musculoskeletal-therapy',
        'pain-management',
        'home-visit',
      ],
    },
    {
      id: 'pediatric-therapy',
      title: 'Pediatric Physiotherapy',
      subtitle: "Gentle, Caring Treatment for Children's Development",
      description:
        'Specialized pediatric physiotherapy for children with developmental delays, cerebral palsy, and movement disorders. Child-friendly approach to help kids reach their milestones in Delhi.',
      icon: '👶',
      iconColor: 'pink',
      metaTitle:
        'Pediatric Physiotherapy in Delhi | Child Development & Cerebral Palsy Treatment',
      metaDescription:
        "Expert pediatric physiotherapy in Delhi for developmental delays, cerebral palsy, autism, and children's movement disorders. Child-friendly therapy to help kids reach milestones. Home visits available.",
      keywords:
        'pediatric physiotherapy Delhi, child physiotherapy Dwarka, cerebral palsy treatment, developmental delay therapy, autism physiotherapy, children movement disorders, pediatric rehabilitation, child development support, early intervention Delhi, kids physiotherapy',
      overview:
        'Pediatric physiotherapy focuses on helping children with developmental, neurological, or musculoskeletal conditions reach their full potential. Our child-friendly therapists use play-based activities and family-centered approaches to make therapy fun and effective for children of all ages.',
      benefits: [
        'Achieve developmental milestones',
        'Improve strength and coordination',
        'Enhance mobility and independence',
        'Better posture and movement patterns',
        'Increased confidence and participation',
        'Family education and support',
      ],
      conditions: [
        'Cerebral Palsy',
        'Developmental Delays',
        'Down Syndrome',
        'Autism Spectrum Disorder',
        'Muscular Dystrophy',
        'Spina Bifida',
        'Torticollis & Plagiocephaly',
        'Toe Walking & Gait Abnormalities',
        'Sports Injuries in Children',
        'Post-Surgery Rehabilitation',
      ],
      treatments: [
        'Developmental Milestone Training',
        'Gross Motor Skill Development',
        'Balance & Coordination Activities',
        'Strength & Flexibility Exercises',
        'Gait Training & Walking Programs',
        'Play-Based Therapy',
        'Assistive Device Assessment',
        'Parent Education & Home Programs',
      ],
      whyChooseUs: [
        'Specialized pediatric training',
        'Child-friendly, playful environment',
        'Family-centered approach',
        'Collaboration with schools and therapists',
        'Home-based therapy available',
        'Compassionate, patient care',
      ],
      faqs: [
        {
          question: 'At what age can my child start physiotherapy?',
          answer:
            'Physiotherapy can begin at any age, even in infancy. Early intervention is crucial for conditions like cerebral palsy or developmental delays. The earlier we start, the better the outcomes.',
        },
        {
          question: 'How long are pediatric therapy sessions?',
          answer:
            "Sessions typically last 30-45 minutes, depending on your child's age, attention span, and needs. We keep sessions engaging and fun to maintain your child's interest.",
        },
        {
          question: 'Will my child enjoy physiotherapy?',
          answer:
            'We make therapy fun! We use games, toys, and play-based activities that children enjoy while working on their therapeutic goals. Most children look forward to their sessions.',
        },
        {
          question: 'Can parents stay during therapy sessions?',
          answer:
            "Yes! We encourage parent participation. We teach you exercises and activities to continue at home, making you an active partner in your child's progress.",
        },
      ],
      relatedServices: [
        'neurological-therapy',
        'home-visit',
        'musculoskeletal-therapy',
      ],
    },
    {
      id: 'pain-management',
      title: 'Pain Management Physiotherapy',
      subtitle: 'Effective Relief from Chronic Pain Without Heavy Medication',
      description:
        'Specialized pain management physiotherapy for chronic back pain, neck pain, arthritis, and fibromyalgia. Natural pain relief through manual therapy, dry needling, and exercise in Delhi.',
      icon: '🎯',
      iconColor: 'red',
      metaTitle:
        'Pain Management Physiotherapy in Delhi | Chronic Pain Relief Without Medication',
      metaDescription:
        'Expert pain management physiotherapy in Delhi for chronic back pain, neck pain, arthritis, and fibromyalgia. Natural pain relief through manual therapy, dry needling, and therapeutic exercise.',
      keywords:
        'pain management physiotherapy Delhi, chronic pain treatment, back pain relief Dwarka, neck pain treatment, arthritis pain management, fibromyalgia therapy, manual therapy Delhi, dry needling treatment, chronic pain relief, pain physiotherapy Dwarka',
      overview:
        'Chronic pain affects millions and can significantly impact quality of life. Our pain management physiotherapy uses evidence-based techniques to reduce pain, improve function, and help you regain control of your life without relying on heavy medication. We address the root causes of pain, not just symptoms.',
      benefits: [
        'Reduce pain naturally without medication',
        'Improve daily function and quality of life',
        'Better sleep and energy levels',
        'Understand and manage your pain',
        'Prevent pain from returning',
        'Reduce dependence on painkillers',
      ],
      conditions: [
        'Chronic Back Pain',
        'Chronic Neck Pain',
        'Arthritis & Joint Pain',
        'Fibromyalgia',
        'Myofascial Pain Syndrome',
        'Chronic Headaches & Migraines',
        'Nerve Pain & Neuropathy',
        'Post-Surgery Chronic Pain',
        'Complex Regional Pain Syndrome',
        'Chronic Pelvic Pain',
      ],
      treatments: [
        'Manual Therapy & Soft Tissue Mobilization',
        'Dry Needling & Trigger Point Therapy',
        'Therapeutic Exercise Programs',
        'Pain Education & Self-Management',
        'Graded Exposure & Desensitization',
        'Relaxation & Breathing Techniques',
        'Postural & Ergonomic Correction',
        'Mindfulness-Based Pain Management',
      ],
      whyChooseUs: [
        'Specialized pain management training',
        'Holistic, patient-centered approach',
        'Evidence-based treatment methods',
        'Focus on long-term pain relief',
        'Empowering self-management strategies',
        'Compassionate, understanding care',
      ],
      faqs: [
        {
          question: 'Can physiotherapy really help chronic pain?',
          answer:
            'Yes! Research shows physiotherapy is highly effective for chronic pain. We use multiple approaches including manual therapy, exercise, education, and pain science to help you manage and reduce pain.',
        },
        {
          question: 'Will treatment make my pain worse?',
          answer:
            'We work within your tolerance. Some temporary soreness after treatment is normal, but we never push you into severe pain. Our goal is gradual, sustainable improvement.',
        },
        {
          question: 'How is chronic pain different from acute pain?',
          answer:
            'Chronic pain persists beyond normal healing time (usually 3+ months) and involves changes in the nervous system. Treatment focuses on retraining your pain system and improving function, not just tissue healing.',
        },
        {
          question: 'Do I need to stop my pain medication?',
          answer:
            "Never stop medication without consulting your doctor. Physiotherapy can help reduce your reliance on medication over time, but any changes should be made with your physician's guidance.",
        },
      ],
      relatedServices: [
        'musculoskeletal-therapy',
        'neurological-therapy',
        'home-visit',
      ],
    },
    {
      id: 'home-visit',
      title: 'Home Visit Physiotherapy Services',
      subtitle: 'Professional Physiotherapy at Your Doorstep in Delhi NCR',
      description:
        'Convenient home visit physiotherapy services across Delhi NCR. Same quality clinic care at your home - perfect for elderly, post-surgery patients, and those with mobility challenges.',
      icon: '🏡',
      iconColor: 'teal',
      metaTitle:
        'Home Visit Physiotherapy in Delhi NCR | At-Home Physical Therapy Services',
      metaDescription:
        'Professional home visit physiotherapy across Delhi NCR. Expert treatment at your doorstep for elderly, post-surgery, and mobility-challenged patients. Same quality care as clinic visits.',
      keywords:
        'home visit physiotherapy Delhi NCR, mobile physiotherapy Delhi, at-home physical therapy, doorstep physiotherapy, elderly physiotherapy at home, post surgery home care, home rehabilitation Delhi, physiotherapy home service Dwarka, mobile physio Delhi NCR',
      overview:
        'Our home visit physiotherapy brings professional, clinic-quality treatment to your doorstep across Delhi NCR. Perfect for elderly patients, those recovering from surgery, or anyone with mobility challenges. Enjoy the convenience of expert care in the comfort and privacy of your own home.',
      benefits: [
        'No travel hassle or waiting rooms',
        'Same quality care as clinic visits',
        'Comfortable, familiar environment',
        'Flexible scheduling to suit you',
        'Family can observe and learn',
        'Personalized one-on-one attention',
      ],
      conditions: [
        'Post-Surgery Recovery at Home',
        'Elderly & Geriatric Care',
        'Stroke Recovery & Rehabilitation',
        'Chronic Pain Management',
        'Mobility & Balance Issues',
        'Arthritis & Joint Problems',
        'Neurological Conditions',
        'Pediatric Home Therapy',
        'Palliative & End-of-Life Care',
        'Any Condition Requiring Physiotherapy',
      ],
      treatments: [
        'All Physiotherapy Treatments Available',
        'Manual Therapy & Joint Mobilization',
        'Therapeutic Exercise Programs',
        'Gait & Balance Training',
        'Pain Management Techniques',
        'Post-Surgery Rehabilitation',
        'Functional Training in Home Environment',
        'Caregiver Education & Training',
      ],
      whyChooseUs: [
        'Experienced home visit specialists',
        'All equipment brought to your home',
        'Flexible appointment times',
        'Service across entire Delhi NCR',
        'Same therapist for continuity',
        'Family involvement encouraged',
      ],
      faqs: [
        {
          question: 'Which areas do you cover for home visits?',
          answer:
            'We provide home visit services across all of Delhi NCR including Dwarka, Janakpuri, Uttam Nagar, Rohini, Pitampura, Gurgaon, Noida, and surrounding areas.',
        },
        {
          question: 'Do you bring equipment for home visits?',
          answer:
            "Yes! We bring all necessary equipment and supplies for your treatment. You don't need to arrange anything - just a comfortable space for therapy.",
        },
        {
          question: 'Are home visits more expensive than clinic visits?',
          answer:
            'Home visits include a travel charge in addition to treatment fees. Contact us for detailed pricing. Many patients find the convenience worth the additional cost.',
        },
        {
          question: 'How do I book a home visit?',
          answer:
            "Simply call us at +91 99108 85929, WhatsApp us, or book online. Provide your address and preferred time, and we'll schedule your home visit appointment.",
        },
      ],
      relatedServices: [
        'musculoskeletal-therapy',
        'neurological-therapy',
        'pain-management',
      ],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private metaService: MetaService,
    private analyticsService: AnalyticsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const serviceId = params['id'];
      this.service = this.services.find((s) => s.id === serviceId) || null;

      if (this.service) {
        // Set SEO meta tags
        this.metaService.setPageMeta(
          this.service.metaTitle,
          this.service.metaDescription,
          this.service.keywords,
          '/assets/raju-pal.jpg',
          `/services/${this.service.id}`
        );

        // Set structured data
        this.metaService.setStructuredData({
          '@context': 'https://schema.org',
          '@type': 'MedicalTherapy',
          name: this.service.title,
          description: this.service.description,
          provider: {
            '@type': 'MedicalBusiness',
            name: 'Active Rehab Clinic',
            address: {
              '@type': 'PostalAddress',
              streetAddress:
                'C-8, opp. Delhi International School, Pocket-8, Sector 17 Dwarka',
              addressLocality: 'New Delhi',
              addressRegion: 'Delhi',
              postalCode: '110078',
              addressCountry: 'IN',
            },
            telephone: '+91-99108-85929',
          },
        });

        // Load related services
        this.relatedServices = this.service.relatedServices
          .map((id) => this.services.find((s) => s.id === id))
          .filter((s): s is ServiceDetail => s !== undefined);

        // Track page view
        this.analyticsService.trackPrimaryButton(`view_service_${serviceId}`);
      } else {
        // Service not found, redirect to services page
        this.router.navigate(['/services']);
      }
    });
  }

  onBookAppointment(): void {
    this.analyticsService.trackBookAppointment();
  }

  onWhatsAppClick(): void {
    this.analyticsService.trackPrimaryButton('whatsapp_service_detail');
  }
}
