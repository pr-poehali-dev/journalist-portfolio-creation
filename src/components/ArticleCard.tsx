import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  categoryColor: string;
}

const ArticleCard = ({
  title,
  excerpt,
  category,
  date,
  readTime,
  image,
  url,
  categoryColor,
}: ArticleCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-slate-200">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant="secondary"
            className={`${categoryColor} text-white font-medium`}
          >
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors line-clamp-2 leading-tight">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              {readTime}
            </span>
          </div>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-purple-600 hover:text-purple-800 transition-colors font-medium"
          >
            Читать
            <Icon name="ExternalLink" size={14} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
