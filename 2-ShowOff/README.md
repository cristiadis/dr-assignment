The Radio department wants a prototype of a radio spots frontpage.

The API endpoint documentation can be found here:
	https://www.dr.dk/mu-online-radio/swagger/ui/index#!/Spot/Spot_GetThemeSpots
	
https://www.dr.dk/mu-online-radio/api/1.0/spots/themes will return a list of radio spots.
	
You need to add the following HTTP header to use the API:   
`key`: `x-dr-mu-subscriber-id`  
`value`: `jsules/7sdk53(sr#sknms)!dgflllLKmdn4`

**Assignment:** Create a simple single page application reading the API endpoint above using front-end technologies and/or Node.js.

There are many ways to solve this assignment, feel free to use templating engines (e.g. Handlebars) or libraries such as React as you see fit.

Write well-structured semantic HTML5 and use CSS3 where it makes sense. The solution should be cross-browser compatible (IE11+) and mobile-friendly.

*You're allowed to keep a static copy of the data feed in your solution to avoid cross-domain issues.*

*Assignment Files:* None, add your own.
