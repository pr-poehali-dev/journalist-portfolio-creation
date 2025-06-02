import React from "react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            alt="Портрет журналиста"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl"
          />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Анна Журналист
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Освещаю жизнь города Коврова — от спортивных событий до социальных
            проблем. Ищу истории, которые важны людям.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Badge
              variant="secondary"
              className="bg-purple-500/20 text-purple-200 border-purple-400/30"
            >
              📰 Городские новости
            </Badge>
            <Badge
              variant="secondary"
              className="bg-blue-500/20 text-blue-200 border-blue-400/30"
            >
              🏃‍♀️ Спорт
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-500/20 text-green-200 border-green-400/30"
            >
              🎭 События
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
