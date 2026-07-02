/* ==========================================================
   SEYONIX
   HERO METRICS
   ----------------------------------------------------------
   Production Ready
   Version : 1.0.0
========================================================== */

import type {
  HeroMetric,
  HeroMetricsProps,
} from "../hero.types";

const HeroMetrics = ({
  metrics,
}: HeroMetricsProps) => {
  return (
    <section
      className="hero-metrics"
      aria-label="Business Highlights"
    >
      {metrics.map((metric: HeroMetric) => (
        <article
          key={metric.id}
          className="hero-metric-card"
        >
          <h3 className="hero-metric-value">
            {metric.value}
            {metric.suffix && (
              <span>{metric.suffix}</span>
            )}
          </h3>

          <h4 className="hero-metric-label">
            {metric.label}
          </h4>

          {metric.description && (
            <p className="hero-metric-description">
              {metric.description}
            </p>
          )}
        </article>
      ))}
    </section>
  );
};

export default HeroMetrics;