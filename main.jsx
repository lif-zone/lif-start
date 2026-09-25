import React from 'react';
import ReactDOM from 'react-dom/client';
import {lif_domain_parse} from 'lif-kernel/util';
import {sites} from './sites.js';

function lif_url(site){
  let m = site.match(/^(.*)\.lif$/);
  let domain = lif_domain_parse(''+location);
  return location.protocol+'//'+m[1]+domain.root+location.port;
}

const App = ()=>{
  let entries = Object.entries(sites);
  return (
    <div className="grid">
      {entries.map(([key, site])=>
        <a key={key} className="card" onClick={()=>{
          window.location = lif_url(site.url); }}>
          {site.icon
            ? <img className="card-icon" src={site.icon} />
            : <div className="card-icon placeholder">{site.title[0]}</div>
          }
          <span className="card-title">{site.title}</span>
        </a>
      )}
    </div>
  );
};

function main(){
  // add stylesheet
  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = import.meta.resolve('./style.css');
  document.head.appendChild(link);
  // start app
  let _root = document.body.appendChild(document.createElement('div'));
  let root = ReactDOM.createRoot(_root);
  root.render(<App />);
}

main();
