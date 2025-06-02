import React from "react";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="FileText" size={24} className="text-purple-600" />
            <span className="text-xl font-bold text-slate-800">Портфолио</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-600">
            <a
              href="#portfolio"
              className="hover:text-purple-600 transition-colors font-medium"
            >
              Статьи
            </a>
            <a
              href="#about"
              className="hover:text-purple-600 transition-colors font-medium"
            >
              О журналисте
            </a>
            <a
              href="#contact"
              className="hover:text-purple-600 transition-colors font-medium"
            >
              Контакты
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
