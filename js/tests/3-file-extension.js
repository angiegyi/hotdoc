import getFileExtension from '../tasks/3-file-extension.js';
import assert from 'assert';

describe('getFileExtension', function() {

  it('returns "png" for "myphoto.png"', function() {
    assert.equal('png', getFileExtension('myphoto.png'));
  });

  it('returns "torrent" for "bigdata.torrent"', function() {
    assert.equal('torrent', getFileExtension('bigdata.torrent'));
  });

  it('returns false for "doesnothaveone"', function() {
    assert.equal(false, getFileExtension('doesnothaveone'));
  });

  it('returns "htaccess" for ".htaccess"', function() {
    assert.equal('htaccess', getFileExtension('.htaccess'));
  });

});
