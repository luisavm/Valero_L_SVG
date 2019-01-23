
	(() => {
	// what do we want to work with
	//
	// this is a 1 to 1 connection (selects one element)
	var badge = document.querySelector('#badge');

	//this is a one to many selection (gets a collection of elements)
	var allTheBadges = document.querySelectorAll('.isabadge');

	//what do we want it to do
	function logMyId() {
	// log some stuff to the dev tools
	console.log(this.id);
	debugger;
	}

    // how do we want to do that?
    // 1 to 1 event handlling
	badge.addEventListener("click", logMyId);

	allTheBadges.forEach(currentbandge => currentbandge.addEventListener("click", logMyId));

	// currentbandge is just a placeholder... you could call it anything. It
	// refers to the current item in the collection

	// so we need to debug this line by line in the developer tools panel

	// the lst line (22) need a quote mark after click, not at the end. JavaScript can be so frustrating because one little thing out of place breaks  EVERYTHING

})();
