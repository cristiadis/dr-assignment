var DR = {
	TV: {}
};

var programCard = {
	id: 501,
	published: new Date(2010, 6, 26),
	getNextLiveInfo: function(id) {
		return "http://www.dr.dk/mu-online/api/1.0/programcard/" + id;
	},
	title: "Kriminalkommissær Barnaby (3)",
	relatedIds: [544, 958],
	cleanName: new RegExp(/[^a-z0-9]+/gi),
	details: {
		description: "Det er meget virkeligt blod, der drypper på scenen i landsbyens amatørteater. En opførelse af Amadeus slutter dramatisk med, at Salieri skærer halsen over på sig selv. Men nogen har udskiftet teaterkniven med en rigtig, så Barnaby hvirvles ind i et nyt, kompliceret mordmysterium.",
		durationMiliseconds: 1800000
	}
};

/**
 * Method for copying object
 *
 * @method copyCard
 * @public
 */
DR.TV.copyCard = function(card) {
	let deepClonedCard = deepClone(card);

	// Here you can manipulate the copied card if needed

	return deepClonedCard;
};

var deepClonedProgramCard = DR.TV.copyCard(programCard);

// Basic test of functionality
console.log(deepClonedProgramCard !== programCard); // Must return true.
console.log(deepClonedProgramCard.details !== programCard.details); // Must return true.
console.log(deepClonedProgramCard.cleanName !== programCard.cleanName); // Must return true.
console.log(deepClonedProgramCard.relatedIds !== programCard.relatedIds); // Must return true.
console.log(deepClonedProgramCard.published !== programCard.published); // Must return true.

console.log('hep');
