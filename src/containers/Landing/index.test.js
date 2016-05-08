import * as React from 'react';
import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import Landing from './';

var fetchMock = require('fetch-mock');

// Mock the fetch
fetchMock
  .mock('http://localhost:3000/memes', 'GET', {
    data: [
      'http://www.multipelife.com/wp-content/uploads/2015/06/create-http-server-with-nodejs.png'
    ]
  });

describe('/components/Landing', () => {
  it('should render', (done) => {
    const item = renderIntoDocument(
      <Landing />
    );

    // Assertions
    expect(item).toExist();
    item.refreshMemes()
      .then(function() {
        expect(item.state.memes.length > 0).toBe(true, 'Memes should have been rendered');
        expect(fetchMock.called('http://localhost:3000/memes')).toBe(true);
        done();
      })
      .catch(function(err) {
        done(err);
      });
  });
});