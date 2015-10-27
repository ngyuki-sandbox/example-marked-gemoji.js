var fs = require('fs');
require('string.prototype.codepointat');
var list = require('./src/emoji.json');

var aliases = {};

list.forEach(function(item){

    if (item.emoji == null) {
        return;
    }

    if (item.aliases.length == 0) {
        return;
    }

    var codepoint = item.emoji.codePointAt(0);;

    item.aliases.forEach(function(alias){
        aliases[alias] = codepoint;
    })
})

fs.writeFileSync('./lib/gemoji.json', JSON.stringify({
    aliases: aliases,
}));
