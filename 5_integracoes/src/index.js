// import fonts
import "./fonts.css";

// import jquery
import $ from "jquery";

// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faBacon, faAnchor } from "@fortawesome/free-solid-svg-icons";

library.add(faBacon);
library.add(faAnchor);
dom.watch();

const body = $("body");
const p = $("<p></p>").text("inserindo texto").css("color", "red");

body.append(p);
