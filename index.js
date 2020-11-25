
paintBeer = (data) => {
    const beerPage = document.querySelector("#beerPage")
    beerPage.className = 'beerPage';

    data.forEach((singleBeer) => {
        
        const beerCard = document.createElement('div')
        beerCard.className = 'beerCard';

        beerCard.innerHTML = `
        <div id="beerName" class="beerName"><h2>${singleBeer.name}</h2></div>
        <aside id="image" class="image"><img src="${singleBeer.image}" alt="${singleBeer.name}"></aside>
        <div id="infoBeer" class="infoBeer">
            <div id="tagline" class="tagline"><h3>${singleBeer.tagline}</h3></div>
            <div id="beerDescription" class="beerDescription"><h4>${singleBeer.description}</h4></div>
        </div>
        <div id="brewingTip" class="brewingTip"><h3>${singleBeer.brewers_tips}</h3></div>
    </div>
        `
        beerPage.append(beerCard)
    })
}


const urlBeers = 'https://api.punkapi.com/v2/beers'

const formatBeerInfo = () => {
    fetch(urlBeers)
        .then((raw) => raw.json())
        .then((result) => {
            result.map((beer) => {
                let beerInfo = {
                    id: beer.id,
                    name: beer.name,
                    tagline: beer.tagline,
                    description: beer.description,
                    image: beer.image_url,
                    brewers_tips: beer.brewers_tips,
                }
                //console.log(beerInfo)
                paintBeer(beerInfo)
            })
        })
        .catch(error => console.error(error.message))
}



formatBeerInfo()