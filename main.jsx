import React from 'react';
import ReactDOM from 'react-dom/client';
import {sites} from './sites.js';

const App = ()=>{
  let entries = Object.entries(sites);
  return (
    <div className="grid">
      {entries.map(([key, site])=>
        <a key={key} className="card" onClick={()=>{ window.location = 'http://'+site.url; }}>
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
