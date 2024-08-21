
import { AdminUIFactory } from './AdminUIFactory';
import { InstructorUIFactory } from './InstructorUIFactory';
import { StudentUIFactory } from './StudentUIFactory';
import { UIManager } from './UIManager';

const uiFactoryAdmin = new AdminUIFactory();
const uiManagerAdmin = new UIManager(uiFactoryAdmin);
const uiFactoryInstructor = new InstructorUIFactory();
const uiManagerInstructor = new UIManager(uiFactoryInstructor);
const uiFactoryStudent = new StudentUIFactory();
const uiManagerStudent = new UIManager(uiFactoryStudent);

const adminUI = uiManagerAdmin.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();

const instructorUI = uiManagerInstructor.createUI('instructor');
instructorUI.button.render();
instructorUI.dialog.show();

const studentUI = uiManagerStudent.createUI('student');
studentUI.button.render();
studentUI.dialog.show();

