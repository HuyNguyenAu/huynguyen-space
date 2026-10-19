import { Article, Item, Lede, List, Section } from "@/components/article";

export const EnergyLocalsITSpecialistPage = () => {
  return (
    <Article
      section="Professional Experience"
      kicker="Energy Locals · Melbourne · Oct 2020 - Oct 2021"
      title="IT Specialist"
      stack="Laravel (PHP) · Bootstrap · C# · Python · SQL Server · Westpac & Equifax KYC APIs · Linux VPS · Bash / PowerShell"
      figures={[
        { value: "10,000+", caption: "customers onboarded automatically" },
        {
          value: "Under 60 s",
          caption: "identity and credit checks, down from 2 - 3 days",
        },
        { value: "10 - 15 h", caption: "of analyst time saved each week" },
        {
          value: "Under 2 h",
          caption: "engineer onboarding, down from 2 days",
        },
      ]}
    >
      <Lede>
        I built customer onboarding systems, wholesale settlement reconciliation
        tools, and internal data pipelines for an Australian energy retailer,
        operating in a regulated market handling customer identity and financial
        records.
      </Lede>

      <Section title="1. Multi Tenant Customer Onboarding">
        <List>
          <Item>
            Built a white label customer onboarding platform in Laravel and
            Bootstrap with automated multi tenant database setup, making it easy
            to launch new retail energy partners without custom engineering
            work.
          </Item>
          <Item>
            Automated customer signups, replacing manual account creation
            (around 20 minutes each) and processing over 10,000 customers.
          </Item>
          <Item>
            Integrated Westpac and Equifax KYC APIs for automated identity and
            credit checks, cutting verification times from 2 - 3 business days
            to under 60 seconds while meeting retail compliance requirements.
          </Item>
        </List>
      </Section>

      <Section title="2. Wholesale Settlement Reconciliation">
        <List>
          <Item>
            Built daily reconciliation scripts in Python and SQL between AEMO
            wholesale electricity market settlements and customer meter data,
            catching calculation discrepancies early.
          </Item>
          <Item>
            Built billing calculation pipelines to handle complex time of use
            tariffs and wholesale pass through pricing models.
          </Item>
        </List>
      </Section>

      <Section title="3. Data Pipelines and Infrastructure Automation">
        <List>
          <Item>
            Automated internal business reporting using C# and SQL ETL jobs,
            saving analysts 10 - 15 hours a week of manual spreadsheet tasks.
          </Item>
          <Item>
            Wrote Bash and PowerShell scripts to automate developer workstations
            and server setup, cutting new engineer onboarding time from 2 days
            to under 2 hours.
          </Item>
          <Item>
            Managed Linux database servers, including automated backup routines,
            system monitoring, and disaster recovery procedures.
          </Item>
        </List>
      </Section>
    </Article>
  );
};
