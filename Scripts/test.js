function patternPrinting(n) {
	for (let r = 1; r <= n; r++) {
		let s = "";
		for (let cHash = n - r; cHash >= 1; cHash--) {
			s = s + "#";
		}
		for (let cNum = r; cNum <= r; cNum++) {
			s = s + r + " ";
		}
		console.log(s);
	}
}
patternPrinting(5);
