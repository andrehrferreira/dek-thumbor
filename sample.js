import dotenv from "dotenv";

import { $, plugins, thumbor } from "@dekproject/scope";

(async () => {
    await dotenv.config();
    await plugins("./build");

    $.wait("thumbor").then(() => {
        let url = thumbor().setImagePath('https://static.vigiadepreco.com.br/6f/d56/d3df/6394c/97657b/games.jpg').resize(50,50).buildUrl();
        console.log(url);
    }).catch((err) => {
        console.log(err)
    });
})();
