let fs = require('fs');

const FILE_NAME = 'api/db/vocabulary.json';

let wordRepo = {
  get: function(resolve, reject) {
    fs.readFile(FILE_NAME, function(err, data) {
      if(err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  },
  getByID: function(id, resolve, reject){
    fs.readFile(FILE_NAME, function(err, data) {
      if(err) {
        reject(err);
      } else {
        let word = JSON.parse(data).find(w => w.id == id);
        resolve(word);
      }
    })
  },
  search: function(searchObject, resolve, reject) {
    fs.readFile(FILE_NAME, function(err, data) {
      if(err) {
        reject(err);
      } else {
        let words = JSON.parse(data);
        if(searchObject) {
          words = words.filter(
            w => searchObject.search ? w.wordFR.toLowerCase().indexOf(searchObject.search.toLowerCase()) >= 0: true
          )
        }
        resolve(words)
      }
    })
  },
  insert: function(newData, resolve, reject) {
    fs.readFile(FILE_NAME, function(err, data) {
      if(err) {
        reject(err);
      } else {
        let words = JSON.parse(data);
        words.push(newData);
        fs.writeFile(FILE_NAME, JSON.stringify(words), function(err) {
          if(err) {
            reject(err);
          } else {
            resolve(newData);
          }
        })
      }
    })
  },
  delete: function(id, resolve, reject) {
    fs.readFile(FILE_NAME, function(err, data) {
      if(err) {
        reject(err);
      } else {
        let words = JSON.parse(data);
        let index = words.findIndex(w => w.id == id);
        if (index != -1) {
          words.splice(index, 1);
          fs.writeFile(FILE_NAME, JSON.stringify(words), function(err) {
            if(err) {
              reject(err);
            } else {
              resolve(index);
            }
          })
        }
      }

    })
  }
};

module.exports = wordRepo;