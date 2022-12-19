// Extra Logic building questions from Ananad Rochlani sir

// ?Q.1) Half Diamond.
// when n=4;
// X
// X X
// X X X
// X X X X
// X X X
// X X
// X
//
// *Ans ->
// function halfDiamond(n){
//     for(let r=1; r<=n; r++){
//       let s = "";
//       for(let c=1; c<=r; c++){
//         s = s+"x ";
//       }
//       console.log(s);
//     }
//     for(let revr=n-1; revr>=1; revr-- ){
//       let str = "";
//       for(let revc=1; revc<=revr; revc++){
//           str = str+"x ";
//       }
//       console.log(str);
//     }
//   }
//   halfDiamond(4);

// ?Q.2) X and _.
// when n=5         and         n=7
// X                            X
// X X                          X X
// X _ X                        X _ X
// X _ _ X                      X _ _ X
// X X X X X                    X _ _ _ X
//                              X _ _ _ _ X
//                              X X X X X X X
//
// *Ans ->
// function underscrore(n) {
// 	for (let r = 1; r <= n; r++) {
// 		let s = "";
// 		for (let c = 1; c <= r; c++) {
// 			if (c == r || c == 1 || r == n) {
// 				s = s + "X ";
// 			} else {
// 				s = s + "_ ";
// 			}
// 		}
// 		console.log(s);
// 	}
// }
// underscrore(5);

// ?Q.3)
