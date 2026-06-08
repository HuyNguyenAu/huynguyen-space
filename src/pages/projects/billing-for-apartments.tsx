import { Article } from "@/components/article";

export const BillingForApartments = () => {
  return (
    <Article>
      <h3>Billing for Apartments</h3>
      <p>
        <strong>Role:</strong> Lead Full-Stack Engineer
        <br />
        <strong>Company:</strong> JET Charge
        <br />
        <strong>Context: </strong>Owners Corporations and property managers of
        apartment complexes face significant challenges in billing residents for
        EV energy usage.
      </p>

      <h4>The Challenge</h4>
      <p>
        Traditional billing methods often rely on manual meter readings or flat
        fees, which can lead to inaccuracies, disputes, and dissatisfaction
        among residents. The lack of a streamlined, automated billing system
        that integrates with existing utility data has created a pressing need
        for a solution that can provide accurate, transparent, fair, and
        efficient billing for apartment EV energy usage.
      </p>

      <h4>The Solution</h4>
      <ul>
        <li>
          <strong>Billing Module:</strong> Architected and implemented a billing
          module that cleaning intergrates into exsting legacy systems that
          calculates energy usage for each resident based on utility data and
          charging data, ensuring accurate billing based on actual consumption.
          <ul>
            <li>
              <strong>Stripe Integration:</strong> Engineered and implemented a
              robust integration with Stripe to facilitate secure meter-based
              billing for apartment EV energy usage and enable seamless payment
              processing for residents, ensuring a smooth and efficient billing
              experience. This integration allows for automated billing based on
              actual energy consumption, providing transparency and accuracy in
              the billing process.
            </li>
            <li>
              <strong>Data Integration:</strong> Integrated with utility data
              sources and charging data to accurately calculate energy usage for
              each resident, ensuring precise billing based on actual
              consumption.
            </li>
            <li>
              <strong>API Development:</strong> Developed APIs to allow for
              integration with external systems/applications, enabling
              flexibility and extensibility in the billing system.
            </li>
            <li>
              <strong>Shared Charging:</strong> Developed support for shared
              charging stations, allowing multiple residents to use the same
              charger while accurately tracking and billing their individual
              energy usage.
            </li>
          </ul>
        </li>
      </ul>

      <h4>The Outcome</h4>
      <p>
        The apartment owners corporation and property managers are able to set
        tariffs and register chargers for billing, and residents can view their
        energy usage and billing history through a user-friendly interface. The
        system has significantly improved billing accuracy, reduced disputes,
        and enhanced resident satisfaction by providing transparent and fair
        billing based on actual energy consumption.
      </p>
    </Article>
  );
};
