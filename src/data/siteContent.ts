import { siteImages } from './siteImages';
import { FacultyMember, AcademicProgram, CampusItem } from '../types';

export const siteContent = {
  // Institutional Details
  school: {
    name: "Spandana High School",
    nameTelugu: "స్పందన హైస్కూల్",
    tagline: "Empowering · Enriching · Excelling",
    village: "Racherla",
    district: "Prakasam District",
    state: "Andhra Pradesh",
    pincode: "523368",
    country: "India",
    fullAddress: "Spandana High School, Main Road, Racherla, Prakasam District, Andhra Pradesh - 523368, India",
    establishedYear: "1989",
    legacyYears: "35+",
    studentCount: "500+",
    eventsCount: "50+",
  },

  // Contact & Social Media Config
  contact: {
    phoneDisplay: "+91 94400 00000",
    phoneTel: "+919440000000",
    whatsappNumber: "919440000000",
    whatsappDisplay: "+91 94400 00000",
    email: "spandanaschoolracherla@gmail.com",
    youtubeChannelUrl: "https://www.youtube.com/@spandanaschoolracherla3389",
    
    // Featured Video from user request
    featuredVideoId: "22A0Ek91tdo",
    featuredVideoTitle: "Future Ready Education @ Spandana School Racherla",
    featuredVideoUrl: "https://www.youtube.com/watch?v=22A0Ek91tdo",
    featuredVideoEmbed: "https://www.youtube-nocookie.com/embed/22A0Ek91tdo?autoplay=1",

    instagramUrl: "https://www.instagram.com/spandana_school_racherla/",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15386.417030807572!2d78.96229988229871!3d15.40228308436573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb422ec208f8fe1%3A0x6e2888f28fa9fe32!2sRacherla%2C%20Andhra%20Pradesh%20523368!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    googleMapsDirectLink: "https://maps.google.com/?q=Racherla+Prakasam+District+Andhra+Pradesh+523368",
  },

  // Video Playlist from official channel
  videoPlaylist: [
    {
      id: "22A0Ek91tdo",
      title: "Future Ready Education @ Spandana School Racherla",
      titleTe: "ఫ్యూచర్ రెడీ ఎడ్యుకేషన్ @ స్పందన స్కూల్ రాచర్ల",
      category: "Academic & Tech",
      categoryTe: "విద్యా & సాంకేతికత",
      duration: "Flagship Feature",
      embedUrl: "https://www.youtube-nocookie.com/embed/22A0Ek91tdo?autoplay=1",
      watchUrl: "https://www.youtube.com/watch?v=22A0Ek91tdo",
    },
    {
      id: "AX0--sl8-Ls",
      title: "Children's Day Celebrations in Spandana School - Racherla",
      titleTe: "బాలల దినోత్సవ వేడుకలు - స్పందన స్కూల్ రాచర్ల",
      category: "Celebrations",
      categoryTe: "ఉత్సవాలు",
      duration: "Cultural Event",
      embedUrl: "https://www.youtube-nocookie.com/embed/AX0--sl8-Ls?autoplay=1",
      watchUrl: "https://www.youtube.com/watch?v=AX0--sl8-Ls",
    },
    {
      id: "35th-annual-day",
      title: "35th Annual Day Vibes & Grand Logo Launch",
      titleTe: "35వ వార్షికోత్సవం & లోగో ఆవిష్కరణ వేడుకలు",
      category: "Milestone",
      categoryTe: "మైలురాయి",
      duration: "35 Years Legacy",
      embedUrl: "https://www.youtube-nocookie.com/embed/22A0Ek91tdo?autoplay=1",
      watchUrl: "https://www.youtube.com/@spandanaschoolracherla3389/videos",
    },
    {
      id: "sports-yoga",
      title: "Annual Sports Fest & Pyramid Yoga Performance",
      titleTe: "క్రీడా ఉత్సవాలు & పిరమిడ్ యోగా విన్యాసాలు",
      category: "Sports & Fitness",
      categoryTe: "క్రీడలు & యోగా",
      duration: "Physical Prowess",
      embedUrl: "https://www.youtube-nocookie.com/embed/22A0Ek91tdo?autoplay=1",
      watchUrl: "https://www.youtube.com/@spandanaschoolracherla3389/videos",
    },
  ],

  // Key Institutional Achievements and Activities revealed in the video & channel
  achievements: [
    {
      id: "ach-1",
      badge: "Landmark Milestone",
      badgeTe: "చారిత్రక మైలురాయి",
      title: "35th Annual Day Celebrations",
      titleTe: "ఘనంగా 35వ వార్షికోత్సవ వేడుకలు",
      description:
        "Celebrated 35 years of trusted educational service in Racherla with distinguished guests, grand logo launch by MLA, and alumni honors.",
      descriptionTe:
        "రాచర్లలో 35 సంవత్సరాల అంకితభావ విద్యా ప్రస్థానాన్ని పురస్కరించుకుని శాసనసభ్యులు మరియు ప్రముఖుల సమక్షంలో లోగో ఆవిష్కరణ, ఘన వార్షికోత్సవ సంబరాలు.",
      stat: "35+",
      statLabel: "Years of Trust",
      iconName: "Trophy",
    },
    {
      id: "ach-2",
      badge: "Board Honors",
      badgeTe: "బోర్డు పరీక్షల ప్రతిభ",
      title: "Outstanding SSC Board Results",
      titleTe: "పదవ తరగతి పబ్లిక్ పరీక్షలలో అత్యుత్తమ ఫలితాలు",
      description:
        "Consistent record of top GPA scores, 100% pass achievements, and prestigious subject distinctions in Andhra Pradesh State Board examinations.",
      descriptionTe:
        "ఆంధ్రప్రదేశ్ పది పరీక్షల్లో నిరంతర 100% ఉత్తీర్ణత మరియు మండల స్థాయిలో అత్యున్నత జీపీఏ స్కోర్ల సాధన.",
      stat: "100%",
      statLabel: "SSC Success Focus",
      iconName: "GraduationCap",
    },
    {
      id: "ach-3",
      badge: "Sports & Discipline",
      badgeTe: "క్రీడా ప్రతిభ & క్రమశిక్షణ",
      title: "Pyramid Yoga & Annual Sports Fest",
      titleTe: "పిరమిడ్ యోగాసనాలు & వార్షిక స్పోర్ట్స్ ఫెస్ట్",
      description:
        "Grand multi-tier human pyramid yoga performances, martial arts karate demonstrations, track events, and team tournaments.",
      descriptionTe:
        "విద్యార్థుల సమన్వయంతో కూడిన అద్భుత పిరమిడ్ యోగా విన్యాసాలు, కరాటే ఆత్మరక్షణ ప్రదర్శనలు మరియు క్రీడా పోటీలు.",
      stat: "50+",
      statLabel: "Events & Competitions",
      iconName: "Award",
    },
    {
      id: "ach-4",
      badge: "Future Ready",
      badgeTe: "ఆధునిక విద్య",
      title: "Future-Ready STEM & Digital Learning",
      titleTe: "ఫ్యూచర్ రెడీ సైన్స్ & కంప్యూటర్ ఎడ్యుకేషన్",
      description:
        "Empowering rural learners with digital literacy, practical science experiments, language labs, and modern interactive pedagogy.",
      descriptionTe:
        "గ్రామీణ ప్రాంత విద్యార్థులకు ఆధునిక కంప్యూటర్ నైపుణ్యాలు, ప్రాక్టికల్ సైన్స్ ల్యాబ్ ప్రయోగాలు మరియు ఇంగ్లీష్ కమ్యూనికేషన్.",
      stat: "100%",
      statLabel: "Hands-on Practical Prep",
      iconName: "Cpu",
    },
  ],

  // Grades available for admissions
  gradesList: [
    { value: "LKG - UKG", label: "Pre-Primary (LKG / UKG)" },
    { value: "Grade 1", label: "Grade 1 (Primary)" },
    { value: "Grade 2", label: "Grade 2 (Primary)" },
    { value: "Grade 3", label: "Grade 3 (Primary)" },
    { value: "Grade 4", label: "Grade 4 (Primary)" },
    { value: "Grade 5", label: "Grade 5 (Primary)" },
    { value: "Grade 6", label: "Grade 6 (Middle School)" },
    { value: "Grade 7", label: "Grade 7 (Middle School)" },
    { value: "Grade 8", label: "Grade 8 (Middle School)" },
    { value: "Grade 9", label: "Grade 9 (High School)" },
    { value: "Grade 10", label: "Grade 10 (SSC Board Preparation)" },
  ],

  // Academic Programs
  academicPrograms: [
    {
      id: "primary",
      category: "Foundational Stage",
      categoryTe: "పునాది దశ",
      title: "Primary School",
      titleTe: "ప్రాథమిక విభాగం",
      grades: "Grades 1 – 5",
      description:
        "Building strong conceptual fundamentals in reading, math, environmental awareness, and creative self-expression through joyful activity-based guidance.",
      descriptionTe:
        "చదవడం, రాయడం, గణితం మరియు ప్రాథమిక సైన్స్ అంశాలలో బలమైన పునాదులను ఆనందకరమైన పద్ధతుల ద్వారా నిర్మించే విభాగం.",
      features: [
        "Phonics, English & Telugu Reading",
        "Foundational Mathematics & Logic",
        "Environmental Studies & Nature Walks",
        "Visual Arts, Rhymes & Storytelling",
      ],
      featuresTe: [
        "భాషా నైపుణ్యాలు & సులభ రీతిలో పఠనం",
        "ప్రాథమిక గణితం & తార్కిక ఆలోచన",
        "పర్యావరణం & విజ్ఞాన ప్రయోగాలు",
        "చిత్రలేఖనం & కథల ద్వారా అభ్యసనం",
      ],
      image: siteImages.primarySchool,
    },
    {
      id: "middle",
      category: "Exploratory Stage",
      categoryTe: "వికాస దశ",
      title: "Middle School",
      titleTe: "మాధ్యమిక విభాగం",
      grades: "Grades 6 – 8",
      description:
        "Transitioning into structured scientific enquiry, independent problem solving, linguistic fluency, and collaborative project challenges.",
      descriptionTe:
        "ప్రయోగపూర్వక శాస్త్ర విజ్ఞానం, తార్కిక గణిత ఆలోచనలు, భాషా పటిష్టత మరియు సృజనాత్మక ప్రాజెక్టులు అందించే విభాగం.",
      features: [
        "Interactive Science Laboratories",
        "Analytical Mathematics Curriculum",
        "Social Sciences & Civic Responsibility",
        "Practical Computer Skills & Digital Literacy",
      ],
      featuresTe: [
        "సైన్స్ ల్యాబ్ ప్రయోగాలు",
        "సమగ్ర గణిత సమస్యల పరిష్కారం",
        "సాంఘిక శాస్త్రం & సామాజిక స్పృహ",
        "కంప్యూటర్ ప్రాథమిక నైపుణ్యాలు",
      ],
      image: siteImages.middleSchool,
    },
    {
      id: "high",
      category: "Leadership & SSC Stage",
      categoryTe: "ఉన్నత & బోర్డ్ దశ",
      title: "High School",
      titleTe: "హైస్కూల్ విభాగం",
      grades: "Grades 9 – 10",
      description:
        "Disciplined preparation for state board examinations, rigorous conceptual depth, personal mentoring, and future career pathway orientation.",
      descriptionTe:
        "బోర్డు పరీక్షలకు సంపూర్ణ సన్నద్ధత, లోతైన విషయ పరిజ్ఞానం, నిరంతర టెస్టులు మరియు భవిష్యత్ లక్ష్యాల నిర్దేశం.",
      features: [
        "Systematic SSC Board Syllabus Coverage",
        "Periodic Diagnostic Mock Assessments",
        "Individual Academic Counseling",
        "Leadership & Public Speaking Mentorship",
      ],
      featuresTe: [
        "బోర్డు పరీక్షల సమగ్ర సిలబస్",
        "నిరంతర అసెస్‌మెంట్లు & విశ్లేషణ",
        "వ్యక్తిగత కౌన్సెలింగ్ & డౌట్ సెషన్స్",
        "నాయకత్వ లక్షణాలు & పర్సనాలిటీ డెవలప్‌మెంట్",
      ],
      image: siteImages.highSchool,
    },
  ] as AcademicProgram[],

  // Campus Gallery Items reflecting real activities seen on the official channel
  campusItems: [
    {
      id: "campus-1",
      title: "Future Ready Computer & STEM Lab",
      titleTe: "ఫ్యూచర్ రెడీ కంప్యూటర్ & సైన్స్ ల్యాబ్",
      category: "learning",
      categoryTe: "అభ్యసనం",
      description: "Equipped for digital learning, interactive sessions, and science experimentation.",
      descriptionTe: "ఆధునిక కంప్యూటర్ పరిజ్ఞానం మరియు సైన్స్ ప్రయోగాలు.",
      image: siteImages.campusLearning,
      aspect: "wide",
    },
    {
      id: "campus-2",
      title: "Annual Sports Fest & Athletics",
      titleTe: "వార్షిక క్రీడా సంబరాలు & అథ్లెటిక్స్",
      category: "sports",
      categoryTe: "క్రీడలు",
      description: "Track races, yoga pyramid formations, karate drills, and field sports.",
      descriptionTe: "క్రీడా స్ఫూర్తి, పిరమిడ్ యోగా విన్యాసాలు మరియు మైదాన ఆటలు.",
      image: siteImages.campusSports,
      aspect: "tall",
    },
    {
      id: "campus-3",
      title: "35th Annual Day & Celebrations",
      titleTe: "35వ వార్షికోత్సవం & సాంస్కృతిక వేడుకలు",
      category: "celebrations",
      categoryTe: "వేడుకలు",
      description: "Landmark annual celebrations, Children's Day festive joy, and traditional Telugu dances.",
      descriptionTe: "35వ వార్షికోత్సవ వైభవం, సాంస్కృతిక నృత్యాలు మరియు వేదిక ప్రదర్శనలు.",
      image: siteImages.campusCelebrations,
      aspect: "wide",
    },
    {
      id: "campus-4",
      title: "Creative Arts & Cultural Stage",
      titleTe: "సృజనాత్మక చిత్రకళ & రంగస్థలం",
      category: "creative",
      categoryTe: "సృజనాత్మకత",
      description: "Fostering theatrical expression, classical music, art, and speech elocution.",
      descriptionTe: "విద్యార్థులలో సృజనాత్మకతను, వక్తృత్వాన్ని మరియు కళాభిరుచిని పెంచే వేదిక.",
      image: siteImages.campusCreative,
      aspect: "tall",
    },
    {
      id: "campus-5",
      title: "Knowledge Library & Reading Room",
      titleTe: "విజ్ఞాన గ్రంథాలయం & స్టడీ రూమ్",
      category: "learning",
      categoryTe: "అభ్యసనం",
      description: "Rich collection of academic literature, periodicals, and reference books.",
      descriptionTe: "వివిధ పుస్తకాలు మరియు విజ్ఞాన పత్రికల సమాహారం.",
      image: siteImages.campusLibrary,
      aspect: "wide",
    },
  ] as CampusItem[],

  // Faculty Profiles (CLEARLY MARKED AS DEMO PROFILES per spec)
  facultyMembers: [
    {
      id: "fac-1",
      name: "Smt. K. Sarojini Devi",
      nameTe: "శ్రీమతి కె. సరోజిని దేవి",
      designation: "Academic Director & Headmistress",
      designationTe: "అకడమిక్ డైరెక్టర్ & ప్రధానోపాధ్యాయురాలు",
      subject: "Educational Leadership & English",
      subjectTe: "విద్యా నిర్వహణ & ఆంగ్ల బోధన",
      qualification: "M.A. (English), M.Ed.",
      specialization: "Curriculum Planning & Child Psychology",
      experience: "22+ Years in High School Administration",
      classesHandled: "Grades 9 & 10, Faculty Mentoring",
      philosophy:
        "Every child possesses a unique spark. Our duty as educators is not just to instruct, but to instill the moral compass and self-belief that guides them through any storm in life.",
      philosophyTe:
        "ప్రతి విద్యార్థిలో ఒక ప్రత్యేకమైన ప్రతిభ ఉంటుంది. ఉపాధ్యాయులుగా వారికి కేవలం పాఠాలు చెప్పడమే కాక, జీవితంలో ఉన్నత శిఖరాలను అధిరోహించే ఆత్మవిశ్వాసాన్ని ఇవ్వడమే మా కర్తవ్యం.",
      photo: siteImages.faculty1,
      isDemo: true,
    },
    {
      id: "fac-2",
      name: "Sri M. Ramakrishna Reddy",
      nameTe: "శ్రీ ఎం. రామకృష్ణారెడ్డి",
      designation: "Senior Mathematics Specialist",
      designationTe: "సీనియర్ గణిత శాస్త్రవేత్త",
      subject: "Mathematics & Analytical Logic",
      subjectTe: "గణిత శాస్త్రం & తార్కిక విధానం",
      qualification: "M.Sc. (Mathematics), B.Ed.",
      specialization: "Algebra, Geometry & SSC Board Prep",
      experience: "16+ Years in Secondary Education",
      classesHandled: "Grades 8, 9 & 10",
      philosophy:
        "Mathematics is not about rote memorizing equations; it is the language of clarity and disciplined thinking. I strive to make math approachable, logical, and deeply rewarding.",
      philosophyTe:
        "గణితం అనేది బట్టీ పట్టే విధానం కాదు; అది స్పష్టమైన ఆలోచనల ప్రతిబింబం. ప్రతి విద్యార్థికి గణితాన్ని సులభంగా, ఇష్టంగా నేర్పించడమే నా లక్ష్యం.",
      photo: siteImages.faculty2,
      isDemo: true,
    },
    {
      id: "fac-3",
      name: "Sri V. Prasad Rao",
      nameTe: "శ్రీ వి. ప్రసాదరావు",
      designation: "Science & Technology Coordinator",
      designationTe: "సైన్స్ & టెక్నాలజీ కోఆర్డినేటర్",
      subject: "Physical & Biological Sciences",
      subjectTe: "భౌతిక & జీవ శాస్త్రాలు",
      qualification: "M.Sc. (Physics), B.Ed.",
      specialization: "Experimental Science & STEM Learning",
      experience: "14+ Years in Middle & High School",
      classesHandled: "Grades 7, 8 & 9",
      philosophy:
        "True scientific thinking begins when a student asks 'Why?'. In our classrooms and labs, we encourage questions, hypothesis testing, and discovering truth through observation.",
      philosophyTe:
        "విద్యార్థి 'ఎందుకు?' అని ప్రశ్నించినప్పుడే నిజమైన సైన్స్ మొదలవుతుంది. ప్రయోగాల ద్వారా సరికొత్త విషయాలను గ్రహించేలా వారిని సిద్ధం చేస్తాము.",
      photo: siteImages.faculty3,
      isDemo: true,
    },
    {
      id: "fac-4",
      name: "Smt. P. Lakshmi Kalyani",
      nameTe: "శ్రీమతి పి. లక్ష్మి కళ్యాణి",
      designation: "Telugu Language & Cultural Dean",
      designationTe: "తెలుగు భాష & సాంస్కృతిక విభాగాధిపతి",
      subject: "Telugu Literature & Classical Arts",
      subjectTe: "తెలుగు సాహిత్యం & సంస్కృతి",
      qualification: "M.A. (Telugu), T.P.T.",
      specialization: "Grammar, Poetry & Stage Performing Arts",
      experience: "18+ Years in Language Pedagogy",
      classesHandled: "Grades 6 to 10",
      philosophy:
        "Our mother tongue connects us to our roots, our compassion, and our cultural dignity. Fostering eloquent Telugu expression preserves our heritage for future generations.",
      philosophyTe:
        "మాతృభాష మన మూలాలను, మన సంస్కృతిని తెలియజేస్తుంది. విద్యార్థులలో మాతృభాషాభిమానాన్ని, సృజనాత్మక రచనా శైలిని పెంపొందించడమే నా జీవితాశయం.",
      photo: siteImages.faculty4,
      isDemo: true,
    },
  ] as FacultyMember[],
};
