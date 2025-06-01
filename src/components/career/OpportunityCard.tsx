import { Button } from "@/components/ui/button";
import Link from "next/link";

import { type CareerOpportunity } from "../../data/careerOpportunities";

interface OpportunityCardProps {
  opportunity: CareerOpportunity;
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  const { icon: Icon, title, description, buttonText, buttonLink, disabled } = opportunity;
  
  return (
    <div className="bg-background p-6 hover:bg-slate-900 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Icon size={24} className="text-primary mb-2" />
      <h3 className="text-xl font-semibold mb-1 text-foreground">{title}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
        {description}
      </p>
      {buttonLink && !disabled ? (
        <Link href={buttonLink}>
          <Button variant="link" className="p-0 h-auto text-primary">
            {buttonText}
          </Button>
        </Link>
      ) : (
        <Button  variant="link" className="p-0 h-auto text-primary" disabled={disabled}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}