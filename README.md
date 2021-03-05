# Element-Creator-JS
Creates elements with javascript array easily.

```javascript
var elements = [
	{
		'tag': 'div',
		'html': 'a',
		'child': [
			{
				'tag': 'button',
				'att': {
					'id': 'wowow'
				},
				'html': 'e',
				'script': {
					'click': function(params) {
						console.log(this);
					}
				}
			}
		]
	}
];

create(elements, document.body);
```
