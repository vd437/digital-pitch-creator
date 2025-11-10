import { TrendingUp, BarChart3, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import productivityImage from "@/assets/feature-productivity.jpg";
import analyticsImage from "@/assets/feature-analytics.jpg";
import customizeImage from "@/assets/feature-customize.jpg";

const features = [
  {
    title: "زيادة الإنتاجية",
    description: "أدوات ذكية تساعدك على إنجاز المهام بشكل أسرع وأكثر كفاءة مع تنظيم تلقائي للأولويات",
    icon: TrendingUp,
    image: productivityImage,
    color: "text-secondary"
  },
  {
    title: "تحليل البيانات بسهولة",
    description: "رسوم بيانية وتقارير تفصيلية تساعدك على اتخاذ القرارات الصحيحة بناءً على البيانات الدقيقة",
    icon: BarChart3,
    image: analyticsImage,
    color: "text-primary"
  },
  {
    title: "تخصيص كامل للأدوات",
    description: "خصص واجهتك وأدواتك حسب احتياجاتك الخاصة مع مرونة كاملة في التصميم والوظائف",
    icon: Settings,
    image: customizeImage,
    color: "text-accent"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            مميزات تجعل عملك
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              أسهل وأكثر فعالية
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            اكتشف كيف يمكن لأدواتنا أن تحول طريقة عملك وتزيد من إنتاجيتك بشكل ملحوظ
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
            >
              {/* Icon & Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img 
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
              </div>

              {/* Content */}
              <div className="text-right space-y-3">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
