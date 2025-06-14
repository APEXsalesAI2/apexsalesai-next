import HomeDashboardTabsClient from "./HomeDashboardTabsClient";

export default function WOWDashboardSection() {
  return (
    <section className="relative z-20 py-24 bg-gradient-to-b from-[#091018]/80 to-[#0d1321]">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#00c2cb] to-[#a0aec0] bg-clip-text text-transparent animate-fade-in">
            Real-Time Sales & Marketing Intelligence
          </h2>
          <p className="text-lg text-[#cbd5e0] max-w-2xl mx-auto animate-fade-in delay-200">
            Instantly visualize your pipeline, conversion trends, and revenue momentum—all powered by ApexSalesAI's predictive engine.
          </p>
        </div>
        <div className="rounded-3xl shadow-2xl border border-[#00c2cb]/30 bg-[#181f2f]/90 p-2 md:p-8 animate-fade-in-up">
          <HomeDashboardTabsClient />
        </div>
      </div>
    </section>
  );
}
