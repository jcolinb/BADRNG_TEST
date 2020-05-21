import {state,acts,pipe,Nomad} from './Beatnik.js'
import {list} from './dredge.js'

const parse_response = pipe(({data})=>data[0],({image_uris})=>image_uris,({png})=>document.getElementById('card').style.backgroundImage = `url(${png})`)

const load_card = (nom) => fetch(`https:\/\/api.scryfall.com/cards/search?q=${nom.replace(/( )/gi,'+')}`).then((r)=>r.json()).then(parse_response)

const build_list = ({nom,num}) => {
  const item = document.createElement('div');
  item.classList.add('card');
  item.textContent = `${nom} ${num}`;
  item.addEventListener('click',()=>load_card(nom));
  document.getElementById('list').appendChild(item);
  return true;
}

list.map(build_list)
