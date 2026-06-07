export default function About() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-content mx-auto px-6">
        <h1 className="text-5xl font-bold mb-16">About</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                The London Brief was founded in 2008, at the height of the global financial crisis. 
                As extraordinary world events began to overwhelm markets, I found it valuable 
                to write about macroeconomic conditions as a means of imposing analytical order
                on a period of considerable uncertainty.
              </p>
              <p>
                Since then, it has evolved into a weekly discipline, an opportunity to examine a 
                macroeconomic or geopolitical factor with the potential to move markets,
                accompanied by a few random thoughts in the end notes.
              </p>
              <p>
                What began as a note circulated among a small group of friends gradually found its way to a
                wider audience of investors. As the readership grew, it seemed the right moment to establish
                a more formal home and open it to anyone with an interest in markets and the forces that
                shape them.
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
