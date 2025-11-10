import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "أحمد محمود",
    role: "مدير مشاريع",
    content: "أداة رائعة ساعدتني في تنظيم فريقي وزيادة الإنتاجية بنسبة 40% خلال شهر واحد فقط. أنصح بها بشدة!",
    rating: 5
  },
  {
    name: "سارة العلي",
    role: "مديرة تسويق",
    content: "التقارير والتحليلات المتقدمة ساعدتني في اتخاذ قرارات أفضل. واجهة المستخدم سهلة ومريحة جداً.",
    rating: 5
  },
  {
    name: "خالد الشمري",
    role: "مدير تنفيذي",
    content: "بعد تجربة العديد من الأدوات، وجدت أن هذه المنصة هي الأفضل من حيث المرونة والسهولة والأداء.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ماذا يقول عملاؤنا
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              عن تجربتهم معنا
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            آلاف العملاء حول العالم يثقون بنا لإدارة مشاريعهم وتحقيق أهدافهم
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 text-right space-y-4 hover:shadow-md transition-shadow bg-card border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 justify-end">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
