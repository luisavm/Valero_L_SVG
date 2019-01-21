
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

	allTheBadges.forEach(currentbandge => currentbandge.addEventListener('click, logMyId'));

})();
