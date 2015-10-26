var data = require('./gemoji.json');

function findByAlias(name)
{
    if (data.aliases[name]) {
        name = data.aliases[name];
    }
    if (data.names[name] == null) {
        return null;
    }
    return data.names[name];
}

module.exports = {
    findByAlias: findByAlias
}
