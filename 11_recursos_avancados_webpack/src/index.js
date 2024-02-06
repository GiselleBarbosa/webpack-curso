import print from "./msg.js";
import $ from "jquery";

console.log("Primeiro teste com lodash", _.difference([2, 1], [2, 3]));

console.log(_.lastIndexOf([1, 2, 3], 2));

if (module.hot) {
	module.hot.accept("./msg.js", function () {
		console.log("O módulo de msg atualizou!");
		print();
	});
}

const body = $("body");
