import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 text-right">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              إدارتي
            </h3>
            <p className="text-background/80 leading-relaxed">
              منصة سحابية متكاملة لإدارة المشاريع وزيادة الإنتاجية
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#features" className="hover:text-background transition-colors">المميزات</a></li>
              <li><a href="#testimonials" className="hover:text-background transition-colors">التقييمات</a></li>
              <li><a href="#pricing" className="hover:text-background transition-colors">الأسعار</a></li>
              <li><a href="#" className="hover:text-background transition-colors">من نحن</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">الدعم</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-background transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-background transition-colors">تواصل معنا</a></li>
              <li><a href="#" className="hover:text-background transition-colors">سياسة الخصوصية</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4">تابعنا</h4>
            <div className="flex gap-4 justify-end">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p>© 2024 إدارتي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
