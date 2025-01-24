import 'dart:convert';
import 'package:http/http.dart' as http;
import 'course_model.dart';

class CoursesService {
  static const String baseUrl = 'http://localhost:3000/api/courses';

  // جلب جميع الدورات
  static Future<List<Course>> getAllCourses() async {
    final response = await http.get(Uri.parse(baseUrl));
    
    if (response.statusCode == 200) {
      List<dynamic> body = json.decode(response.body);
      List<Course> courses = body.map((dynamic item) => Course.fromJson(item)).toList();
      return courses;
    } else {
      throw Exception('فشل في جلب الدورات');
    }
  }

  // جلب جميع الفئات
  static Future<List<String>> getAllCategories() async {
    final response = await http.get(Uri.parse('$baseUrl/categories'));
    
    if (response.statusCode == 200) {
      List<dynamic> body = json.decode(response.body);
      return body.map((dynamic item) => item.toString()).toList();
    } else {
      throw Exception('فشل في جلب الفئات');
    }
  }

  // جلب دورات فئة محددة
  static Future<List<Course>> getCoursesByCategory(String category) async {
    final response = await http.get(Uri.parse('$baseUrl/category/$category'));
    
    if (response.statusCode == 200) {
      List<dynamic> body = json.decode(response.body);
      List<Course> courses = body.map((dynamic item) => Course.fromJson(item)).toList();
      return courses;
    } else {
      throw Exception('فشل في جلب دورات الفئة');
    }
  }

  // إضافة دورة جديدة
  static Future<Course> addCourse(Course course) async {
    final response = await http.post(
      Uri.parse(baseUrl),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(course.toJson()),
    );
    
    if (response.statusCode == 201) {
      return Course.fromJson(json.decode(response.body));
    } else {
      throw Exception('فشل في إضافة الدورة');
    }
  }

  // تحديث دورة
  static Future<Course> updateCourse(int id, Course course) async {
    final response = await http.put(
      Uri.parse('$baseUrl/$id'),
      headers: {'Content-Type': 'application/json'},
      body: json.encode(course.toJson()),
    );
    
    if (response.statusCode == 200) {
      return Course.fromJson(json.decode(response.body));
    } else {
      throw Exception('فشل في تحديث الدورة');
    }
  }
}
