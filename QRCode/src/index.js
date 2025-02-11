import prompt from "prompt";
import chalk from "chalk";
import createQRCode from "./services/qr-core/create.js";
import createPassword from "./services/password/create.js";

import mainPrompt from "./prompts/prompt-main.js"

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();
        }
    )
    prompt.start();
}

main();