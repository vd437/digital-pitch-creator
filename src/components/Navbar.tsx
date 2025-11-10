import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              إدارتي
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              المميزات
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              التقييمات
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              الأسعار
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost">تسجيل الدخول</Button>
            <Button className="bg-gradient-accent hover:opacity-90 transition-opacity">
              جرب مجاناً
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">
                المميزات
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
                التقييمات
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                الأسعار
              </a>
              <Button variant="ghost" className="justify-start">تسجيل الدخول</Button>
              <Button className="bg-gradient-accent">جرب مجاناً</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
