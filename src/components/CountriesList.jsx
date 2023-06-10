import React from "react";
import countries from '../countries.json';

function CountriesList() {
    return (
        <div className="col-5 scroll">
            <div className="list-group">
                {countries.map((country) => (
                    <a key={country.cca3} className="list-group-item list-group-item-action" href="/FLK">
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                            alt={country.name.common}/> {country.name.common}</a>
                ))}
            </div>
        </div>
    );
}

export default CountriesList;
