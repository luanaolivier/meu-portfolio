import "./Header.css"

export function Header () {
    return (
        <header className="header">

        <div className="header-left">
            <span className="prazer">Prazer,</span>
            <span className="luana">Luana!</span>
        </div>

        <nav className="header-menu">
            <ul>
                <li>Skills</li>
                <li>Cursos</li>
                <li>Projetos</li>
            </ul>
        </nav>

        <div className="header-contact">
            <span className="c">C</span>
            <span className="ontato">ONTATO</span>
        </div>

        </header>
    )
}