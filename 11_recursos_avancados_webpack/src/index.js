import print from "./msg.js";

console.log("Primeiro teste com lodash", _.difference([2, 1], [2, 3]));
console.log("Segundo teste com lodash", _.difference([1, 2, 3], [1, 4, 5]));

console.log(
	"Terceiro teste com lodash apos criacao de variavel global apenas nas config do webpack",
	_.lastIndexOf([1, 2, 3], 2)
);

// Some libraries depend on global variables. For example, a jQuery plugin may expect the "$" global variable to be available.

// Without shimming that variable with ProvidePlugin you would get an error $ is not defined.

if (module.hot) {
	module.hot.accept("./msg.js", function () {
		console.log("O módulo de msg atualizou!");
		print();
	});
}
