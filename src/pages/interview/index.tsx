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
      <h4>
        <Link href="/interview/clear21" internal={true}>
          Clear21 Final Stage Briefing
        </Link>
      </h4>
      <p>
        Senior Full-Stack · Final behavioural round with Christian Hope. Story
        bank, product mindset, AI differentiator, questions to ask, and logistics.
      </p>
      <h4>
        <Link href="/interview/xero" internal={true}>
          Xero Final Stage Briefing
        </Link>
        <p>
          Senior Software Engineer · Values / Future Proof round with Tymon Bernard &
          Usman Khalid. STAR story bank, mid-to-senior mindset shift, AI differentiator,
          values mapping, and daily drill routine.
        </p>
      </h4>
    </Article>
  );
};
