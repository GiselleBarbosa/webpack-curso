import tidus from "../img/tidus.jpg";
import yuna from "../img/yuna.png";

class Image {
	insertImage() {
		const imgTidus = document.createElement("img");
		const imgYuna = document.createElement("img");

		imgYuna.src = yuna;
		imgTidus.src = tidus;

		imgTidus.width = 250;
		imgYuna.width = 200;

		document.querySelector("body").appendChild(imgTidus);
		document.querySelector("body").appendChild(imgYuna);
	}
}

export default Image;
