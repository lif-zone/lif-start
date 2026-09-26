import React from 'react';
import ReactDOM from 'react-dom/client';
import {lif_domain_parse, lif_url_tr} from 'lif-kernel/util';
import {sites} from './sites.js';

const App = ()=>{
  let entries = Object.entries(sites);
  return (
    <div className="container">
    <img className="lif-logo" src="/.lif/npm/lif-kernel/lif.svg?raw=1" />
    <div className="grid">
      {entries.map(([key, site])=>
        <a key={key} className="card" onClick={()=>{
          window.location = lif_url_tr(site.url); }}>
          {site.icon
            ? <img className="card-icon" src={site.icon} />
            : <div className="card-icon placeholder">{site.title[0]}</div>
          }
          <span className="card-title">{site.title}</span>
        </a>
      )}
    </div>
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
