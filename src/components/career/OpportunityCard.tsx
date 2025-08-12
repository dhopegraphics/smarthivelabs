import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";

import { type CareerOpportunity } from "../../data/careerOpportunities";

interface OpportunityCardProps {
  opportunity: CareerOpportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const {
    icon: Icon,
    title,
    description,
    buttonText,
    buttonLink,
    disabled,
  } = opportunity;

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden">
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="bg-primary/10 rounded-xl p-3 group-hover:bg-primary/20 transition-colors">
            <Icon size={28} className="text-primary" />
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            Full-time
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="h-3 w-3 mr-1" />
            Remote/Hybrid
          </div>

          {buttonLink && !disabled ? (
            <Link href={buttonLink}>
              <Button
                variant="ghost"
                size="sm"
                className="group-hover:bg-primary group-hover:text-white transition-all duration-300 hover:scale-105"
              >
                {buttonText}
                <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              disabled={disabled}
              className="opacity-50 cursor-not-allowed"
            >
              {buttonText}
              <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
}
