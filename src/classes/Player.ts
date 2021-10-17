import Definable from "./Definable";
import ImageSource from "./ImageSource";
import Renderable from "../interfaces/Renderable";
import Updatable from "../interfaces/Updatable";
import definables from "../maps/definables";
import drawImage from "../functions/draw/drawImage";
import getCameraX from "../functions/getCameraX";
import getCameraY from "../functions/getCameraY";
import { nanoid } from "nanoid";
import state from "../state";

class Player extends Definable implements Renderable, Updatable {
    private readonly height: number = 32;
    private readonly map: string = "main";
    private readonly width: number = 32;
    private x: number = 80;
    private readonly y: number = 464;
    public constructor() {
        super(nanoid());
    }

    public getHeight(): number {
        return this.height;
    }

    public getX(): number {
        return this.x;
    }

    public getY(): number {
        return this.y;
    }

    public isOnMap(map: string): boolean {
        return this.map === map;
    }

    public render(): void {
        const imageSources: Map<string, Definable> | undefined = definables.get("ImageSource");
        if (typeof imageSources !== "undefined") {
            const image: Definable | undefined = imageSources.get("player");
            if (image instanceof ImageSource) {
                drawImage(image, 0, 0, this.width, this.height, this.x - getCameraX(), this.y - getCameraY(), this.width, this.height, 3);
            }
        }
    }

    public update(): void {
        const movementKey: string | undefined = [...state.heldKeys].reverse().find((key: string): boolean => ["a", "d", "arrowleft", "arrowright"].includes(key));
        switch (movementKey) {
            case "a":
            case "arrowleft":
                this.x--;
                break;
            case "d":
            case "arrowright":
                this.x++;
                break;
        }
    }
}

export default Player;