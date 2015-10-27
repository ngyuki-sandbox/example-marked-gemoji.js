var data = require('./gemoji.json');

function findByAlias(name)
{
    if (data.aliases[name] == null) {
        return null;
    }
    return data.aliases[name];
}

module.exports = {
    findByAlias: findByAlias
}
