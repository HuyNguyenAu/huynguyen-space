import { Article } from "@/components/article";
import { Link } from "@/components/ui/typography";

export const InterviewIndexPage = () => {
  return (
    <Article>
      <h3>Interview Prep</h3>
      <p>Work references and prep material organised by company.</p>
      <h4>
        <Link href="/interview/jetcharge" internal={true}>
          JETCharge Work Reference
        </Link>
      </h4>
      <p>
        Full Stack Software Engineer · Oct 2021 - Jun 2026. Projects, key
        decisions, trade-offs, and impact across ZTC, Billing, Illuminate, and
        CORE v2.
      </p>
    </Article>
  );
};
