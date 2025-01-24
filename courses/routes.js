const express = require('express');
const router = express.Router();
const { courses, categories } = require('./model');

// الحصول على جميع الدورات
router.get('/', (req, res) => {
    res.json(courses);
});

// الحصول على جميع الفئات
router.get('/categories', (req, res) => {
    res.json(categories);
});

// الحصول على دورات فئة محددة
router.get('/category/:categoryName', (req, res) => {
    const categoryName = req.params.categoryName;
    const categoryCourses = courses.filter(course => course.category === categoryName);
    
    if (categoryCourses.length === 0) {
        return res.status(404).json({ message: "لم يتم العثور على دورات في هذه الفئة" });
    }
    
    res.json(categoryCourses);
});

// إضافة دورة جديدة
router.post('/', (req, res) => {
    const { title, category, price, description, image } = req.body;
    
    // التحقق من صحة البيانات
    if (!title || !category || !price) {
        return res.status(400).json({ message: "يجب إدخال العنوان والفئة والسعر" });
    }
    
    const newCourse = {
        id: courses.length + 1,
        title,
        category,
        price,
        description: description || "",
        image: image || "https://via.placeholder.com/400",
        rating: { rate: 0, count: 0 }
    };
    
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

// تحديث دورة موجودة
router.put('/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(c => c.id === courseId);
    
    if (courseIndex === -1) {
        return res.status(404).json({ message: "الدورة غير موجودة" });
    }
    
    // تحديث الحقول المسموح بها
    const updatableFields = ['title', 'category', 'price', 'description', 'image'];
    
    updatableFields.forEach(field => {
        if (req.body[field] !== undefined) {
            courses[courseIndex][field] = req.body[field];
        }
    });
    
    res.json(courses[courseIndex]);
});

module.exports = router;
