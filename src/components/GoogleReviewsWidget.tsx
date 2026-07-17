import { ExternalLink } from "lucide-react";
import { site } from "../data/site";

export function GoogleReviewsWidget() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="elfsight-app-1c4fccd1-8df2-4daf-8ca4-47026f7e1e54 w-full" data-elfsight-app-lazy></div>
      <a
        href={site.googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
      >
        View all reviews on Google <ExternalLink size={15} />
      </a>
    </div>
  );
}
