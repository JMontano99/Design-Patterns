import { Course } from "./Course";
import { IInstructorDetails} from "./IInstructorDetails";
import { ISchedule} from "./ISchedule";
import { IStudent } from "./IStudent";

export class CourseBuilder {
    private name: string = '';
    private materials: string[] = [];
    private instructorDetails: IInstructorDetails = { name: '', email: '', experience: 0 };
    private schedule: ISchedule | null = null;
    private description: string = '';
    private students: IStudent[] | null = null;
    private startDate: Date | null = null;
    private endDate: Date | null = null;
    private customMethod:(cadena:string) => void =(cadena:string)=>{}

    public SetName(name: string): CourseBuilder{
        this.name = name;
        return this;
    }

    public setDescription(description: string): CourseBuilder {
        this.description = description;
        return this;
    }
 
    public setMaterials(materials: string[]): CourseBuilder {
        this.materials = materials;
        return this;
    }

    public setInstructor(instructor: IInstructorDetails): CourseBuilder {
        this.instructorDetails = instructor;
        return this;
    }

    public setSchedule(schedule: ISchedule): CourseBuilder {
        this.schedule = schedule;
        return this;
    }

    public setStudents(students: IStudent[]): CourseBuilder{
        this.students = students;
        return this;
    }

    public setStartDate(startDate: Date): CourseBuilder{
        this.startDate = startDate;
        return this;
    }

    public setEndDate(endDate: Date): CourseBuilder{
        this.endDate = endDate;
        return this;
    }

    public setCustomMethod(method:(cadena:string)=> void):CourseBuilder{
        this.customMethod = method;
        return this;
    }

    public buildCourse(): Course{
        const course = new Course(
            this.name,
            this.description,
            this.materials,
            this.instructorDetails,
            this.schedule,
            this.students,
            this.startDate,
            this.endDate
        );
        
        course.addExtraBehaviour = this.customMethod;
        return course;
    }
}