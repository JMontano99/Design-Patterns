import { UIFactory } from "./UIFactory";
import { InstructorButton } from "./UIObjects/InstructorButton";
import { InstructorDialog } from "./UIObjects/InstructorDialog";
import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";

export class InstructorUIFactory implements UIFactory{
    public createButton(): IButton {
        return new InstructorButton();
    }
    
    public createDialog(): IDialog {
        return new InstructorDialog();
    }
}