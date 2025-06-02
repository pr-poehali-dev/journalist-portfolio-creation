import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import ArticleCard from "@/components/ArticleCard";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const articles = [
    {
      title: "Женщины, кошки и фитнес по-гавайски",
      excerpt:
        "Костюмированная вечеринка в MULTIFIT WOMAN собрала любительниц фитнеса в ярких образах. Участницы показали креативность и спортивный дух.",
      category: "Спорт",
      date: "15 дек 2024",
      readTime: "3 мин",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      url: "https://gorodkovrov.ru/sport/zhenshhiny-koshki-i-fitnes-po-gavajski-kostyumirovannaya-vecherinka-v-multifit-woman.html",
      categoryColor: "bg-blue-500",
    },
    {
      title: "Жители дома на набережной не могут добиться расселения",
      excerpt:
        "Даже после решения суда жильцы аварийного дома продолжают борьбу за новое жилье. Разбираемся в сложной ситуации с переселением.",
      category: "Проблемы",
      date: "12 дек 2024",
      readTime: "5 мин",
      image:
        "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=250&fit=crop",
      url: "https://gorodkovrov.ru/problems/zhiteli-doma-na-naberezhnoj-ne-mogut-dobitsya-rasseleniya-dazhe-posle-resheniya-suda.html",
      categoryColor: "bg-red-500",
    },
    {
      title: "Самая красивая: победительница конкурса красоты Коврова",
      excerpt:
        "Интервью с обладательницей титула о подготовке к конкурсу, волнении на сцене и планах на будущее в модельной индустрии.",
      category: "События",
      date: "10 дек 2024",
      readTime: "4 мин",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=250&fit=crop",
      url: "https://gorodkovrov.ru/events/samaya-krasivaya-pobeditelnica-krasy-kovrova-rasskazala-ob-uchastii-v-konkurse.html",
      categoryColor: "bg-pink-500",
    },
    {
      title: "Битва на шпагах: где в Коврове обучают фехтованию",
      excerpt:
        "Знакомимся с тренерами и учениками фехтовального клуба. Узнаем, как древнее искусство владения шпагой развивается в нашем городе.",
      category: "Спорт",
      date: "8 дек 2024",
      readTime: "4 мин",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      url: "https://gorodkovrov.ru/sport/bitva-na-shpagax-gde-v-kovrove-obuchayut-fextovaniyu.html",
      categoryColor: "bg-blue-500",
    },
    {
      title: "На Байкал: энергопрактик рассказала о местах силы Сибири",
      excerpt:
        "Ковровчанка поделилась опытом духовного путешествия к священному озеру и рассказала о местах, которые дают особую энергию.",
      category: "Разное",
      date: "5 дек 2024",
      readTime: "6 мин",
      image:
        "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=400&h=250&fit=crop",
      url: "https://gorodkovrov.ru/obo_vsem/na-bajkal-energopraktik-iz-kovrova-rasskazala-o-mestax-sily-sibiri.html",
      categoryColor: "bg-green-500",
    },
  ];

  const categories = ["Все", "Спорт", "Проблемы", "События", "Разное"];

  const filteredArticles =
    activeCategory === "Все"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />

      <section id="portfolio" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Мои публикации
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Коллекция материалов о жизни Коврова — от спортивных достижений до
              важных социальных вопросов
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <div key={index} className="animate-fade-in">
                <ArticleCard {...article} />
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                В этой категории пока нет статей
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
