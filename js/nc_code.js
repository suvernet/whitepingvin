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
    _str = _str['replace'](/\[im\]/gi, '<img src=\'');
    _str = _str['replace'](/\[im\#\]/gi, '<img width=\'100%\' src=\'');
    _str = _str['replace'](/\[\/im\]/gi, '\' class=\'image\'/>');
    _str = _str['replace'](/\[ma\]/gi, '<marquee>');
    _str = _str['replace'](/\[\/ma\]/gi, '</marquee>');
    _str = _str['replace'](/\[si\=\"/gi, '<font size=\'');
    _str = _str['replace'](/\[\/si\]/gi, '</font>');
    _str = _str['replace'](/\[co=\"/gi, '<font color=\'');
    _str = _str['replace'](/\[\/co\]/gi, '</font>');
    _str = _str['replace'](/\"\]/gi, '\'>');
    _str = _str['replace'](/\[ce\]/gi, '<center>');
    _str = _str['replace'](/\[\/ce\]/gi, '</center>');
    _str = _str['replace'](/\[ma\+\]/gi, '<marquee direction=\'right\'>');
    _str = _str['replace'](/\[\/ma\+\]/gi, '</marquee>');
    _str = _str['replace'](/\[box\]/gi, '<table frame=\'box\'><tr><td>');
    _str = _str['replace'](/\[\/box\]/gi, '</td></tr></table>');
    _str = _str['replace'](/\[mark\]/gi, '<table align=\'center\' frame=\'vsides\' width=\'70%\'><tr align=\'center\'><td>');
    _str = _str['replace'](/\[\/mark\]/gi, '</td></tr></table>');
    _str = _str['replace'](/\[line\]/gi, '<hr/>');
    _str = _str['replace'](/\[card\=\"/gi, '<table align=\'center\' border=\'1\' width=\'75%\'><tr><td align=\'center\' bgcolor=\'');
    _str = _str['replace'](/\[\/card\]/gi, '</td></tr></table>');
    _str = _str['replace'](/\[hi\=\"/gi, '<span style=\'background-color:');
    _str = _str['replace'](/\[\/hi\]/gi, '</span>');
};