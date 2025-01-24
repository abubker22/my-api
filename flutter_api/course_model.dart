class Course {
  final int id;
  final String title;
  final String category;
  final double price;
  final String description;
  final String image;
  final Rating rating;

  Course({
    required this.id,
    required this.title,
    required this.category,
    required this.price,
    required this.description,
    required this.image,
    required this.rating,
  });

  factory Course.fromJson(Map<String, dynamic> json) {
    return Course(
      id: json['id'],
      title: json['title'],
      category: json['category'],
      price: json['price'].toDouble(),
      description: json['description'],
      image: json['image'],
      rating: Rating.fromJson(json['rating']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'title': title,
      'category': category,
      'price': price,
      'description': description,
      'image': image,
      'rating': rating.toJson(),
    };
  }
}

class Rating {
  final double rate;
  final int count;

  Rating({
    required this.rate,
    required this.count,
  });

  factory Rating.fromJson(Map<String, dynamic> json) {
    return Rating(
      rate: json['rate'].toDouble(),
      count: json['count'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'rate': rate,
      'count': count,
    };
  }
}
