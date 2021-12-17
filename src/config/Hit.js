import React from 'preact/compat';
import { Highlight, Snippet } from 'react-instantsearch-dom';

import './Hit.scss';

export function Hit({ hit, insights, view }) {
  return (
    <article
      className="uni-Hit"
      onClick={() =>
        insights('clickedObjectIDsAfterSearch', {
          eventName: 'Product Clicked',
        })
      }
    >
      <a href={hit.url} className="uni-Hit-inner">
        <div className="uni-Hit-Body">
          <div className="uni-Hit-image">
            <img src={hit.imageUrl} alt={hit.name} loading="lazy" />
          </div>
          <header className="uni-Hit-header">
            <h2 className="uni-Hit-category">{hit.categories}</h2>
            <h1 className="uni-Hit-title">
              <Highlight attribute="name" tagName="mark" hit={hit} />
            </h1>
          </header>

          {view === 'list' && (
            <p className="uni-Hit-description">
              <Snippet attribute="description" tagName="mark" hit={hit} />
            </p>
          )}
        </div>
        <div className="uni-Hit-Actions"></div>
      </a>
    </article>
  );
}
