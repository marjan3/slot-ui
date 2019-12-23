require("@mtanevski/slot-ui/dist/slot-ui.css");
import { SlotUi } from "@mtanevski/slot-ui";

const options = {
    id: "yet-another-slot-game"
};

const slotGame = new SlotUi.GameUi(options).$mount("#app");
slotGame.observable.on("spinStarted", () => {
    window.console.log("spin started");
});

slotGame.observable.on("loadingFinished", () => {
    window.console.log("loading finished");
});