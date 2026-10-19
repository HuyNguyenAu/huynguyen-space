import { Article, Item, Lede, List, Section } from "@/components/article";

export const EnergyLocalsGraduateITSpecialistPage = () => {
  return (
    <Article
      section="Professional Experience"
      kicker="Energy Locals · Melbourne · Sep 2019 - Oct 2020"
      title="Graduate IT Specialist"
      stack="Python · SQL Server · AEMO Market Management System (MMS) · PowerShell · Bash · Azure"
    >
      <Lede>
        My first role after graduating from RMIT, where I focused on automating
        energy market data ingestion, wholesale settlement audits, and internal
        tools for a growing retail energy provider.
      </Lede>

      <Section title="Market Data and Settlement Automation">
        <List>
          <Item>
            Automated daily verification of AEMO wholesale settlement runs using
            Python and SQL to verify billing calculations and catch
            discrepancies early.
          </Item>
          <Item>
            Built data ingestion feeds for electricity spot prices and regional
            energy demand data to support daily trading and forecasting.
          </Item>
        </List>
      </Section>

      <Section title="Systems and Infrastructure Automation">
        <List>
          <Item>
            Wrote PowerShell, Bash, and Python scripts for automated database
            backups and recovery testing.
          </Item>
          <Item>
            Created setup scripts to automate developer workstation
            configuration, saving time when onboarding new engineers.
          </Item>
        </List>
      </Section>
    </Article>
  );
};
