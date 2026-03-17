import "./Hero.css"

export function Hero () {
    return (
        <header className="hero">

        <div className="hero-topo">
            <p className="titulo">UX UI DESIGNER | FRONT END</p>
        </div>


        <div className="hero-central">
            <h1> 
            <span className="port">Port</span>
            <span className="folio">fólio</span>
            </h1>
        </div>

        <div className="hero-name">
            <p className="nome">LUANA OLIVEIRA</p>
        </div>

        <div className="linha-horizontal"></div>
        <div className="linha-vertical"></div>

        </header>
    )
}