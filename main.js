var books = [
{
  title: 'CSS: The Definitive Guide',
  author: 'Eric Meyer',
  link: 'http://shop.oreilly.com/product/0636920012726.do',
  type: 'css',
},
{
  title: 'CSS Development with CSS3',
  author: 'Zachary Kingston',
  link: 'http://shop.oreilly.com/product/0636920057970.do',
  type: 'css',
},
{
  title: 'You Don\'t Know JS: Up & Going',
  author: 'Kyle Simpson',
  link: 'http://shop.oreilly.com/product/0636920039303.do',
  type: 'js',
},
{
  title: 'Programming JavaScript Applications',
  author: 'Eric Elliott',
  link: 'http://shop.oreilly.com/product/0636920033141.do',
  type: 'js',
},
{
  title: 'Modern JavaScript',
  author: 'unknown',
  link: 'http://www.oreilly.com/web-platform/free/modern-javascript.csp',
  type: 'js',
}
];
var n = 0;
$.each(books, function(){
  $(".container").append("<div class=\"books book" + n + "\"></div>");
  $(".book"+ n).append("<h1>"+books[n].title+"</h1>");
  $(".book"+ n).append('<div class=\"infos info'+n+'\"></div>')
  $(".info"+ n).append("<h3>"+books[n].author + "</h3>");
  $(".info"+ n).append("<h3>"+books[n].type + "</h3>");
  $(".info"+ n).append("<a href=\""+books[n].link + "\">More</a>");
  n = n + 1;
})
