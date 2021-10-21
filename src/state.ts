import { Application } from "@pixi/app";
import Player from "./classes/Player";

const state: {
    app: Application | null;
    heldKeys: string[];
    mouseHeld: boolean;
    mouseX: number | null;
    mouseY: number | null;
    now: number;
    player: Player | null;
    updatedAt: number;
} = {
    app: null,
    heldKeys: [],
    mouseHeld: false,
    mouseX: null,
    mouseY: null,
    now: performance.now(),
    player: null,
    updatedAt: 0
};

export default state;