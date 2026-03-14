import { cookiesData } from "./cookies-data";

export default function Cookies() {
    const ListCookies = cookiesData.map(cookie => (
        <div key={cookie.id} className="cookie-card">
            <div className="cookie-img-wrapper">
                <img className="cookie-img" src={cookie.image} alt={cookie.name} />
            </div>
            <div className="cookie-content">
                <div className="cookie-header">
                    <h2 className="cookie-name">{cookie.name}</h2>
                    <span className="cookie-price">${cookie.price}</span>
                </div>
                <p className="cookie-desc">{cookie.description}</p>
                <div className="cookie-footer">
                    <span className="cookie-weight">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        {cookie.weight}
                    </span>
                    {cookie.isAvailable 
                        ? <span className="badge badge-available">Disponible</span> 
                        : <span className="badge badge-unavailable">Agotado</span>
                    }
                </div>
            </div>
        </div>
    ));

    return (
        <div className="menu-container">
            <h1 className="menu-title">Nuestro Menú</h1>
            <div className="cookies-grid">
                {ListCookies}
            </div>
        </div>
    )
}