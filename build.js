var fs = require('fs');
require('string.prototype.codepointat');
var list = require('./src/emoji.json');

var names = {};
var aliases = {};

list.forEach(function(item){

    if (item.emoji == null) {
        return;
    }

    if (item.aliases.length == 0) {
        return;
    }

    var name = item.aliases[0];

    if (item.aliases.length > 1) {
        item.aliases.splice(1).forEach(function(alias){
            aliases[alias] = name;
        })
    }

    names[name] = item.emoji.codePointAt(0);
})

fs.writeFileSync('./lib/gemoji.json', JSON.stringify({
    names: names,
    aliases: aliases,
}));
