// نموذج الدورات التدريبية
const courses = [
    {
        id: 1,
        title: "تعلم JavaScript المتقدم",
        category: "Programming",
        price: 50,
        description: "دورة شاملة في JavaScript من الصفر إلى الاحتراف",
        image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        rating: { rate: 4.5, count: 120 }
    },
    // ... (باقي الدورات)
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

const categories = [
    "Programming",
    "Web Development", 
    "Backend Development", 
    "Mobile Development", 
    "Database", 
    "Data Science", 
    "Cybersecurity", 
    "Networking", 
    "DevOps", 
    "Artificial Intelligence", 
    "Robotics", 
    "Game Development", 
    "Blockchain", 
    "Design"
];

module.exports = { courses, categories };
