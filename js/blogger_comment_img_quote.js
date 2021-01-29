a = document['getElementById']('comments');
if (a) {
    b = a['getElementsByTagName']('DD');
    for (i = 0; i < b['length']; i++) {
        _str = b['item'](i)['innerHTML'];
        replaceneechal();
        b['item'](i)['innerHTML'] = _str;
    };
};
c = document['getElementById']('comment-holder');
if (c) {
    _str = c['innerHTML'];
    replaceneechal();
    c['innerHTML'] = _str;
};

function replaceneechal() {
    _str = _str['replace'](/\гЂ€/gi, '<');
    _str = _str['replace'](/\гЂ‰/gi, '>');
    _str = _str['replace'](/\[img\]/gi, '<img src=\'');
    _str = _str['replace'](/\[img\#\]/gi, '<img width=\'100%\' src=\'');
    _str = _str['replace'](/\[\/img\]/gi, '\' class=\'image\'/>');

    _str = _str['replace'](/(\[q=\")|(\[url\])/gi, '<table><tr><td><span class=comment-quote-name><span class=name-color>');
    _str = _str['replace'](/(\"\])|(\[\/url\]\[q\])/gi, '</span> писал\(а\)</span></td></tr></table><table class=comment-quote><tr><td>');
    _str = _str['replace'](/\[q\]/gi, '<table><tr><td><span class=comment-quote-name>Цитата</span></td></tr></table><table class=comment-quote><tr><td>');
    _str = _str['replace'](/\[\/q\]/gi, '</td></tr></table>');
    _str = _str['replace'](/table><br>/gi, 'table>');
};
