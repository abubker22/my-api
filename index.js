const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// تفعيل CORS للنطاقات المسموح بها فقط
const allowedOrigins = ['http://localhost:3000', 'http://example.com'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let courses = [

    // نفس بيانات الدورات السابقة
{
        id: 1,
        title: "تعلم JavaScript المتقدم",
        category: "Programming",
        price: 50,
        description: "دورة شاملة في JavaScript من الصفر إلى الاحتراف",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.5, count: 120 }
    },
    {
        id: 2,
        title: "Python للمبتدئين",
        category: "Programming",
        price: 40,
        description: "تعلم أساسيات Python بطريقة سهلة وممتعة",
        image: "https://images.unsplash.com/photo-1526379095098-3085dd0d2a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.7, count: 100 }
    },
    {
        id: 3,
        title: "تطوير تطبيقات React",
        category: "Web Development",
        price: 60,
        description: "تعلم بناء تطبيقات الويب المتقدمة باستخدام React",
        image: "https://images.unsplash.com/photo-1633356122544-eac5419c4323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.6, count: 90 }
    },
    {
        id: 4,
        title: "Node.js للتطبيقات الخادمة",
        category: "Backend Development",
        price: 55,
        description: "تعلم بناء تطبيقات الخادم باستخدام Node.js",
        image: "https://images.unsplash.com/photo-1618477388288-b4298afanique?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.4, count: 80 }
    },
    {
        id: 5,
        title: "Angular للمطورين المتقدمين",
        category: "Web Development",
        price: 65,
        description: "دورة متقدمة في إطار عمل Angular",
        image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.3, count: 70 }
    },
    {
        id: 6,
        title: "تعلم Vue.js",
        category: "Web Development",
        price: 50,
        description: "إتقان Vue.js لبناء واجهات مستخدم تفاعلية",
        image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.2, count: 65 }
    },
    {
        id: 7,
        title: "أساسيات قواعد البيانات SQL",
        category: "Database",
        price: 45,
        description: "تعلم إدارة قواعد البيانات باستخدام SQL",
        image: "https://images.unsplash.com/photo-1504868584819-f7fd0460ccce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.5, count: 85 }
    },
    {
        id: 8,
        title: "MongoDB للمطورين",
        category: "Database",
        price: 50,
        description: "دورة متخصصة في قواعد البيانات NoSQL",
        image: "https://images.unsplash.com/photo-1599507593362-7b52a4ec4f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.4, count: 75 }
    },
    {
        id: 9,
        title: "التعلم الآلي مع Python",
        category: "Data Science",
        price: 70,
        description: "مقدمة في التعلم الآلي باستخدام Python",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.6, count: 95 }
    },
    {
        id: 10,
        title: "تحليل البيانات مع Pandas",
        category: "Data Science",
        price: 55,
        description: "إتقان تحليل البيانات باستخدام مكتبة Pandas",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.3, count: 70 }
    },
    {
        id: 11,
        title: "أساسيات الأمن السيبراني",
        category: "Cybersecurity",
        price: 60,
        description: "مقدمة شاملة في الأمن السيبراني",
        image: "https://images.unsplash.com/photo-1614064641938-3e1c9308242c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.5, count: 80 }
    },
    {
        id: 12,
        title: "تطوير تطبيقات الموبايل مع Flutter",
        category: "Mobile Development",
        price: 65,
        description: "تعلم بناء تطبيقات الموبايل باستخدام Flutter",
        image: "https://images.unsplash.com/photo-1610465299996-30e4e56c2261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.4, count: 90 }
    },
    {
        id: 13,
        title: "Kotlin للأندرويد",
        category: "Mobile Development",
        price: 55,
        description: "تطوير تطبيقات الأندرويد باستخدام Kotlin",
        image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.3, count: 75 }
    },
    {
        id: 14,
        title: "Swift للتطوير على iOS",
        category: "Mobile Development",
        price: 60,
        description: "تعلم برمجة تطبيقات iOS باستخدام Swift",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.5, count: 85 }
    },
    {
        id: 15,
        title: "أساسيات الشبكات",
        category: "Networking",
        price: 50,
        description: "مقدمة شاملة في تقنيات الشبكات",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.4, count: 70 }
    },
    {
        id: 16,
        title: "Docker للمطورين",
        category: "DevOps",
        price: 55,
        description: "تعلم إدارة التطبيقات باستخدام Docker",
        image: "https://images.unsplash.com/photo-1618401471353-0fbdf6e30526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.3, count: 65 }
    },
    {
        id: 17,
        title: "Kubernetes للمحترفين",
        category: "DevOps",
        price: 70,
        description: "إدارة التطبيقات الموزعة باستخدام Kubernetes",
        image: "https://images.unsplash.com/photo-1618401471353-0fbdf6e30526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.6, count: 80 }
    },
    {
        id: 18,
        title: "تعلم TypeScript",
        category: "Programming",
        price: 50,
        description: "إتقان TypeScript للتطوير المتقدم",
        image: "https://images.unsplash.com/photo-1633356122544-eac5419c4323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.4, count: 75 }
    },
    {
        id: 19,
        title: "أساسيات C#",
        category: "Programming",
        price: 45,
        description: "مقدمة في لغة البرمجة C#",
        image: "https://images.unsplash.com/photo-1629654297299-c8506ed8b1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.3, count: 70 }
    },
    {
        id: 20,
        title: ".NET Core للمطورين",
        category: "Web Development",
        price: 60,
        description: "تطوير تطبيقات الويب باستخدام .NET Core",
        image: "https://images.unsplash.com/photo-1629654297299-c8506ed8b1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.5, count: 85 }
    },
    {
        id: 21,
        title: "GraphQL للمطورين",
        category: "Web Development",
        price: 55,
        description: "تعلم GraphQL لتطوير واجهات برمجة التطبيقات",
        image: "https://images.unsplash.com/photo-1633356122544-eac5419c4323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.4, count: 75 }
    },
    {
        id: 22,
        title: "أساسيات الذكاء الاصطناعي",
        category: "Artificial Intelligence",
        price: 75,
        description: "مقدمة شاملة في الذكاء الاصطناعي",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.6, count: 90 }
    },
    {
        id: 23,
        title: "تعلم TensorFlow",
        category: "Artificial Intelligence",
        price: 70,
        description: "إتقان TensorFlow للتعلم الآلي",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.5, count: 85 }
    },
    {
        id: 24,
        title: "أساسيات الروبوتات",
        category: "Robotics",
        price: 65,
        description: "مقدمة في علم الروبوتات والتحكم",
        image: "https://images.unsplash.com/photo-1614064641938-3e1c9308242c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.4, count: 75 }
    },
    {
        id: 25,
        title: "تطوير الألعاب مع Unity",
        category: "Game Development",
        price: 60,
        description: "تعلم تطوير الألعاب باستخدام محرك Unity",
        image: "https://images.unsplash.com/photo-1635511017185-f7759ab3c83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.5, count: 80 }
    },
    {
        id: 26,
        title: "Unreal Engine للمطورين",
        category: "Game Development",
        price: 65,
        description: "تطوير الألعاب المتقدمة باستخدام Unreal Engine",
        image: "https://images.unsplash.com/photo-1635511017185-f7759ab3c83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.6, count: 85 }
    },
    {
        id: 27,
        title: "أساسيات البلوكتشين",
        category: "Blockchain",
        price: 70,
        description: "مقدمة شاملة في تقنية البلوكتشين",
        image: "https://images.unsplash.com/photo-1614064641938-3e1c9308242c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.5, count: 90 }
    },
    {
        id: 28,
        title: "Solidity للعقود الذكية",
        category: "Blockchain",
        price: 65,
        description: "تطوير العقود الذكية باستخدام Solidity",
        image: "https://images.unsplash.com/photo-1614064641938-3e1c9308242c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.4, count: 80 }
    },
    {
        id: 29,
        title: "أساسيات التصميم الرقمي",
        category: "Design",
        price: 50,
        description: "مقدمة في التصميم الرقمي وتجربة المستخدم",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.3, count: 70 }
    },
    {
        id: 30,
        title: "Figma للمصممين",
        category: "Design",
        price: 55,
        description: "إتقان أدوات التصميم مع Figma",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.4, count: 75 }
    }
];

// دالة للتحقق من صحة البيانات
function validateCourse(course) {
  if (!course.title || typeof course.title !== 'string') return 'Invalid or missing title';
  if (!course.category || typeof course.category !== 'string') return 'Invalid or missing category';
  if (!course.price || typeof course.price !== 'number') return 'Invalid or missing price';
  if (!course.description || typeof course.description !== 'string') return 'Invalid or missing description';
  if (!course.image || typeof course.image !== 'string') return 'Invalid or missing image';
  return null;
}

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.post('/api/courses', (req, res) => {
  const error = validateCourse(req.body);
  if (error) {
    return res.status(400).json({ message: error });
  }

  const course = {
    id: courses.length + 1,
    title: req.body.title,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
    image: req.body.image,
    rating: req.body.rating || { rate: 0, count: 0 }
  };

  courses.push(course);
  res.status(201).json(course);
});

app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }

  const error = validateCourse({
    ...course,
    ...req.body
  });

  if (error) {
    return res.status(400).json({ message: error });
  }

  course.title = req.body.title || course.title;
  course.category = req.body.category || course.category;
  course.price = req.body.price || course.price;
  course.description = req.body.description || course.description;
  course.image = req.body.image || course.image;
  course.rating = req.body.rating || course.rating;

  res.json(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const courseIndex = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (courseIndex === -1) {
    return res.status(404).json({ message: "Course not found" });
  }

  const deletedCourse = courses.splice(courseIndex, 1);
  res.json(deletedCourse);
});

// نقطة نهاية البحث في الدورات
app.get('/api/courses/search', (req, res) => {
  const { query, category } = req.query;

  let filteredCourses = courses;

  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredCourses = filteredCourses.filter(course =>
      course.title.toLowerCase().includes(lowerQuery) ||
      course.description.toLowerCase().includes(lowerQuery)
    );
  }

  if (category) {
    filteredCourses = filteredCourses.filter(course =>
      course.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json(filteredCourses);
});

// معالجة الأخطاء العامة
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'حدث خطأ في السيرفر!', error: err.message });
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // يسمح بالاتصال من أي جهاز في الشبكة

app.listen(PORT, HOST, () => {
  console.log(`السيرفر يعمل على العنوان http://${HOST}:${PORT}`);
});



// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// // تفعيل CORS لجميع الطلبات
// app.use(cors());

// // Body parser middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// let courses = [
//     {
//         id: 1,
//         title: "تعلم JavaScript المتقدم",
//         category: "Programming",
//         price: 50,
//         description: "دورة شاملة في JavaScript من الصفر إلى الاحتراف",
//         image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.5, count: 120 }
//     },
//     {
//         id: 2,
//         title: "Python للمبتدئين",
//         category: "Programming",
//         price: 40,
//         description: "تعلم أساسيات Python بطريقة سهلة وممتعة",
//         image: "https://images.unsplash.com/photo-1526379095098-3085dd0d2a20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.7, count: 100 }
//     },
//     {
//         id: 3,
//         title: "تطوير تطبيقات React",
//         category: "Web Development",
//         price: 60,
//         description: "تعلم بناء تطبيقات الويب المتقدمة باستخدام React",
//         image: "https://images.unsplash.com/photo-1633356122544-eac5419c4323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.6, count: 90 }
//     },
//     {
//         id: 4,
//         title: "Node.js للتطبيقات الخادمة",
//         category: "Backend Development",
//         price: 55,
//         description: "تعلم بناء تطبيقات الخادم باستخدام Node.js",
//         image: "https://images.unsplash.com/photo-1618477388288-b4298afanique?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.4, count: 80 }
//     },
//     {
//         id: 5,
//         title: "Angular للمطورين المتقدمين",
//         category: "Web Development",
//         price: 65,
//         description: "دورة متقدمة في إطار عمل Angular",
//         image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.3, count: 70 }
//     },
//     {
//         id: 6,
//         title: "تعلم Vue.js",
//         category: "Web Development",
//         price: 50,
//         description: "إتقان Vue.js لبناء واجهات مستخدم تفاعلية",
//         image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.2, count: 65 }
//     },
//     {
//         id: 7,
//         title: "أساسيات قواعد البيانات SQL",
//         category: "Database",
//         price: 45,
//         description: "تعلم إدارة قواعد البيانات باستخدام SQL",
//         image: "https://images.unsplash.com/photo-1504868584819-f7fd0460ccce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.5, count: 85 }
//     },
//     {
//         id: 8,
//         title: "MongoDB للمطورين",
//         category: "Database",
//         price: 50,
//         description: "دورة متخصصة في قواعد البيانات NoSQL",
//         image: "https://images.unsplash.com/photo-1599507593362-7b52a4ec4f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.4, count: 75 }
//     },
//     {
//         id: 9,
//         title: "التعلم الآلي مع Python",
//         category: "Data Science",
//         price: 70,
//         description: "مقدمة في التعلم الآلي باستخدام Python",
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.6, count: 95 }
//     },
//     {
//         id: 10,
//         title: "تحليل البيانات مع Pandas",
//         category: "Data Science",
//         price: 55,
//         description: "إتقان تحليل البيانات باستخدام مكتبة Pandas",
//         image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.3, count: 70 }
//     },
//     {
//         id: 11,
//         title: "أساسيات الأمن السيبراني",
//         category: "Cybersecurity",
//         price: 60,
//         description: "مقدمة شاملة في الأمن السيبراني",
//         image: "https://images.unsplash.com/photo-1614064641938-3e1c9308242c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.5, count: 80 }
//     },
//     {
//         id: 12,
//         title: "تطوير تطبيقات الموبايل مع Flutter",
//         category: "Mobile Development",
//         price: 65,
//         description: "تعلم بناء تطبيقات الموبايل باستخدام Flutter",
//         image: "https://images.unsplash.com/photo-1610465299996-30e4e56c2261?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.4, count: 90 }
//     },
//     {
//         id: 13,
//         title: "Kotlin للأندرويد",
//         category: "Mobile Development",
//         price: 55,
//         description: "تطوير تطبيقات الأندرويد باستخدام Kotlin",
//         image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.3, count: 75 }
//     },
//     {
//         id: 14,
//         title: "Swift للتطوير على iOS",
//         category: "Mobile Development",
//         price: 60,
//         description: "تعلم برمجة تطبيقات iOS باستخدام Swift",
//         image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.5, count: 85 }
//     },
//     {
//         id: 15,
//         title: "أساسيات الشبكات",
//         category: "Networking",
//         price: 50,
//         description: "مقدمة شاملة في تقنيات الشبكات",
//         image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.4, count: 70 }
//     },
//     {
//         id: 16,
//         title: "Docker للمطورين",
//         category: "DevOps",
//         price: 55,
//         description: "تعلم إدارة التطبيقات باستخدام Docker",
//         image: "https://images.unsplash.com/photo-1618401471353-0fbdf6e30526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.3, count: 65 }
//     },
//     {
//         id: 17,
//         title: "Kubernetes للمحترفين",
//         category: "DevOps",
//         price: 70,
//         description: "إدارة التطبيقات الموزعة باستخدام Kubernetes",
//         image: "https://images.unsplash.com/photo-1618401471353-0fbdf6e30526?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.6, count: 80 }
//     },
//     {
//         id: 18,
//         title: "تعلم TypeScript",
//         category: "Programming",
//         price: 50,
//         description: "إتقان TypeScript للتطوير المتقدم",
//         image: "https://images.unsplash.com/photo-1633356122544-eac5419c4323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.4, count: 75 }
//     },
//     {
//         id: 19,
//         title: "أساسيات C#",
//         category: "Programming",
//         price: 45,
//         description: "مقدمة في لغة البرمجة C#",
//         image: "https://images.unsplash.com/photo-1629654297299-c8506ed8b1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.3, count: 70 }
//     },
//     {
//         id: 20,
//         title: ".NET Core للمطورين",
//         category: "Web Development",
//         price: 60,
//         description: "تطوير تطبيقات الويب باستخدام .NET Core",
//         image: "https://images.unsplash.com/photo-1629654297299-c8506ed8b1f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.5, count: 85 }
//     },
//     {
//         id: 21,
//         title: "GraphQL للمطورين",
//         category: "Web Development",
//         price: 55,
//         description: "تعلم GraphQL لتطوير واجهات برمجة التطبيقات",
//         image: "https://images.unsplash.com/photo-1633356122544-eac5419c4323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.4, count: 75 }
//     },
//     {
//         id: 22,
//         title: "أساسيات الذكاء الاصطناعي",
//         category: "Artificial Intelligence",
//         price: 75,
//         description: "مقدمة شاملة في الذكاء الاصطناعي",
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.6, count: 90 }
//     },
//     {
//         id: 23,
//         title: "تعلم TensorFlow",
//         category: "Artificial Intelligence",
//         price: 70,
//         description: "إتقان TensorFlow للتعلم الآلي",
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.5, count: 85 }
//     },
//     {
//         id: 24,
//         title: "أساسيات الروبوتات",
//         category: "Robotics",
//         price: 65,
//         description: "مقدمة في علم الروبوتات والتحكم",
//         image: "https://images.unsplash.com/photo-1614064641938-3e1c9308242c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.4, count: 75 }
//     },
//     {
//         id: 25,
//         title: "تطوير الألعاب مع Unity",
//         category: "Game Development",
//         price: 60,
//         description: "تعلم تطوير الألعاب باستخدام محرك Unity",
//         image: "https://images.unsplash.com/photo-1635511017185-f7759ab3c83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.5, count: 80 }
//     },
//     {
//         id: 26,
//         title: "Unreal Engine للمطورين",
//         category: "Game Development",
//         price: 65,
//         description: "تطوير الألعاب المتقدمة باستخدام Unreal Engine",
//         image: "https://images.unsplash.com/photo-1635511017185-f7759ab3c83f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.6, count: 85 }
//     },
//     {
//         id: 27,
//         title: "أساسيات البلوكتشين",
//         category: "Blockchain",
//         price: 70,
//         description: "مقدمة شاملة في تقنية البلوكتشين",
//         image: "https://images.unsplash.com/photo-1614064641938-3e1c9308242c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.5, count: 90 }
//     },
//     {
//         id: 28,
//         title: "Solidity للعقود الذكية",
//         category: "Blockchain",
//         price: 65,
//         description: "تطوير العقود الذكية باستخدام Solidity",
//         image: "https://images.unsplash.com/photo-1614064641938-3e1c9308242c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.4, count: 80 }
//     },
//     {
//         id: 29,
//         title: "أساسيات التصميم الرقمي",
//         category: "Design",
//         price: 50,
//         description: "مقدمة في التصميم الرقمي وتجربة المستخدم",
//         image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.3, count: 70 }
//     },
//     {
//         id: 30,
//         title: "Figma للمصممين",
//         category: "Design",
//         price: 55,
//         description: "إتقان أدوات التصميم مع Figma",
//         image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
//         rating: { rate: 4.4, count: 75 }
//     }
// ];

// app.get('/api/courses', (req, res) => {
//     res.json(courses);
// });

// app.post('/api/courses', (req, res) => {
//     const course = {
//         id: courses.length + 1,
//         title: req.body.title,
//         category: req.body.category,
//         price: req.body.price,
//         description: req.body.description,
//         image: req.body.image,
//         rating: req.body.rating || { rate: 0, count: 0 }
//     };
//     courses.push(course);
//     res.status(201).json(course);
// });

// app.put('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if (!course) {
//         return res.status(404).json({ message: "Course not found" });
//     }
//     course.title = req.body.title || course.title;
//     course.category = req.body.category || course.category;
//     course.price = req.body.price || course.price;
//     course.description = req.body.description || course.description;
//     course.image = req.body.image || course.image;
//     course.rating = req.body.rating || course.rating;
//     res.json(course);
// });

// app.delete('/api/courses/:id', (req, res) => {
//     const courseIndex = courses.findIndex(c => c.id === parseInt(req.params.id));
//     if (courseIndex === -1) {
//         return res.status(404).json({ message: "Course not found" });
//     }
//     const deletedCourse = courses.splice(courseIndex, 1);
//     res.json(deletedCourse);
// });

// // نقطة نهاية البحث في الدورات
// app.get('/api/courses/search', (req, res) => {
//     const { query, category } = req.query;
    
//     let filteredCourses = courses;
    
//     if (query) {
//         filteredCourses = filteredCourses.filter(course => 
//             course.title.includes(query) || 
//             course.description.includes(query)
//         );
//     }
    
//     if (category) {
//         filteredCourses = filteredCourses.filter(course => 
//             course.category === category
//         );
//     }
    
//     res.json(filteredCourses);
// });

// // معالجة الأخطاء العامة
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('حدث خطأ في السيرفر!');
// });

// // تشغيل السيرفر
// const PORT = process.env.PORT || 3000;
// const HOST = '0.0.0.0';  // يسمح بالاتصال من أي جهاز في الشبكة

// app.listen(PORT, HOST, () => {
//   console.log(`السيرفر يعمل على العنوان http://${HOST}:${PORT}`);
// });
