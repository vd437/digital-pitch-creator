import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "الباقة المجانية",
    price: "0",
    description: "مثالية للأفراد والمشاريع الصغيرة",
    features: [
      "حتى 3 مشاريع",
      "5 أعضاء في الفريق",
      "تخزين 5 جيجا",
      "دعم عبر البريد الإلكتروني",
      "تقارير أساسية"
    ],
    cta: "ابدأ مجاناً",
    popular: false
  },
  {
    name: "الباقة الاحترافية",
    price: "99",
    description: "الأنسب للفرق المتنامية والمشاريع المتوسطة",
    features: [
      "مشاريع غير محدودة",
      "15 عضو في الفريق",
      "تخزين 100 جيجا",
      "دعم على مدار الساعة",
      "تقارير متقدمة",
      "تكاملات خارجية",
      "أولوية في الدعم"
    ],
    cta: "اشترك الآن",
    popular: true
  },
  {
    name: "باقة الشركات",
    price: "299",
    description: "للمؤسسات الكبيرة التي تحتاج حلولاً مخصصة",
    features: [
      "كل مميزات الباقة الاحترافية",
      "أعضاء غير محدودين",
      "تخزين غير محدود",
      "مدير حساب مخصص",
      "تدريب مخصص",
      "SLA مضمونة",
      "تخصيص كامل"
    ],
    cta: "تواصل معنا",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            باقات تناسب
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              جميع احتياجاتك
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            اختر الباقة المناسبة لك وابدأ رحلتك نحو إنتاجية أفضل اليوم
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 text-right relative ${
                plan.popular 
                  ? 'border-2 border-primary shadow-lg scale-105' 
                  : 'border-border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 right-1/2 translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    الأكثر شعبية
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline justify-end gap-2">
                  <span className="text-muted-foreground text-lg">/شهرياً</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-3xl font-bold">ر.س</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gradient-primary hover:opacity-90' 
                    : 'bg-gradient-accent hover:opacity-90'
                } transition-opacity`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
