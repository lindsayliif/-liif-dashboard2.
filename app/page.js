const companies = [
  { rank: 1, ticker: "NVDA", company: "NVIDIA", score: 91, verdict: "Strong Buy", trend: "+12.8%" },
  { rank: 2, ticker: "MSFT", company: "Microsoft", score: 89, verdict: "Buy", trend: "+7.4%" },
  { rank: 3, ticker: "ASML", company: "ASML Holding", score: 87, verdict: "Buy", trend: "+4.9%" },
  { rank: 4, ticker: "AMZN", company: "Amazon", score: 85, verdict: "Buy", trend: "+6.1%" },
  { rank: 5, ticker: "CRWD", company: "CrowdStrike", score: 84, verdict: "Watch", trend: "+3.2%" }
];

const cards = [
  ["Portfolio Value", "£1,000,000", "Planning model"],
  ["Target Income", "£50,000", "Annual gross"],
  ["Cash Reserve", "£100,000", "Two-year buffer"],
  ["LIIF Watchlist", "20 companies", "Global market scan"]
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div>
          <p className="eyebrow">LINDSAY INVESTMENT INTELLIGENCE FRAMEWORK</p>
          <h1>LIIF Dashboard</h1>
          <p className="subtitle">A clear, data-led view of portfolio quality, risk and opportunities.</p>
        </div>
        <div className="status"><span></span> System online</div>
      </header>

      <section className="grid">
        {cards.map(([label, value, note]) => (
          <article className="card" key={label}>
            <p>{label}</p>
            <h2>{value}</h2>
            <small>{note}</small>
          </article>
        ))}
      </section>

      <section className="panel">
        <div className="panelHeader">
          <div>
            <p className="eyebrow">CURRENT RANKING</p>
            <h2>Top LIIF candidates</h2>
          </div>
          <button>Monthly board view</button>
        </div>

        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Company</th>
                <th>LIIF score</th>
                <th>Verdict</th>
                <th>Momentum</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((item) => (
                <tr key={item.ticker}>
                  <td>{item.rank}</td>
                  <td>
                    <strong>{item.company}</strong>
                    <span>{item.ticker}</span>
                  </td>
                  <td>
                    <div className="score">
                      <b>{item.score}</b>
                      <div><i style={{ width: `${item.score}%` }}></i></div>
                    </div>
                  </td>
                  <td><span className="badge">{item.verdict}</span></td>
                  <td className="positive">{item.trend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="twoCol">
        <article className="panel">
          <p className="eyebrow">PORTFOLIO RULES</p>
          <h2>Investment discipline</h2>
          <ul>
            <li>Facts and data over emotion</li>
            <li>One company in, one company out</li>
            <li>Diversify beyond technology</li>
            <li>Review risk, valuation and catalysts monthly</li>
          </ul>
        </article>

        <article className="panel">
          <p className="eyebrow">NEXT DEVELOPMENT STEP</p>
          <h2>Connect live market data</h2>
          <p className="copy">
            This first version is safe and read-only. The next version can pull prices and financial data automatically.
            Broker trading access should only be added later, with strict controls and manual approval.
          </p>
        </article>
      </section>

      <footer>
        LIIF prototype · Sample figures only · Not financial advice
      </footer>
    </main>
  );
}
