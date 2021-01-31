(function() {
 var publishing = false;
 var $publishBtn = $("#publish");
 var $publicCheck = document.getElementById("public");
 var orig = "\x3c!DOCTYPE html\x3e\n\x3chtml\x3e\n\t\x3chead\x3e\n\t\t\x3ctitle\x3eHTMLhouse\x3c\/title\x3e\n\t\t\x3cmeta name=\x22viewport\x22 content=\x22width=device-width, initial-scale=1.0\x22 \/\x3e\n\n\t\t\x3cstyle type=\x22text\/css\x22\x3e\n\t\tbody {\n\t\t    font-family: Helvetica, Tahoma, Arial, sans-serif;\n\t\t\tfont-size: 100%;\n\t\t\tmargin: 1em;\n\t\t}\n\t\timg {\n\t\t\tmax-width: 100%;\n\t\t}\n\t\t\x3c\/style\x3e\n\t\x3c\/head\x3e\n\t\x3cbody\x3e\n\t\t\x3ch1\x3eHTMLhouse\x3c\/h1\x3e\n\t\t\x3cp\x3eWelcome!\x3c\/p\x3e\n\t\x3c\/body\x3e\n\x3c\/html\x3e\n";
 $publishBtn.addClass("no");

 var houses = JSON.parse(H.get('neighborhood', '[]'));
 var hasBuilt = houses.length > 0;
 function updatePreview() {
  var val = editor.getSession().getValue();
  try {
     $view.contents().find("body").html(val);
  } catch (err) {
     console.error(err);
  }
  if (val != orig) {
   publishing = false;
   $publishBtn.removeClass("no");
   $publishBtn.text("publish");
  } else {
   publishing = true;
   $publishBtn.addClass("no");
   $publishBtn.text("publish" + (!hasBuilt ? " (edit first)" : ""));
  }
 }
 var justPublished = false;
 var editor = ace.edit("editor");
 var $view = $('#preview');
 editor.setTheme("ace/theme/chrome");
 editor.session.setMode("ace/mode/html");
 editor.getSession().on('change', updatePreview);
 var saved = H.get('constructionSite', '');
 if (saved !== '') {
  editor.setValue(saved);
 }
 updatePreview();

 window.addEventListener('beforeunload', function(e) {
  if (!justPublished) {
   H.set('constructionSite', editor.getSession().getValue());
  }
  return null;
 });

 if (hasBuilt) {
  $('header').append('<a href="houses.html">my pages</a>');
 }
 
 
 $publishBtn.on('click', function(e) {
  e.preventDefault();
  if (publishing) {
   return;
  }
  publishing = true;
  $.ajax({
   type: "POST",
   url: "/⌂/create",
   data: {html: editor.getSession().getValue(), public: $publicCheck.checked ? "true" : ""},
   success: function(data, status, xhr) {
    publishing = false;
    if (data.code == 201) {
     var houses = JSON.parse(H.get('neighborhood', '[]'));
     houses.push({id: data.data.id, token: xhr.getResponseHeader('Authorization')});
     H.set('neighborhood', JSON.stringify(houses));
     justPublished = true;
     H.remove('constructionSite');
     window.location = '/' + data.data.id + '.html';
    } else {
     alert(data.error_msg);
    }
   },
   error: function(jqXHR, status, error) {
    publishing = false;
    alert(error);
   }
  });
 });
  var _paq = _paq || [];
  _paq.push(["setCookieDomain", "*.html.house"]);
  _paq.push(["setDomains", ["*.html.house"]]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.write.as/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', 3]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
})();
