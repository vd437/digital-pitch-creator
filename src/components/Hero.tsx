import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-right space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              أدِر مشاريعك بذكاء
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                وزِد إنتاجيتك
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              منصة سحابية متكاملة تساعدك على إدارة المشاريع، تتبع الأداء، وتحليل البيانات بسهولة وفعالية
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:opacity-90 transition-opacity text-lg px-8"
              >
                جرب مجاناً الآن
                <ArrowLeft className="mr-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 border-2"
              >
                <Play className="ml-2 w-5 h-5" />
                شاهد الفيديو
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">4.9/5</div>
                <div className="text-sm text-muted-foreground">تقييم العملاء</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-muted-foreground">وقت التشغيل</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={heroImage} 
                alt="لوحة تحكم إدارة المشاريع"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
