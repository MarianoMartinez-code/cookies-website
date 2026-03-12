import { cookiesData } from "./cookies-data";

export default function Cookies() {
    const ListCookies = cookiesData.map(cookie => (
        <div key={cookie.id}>
            <h1>{cookie.name}</h1>
            <p>{cookie.description}</p>
            <p>{cookie.price} $</p>
            <p>{cookie.weight}</p>
            {cookie.isAvailable ? <p>Available</p> : <p>Not Available</p>}
            <img width="100" height="100" src={cookie.image} alt={cookie.name} />
        </div>
    ));

    return (
        <div>
            <h1>Menu de Cookies</h1>
            {ListCookies}
        </div>
    )
}