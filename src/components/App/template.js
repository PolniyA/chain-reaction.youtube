import React from 'react';
import MemeGrid from '../MemeGrid';

export function AppTemplate(component) {
  return (
    <div>
      <div className="demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100">
        <header className="demo-header mdl-layout__header mdl-layout__header--scroll mdl-color--grey-100 mdl-color-text--grey-800">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Chain Reaction: Episode Two</span>
            <div className="mdl-layout-spacer"></div>
          </div>
        </header>
        <div className="demo-ribbon"></div>
        <MemeGrid />
      </div>
    </div>
  );
}