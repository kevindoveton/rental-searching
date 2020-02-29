import fetch from 'node-fetch';
import cheerio from 'cheerio';

const data = [
  // central  
  "https://goodmigrations.com/city-guides/london/angel",
  "https://goodmigrations.com/city-guides/london/archway",
  "https://goodmigrations.com/city-guides/london/bankside",
  "https://goodmigrations.com/city-guides/london/barnsbury",
  "https://goodmigrations.com/city-guides/london/bayswater",
  "https://goodmigrations.com/city-guides/london/belgravia",
  "https://goodmigrations.com/city-guides/london/belsize-park",
  "https://goodmigrations.com/city-guides/london/bermondsey",
  "https://goodmigrations.com/city-guides/london/bloomsbury",
  "https://goodmigrations.com/city-guides/london/brixton",
  "https://goodmigrations.com/city-guides/london/brompton",
  "https://goodmigrations.com/city-guides/london/camberwell",
  "https://goodmigrations.com/city-guides/london/camden-town",
  "https://goodmigrations.com/city-guides/london/canonbury",
  "https://goodmigrations.com/city-guides/london/chalk-farm",
  "https://goodmigrations.com/city-guides/london/charing-cross",
  "https://goodmigrations.com/city-guides/london/chelsea",
  "https://goodmigrations.com/city-guides/london/chinatown",
  "https://goodmigrations.com/city-guides/london/city-of-london",
  "https://goodmigrations.com/city-guides/london/clapham",
  "https://goodmigrations.com/city-guides/london/clerkenwell",
  "https://goodmigrations.com/city-guides/london/covent-garden",
  "https://goodmigrations.com/city-guides/london/dartmouth-park",
  "https://goodmigrations.com/city-guides/london/de-beauvoir-town",
  "https://goodmigrations.com/city-guides/london/denmark-hill",
  "https://goodmigrations.com/city-guides/london/dulwich",
  "https://goodmigrations.com/city-guides/london/earls-court",
  "https://goodmigrations.com/city-guides/london/east-dulwich",
  "https://goodmigrations.com/city-guides/london/elephant-and-castle",
  "https://goodmigrations.com/city-guides/london/farringdon",
  "https://goodmigrations.com/city-guides/london/fitzrovia",
  "https://goodmigrations.com/city-guides/london/gipsy-hill",
  "https://goodmigrations.com/city-guides/london/gospel-oak",
  "https://goodmigrations.com/city-guides/london/hampstead",
  "https://goodmigrations.com/city-guides/london/herne-hill",
  "https://goodmigrations.com/city-guides/london/highbury",
  "https://goodmigrations.com/city-guides/london/highgate",
  "https://goodmigrations.com/city-guides/london/holborn",
  "https://goodmigrations.com/city-guides/london/holland-park",
  "https://goodmigrations.com/city-guides/london/holloway",
  "https://goodmigrations.com/city-guides/london/islington",
  "https://goodmigrations.com/city-guides/london/kennington",
  "https://goodmigrations.com/city-guides/london/kensington",
  "https://goodmigrations.com/city-guides/london/kentish-town",
  "https://goodmigrations.com/city-guides/london/kings-cross",
  "https://goodmigrations.com/city-guides/london/knightsbridge",
  "https://goodmigrations.com/city-guides/london/lambeth",
  "https://goodmigrations.com/city-guides/london/lisson-grove",
  "https://goodmigrations.com/city-guides/london/maida-vale",
  "https://goodmigrations.com/city-guides/london/marylebone",
  "https://goodmigrations.com/city-guides/london/mayfair",
  "https://goodmigrations.com/city-guides/london/north-kensington",
  "https://goodmigrations.com/city-guides/london/notting-hill",
  "https://goodmigrations.com/city-guides/london/nunhead",
  "https://goodmigrations.com/city-guides/london/paddington",
  "https://goodmigrations.com/city-guides/london/peckham",
  "https://goodmigrations.com/city-guides/london/pimlico",
  "https://goodmigrations.com/city-guides/london/primrose-hill",
  "https://goodmigrations.com/city-guides/london/rotherhithe",
  "https://goodmigrations.com/city-guides/london/soho",
  "https://goodmigrations.com/city-guides/london/somers-town",
  "https://goodmigrations.com/city-guides/london/south-bank",
  "https://goodmigrations.com/city-guides/london/south-kensington",
  "https://goodmigrations.com/city-guides/london/st-john-s-wood",
  "https://goodmigrations.com/city-guides/london/st-pancras",
  "https://goodmigrations.com/city-guides/london/st-james-s",
  "https://goodmigrations.com/city-guides/london/stockwell",
  "https://goodmigrations.com/city-guides/london/streatham",
  "https://goodmigrations.com/city-guides/london/surrey-quays",
  "https://goodmigrations.com/city-guides/london/swiss-cottage",
  "https://goodmigrations.com/city-guides/london/tufnell-park",
  "https://goodmigrations.com/city-guides/london/tulse-hill",
  "https://goodmigrations.com/city-guides/london/vauxhall",
  "https://goodmigrations.com/city-guides/london/walworth",
  "https://goodmigrations.com/city-guides/london/west-brompton",
  "https://goodmigrations.com/city-guides/london/west-hampstead",
  "https://goodmigrations.com/city-guides/london/west-norwood",
  "https://goodmigrations.com/city-guides/london/westminster",

  // west
  "https://goodmigrations.com/city-guides/london/fulham",
  "https://goodmigrations.com/city-guides/london/hammersmith",
  "https://goodmigrations.com/city-guides/london/old-oak-common",
  "https://goodmigrations.com/city-guides/london/parsons-green",
  "https://goodmigrations.com/city-guides/london/sands-end",
  "https://goodmigrations.com/city-guides/london/shepherd-s-bush",
  "https://goodmigrations.com/city-guides/london/west-kensington",
  "https://goodmigrations.com/city-guides/london/white-city",

  // north
  "https://goodmigrations.com/city-guides/london/beckton",
  "https://goodmigrations.com/city-guides/london/bellingham",
  "https://goodmigrations.com/city-guides/london/bethnal-green",
  "https://goodmigrations.com/city-guides/london/blackheath",
  "https://goodmigrations.com/city-guides/london/blackwall",
  "https://goodmigrations.com/city-guides/london/bow",
  "https://goodmigrations.com/city-guides/london/brockley",
  "https://goodmigrations.com/city-guides/london/cambridge-heath",
  "https://goodmigrations.com/city-guides/london/canary-wharf",
  "https://goodmigrations.com/city-guides/london/canning-town",
  "https://goodmigrations.com/city-guides/london/catford",
  "https://goodmigrations.com/city-guides/london/clapton",
  "https://goodmigrations.com/city-guides/london/crofton-park",
  "https://goodmigrations.com/city-guides/london/cubitt-town",
  "https://goodmigrations.com/city-guides/london/custom-house",
  "https://goodmigrations.com/city-guides/london/dalston",
  "https://goodmigrations.com/city-guides/london/deptford",
  "https://goodmigrations.com/city-guides/london/east-ham",
  "https://goodmigrations.com/city-guides/london/forest-gate",
  "https://goodmigrations.com/city-guides/london/forest-hill",
  "https://goodmigrations.com/city-guides/london/grove-park",
  "https://goodmigrations.com/city-guides/london/hackney",
  "https://goodmigrations.com/city-guides/london/hackney-wick",
  "https://goodmigrations.com/city-guides/london/haggerston",
  "https://goodmigrations.com/city-guides/london/hither-green",
  "https://goodmigrations.com/city-guides/london/homerton",
  "https://goodmigrations.com/city-guides/london/honor-oak",
  "https://goodmigrations.com/city-guides/london/hoxton",
  "https://goodmigrations.com/city-guides/london/ladywell",
  "https://goodmigrations.com/city-guides/london/lea-bridge",
  "https://goodmigrations.com/city-guides/london/leamouth",
  "https://goodmigrations.com/city-guides/london/lee",
  "https://goodmigrations.com/city-guides/london/lewisham",
  "https://goodmigrations.com/city-guides/london/limehouse",
  "https://goodmigrations.com/city-guides/london/little-ilford",
  "https://goodmigrations.com/city-guides/london/manor-house",
  "https://goodmigrations.com/city-guides/london/mile-end",
  "https://goodmigrations.com/city-guides/london/millwall",
  "https://goodmigrations.com/city-guides/london/new-cross",
  "https://goodmigrations.com/city-guides/london/north-woolwich",
  "https://goodmigrations.com/city-guides/london/old-ford",
  "https://goodmigrations.com/city-guides/london/poplar",
  "https://goodmigrations.com/city-guides/london/shacklewell",
  "https://goodmigrations.com/city-guides/london/shadwell",
  "https://goodmigrations.com/city-guides/london/shoreditch",
  "https://goodmigrations.com/city-guides/london/silvertown",
  "https://goodmigrations.com/city-guides/london/south-hackney",
  "https://goodmigrations.com/city-guides/london/stamford-hill",
  "https://goodmigrations.com/city-guides/london/stepney",
  "https://goodmigrations.com/city-guides/london/stoke-newington",
  "https://goodmigrations.com/city-guides/london/stratford",
  "https://goodmigrations.com/city-guides/london/sydenham",
  "https://goodmigrations.com/city-guides/london/tower-hill",
  "https://goodmigrations.com/city-guides/london/upton-park",
  "https://goodmigrations.com/city-guides/london/wapping",
  "https://goodmigrations.com/city-guides/london/west-ham",
  "https://goodmigrations.com/city-guides/london/whitechapel",
  "https://goodmigrations.com/city-guides/london/beckton",
  "https://goodmigrations.com/city-guides/london/bellingham",
  "https://goodmigrations.com/city-guides/london/bethnal-green",
  "https://goodmigrations.com/city-guides/london/blackheath",
  "https://goodmigrations.com/city-guides/london/blackwall",
  "https://goodmigrations.com/city-guides/london/bow",
  "https://goodmigrations.com/city-guides/london/brockley",
  "https://goodmigrations.com/city-guides/london/cambridge-heath",
  "https://goodmigrations.com/city-guides/london/canary-wharf",
  "https://goodmigrations.com/city-guides/london/canning-town",
  "https://goodmigrations.com/city-guides/london/catford",
  "https://goodmigrations.com/city-guides/london/clapton",
  "https://goodmigrations.com/city-guides/london/crofton-park",
  "https://goodmigrations.com/city-guides/london/cubitt-town",
  "https://goodmigrations.com/city-guides/london/custom-house",
  "https://goodmigrations.com/city-guides/london/dalston",
  "https://goodmigrations.com/city-guides/london/deptford",
  "https://goodmigrations.com/city-guides/london/east-ham",
  "https://goodmigrations.com/city-guides/london/forest-gate",
  "https://goodmigrations.com/city-guides/london/forest-hill",
  "https://goodmigrations.com/city-guides/london/grove-park",
  "https://goodmigrations.com/city-guides/london/hackney",
  "https://goodmigrations.com/city-guides/london/hackney-wick",
  "https://goodmigrations.com/city-guides/london/haggerston",
  "https://goodmigrations.com/city-guides/london/hither-green",
  "https://goodmigrations.com/city-guides/london/homerton",
  "https://goodmigrations.com/city-guides/london/honor-oak",
  "https://goodmigrations.com/city-guides/london/hoxton",
  "https://goodmigrations.com/city-guides/london/ladywell",
  "https://goodmigrations.com/city-guides/london/lea-bridge",
  "https://goodmigrations.com/city-guides/london/leamouth",
  "https://goodmigrations.com/city-guides/london/lee",
  "https://goodmigrations.com/city-guides/london/lewisham",
  "https://goodmigrations.com/city-guides/london/limehouse",
  "https://goodmigrations.com/city-guides/london/little-ilford",
  "https://goodmigrations.com/city-guides/london/manor-house",
  "https://goodmigrations.com/city-guides/london/mile-end",
  "https://goodmigrations.com/city-guides/london/millwall",
  "https://goodmigrations.com/city-guides/london/new-cross",
  "https://goodmigrations.com/city-guides/london/north-woolwich",
  "https://goodmigrations.com/city-guides/london/old-ford",
  "https://goodmigrations.com/city-guides/london/poplar",
  "https://goodmigrations.com/city-guides/london/shacklewell",
  "https://goodmigrations.com/city-guides/london/shadwell",
  "https://goodmigrations.com/city-guides/london/shoreditch",
  "https://goodmigrations.com/city-guides/london/silvertown",
  "https://goodmigrations.com/city-guides/london/south-hackney",
  "https://goodmigrations.com/city-guides/london/stamford-hill",
  "https://goodmigrations.com/city-guides/london/stepney",
  "https://goodmigrations.com/city-guides/london/stoke-newington",
  "https://goodmigrations.com/city-guides/london/stratford",
  "https://goodmigrations.com/city-guides/london/sydenham",
  "https://goodmigrations.com/city-guides/london/tower-hill",
  "https://goodmigrations.com/city-guides/london/upton-park",
  "https://goodmigrations.com/city-guides/london/wapping",
  "https://goodmigrations.com/city-guides/london/west-ham",
  "https://goodmigrations.com/city-guides/london/whitechapel",

  // east
  "https://goodmigrations.com/city-guides/london/beckton",
  "https://goodmigrations.com/city-guides/london/bellingham",
  "https://goodmigrations.com/city-guides/london/bethnal-green",
  "https://goodmigrations.com/city-guides/london/blackheath",
  "https://goodmigrations.com/city-guides/london/blackwall",
  "https://goodmigrations.com/city-guides/london/bow",
  "https://goodmigrations.com/city-guides/london/brockley",
  "https://goodmigrations.com/city-guides/london/cambridge-heath",
  "https://goodmigrations.com/city-guides/london/canary-wharf",
  "https://goodmigrations.com/city-guides/london/canning-town",
  "https://goodmigrations.com/city-guides/london/catford",
  "https://goodmigrations.com/city-guides/london/clapton",
  "https://goodmigrations.com/city-guides/london/crofton-park",
  "https://goodmigrations.com/city-guides/london/cubitt-town",
  "https://goodmigrations.com/city-guides/london/custom-house",
  "https://goodmigrations.com/city-guides/london/dalston",
  "https://goodmigrations.com/city-guides/london/deptford",
  "https://goodmigrations.com/city-guides/london/east-ham",
  "https://goodmigrations.com/city-guides/london/forest-gate",
  "https://goodmigrations.com/city-guides/london/forest-hill",
  "https://goodmigrations.com/city-guides/london/grove-park",
  "https://goodmigrations.com/city-guides/london/hackney",
  "https://goodmigrations.com/city-guides/london/hackney-wick",
  "https://goodmigrations.com/city-guides/london/haggerston",
  "https://goodmigrations.com/city-guides/london/hither-green",
  "https://goodmigrations.com/city-guides/london/homerton",
  "https://goodmigrations.com/city-guides/london/honor-oak",
  "https://goodmigrations.com/city-guides/london/hoxton",
  "https://goodmigrations.com/city-guides/london/ladywell",
  "https://goodmigrations.com/city-guides/london/lea-bridge",
  "https://goodmigrations.com/city-guides/london/leamouth",
  "https://goodmigrations.com/city-guides/london/lee",
  "https://goodmigrations.com/city-guides/london/lewisham",
  "https://goodmigrations.com/city-guides/london/limehouse",
  "https://goodmigrations.com/city-guides/london/little-ilford",
  "https://goodmigrations.com/city-guides/london/manor-house",
  "https://goodmigrations.com/city-guides/london/mile-end",
  "https://goodmigrations.com/city-guides/london/millwall",
  "https://goodmigrations.com/city-guides/london/new-cross",
  "https://goodmigrations.com/city-guides/london/north-woolwich",
  "https://goodmigrations.com/city-guides/london/old-ford",
  "https://goodmigrations.com/city-guides/london/poplar",
  "https://goodmigrations.com/city-guides/london/shacklewell",
  "https://goodmigrations.com/city-guides/london/shadwell",
  "https://goodmigrations.com/city-guides/london/shoreditch",
  "https://goodmigrations.com/city-guides/london/silvertown",
  "https://goodmigrations.com/city-guides/london/south-hackney",
  "https://goodmigrations.com/city-guides/london/stamford-hill",
  "https://goodmigrations.com/city-guides/london/stepney",
  "https://goodmigrations.com/city-guides/london/stoke-newington",
  "https://goodmigrations.com/city-guides/london/stratford",
  "https://goodmigrations.com/city-guides/london/sydenham",
  "https://goodmigrations.com/city-guides/london/tower-hill",
  "https://goodmigrations.com/city-guides/london/upton-park",
  "https://goodmigrations.com/city-guides/london/wapping",
  "https://goodmigrations.com/city-guides/london/west-ham",
  "https://goodmigrations.com/city-guides/london/whitechapel",

  // south
  "https://goodmigrations.com/city-guides/london/beckenham",
  "https://goodmigrations.com/city-guides/london/bromley",
  "https://goodmigrations.com/city-guides/london/chislehurst",
  "https://goodmigrations.com/city-guides/london/crystal-palace"
];

const getCrimeRate = (text: string) => {
  switch (text) {
    case 'low':
      return 4
    case 'below average':
      return 3
    case 'average':
      return 2
    case 'above average':
      return 1
    case 'high':
      return 0
  }

  console.log(text)
  return -1;
}

const getWalkability = (text: string) => {
  switch (text) {
    case 'excellent':
      return 5;
    case 'good':
      return 4
    case 'average':
      return 3;
    case 'poor':
      return 2;
  }

  console.log(text);
  return -1
}

export const getData = async (url: string) => {
  const data = await (await fetch(url)).text()
  const $ = cheerio.load(data);
  const crimeRates = $('div.progress_chart p.description_text').text()
  const violentCrimeRate = getCrimeRate(crimeRates.replace(/.*[a(an)]\s(.*)violent.*/, '$1').trim());
  const propertyCrimeRate = getCrimeRate(crimeRates.replace(/.*[(an)a]\s(.*)property.*/, '$1').trim());
  const publicTransit = getWalkability($('div.full.pl_transit').text().toLowerCase().replace('public transit', '').trim());
  const walkability = getWalkability($('div.full.walkability').text().toLowerCase().replace('walkability', '').trim());
  const rentDetails = $('div.show_price_in_mob').eq(0).text().replace(',', '').trim();
  const rent = rentDetails !== 'N/A' ? Number(rentDetails) : -1;
  const commuteDetails = $('.neighborhood_heading').eq(0).next().text().replace(/\n/g, '').trim();

  // const commuteTime = $('.neighborhood_heading').eq(0).next().text();
  const commuteDistance = Number(commuteDetails.replace(/.*City:\s(.*?)\smiles.*/, '$1'))
  const name = url.replace(/.*\/(.*)/, '$1').replace(/-/g, ' ');
  // console.log('Violent Crime: ' + violentCrimeRate)
  // console.log('Property Crime: ' + propertyCrimeRate)
  // console.log('Public Transit: ' + publicTransit)
  // console.log('Walkability: ' + walkability)
  // console.log('Rent: ' + rent)
  // console.log('Commute Distance: ' + commuteDistance)
  // console.log()

  return {
    name,
    url,
    violentCrimeRate,
    propertyCrimeRate,
    publicTransit,
    walkability,
    rent,
    commuteDistance
  }
};

export async function getAllData() {
  const details = await Promise.all(data.map(d => getData(d)))
  return details;
}

