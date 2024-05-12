import { IButton } from "./IButton";

export interface ICol extends IButton {
    id: number;
    icon: string;
    icon_size: string;
    text: string;
}