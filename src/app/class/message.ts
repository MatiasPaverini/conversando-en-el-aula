export class Message {

    private user: string;
    public date: string;
    private content: string;
    private classroom: string;

    
    constructor(user:string, date: string, content: string, classroom: string) {
        this.user = user;
        this.date = date;
        this.content = content;
        this.classroom = classroom;

    }

    public get User() : string {
        return this.user;
    }

    
    public get Date() : string {
        return this.date;
    }

    
    public get Content() : string {
        return this.content;
    }

    
    public get Classroom() : string {
        return this.classroom;
    }

    
    public set User(v : string) {
        this.user = v;
    }
    
    
    public set Date(v : string) {
        this.date = v;
    }
    
    
    public set Content(v : string) {
        this.content = v;
    }
    
    
    public set Classroom(v : string) {
        this.classroom = v;
    }
    
    
    
    toJSON() {
        return {"user": this.User, "date": this.Date, "content": this.Content, "class": this.Classroom};
    }    

}
