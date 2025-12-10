import { Injectable } from '@angular/core';
import { BlogPost } from '@models/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogStore {
  private posts: BlogPost[] = [
    {
      id: '1',
      title: '10 Effective Exercises for Lower Back Pain Relief at Home',
      slug: 'exercises-for-lower-back-pain-relief',
      excerpt:
        'Discover simple, effective exercises you can do at home to relieve lower back pain. These physiotherapist-approved movements help strengthen your core and reduce discomfort.',
      content: `
            # 10 Effective Exercises for Lower Back Pain Relief at Home

Lower back pain affects millions of people in India, often caused by poor posture, prolonged sitting, or muscle weakness. As experienced physiotherapists in Dwarka, we've helped hundreds of patients find relief through targeted exercises. Here are 10 proven exercises you can do at home.

## Why Exercise Helps Back Pain

Before we dive into the exercises, it's important to understand why movement helps. When you have back pain, your natural instinct might be to rest completely. However, gentle, controlled movement:

- Strengthens supporting muscles
- Improves flexibility and range of motion
- Increases blood flow to promote healing
- Releases natural pain-relieving endorphins
- Prevents stiffness and further injury

## Important Safety Tips

**Before starting any exercise program:**
- Consult with a physiotherapist if pain is severe or persistent
- Stop immediately if any exercise increases pain
- Start slowly and gradually increase repetitions
- Focus on proper form over speed or quantity
- Breathe normally throughout each exercise

## The 10 Best Exercises for Lower Back Pain

### 1. Pelvic Tilts

**Benefits:** Strengthens lower abdominal muscles and stretches lower back

**How to do it:**
1. Lie on your back with knees bent, feet flat on floor
2. Tighten your abdominal muscles
3. Push your lower back into the floor
4. Hold for 5 seconds, then relax
5. Repeat 10-15 times

**Pro tip:** This is one of the safest exercises for back pain and great for beginners.

### 2. Cat-Cow Stretch

**Benefits:** Improves spine flexibility and relieves tension

**How to do it:**
1. Start on hands and knees (tabletop position)
2. Arch your back, lifting head and tailbone (Cow)
3. Round your back, tucking chin to chest (Cat)
4. Alternate slowly between positions
5. Repeat 10-15 times

**Pro tip:** Move slowly and smoothly - this isn't a race!

### 3. Child's Pose

**Benefits:** Gentle stretch for lower back and hips

**How to do it:**
1. Kneel on floor, sit back on heels
2. Lean forward, extending arms in front
3. Rest forehead on floor
4. Hold for 30-60 seconds
5. Breathe deeply and relax

**Pro tip:** This is a resting pose - use it whenever you need a break.

### 4. Knee-to-Chest Stretch

**Benefits:** Stretches lower back and glutes

**How to do it:**
1. Lie on back with knees bent
2. Bring one knee toward chest
3. Hold behind thigh with both hands
4. Hold for 20-30 seconds
5. Repeat 3 times each leg

**Pro tip:** Keep your other foot flat on the floor for stability.

### 5. Bridge Exercise

**Benefits:** Strengthens glutes, hamstrings, and lower back

**How to do it:**
1. Lie on back, knees bent, feet flat
2. Tighten buttocks and lift hips
3. Create straight line from knees to shoulders
4. Hold for 5-10 seconds
5. Lower slowly, repeat 10-15 times

**Pro tip:** Don't arch your back too much - keep core engaged.

### 6. Bird Dog

**Benefits:** Improves core stability and balance

**How to do it:**
1. Start on hands and knees
2. Extend right arm forward and left leg back
3. Keep back straight and level
4. Hold for 5-10 seconds
5. Alternate sides, repeat 10 times each

**Pro tip:** Focus on keeping your hips level - no twisting!

### 7. Seated Spinal Twist

**Benefits:** Improves spine rotation and flexibility

**How to do it:**
1. Sit on floor with legs extended
2. Bend right knee, place foot outside left thigh
3. Twist torso to right, using left elbow on right knee
4. Hold for 20-30 seconds
5. Repeat on other side

**Pro tip:** Sit tall and twist from your waist, not your shoulders.

### 8. Partial Crunches

**Benefits:** Strengthens core without straining back

**How to do it:**
1. Lie on back, knees bent, feet flat
2. Cross arms over chest
3. Lift shoulders slightly off floor
4. Hold for 2-3 seconds
5. Lower slowly, repeat 10-15 times

**Pro tip:** Don't pull on your neck - let your abs do the work.

### 9. Wall Sits

**Benefits:** Strengthens legs and core to support back

**How to do it:**
1. Stand with back against wall
2. Slide down until knees at 90 degrees
3. Hold position for 10-30 seconds
4. Slide back up slowly
5. Repeat 5-10 times

**Pro tip:** Keep your back flat against the wall throughout.

### 10. Hamstring Stretch

**Benefits:** Reduces tension in legs that can affect back

**How to do it:**
1. Lie on back near doorway
2. Extend one leg up doorframe
3. Keep other leg extended on floor
4. Hold for 20-30 seconds
5. Repeat 3 times each leg

**Pro tip:** You should feel a gentle stretch, not pain.

## Creating Your Exercise Routine

**For best results:**
- Do these exercises 2-3 times daily
- Start with 5-10 repetitions, gradually increase
- Consistency is more important than intensity
- Combine with good posture throughout the day
- Stay active - walking is excellent for back health

## When to See a Physiotherapist

While these exercises help many people, you should consult a physiotherapist if:

- Pain persists for more than 2 weeks
- Pain radiates down your legs
- You experience numbness or tingling
- Pain is severe or getting worse
- You have difficulty walking or standing
- Pain followed an injury or fall

## Professional Treatment Options

At Active Rehab Clinic in Dwarka, we offer comprehensive back pain treatment including:

- **Manual Therapy:** Hands-on techniques to reduce pain and improve mobility
- **Personalized Exercise Programs:** Tailored to your specific condition
- **Postural Assessment:** Identify and correct posture problems
- **Ergonomic Advice:** Optimize your workspace and daily activities
- **Home Visit Services:** Professional care in Delhi NCR for those with mobility challenges

## Preventing Future Back Pain

**Long-term strategies:**
- Maintain good posture while sitting and standing
- Take regular breaks from prolonged sitting
- Lift objects properly (bend knees, not back)
- Maintain healthy weight
- Stay physically active
- Manage stress (tension affects muscles)
- Sleep on a supportive mattress

## Conclusion

Lower back pain doesn't have to control your life. These 10 exercises, when done consistently, can significantly reduce pain and improve your quality of life. Remember, everyone's back pain is different - what works for one person may not work for another.

If you're struggling with persistent back pain, don't suffer in silence. Our experienced physiotherapists in Dwarka are here to help you find lasting relief.

**Ready to get professional help?** Book an appointment with Active Rehab Clinic today. We offer both clinic visits and convenient home physiotherapy services across Delhi NCR.

---

*This article was written by Dr. Raju Pal, BPT, MPT, with over 13 years of experience treating back pain and musculoskeletal conditions at Active Rehab Clinic, Dwarka.*
      `,
      author: 'Dr. Raju Pal',
      authorRole: 'Lead Physiotherapist, BPT, MPT',
      publishDate: new Date('2025-12-01'),
      lastUpdated: new Date('2025-12-07'),
      readTime: 8,
      category: 'pain-relief',
      tags: [
        'back pain',
        'exercises',
        'home treatment',
        'pain relief',
        'core strength',
      ],
      metaTitle:
        '10 Exercises for Lower Back Pain Relief | Physiotherapist-Approved',
      metaDescription:
        'Expert physiotherapist shares 10 effective exercises for lower back pain relief you can do at home. Strengthen your core, improve flexibility, and reduce discomfort naturally.',
      keywords:
        'lower back pain exercises, back pain relief at home, exercises for back pain, physiotherapy exercises, core strengthening, back pain treatment Delhi, home exercises for back pain',
      relatedServices: [
        'musculoskeletal-therapy',
        'pain-management',
        'home-visit',
      ],
      relatedPosts: ['2', '3', '5'],
    },
    {
      id: '2',
      title:
        'When Should You See a Physiotherapist? 10 Signs You Need Professional Help',
      slug: 'when-to-see-physiotherapist',
      excerpt:
        "Not sure if you need physiotherapy? Learn the 10 key s that indicate it's time to consult a professional physiotherapist for your pain or mobility issues.",
      content: `
# When Should You See a Physiotherapist? 10 Signs You Need Professional Help

Many people wait too long before seeking physiotherapy treatment, often making their condition worse. As physiotherapists in Dwarka with over 13 years of experience, we've seen countless patients who wish they'd come sooner. Here are 10 clear signs that it's time to see a physiotherapist.

## What is Physiotherapy?

Physiotherapy (also called physical therapy) is a healthcare profession that helps people restore, maintain, and maximize their physical strength, function, and overall well-being. Physiotherapists use evidence-based techniques including:

- Manual therapy and joint mobilization
- Therapeutic exercises
- Pain management techniques
- Movement retraining
- Education and self-management strategies

## 10 Signs You Need to See a Physiotherapist

### 1. Pain Lasting More Than 3 Days

**Why it matters:** Acute pain from minor injuries usually resolves within 2-3 days. If your pain persists beyond this, it indicates a more significant problem that needs professional assessment.

**What we can do:** Identify the root cause, provide immediate pain relief, and create a treatment plan to prevent chronic pain.

**Don't wait if:** Pain is severe, getting worse, or affecting your daily activities.

### 2. Limited Range of Motion

**Signs to watch for:**
- Difficulty reaching overhead
- Can't turn your head fully
- Trouble bending or twisting
- Stiffness in joints
- Reduced flexibility

**Why it matters:** Limited mobility can lead to compensatory movements, causing problems in other areas of your body.

**What we can do:** Use manual therapy and specific exercises to restore normal movement patterns.

### 3. Sharp or Shooting Pain

**Red flags:**
- Pain that shoots down your arm or leg
- Electric shock-like sensations
- Pain that radiates from one area to another
- Sudden, severe pain with movement

**Why it matters:** This often indicates nerve involvement, which requires specialized treatment to prevent permanent damage.

**What we can do:** Assess nerve function, reduce inflammation, and teach you positions that relieve nerve pressure.

### 4. Difficulty Performing Daily Activities

**Examples:**
- Tessed
- Pain when climbing stairs
- Difficulty sitting or standing for long periods
- Problems with household chores
- Struggling with work tasks

**Why it matters:** When pain interferes with daily life, it's affecting your quality of life and independence.

**What we can do:** Develop functional training programs to help you return to normal activities safely.

### 5. Recent Injury or Surgery

**When to come:**
- Immediately after sprains, strains, or fractures
- Post-surgery (ACL, rotator cuff, joint replacement)
- After sports injuries
- Following motor vehicle accidents
- After falls, especially in elderly

**Why it matters:** Early physiotherapy intervention leads to faster recovery and better outcomes.

**What we can do:** Guide your recovery, prevent complications, and ensure proper healing.

### 6. Recurring Pain or Injuries

**Warning signs:**
- Same injury keeps coming back
- Chronic pain that comes and goes
- Frequent muscle strains
- Repeated joint problems
- Pattern of injuries in same area

**Why it matters:** Recurring problems indicate underlying issues like muscle imbalances, poor biomechanics, or inadequate recovery.

**What we can do:** Identify root causes, correct movement patterns, and implement prevention strategies.

### 7. Balance or Coordination Problems

**Symptoms:**
- Frequent falls or near-falls
- Dizziness with movement
- Unsteady walking
- Difficulty with stairs
- Fear of falling

**Why it matters:** Balance problems increase fall risk, especially in elderly, and may indicate neurological issues.

**What we can do:** Provide balance training, vestibular rehabilitation, and fall prevention programs.

### 8. Numbness or Tingling

**Concerning symptoms:**
- Pins and needles sensation
- Numbness in hands or feet
- Loss of sensation in any area
- Weakness accompanying numbness
- Progressive symptoms

**Why it matters:** These symptoms suggest nerve compression or damage that needs immediate attention.

**What we can do:** Assess nerve function, reduce compression, and prevent permanent nerve damage.

### 9. Sports Performance Decline

**Signs for athletes:**
- Decreased performance
- Persistent muscle soreness
- Reduced speed or strength
- Difficulty with specific movements
- Fear of re-injury

**Why it matters:** Performance issues often stem from biomechanical problems, muscle imbalances, or incomplete injury recovery.

**What we can do:** Provide sports-specific rehabilitation, performance enhancement, and injury prevention programs.

### 10. Chronic Conditions Affecting Mobility

**Conditions that benefit from physiotherapy:**
- Arthritis
- Diabetes (peripheral neuropathy)
- Parkinson's disease
- Multiple sclerosis
- Stroke recovery
- Chronic pain syndromes

**Why it matters:** Physiotherapy helps manage symptoms, maintain function, and improve quality of life with chronic conditions.

**What we can do:** Create ongoing management plans tailored to your specific condition.

## Common Conditions We Treat

### Musculoskeletal Issues
- Back pain and sciatica
- Neck pain and whiplash
- Shoulder pain and frozen shoulder
- Knee pain and arthritis
- Sports injuries
- Post-surgical rehabilitation

### Neurological Conditions
- Stroke recovery
- Parkinson's disease
- Multiple sclerosis
- Balance disorders
- Peripheral neuropathy

### Specialized Services
- Sports physiotherapy
- Pediatric physiotherapy
- Geriatric care
- Home visit services (Delhi NCR)
- Post-operative rehabilitation

## What to Expect at Your First Appointment

### Initial Assessment (45-60 minutes)

**1. Medical History**
- Current symptoms and concerns
- Previous injuries or surgeries
- Medical conditions and medications
- Lifestyle and activity level

**2. Physical Examination**
- Posture assessment
- Range of motion testing
- Strength evaluation
- Functional movement analysis
- Special tests as needed

**3. Diagnosis and Treatment Plan**
- Clear explanation of your condition
- Expected recovery timeline
- Treatment recommendations
- Home exercise program
- Frequency of visits needed

**4. First Treatment Session**
- Immediate pain relief techniques
- Manual therapy if appropriate
- Initial exercises
- Education and advice

## Benefits of Early Physiotherapy

**Research shows that seeing a physiotherapist early:**
- Reduces pain faster
- Shortens recovery time
- Prevents chronic pain development
- Reduces need for surgery
- Lowers healthcare costs
- Improves long-term outcomes

## Why Choose Active Rehab Clinic?

### Our Approach
- **Evidence-Based Treatment:** We use proven techniques backed by research
- **Personalized Care:** Every treatment plan is tailored to your specific needs
- **Experienced Team:** Over 13 years of treating diverse conditions
- **Modern Equipment:** State-of-the-art facilities and technology
- **Convenient Options:** Clinic visits or home physiotherapy in Delhi NCR

### What Makes Us Different
- One-on-one attention (not group sessions)
- Flexible appointment scheduling
- Same-day appointments available
- Home visit services for mobility-challenged patients
- Comprehensive approach addressing root causes
- Patient education and empowerment

## Don't Wait - Act Now

**The longer you wait, the harder treatment becomes.** Early intervention is key to:
- Faster recovery
- Better outcomes
- Lower treatment costs
- Prevention of chronic problems

## How to Book Your Appointment

**Three easy ways:**

1. **Call Us:** +91 99108 85929
2. **WhatsApp:** Quick enquiry and booking
3. **Online Booking:** Visit our website

**Location:** C-8, opp. Delhi International School, Pocket-8, Sector 17 Dwarka, New Delhi 110078

**Hours:** Mon-Fri 8AM-6PM, Sat 9AM-4PM

## Frequently Asked Questions

**Q: Do I need a doctor's referral?**
A: No, you can book directly with us. However, bring any recent imaging (X-rays, MRI) if you have them.

**Q: How many sessions will I need?**
A: It varies by condition. Acute injuries may need 4-6 sessions, while chronic conditions might require 8-12 sessions.

**Q: Is physiotherapy painful?**
A: Treatment should not be painful. You may experience mild discomfort during certain exercises, but we always work within your comfort level.

**Q: Do you accept insurance?**
A: We provide detailed receipts for insurance claims. Check with your insurance provider about physiotherapy coverage.

**Q: Can you come to my home?**
A: Yes! We offer home visit physiotherapy services across Delhi NCR, perfect for elderly or post-surgery patients.

## Conclusion

Don't let pain or mobility issues control your life. If you're experiencing any of the 10 signs mentioned above, it's time to see a physiotherapist. Early treatment leads to better outcomes and faster recovery.

At Active Rehab Clinic in Dwarka, we're committed to helping you achieve your health goals through expert, compassionate care. Whether you visit our clinic or prefer home physiotherapy, we're here to help.

**Take the first step toward recovery today. Book your appointment now!**

---

*Written by Dr. Raju Pal, BPT, MPT - Lead Physiotherapist at Active Rehab Clinic, Dwarka, with over 13 years of experience in musculoskeletal and sports physiotherapy.*
      `,
      author: 'Dr. Raju Pal',
      authorRole: 'Lead Physiotherapist, BPT, MPT',
      publishDate: new Date('2025-12-02'),
      lastUpdated: new Date('2025-12-07'),
      readTime: 10,
      category: 'wellness',
      tags: [
        'physiotherapy',
        'when to see doctor',
        'pain management',
        'injury prevention',
      ],
      metaTitle:
        'When to See a Physiotherapist: 10 Signs You Need Help | Expert Guide',
      metaDescription:
        "Wondering if you need physiotherapy? Learn the 10 key signs from expert physiotherapists in Dwarka. Don't wait - early treatment leads to better outcomes.",
      keywords:
        'when to see physiotherapist, signs you need physiotherapy, physiotherapy consultation, back pain treatment, injury recovery, physiotherapist Dwarka Delhi',
      relatedServices: [
        'musculoskeletal-therapy',
        'sports-medicine',
        'pain-management',
      ],
      relatedPosts: ['1', '3', '4'],
    },
  ];

  constructor() {}

  getAllPosts(): BlogPost[] {
    return this.posts.sort(
      (a, b) => b.publishDate.getTime() - a.publishDate.getTime()
    );
  }

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find((post) => post.slug === slug);
  }

  getPostsByCategory(category: string): BlogPost[] {
    return this.posts.filter((post) => post.category === category);
  }

  getRelatedPosts(postId: string, limit: number = 3): BlogPost[] {
    const post = this.posts.find((p) => p.id === postId);
    if (!post) return [];

    return this.posts
      .filter((p) => p.id !== postId && post.relatedPosts.includes(p.id))
      .slice(0, limit);
  }

  getFeaturedPosts(limit: number = 3): BlogPost[] {
    return this.posts.slice(0, limit);
  }
}
