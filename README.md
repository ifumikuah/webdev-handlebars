# Learn Handlebars.js
## Pt. 0: Person List I

[PREVIEW](https://vocal-pithivier-4e1c0f.netlify.app/)

Person List with Handlebars and Sass

## Recap

Import Handlebars.js (minified) and your own `script.js` too!

`<script src="https://s3.amazonaws.com/builds.handlebarsjs.com/handlebars.min-v4.7.8.js"></script>`

Fetch your local `json` data in `script.js`

```js
  fetch("./scripts/database.json")
  .then(response => {
    // ...response...
  })
  .then(data => {
    // processHandlebars("person-template", {person: data}, "person-generated")
  })
```

Create template structure for handlebars output inside `index.html`

```html
  <script id="person-template" type="text/x-handlebars-template">
    {{#each person}}
      <article class="members__member">
        <div class="member__figure">
          <img src="{{img}}" alt="lina_tanaka">
        </div>
        <div class="member__text-wrapper">
          <h1 class="member__name">{{name}}</h1>
          <div class="text-wrapper__additional">
            <p class="additional__age"><span class="bold">Age</span>{{calcAge birth_date name}}</p>
            <p class="additional__food"><span class="bold">Favorite Food</span>
              {{#each favorite_food}}
                {{this}}{{#unless @last}}, {{/unless}}
              {{/each}}
            </p>
          </div>
        </div>
      </article>
    {{/each}}
  </script>
```

In the end, that template need to be wrapped by single element/tag.

```html
<section id="person-generated" class="members__wrapper">
</section>
```

At top of `script.js`, compile the `json` data with handlebars

```js
const source = document.getElementById("person-template").innerHTML
const template = Handlebars.compile(source);
const generateHTML = template(theJsonData);
document.getElementById("person-generated").innerHTML = generateHTML
```

Enclose 4 lines of compile code above within a function with 3 parameters: `template`, `jsondata`, `output`

```js
function processHandlebars(hbsTemplate, rawText, outputContainer) {
  const source = document.getElementById(hbsTemplate).innerHTML
  const template = Handlebars.compile(source);
  const generateHTML = template( rawText );
  
  document.getElementById(outputContainer).innerHTML = generateHTML
}
```
