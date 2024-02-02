import finalFantasyX from "../img/images.jpg";

class Image {
	insertImage() {
		const img = document.createElement("img");

		img.src = finalFantasyX;

		img.width = 200;

		document.querySelector("body").appendChild(img);
	}
}

export default Image;
