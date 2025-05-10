import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Head>
        <title>Aidomus - Real Estate Automation</title>
        <meta name="description" content="Automate your real estate workflows with Aidomus. AI-powered lead gen, follow-ups, and CRM integrations." />
      </Head>

      <main className="p-8">
        <section className="text-center max-w-2xl mx-auto py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Automate Your Real Estate Workflow</h1>
          <p className="text-xl md:text-2xl mb-6">Save Hours. Close More Deals.</p>
          <p className="text-md mb-8">
            Aidomus helps Canadian real estate agents and agencies streamline lead generation, client follow-ups, and admin tasks using AI automation — so you can focus on selling.
          </p>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Get Started Free →</a>
        </section>

        <section className="bg-gray-50 py-16 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Audit Your Workflow</h3>
              <p>We review how your agency handles leads, forms, follow-ups, and CRMs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Build Smart Automations</h3>
              <p>We deploy automations using tools like n8n, Airtable, and Google Sheets — no code needed from you.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Go Hands-Free</h3>
              <p>We monitor and optimize your automations so you can scale without burnout.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">What We Automate</h2>
          <ul className="grid md:grid-cols-2 gap-6 text-lg text-left">
            <li>🧲 Lead capture from forms, websites, and socials</li>
            <li>📧 Automated follow-ups & email nurturing</li>
            <li>🗂️ Lead routing & CRM updates (HubSpot, Zoho, etc.)</li>
            <li>📆 Auto-scheduling & calendar syncing</li>
            <li>📊 Weekly dashboards & KPI summaries</li>
          </ul>
        </section>

        <section className="bg-gray-100 py-16 px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">About Aidomus</h2>
          <p className="text-lg mb-6">
            We’re a Canadian automation agency built for real estate professionals. Our mission is simple: help agents close more deals with less effort — using smart, affordable automations.
          </p>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Book a Free Consultation</a>
        </section>

        <section id="contact" className="py-20 max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
          <form action="https://formspree.io/f/your_form_id" method="POST" className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" name="name" required className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" name="email" required className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea name="message" rows="4" required className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  )
}