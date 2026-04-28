// ============================================================
//  IRONFORGE GYM — Language System (AR ↔ EN)
// ============================================================

const translations = {
  ar: {
    // NAV
    nav_about: 'عن الجيم', nav_services: 'خدماتنا', nav_trainers: 'المدربون',
    nav_schedule: 'الجدول', nav_pricing: 'الأسعار', nav_contact: 'تواصل',
    nav_cta: 'انضم الآن',
    // HERO
    hero_badge: 'افضل جيم في المنطقة',
    hero_line1: 'شكّل', hero_line2: 'جسمك', hero_line3: 'الآن',
    hero_sub: 'انضم إلى مجتمع IRONFORGE وابدأ رحلتك نحو الجسم المثالي. أحدث الأجهزة، أفضل المدربين، وبيئة تحفزك على الإنجاز كل يوم.',
    hero_btn1: 'ابدأ تجربتك المجانية', hero_btn2: 'اكتشف خدماتنا',
    stat1: 'عضو نشط', stat2: 'مدرب محترف', stat3: 'كلاس أسبوعي', stat4: 'سنوات خبرة',
    // ABOUT
    about_tag: '● من نحن', about_t1: 'أكثر من مجرد', about_t2: 'جيم',
    about_badge: 'سنوات من<br>التميز',
    about_p1: 'IRONFORGE ليس مجرد صالة رياضية، إنه مجتمع متكامل يضم أحدث الأجهزة والمعدات العالمية في بيئة مصممة لتحفيزك على تخطي حدودك يومًا بعد يوم.',
    about_p2: 'منذ عام 2015، ونحن نساعد آلاف الأعضاء على تحقيق أهدافهم الرياضية وبناء عادات صحية تدوم مدى الحياة. فريقنا من المدربين المعتمدين دوليًا جاهز لمرافقتك في كل خطوة.',
    about_f1: 'أجهزة عالمية حديثة', about_f2: 'مدربون معتمدون دوليًا',
    about_f3: 'برامج تدريب مخصصة', about_f4: 'تغذية رياضية متخصصة',
    about_f5: '24/7 مفتوح', about_f6: 'غرف تغيير فاخرة',
    about_cta: 'تواصل معنا',
    // SERVICES
    services_tag: '● خدماتنا', services_t1: 'برامجنا', services_t2: 'التدريبية',
    services_sched: 'الجدول الكامل',
    svc1: 'رفع الأثقال', svc1_desc: 'برامج مخصصة لبناء العضلات وزيادة القوة مع أحدث أجهزة الأثقال الحرة والمكابس تحت إشراف مدربين متخصصين.',
    svc2: 'كارديو', svc2_desc: 'أجهزة كارديو متطورة تشمل جهاز الجري، الدراجة الثابتة والإليبتيكال لتحسين لياقتك القلبية وحرق الدهون.',
    svc3: 'بوكسينج', svc3_desc: 'كلاسات بوكسينج احترافية تجمع بين تطوير اللياقة البدنية وتعلم فنون الدفاع عن النفس بأسلوب مميز ومحفز.',
    svc4: 'يوجا وتأمل', svc4_desc: 'جلسات يوجا هادئة لتحسين المرونة والتوازن وتقليل التوتر مع مدربات متخصصات في بيئة مريحة ومسترخية.',
    svc5: 'كروس فيت', svc5_desc: 'تدريبات CrossFit مكثفة ومتنوعة تجمع القوة والسرعة والتحمل في برنامج يومي متغير لا يدع جسمك يتعود.',
    svc6: 'سباحة', svc6_desc: 'حمام سباحة أولمبي متكامل مع برامج تدريب للمبتدئين والمحترفين، لبناء تحمل استثنائي وقوة في كامل الجسم.',
    // TRAINERS
    trainers_tag: '● المدربون', trainers_t1: 'فريق', trainers_t2: 'الخبراء',
    trainers_sub: 'كل مدربينا حاصلون على شهادات دولية معتمدة وخبرة تتجاوز 5 سنوات في مجالاتهم.',
    tr1_name: 'أحمد محمد', tr1_role: 'مدرب رفع أثقال',
    tr2_name: 'سارة علي', tr2_role: 'مدربة يوجا وتأمل',
    tr3_name: 'كريم حسن', tr3_role: 'مدرب كروس فيت',
    tr4_name: 'منى خالد', tr4_role: 'مدربة لياقة بدنية',
    // SCHEDULE
    sched_tag: '● الجدول', sched_t1: 'جدول', sched_t2: 'الكلاسات',
    day_sat: 'السبت', day_sun: 'الأحد', day_mon: 'الاثنين',
    day_tue: 'الثلاثاء', day_wed: 'الأربعاء', day_thu: 'الخميس', day_fri: 'الجمعة',
    col_time: 'الوقت', col_class: 'الكلاس', col_trainer: 'المدرب',
    col_dur: 'المدة', col_level: 'المستوى', book: 'احجز',
    // PRICING
    pricing_tag: '● الاشتراكات', pricing_t1: 'اختر', pricing_t2: 'خطتك',
    pricing_sub: 'ابدأ بتجربة مجانية 7 أيام بدون أي التزام',
    plan_dur: '/ شهر', plan_btn: 'اشترك الآن',
    p1_name: 'أساسي', p2_name: 'احترافي', p3_name: 'بريميوم',
    pf1: 'دخول الصالة الرياضية', pf2: 'أجهزة الكارديو', pf3: 'غرف التغيير',
    pf4_na: 'كلاسات جماعية', pf5_na: 'مدرب شخصي', pf6_na: 'استشارة تغذية',
    pf4_pro: 'كلاسات جماعية غير محدودة', pf5_pro: 'جلستا تدريب شخصي',
    pf5_prem: 'تدريب شخصي يومي', pf6_prem: 'استشارة تغذية متخصصة',
    // GALLERY
    gallery_tag: '● معرض الصور', gallery_t1: 'شاهد', gallery_t2: 'أجواءنا', gallery_all: 'مشاهدة الكل',
    // CTA
    cta_tag: '● لا تنتظر أكثر', cta_t1: 'ابدأ رحلتك', cta_t2: 'اليوم',
    cta_p: 'أول أسبوع مجاني بدون أي التزام. اكتشف الفرق بنفسك وانضم إلى آلاف الأعضاء الذين غيّروا حياتهم مع IRONFORGE.',
    cta_btn1: 'سجل مجانًا الآن', cta_btn2: '📞 اتصل بنا',
    // TESTIMONIALS
    test_tag: '● آراء أعضائنا', test_t1: 'ماذا يقولون', test_t2: 'عنّا',
    test1: '"انضممت لـ IRONFORGE من 8 أشهر وكان القرار الأفضل في حياتي. خسرت 22 كيلو وبنيت جسم أحلامي بفضل المدربين المتميزين والبرنامج المنظم."',
    test1_name: 'عمر الشريف', test1_info: 'عضو منذ 2024',
    test2: '"المكان نظيف جدًا، الأجهزة حديثة، والمدربون محترفون ومشجعون. الجو العام محفز جدًا وبيخلي الواحد ميقدرش يغيب."',
    test2_name: 'نور إبراهيم', test2_info: 'عضو منذ 2023',
    test3: '"جربت جيمات كتير قبل كده بس IRONFORGE فرق تاني. الـ CrossFit classes فوق المستوى والمدرب كريم بجد بيفرق معاه."',
    test3_name: 'طارق سامي', test3_info: 'عضو منذ 2022',
    // CONTACT
    contact_tag: '● تواصل معنا', contact_t1: 'هنا من', contact_t2: 'أجلك',
    addr_h: 'العنوان', addr_v: 'اخر شارع النصر جرين بلازا سموحه<br>أسكندرية، مصر',
    hours_h: 'ساعات العمل', hours_v: 'السبت - الخميس: 6ص - 12م<br>الجمعة: 8ص - 10م',
    phone_h: 'الهاتف', email_h: 'البريد الإلكتروني',
    ph_name: 'الاسم الكامل', ph_phone: 'رقم الهاتف', ph_email: 'البريد الإلكتروني',
    ph_select: 'اختر الخدمة', ph_msg: 'رسالتك...',
    opt1: 'اشتراك جديد', opt2: 'تدريب شخصي', opt3: 'كلاسات جماعية',
    opt4: 'استشارة تغذية', opt5: 'أخرى',
    form_submit: 'إرسال الطلب ←', form_success: 'تم الإرسال ✓',
    // FOOTER
    footer_about_txt: 'صالة رياضية احترافية توفر بيئة تدريبية متكاملة بأحدث الأجهزة وأفضل المدربين المعتمدين دوليًا لمساعدتك على تحقيق أهدافك.',
    footer_links: 'روابط سريعة', footer_svcs: 'الخدمات', footer_subs: 'اشتراكات',
    fl1: 'عن الجيم', fl2: 'الخدمات', fl3: 'المدربون', fl4: 'الجدول', fl5: 'معرض الصور',
    fs1: 'رفع الأثقال', fs2: 'كارديو', fs3: 'بوكسينج', fs4: 'يوجا', fs5: 'كروس فيت',
    fsub1: 'باقة أساسية', fsub2: 'باقة احترافية', fsub3: 'باقة بريميوم', fsub4: 'تجربة مجانية',
    footer_copy: '© 2025 <span>IRONFORGE GYM</span>. جميع الحقوق محفوظة.',
    footer_credit: 'تصميم بـ <span>❤</span> لعشاق اللياقة البدنية',
  },

  en: {
    // NAV
    nav_about: 'About Us', nav_services: 'Services', nav_trainers: 'Trainers',
    nav_schedule: 'Schedule', nav_pricing: 'Pricing', nav_contact: 'Contact',
    nav_cta: 'Join Now',
    // HERO
    hero_badge: 'Best Gym in the Region',
    hero_line1: 'Shape', hero_line2: 'Your Body', hero_line3: 'Now',
    hero_sub: 'Join the IRONFORGE community and start your journey to the perfect body. Latest equipment, best trainers, and an environment that motivates you to achieve every day.',
    hero_btn1: 'Start Free Trial', hero_btn2: 'Explore Services',
    stat1: 'Active Members', stat2: 'Pro Trainers', stat3: 'Weekly Classes', stat4: 'Years Experience',
    // ABOUT
    about_tag: '● Who We Are', about_t1: 'More Than Just', about_t2: 'a Gym',
    about_badge: 'Years of<br>Excellence',
    about_p1: 'IRONFORGE is more than a gym — it\'s a complete community featuring the latest world-class equipment in an environment designed to push you beyond your limits every single day.',
    about_p2: 'Since 2015, we\'ve helped thousands of members achieve their fitness goals and build healthy habits that last a lifetime. Our internationally certified trainers are ready to guide you every step of the way.',
    about_f1: 'World-Class Equipment', about_f2: 'Internationally Certified Trainers',
    about_f3: 'Custom Training Programs', about_f4: 'Specialized Sports Nutrition',
    about_f5: 'Open 24/7', about_f6: 'Luxury Changing Rooms',
    about_cta: 'Contact Us',
    // SERVICES
    services_tag: '● Our Services', services_t1: 'Our Training', services_t2: 'Programs',
    services_sched: 'Full Schedule',
    svc1: 'Weight Training', svc1_desc: 'Customized programs for muscle building and strength gains with the latest free weights and machines, under the supervision of specialist trainers.',
    svc2: 'Cardio', svc2_desc: 'Advanced cardio machines including treadmills, stationary bikes, and ellipticals to improve your cardiovascular fitness and burn fat.',
    svc3: 'Boxing', svc3_desc: 'Professional boxing classes that combine physical fitness development with self-defense techniques in a unique and motivating style.',
    svc4: 'Yoga & Meditation', svc4_desc: 'Calm yoga sessions to improve flexibility, balance, and reduce stress, led by specialist instructors in a comfortable and relaxing environment.',
    svc5: 'CrossFit', svc5_desc: 'Intense and varied CrossFit workouts combining strength, speed, and endurance in a constantly varied daily program that keeps your body guessing.',
    svc6: 'Swimming', svc6_desc: 'A full Olympic swimming pool with training programs for beginners and professionals, building exceptional endurance and full-body strength.',
    // TRAINERS
    trainers_tag: '● Trainers', trainers_t1: 'Expert', trainers_t2: 'Team',
    trainers_sub: 'All our trainers hold internationally accredited certifications and over 5 years of experience in their fields.',
    tr1_name: 'Ahmed Mohamed', tr1_role: 'Weight Training Coach',
    tr2_name: 'Sara Ali', tr2_role: 'Yoga & Meditation Coach',
    tr3_name: 'Karim Hassan', tr3_role: 'CrossFit Coach',
    tr4_name: 'Mona Khaled', tr4_role: 'Fitness Coach',
    // SCHEDULE
    sched_tag: '● Schedule', sched_t1: 'Class', sched_t2: 'Schedule',
    day_sat: 'Saturday', day_sun: 'Sunday', day_mon: 'Monday',
    day_tue: 'Tuesday', day_wed: 'Wednesday', day_thu: 'Thursday', day_fri: 'Friday',
    col_time: 'Time', col_class: 'Class', col_trainer: 'Trainer',
    col_dur: 'Duration', col_level: 'Level', book: 'Book',
    // PRICING
    pricing_tag: '● Memberships', pricing_t1: 'Choose', pricing_t2: 'Your Plan',
    pricing_sub: 'Start with a 7-day free trial — no commitment required',
    plan_dur: '/ month', plan_btn: 'Subscribe Now',
    p1_name: 'Basic', p2_name: 'Professional', p3_name: 'Premium',
    pf1: 'Gym Access', pf2: 'Cardio Machines', pf3: 'Changing Rooms',
    pf4_na: 'Group Classes', pf5_na: 'Personal Trainer', pf6_na: 'Nutrition Consultation',
    pf4_pro: 'Unlimited Group Classes', pf5_pro: '2 Personal Training Sessions',
    pf5_prem: 'Daily Personal Training', pf6_prem: 'Specialized Nutrition Consultation',
    // GALLERY
    gallery_tag: '● Gallery', gallery_t1: 'See Our', gallery_t2: 'Atmosphere', gallery_all: 'View All',
    // CTA
    cta_tag: '● Don\'t Wait Anymore', cta_t1: 'Start Your Journey', cta_t2: 'Today',
    cta_p: 'First week free with no commitment. Discover the difference yourself and join thousands of members who have transformed their lives with IRONFORGE.',
    cta_btn1: 'Register Free Now', cta_btn2: '📞 Call Us',
    // TESTIMONIALS
    test_tag: '● Member Reviews', test_t1: 'What They Say', test_t2: 'About Us',
    test1: '"I joined IRONFORGE 8 months ago and it was the best decision of my life. I lost 22 kg and built my dream body thanks to the outstanding trainers and structured program."',
    test1_name: 'Omar El-Sharif', test1_info: 'Member since 2024',
    test2: '"The place is very clean, the equipment is modern, and the trainers are professional and encouraging. The atmosphere is so motivating it keeps you coming back."',
    test2_name: 'Nour Ibrahim', test2_info: 'Member since 2023',
    test3: '"I tried many gyms before but IRONFORGE is a different league. The CrossFit classes are top-notch and Coach Karim truly makes a difference."',
    test3_name: 'Tarek Sami', test3_info: 'Member since 2022',
    // CONTACT
    contact_tag: '● Contact Us', contact_t1: 'We\'re Here', contact_t2: 'For You',
    addr_h: 'Address', addr_v: 'End of El-Nasr St, Green Plaza, Smouha<br>Alexandria, Egypt',
    hours_h: 'Working Hours', hours_v: 'Sat – Thu: 6 AM – 12 AM<br>Friday: 8 AM – 10 PM',
    phone_h: 'Phone', email_h: 'Email',
    ph_name: 'Full Name', ph_phone: 'Phone Number', ph_email: 'Email Address',
    ph_select: 'Choose a Service', ph_msg: 'Your message...',
    opt1: 'New Membership', opt2: 'Personal Training', opt3: 'Group Classes',
    opt4: 'Nutrition Consultation', opt5: 'Other',
    form_submit: 'Send Request →', form_success: 'Sent Successfully ✓',
    // FOOTER
    footer_about_txt: 'A professional gym providing a complete training environment with the latest equipment and internationally certified trainers to help you achieve your goals.',
    footer_links: 'Quick Links', footer_svcs: 'Services', footer_subs: 'Memberships',
    fl1: 'About Us', fl2: 'Services', fl3: 'Trainers', fl4: 'Schedule', fl5: 'Gallery',
    fs1: 'Weight Training', fs2: 'Cardio', fs3: 'Boxing', fs4: 'Yoga', fs5: 'CrossFit',
    fsub1: 'Basic Plan', fsub2: 'Professional Plan', fsub3: 'Premium Plan', fsub4: 'Free Trial',
    footer_copy: '© 2025 <span>IRONFORGE GYM</span>. All Rights Reserved.',
    footer_credit: 'Designed with <span>❤</span> for Fitness Lovers',
  }
};

// ============================================================
//  Schedule Data — Bilingual
// ============================================================
const scheduleData = {
  ar: {
    sat:[
      {time:'06:00 ص',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
      {time:'07:30 ص',cls:'كارديو حرق',trainer:'منى خالد',dur:'45 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
      {time:'09:00 ص',cls:'يوجا الصباح',trainer:'سارة علي',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
      {time:'11:00 ص',cls:'كروس فيت',trainer:'كريم حسن',dur:'75 دقيقة',lvl:'متقدم',badge:'badge-gold'},
      {time:'05:00 م',cls:'بوكسينج',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'متوسط',badge:'badge-red'},
      {time:'07:00 م',cls:'تدريب ليلي',trainer:'كريم حسن',dur:'90 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
    ],
    sun:[
      {time:'07:00 ص',cls:'كروس فيت الصباح',trainer:'كريم حسن',dur:'60 دقيقة',lvl:'متقدم',badge:'badge-gold'},
      {time:'09:00 ص',cls:'رفع أثقال',trainer:'أحمد محمد',dur:'75 دقيقة',lvl:'متوسط',badge:'badge-red'},
      {time:'11:00 ص',cls:'كارديو ونشاط',trainer:'منى خالد',dur:'45 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
      {time:'06:00 م',cls:'يوجا المساء',trainer:'سارة علي',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
      {time:'08:00 م',cls:'بوكسينج ليلي',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'متوسط',badge:'badge-red'},
    ],
    mon:[
      {time:'06:30 ص',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
      {time:'10:00 ص',cls:'يوجا',trainer:'سارة علي',dur:'60 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
      {time:'12:00 م',cls:'كارديو مكثف',trainer:'منى خالد',dur:'45 دقيقة',lvl:'متوسط',badge:'badge-white'},
      {time:'05:30 م',cls:'كروس فيت',trainer:'كريم حسن',dur:'75 دقيقة',lvl:'متقدم',badge:'badge-gold'},
    ],
    tue:[
      {time:'07:00 ص',cls:'بوكسينج',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
      {time:'09:30 ص',cls:'كارديو',trainer:'منى خالد',dur:'45 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
      {time:'06:00 م',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'75 دقيقة',lvl:'متقدم',badge:'badge-red'},
      {time:'08:00 م',cls:'يوجا المساء',trainer:'سارة علي',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
    ],
    wed:[
      {time:'06:00 ص',cls:'كروس فيت مبكر',trainer:'كريم حسن',dur:'60 دقيقة',lvl:'متقدم',badge:'badge-gold'},
      {time:'08:00 ص',cls:'يوجا الصباح',trainer:'سارة علي',dur:'60 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
      {time:'05:00 م',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'75 دقيقة',lvl:'متوسط',badge:'badge-red'},
      {time:'07:30 م',cls:'كارديو ليلي',trainer:'منى خالد',dur:'45 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
    ],
    thu:[
      {time:'07:00 ص',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'90 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
      {time:'10:00 ص',cls:'كروس فيت',trainer:'كريم حسن',dur:'75 دقيقة',lvl:'متوسط',badge:'badge-gold'},
      {time:'04:30 م',cls:'بوكسينج',trainer:'أحمد محمد',dur:'60 دقيقة',lvl:'متقدم',badge:'badge-red'},
      {time:'07:00 م',cls:'يوجا الاسترخاء',trainer:'سارة علي',dur:'60 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
    ],
    fri:[
      {time:'08:00 ص',cls:'يوجا وتأمل',trainer:'سارة علي',dur:'75 دقيقة',lvl:'جميع المستويات',badge:'badge-white'},
      {time:'10:30 ص',cls:'كارديو حر',trainer:'منى خالد',dur:'60 دقيقة',lvl:'مبتدئ',badge:'badge-white'},
      {time:'06:00 م',cls:'رفع الأثقال',trainer:'أحمد محمد',dur:'90 دقيقة',lvl:'جميع المستويات',badge:'badge-red'},
    ],
  },

  en: {
    sat:[
      {time:'06:00 AM',cls:'Weight Training',trainer:'Ahmed Mohamed',dur:'60 min',lvl:'All Levels',badge:'badge-red'},
      {time:'07:30 AM',cls:'Cardio Burn',trainer:'Mona Khaled',dur:'45 min',lvl:'Beginner',badge:'badge-white'},
      {time:'09:00 AM',cls:'Morning Yoga',trainer:'Sara Ali',dur:'60 min',lvl:'All Levels',badge:'badge-white'},
      {time:'11:00 AM',cls:'CrossFit',trainer:'Karim Hassan',dur:'75 min',lvl:'Advanced',badge:'badge-gold'},
      {time:'05:00 PM',cls:'Boxing',trainer:'Ahmed Mohamed',dur:'60 min',lvl:'Intermediate',badge:'badge-red'},
      {time:'07:00 PM',cls:'Night Training',trainer:'Karim Hassan',dur:'90 min',lvl:'All Levels',badge:'badge-white'},
    ],
    sun:[
      {time:'07:00 AM',cls:'Morning CrossFit',trainer:'Karim Hassan',dur:'60 min',lvl:'Advanced',badge:'badge-gold'},
      {time:'09:00 AM',cls:'Weight Training',trainer:'Ahmed Mohamed',dur:'75 min',lvl:'Intermediate',badge:'badge-red'},
      {time:'11:00 AM',cls:'Cardio & Conditioning',trainer:'Mona Khaled',dur:'45 min',lvl:'Beginner',badge:'badge-white'},
      {time:'06:00 PM',cls:'Evening Yoga',trainer:'Sara Ali',dur:'60 min',lvl:'All Levels',badge:'badge-white'},
      {time:'08:00 PM',cls:'Night Boxing',trainer:'Ahmed Mohamed',dur:'60 min',lvl:'Intermediate',badge:'badge-red'},
    ],
    mon:[
      {time:'06:30 AM',cls:'Weight Training',trainer:'Ahmed Mohamed',dur:'60 min',lvl:'All Levels',badge:'badge-red'},
      {time:'10:00 AM',cls:'Yoga',trainer:'Sara Ali',dur:'60 min',lvl:'Beginner',badge:'badge-white'},
      {time:'12:00 PM',cls:'Intense Cardio',trainer:'Mona Khaled',dur:'45 min',lvl:'Intermediate',badge:'badge-white'},
      {time:'05:30 PM',cls:'CrossFit',trainer:'Karim Hassan',dur:'75 min',lvl:'Advanced',badge:'badge-gold'},
    ],
    tue:[
      {time:'07:00 AM',cls:'Boxing',trainer:'Ahmed Mohamed',dur:'60 min',lvl:'All Levels',badge:'badge-red'},
      {time:'09:30 AM',cls:'Cardio',trainer:'Mona Khaled',dur:'45 min',lvl:'Beginner',badge:'badge-white'},
      {time:'06:00 PM',cls:'Weight Training',trainer:'Ahmed Mohamed',dur:'75 min',lvl:'Advanced',badge:'badge-red'},
      {time:'08:00 PM',cls:'Evening Yoga',trainer:'Sara Ali',dur:'60 min',lvl:'All Levels',badge:'badge-white'},
    ],
    wed:[
      {time:'06:00 AM',cls:'Early CrossFit',trainer:'Karim Hassan',dur:'60 min',lvl:'Advanced',badge:'badge-gold'},
      {time:'08:00 AM',cls:'Morning Yoga',trainer:'Sara Ali',dur:'60 min',lvl:'Beginner',badge:'badge-white'},
      {time:'05:00 PM',cls:'Weight Training',trainer:'Ahmed Mohamed',dur:'75 min',lvl:'Intermediate',badge:'badge-red'},
      {time:'07:30 PM',cls:'Night Cardio',trainer:'Mona Khaled',dur:'45 min',lvl:'All Levels',badge:'badge-white'},
    ],
    thu:[
      {time:'07:00 AM',cls:'Weight Training',trainer:'Ahmed Mohamed',dur:'90 min',lvl:'All Levels',badge:'badge-red'},
      {time:'10:00 AM',cls:'CrossFit',trainer:'Karim Hassan',dur:'75 min',lvl:'Intermediate',badge:'badge-gold'},
      {time:'04:30 PM',cls:'Boxing',trainer:'Ahmed Mohamed',dur:'60 min',lvl:'Advanced',badge:'badge-red'},
      {time:'07:00 PM',cls:'Relaxation Yoga',trainer:'Sara Ali',dur:'60 min',lvl:'All Levels',badge:'badge-white'},
    ],
    fri:[
      {time:'08:00 AM',cls:'Yoga & Meditation',trainer:'Sara Ali',dur:'75 min',lvl:'All Levels',badge:'badge-white'},
      {time:'10:30 AM',cls:'Free Cardio',trainer:'Mona Khaled',dur:'60 min',lvl:'Beginner',badge:'badge-white'},
      {time:'06:00 PM',cls:'Weight Training',trainer:'Ahmed Mohamed',dur:'90 min',lvl:'All Levels',badge:'badge-red'},
    ],
  }
};

// ============================================================
//  Core Language Engine
// ============================================================
let currentLang = localStorage.getItem('ironforge_lang') || 'ar';

function applyLanguage(lang) {
  const t = translations[lang];
  const html = document.documentElement;

  // Direction + lang attribute
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.body.setAttribute('data-lang', lang);

  // Toggle button label
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.textContent = lang === 'ar' ? 'EN' : 'عربي';
  });

  // Apply all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Apply data-i18n-html (for innerHTML with tags)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Apply placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // Re-render schedule with current active day
  const activeBtn = document.querySelector('.tab-btn.active');
  const activeDay = activeBtn ? activeBtn.getAttribute('data-day') : 'sat';
  renderSchedule(activeDay);

  // Update mobile menu nav CTA if exists
  const mobileCta = document.getElementById('mobileLangNav');
  if (mobileCta) mobileCta.textContent = lang === 'ar' ? 'EN' : 'عربي';

  // Persist
  localStorage.setItem('ironforge_lang', lang);
  currentLang = lang;
}

function toggleLang() {
  applyLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

// Expose globally so schedule in script.js can access it
window.currentLang = () => currentLang;
window.scheduleData = scheduleData;
window.applyLanguage = applyLanguage;
window.toggleLang = toggleLang;
window.translations = translations;